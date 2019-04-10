<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - Home page JSP
  -
  - Attributes:
  -    communities - Community[] all communities in DSpace
  -    recent.submissions - RecetSubmissions
--%>

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
<%@page import="org.dspace.content.Bitstream"%>
<%@ page import="org.dspace.app.webui.util.LocaleUIHelper" %>

<%
    Community[] communities = (Community[]) request.getAttribute("communities");

    Locale sessionLocale = UIUtil.getSessionLocale(request);
    Config.set(request.getSession(), Config.FMT_LOCALE, sessionLocale);
    String topNews = NewsManager.readNewsFile(LocaleSupport.getLocalizedMessage(pageContext, "news-top.html"));
    String sideNews = NewsManager.readNewsFile(LocaleSupport.getLocalizedMessage(pageContext, "news-side.html"));

    boolean feedEnabled = ConfigurationManager.getBooleanProperty("webui.feed.enable");
    String feedData = "NONE";
    if (feedEnabled) {
        feedData = "ALL:" + ConfigurationManager.getProperty("webui.feed.formats");
    }

    ItemCounter ic = new ItemCounter(UIUtil.obtainContext(request));

    RecentSubmissions submissions = (RecentSubmissions) request.getAttribute("recent.submissions");
    MostViewedBean mostViewedItem = (MostViewedBean) request.getAttribute("mostViewedItem");
    MostViewedBean mostCitedItem = (MostViewedBean) request.getAttribute("mostCitedItem");
    MostViewedBean mostViewedBitstream = (MostViewedBean) request.getAttribute("mostDownloadedItem");
    boolean isRtl = StringUtils.isNotBlank(LocaleUIHelper.ifLtr(request, "", "rtl"));
%>


<%
    String facetGlobalNameHome = (String) request.getAttribute("facetGlobalName");
    List<DiscoverySearchFilterFacet> facetsGlobalConfHome = (List<DiscoverySearchFilterFacet>) request.getAttribute("facetsGlobalConfig");
    Map<String, List<FacetResult>> mapGlobalFacetesHome = (Map<String, List<FacetResult>>) request.getAttribute("discovery.global.fresults");

%>

<dspace:layout locbar="nolink" titlekey="jsp.home.title" feedData="<%= feedData%>">
 
    <div class="row">
        <div class="col-md-8 sm-12 pull-<%= isRtl ? "right" : "left"%>">
<h4>Explore the diversity of the University's research outputs and	the authors behind the research</h4>
    <hr/>
            <form id="searchglobalprocessor" name="searchglobalprocessor" class="col-md-10 col-md-offset-1" action="<%= request.getContextPath()%>/simple-search" method="get">
                <div class="input-group">
                    <input type="text" class="form-control" name="query" placeholder="Search term...">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="submit" style="
    border-radius: 0;
"><i class="fa fa-search"></i></button>
                    </span>    
                    <div class="input-group-btn search-panel">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style="
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
">
                            <span id="search_concept">All</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><span class="caret"></b>
                        </button>
                        <ul class="dropdown-menu menu-global-processor" role="menu">

                            <%
                                if (facetsGlobalConfHome != null) {
                                    for (DiscoverySearchFilterFacet facetConf : facetsGlobalConfHome) {
                                        String f = facetConf.getIndexFieldName();
                                        if (f.equals(facetGlobalNameHome)) {
                                            List<FacetResult> facet = mapGlobalFacetesHome.get(f);

                                            if (facet != null) {
                                                for (FacetResult fvalue : facet) {
                            %>

                            <li class="menu-global-processor">
                                <a href="#"
                                   title="<%=fvalue.getAuthorityKey()%>"><span class="badge pull-right"><%=fvalue.getCount()%></span> <%=StringUtils.abbreviate(fvalue.getDisplayedValue(), 36)%> &nbsp;&nbsp;&nbsp; <span class="badge invisible"><%=fvalue.getCount()%></span> </a></li>
                                <%
                                                    }
                                                }
                                            }
                                        }
                                    }
                                %>


                        </ul>
                    </div>
                    <input type="hidden" name="location" value="global" id="search_param">         
                </div>
            </form>
<hr/>

            <div class="row">
                <div class="col-md-6 mb-3 <%= isRtl ? "pull-right" : ""%>">
                    <%@ include file="components/most-viewed.jsp" %>	
                </div>
                <div class="col-md-6 mb-3 <%= isRtl ? "pull-right" : ""%>">
                    <%@ include file="components/most-downloaded.jsp" %>
                </div>
            </div>


                
        </div>
        <div class="col-md-4 sm-12 pull-<%= isRtl ? "left" : "right"%>">

            <%
                int discovery_panel_cols = 8;
                int discovery_facet_cols = 4;
                String processorSidebar = (String) request.getAttribute("processorSidebar");
                String processorGlobal = (String) request.getAttribute("processorGlobal");

                if (processorGlobal != null && processorGlobal.equals("global")) {
            %>
            <%@ include file="discovery/static-globalsearch-component-facet.jsp" %>
            <% } %> 


        </div>
    </div>
    <%
        if (communities != null && communities.length != 0) {
    %>
    <div class="row">
        <div class="col-md-5">		
            <h3><fmt:message key="jsp.home.com1"/></h3>
            <p><fmt:message key="jsp.home.com2"/></p>
            <div class="list-group">
                <%
                    boolean showLogos = ConfigurationManager.getBooleanProperty("jspui.home-page.logos", true);
                    for (int i = 0; i < communities.length; i++) {
                %><div class="list-group-item row">
                    <%
                        Bitstream logo = communities[i].getLogo();
                        if (showLogos && logo != null) {%>
                    <div class="col-md-3">
                        <img alt="Logo" class="img-responsive" src="<%= request.getContextPath()%>/retrieve/<%= logo.getID()%>" /> 
                    </div>
                    <div class="col-md-9">
                        <% } else { %>
                        <div class="col-md-12">
                            <% }%>		
                            <h4 class="list-group-item-heading"><a href="<%= request.getContextPath()%>/handle/<%= communities[i].getHandle()%>"><%= communities[i].getMetadata("name")%></a>
                                <%
                                    if (ConfigurationManager.getBooleanProperty("webui.strengths.show")) {
                                %>
                                <span class="badge pull-right"><%= ic.getCount(communities[i])%></span>
                                <%
                                    }

                                %>
                            </h4>
                            <p><%= communities[i].getMetadata("short_description")%></p>
                        </div>
                    </div>                            

                    <%
                            }
                        }

                        if (processorSidebar != null && processorSidebar.equals("sidebar")) {
                    %>
                    <div class="col-md-7">
                        <%@ include file="discovery/static-sidebar-facet.jsp" %>
                    </div>
                    <% }%>	
                </div>
                <div class="row">
                    <%@ include file="discovery/static-tagcloud-facet.jsp" %>
                </div>
            </dspace:layout>
