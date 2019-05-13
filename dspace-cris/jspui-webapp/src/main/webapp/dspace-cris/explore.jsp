<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    https://github.com/CILEA/dspace-cris/wiki/License

--%>
<%--
  - Home page JSP
  -
  - Attributes:
  -    communities - Community[] all communities in DSpace
  -    recent.submissions - RecetSubmissions
--%>

<%@ page import="org.dspace.content.DSpaceObject" %>
<%@page import="java.util.List"%>
<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%@ page import="java.io.File" %>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.core.*" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
<%@ page import="org.dspace.core.I18nUtil" %>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@ page import="org.dspace.app.webui.components.RecentSubmissions" %>
<%@ page import="org.dspace.content.Community" %>
<%@ page import="org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.core.NewsManager" %>
<%@ page import="org.dspace.browse.ItemCounter" %>
<%@ page import="org.dspace.content.Metadatum" %>
<%@ page import="org.dspace.content.Item" %>
<%@ page import="org.dspace.discovery.configuration.DiscoveryViewConfiguration" %>
<%@page import="org.dspace.app.webui.components.MostViewedBean"%>
<%@page import="org.dspace.app.webui.components.MostViewedItem"%>
<%@page import="org.dspace.discovery.SearchUtils"%>
<%@page import="org.dspace.discovery.IGlobalSearchResult"%>
<%@page import="org.dspace.core.Utils"%>
<%@page import="com.coverity.security.Escape"%>
<%@page import="org.dspace.content.Bitstream"%>
<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilter" %>

<%@page import="org.dspace.discovery.configuration.DiscoveryConfiguration" %>
<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilterFacet" %>

<%@page import="org.dspace.discovery.DiscoverQuery" %>
<%@page import="org.dspace.app.webui.discovery.DiscoverUtility" %>
<%@page import="org.dspace.discovery.DiscoverResult" %>
<%@page import="org.dspace.core.Context" %>
<%@page import="org.apache.commons.lang.StringUtils"%>

<%
        int discovery_panel_cols = 12;
        int discovery_facet_cols = 4;
        List<DiscoverySearchFilter> filters = (List<DiscoverySearchFilter>) request.getAttribute("filters");
        String[] options = new String[]{"equals", "contains", "authority", "notequals", "notcontains", "notauthority"};
        
%>
<c:set var="dspace.layout.head.last" scope="request">

</c:set>
<c:set var="fmtkey">
    jsp.layout.navbar-default.cris.${location}
</c:set>
<dspace:layout locbar="link" parenttitlekey="${fmtkey}" parentlink="/cris/explore/${location}" titlekey="${fmtkey}">

    <div class="row">
        <div class="col-sm-4 col-md-3">
            
            
            <c:set var="discovery.searchScope" value="${location}" scope="request"/>
            <%@ include file="/discovery/static-sidebar-facet.jsp" %>

        </div>
        <div class="col-sm-8 col-md-9 discovery-result-results-global discovery-result-results-global__expose">

            
            <div class="discovery-search-form bg-secondary p-3 mt-2">
                <%-- Controls for a repeat search --%>
                <div class="discovery-query">
                    <form id="update-form" action="<%= request.getContextPath() %>/simple-search" method="get">
                        <input type="hidden" value="${location}" name="location" />
                        <div class="row">
                            <div class="col-sm-9 col-7 mb-2">

                                <div class="form-group">
                                    <div class="input-group input-group-alternative">
                                        <input class="form-control" placeholder="Từ khoá ..." type="text" size="50" id="query" name="query" value="">
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i class="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <a @click="processFilters('+', 0)" href="javascript:;" style="
    font-size: 12px;
    text-decoration: underline;
">
                                    <span class="btn-inner--icon"><i class="fa fa-filter"></i> Lọc thêm</span>
                                </a>
                            </div>

                            <div class="col-sm-3 col-5">
								<input type="button" @click="searchDataExpose" id="main-query-submit" class="btn btn-icon btn-2 btn-default btn--block" value="Tìm kiếm" />
                            </div>
                        </div>

                        <div class="row" v-for="(item, index) in filters" v-bind:key="index">
                    <div class="col-sm-9 col-12">

                        <div class="row">
                            <div class="col-3">
                                <select v-model="filterQuery[index]['filtername']" id="filtername" name="filtername">
                                    <c:forEach var="filter" items="${filters}">
                                        <c:set var="i18nkey" value="jsp.search.filter.${filter.indexFieldName}" />
                                        <option value="${filter.indexFieldName}"><fmt:message key="${i18nkey}" /></option>
                                    </c:forEach>
                                </select>
                            </div>
                            <div class="col-3 px-0">
                                <select v-model="filterQuery[index]['filtertype']" id="filtertype" name="filtertype">
                                    <%
                                        for (String opt : options) {
                                            String fkey = "jsp.search.filter.op." + Escape.uriParam(opt);
                                    %><option value="<%= Utils.addEntities(opt)%>"><fmt:message key="<%= fkey%>"/></option><%
                                        }
                                    %>
                                </select>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <div class="input-group input-group-alternative mb-4">
                                        <input v-model="filterQuery[index]['filterquery']" class="form-control" placeholder="search ..." type="text" id="filterquery" name="filterquery" size="45" required="required">
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i class="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-12">
                        <div class="row">
                            <div class="col-6 mb-3">
                                <button @click="processFilters('+', 0)" class="btn btn-icon btn-2 btn-primary btn--block" type="button">
                                    <span class="btn-inner--icon"><i class="fa fa-plus"></i></span>
                                </button>
                            </div>
                            <div class="col-6">
                                <button @click="processFilters('-', index)" class="btn btn-icon btn-2 btn-danger btn--block" type="button">
                                    <span class="btn-inner--icon"><i class="fa fa-minus"></i></span>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
                    </form>
                </div>

            </div>  
                <hr/>
            <div class="clearfix"></div>
            <div class="row">
                <%
                    RecentSubmissions download = (RecentSubmissions) request.getAttribute("top_download");
                    RecentSubmissions submissions = (RecentSubmissions) request.getAttribute("top_recentsubmission");
                    RecentSubmissions viewed = (RecentSubmissions) request.getAttribute("top_view");
                    RecentSubmissions cited = (RecentSubmissions) request.getAttribute("top_cited");
                %>
                <%
                    if (submissions != null && submissions.count() > 0) {
                %>
                <div class="col">
                    <%@ include file="/dspace-cris/explore/topObjectsRecent.jsp" %>
                </div>
                <% } %>
                <%
                    if (viewed != null && viewed.count() > 0) {
                %>
                <div class="col">
                    <%@ include file="/dspace-cris/explore/topObjectsViewed.jsp" %>
                </div>
                <% } %>
                <%
                    if (cited != null && cited.count() > 0) {
                %>
                <div class="col">
                    <%@ include file="/dspace-cris/explore/topObjectsCited.jsp" %>
                </div>
                <% } %>
                <%
                    if (download != null && download.count() > 0) {
                %>
                <div class="col">
                    <%@ include file="/dspace-cris/explore/topObjectsDownload.jsp" %>
                </div>
                <% } %>
            </div>
        </div>
    </div>


</dspace:layout>
