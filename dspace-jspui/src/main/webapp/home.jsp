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

<%@page import="org.dspace.discovery.configuration.DiscoveryRecentSubmissionsConfiguration"%>
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

<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilter" %>

<%@page import="org.dspace.discovery.configuration.DiscoveryConfiguration" %>
<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilterFacet" %>

<%@page import="org.dspace.discovery.DiscoverQuery" %>
<%@page import="org.dspace.app.webui.discovery.DiscoverUtility" %>
<%@page import="org.dspace.discovery.DiscoverResult" %>
<%@page import="org.dspace.core.Context" %>
<%@page import="org.apache.commons.lang.StringUtils"%>


<%@page import="org.dspace.handle.HandleManager"%>
<%@page import="org.dspace.search.DSQuery"%>
<%@page import="org.dspace.search.QueryArgs"%>
<%@page import="org.dspace.search.QueryResults"%>
<%@page import="org.dspace.content.DSpaceObject"%>
<%@page import="org.dspace.core.Constants"%>
<%@page import="org.dspace.authorize.AuthorizeManager"%>
<%@page import="org.dspace.app.webui.search.SearchProcessorException"%>
<%@page import="java.sql.SQLException"%>

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

    Context context = UIUtil.obtainContext(request);
    DiscoveryConfiguration discoveryConfiguration = SearchUtils
			.getDiscoveryConfigurationByName(DiscoveryConfiguration.GLOBAL_CONFIGURATIONNAME);

    DiscoverQuery queryArgs = DiscoverUtility.getDiscoverQuery(context, request, null,
			DiscoveryConfiguration.GLOBAL_CONFIGURATIONNAME, true);

    queryArgs.setSpellCheck(discoveryConfiguration.isSpellCheckEnabled());
    
    DiscoverResult qResults = null;
    
    qResults = SearchUtils.getSearchService().search(context, null, queryArgs);
    
    DiscoveryConfiguration globalConfiguration = SearchUtils.getGlobalConfiguration();
    DiscoverySearchFilterFacet globalFacet = new DiscoverySearchFilterFacet();
    if(globalConfiguration!=null) {
        globalFacet.setIndexFieldName(globalConfiguration.getCollapsingConfiguration().getGroupIndexFieldName());
    }	
    String fGlobal = globalFacet.getIndexFieldName();
    List<FacetResult> facetGlobal = null;
    String fkeyGlobal = null;
    if (qResults != null) {
        facetGlobal = qResults.getFacetResult(fGlobal);
        fkeyGlobal = "jsp.search.facet.refine." + fGlobal;
    }
    
%>

<dspace:layout locbar="nolink" titlekey="jsp.home.title" feedData="<%= feedData%>">
 
    <div class="row">
        <div class="col-md-12 sm-12 my-4">
            <form id="searchglobalprocessor" name="searchglobalprocessor" class="col-md-6" action="<%= request.getContextPath()%>/simple-search" method="get" style="margin: 0 auto;">
                <div class="input-group">
                    <input type="text" class="form-control" name="query" placeholder="Nhập nội dung tìm kiếm...">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="submit" style="
    border-radius: 0;
"><i class="fa fa-search"></i></button>
                    </span>    
                    <div class="input-group-btn search-panel extend__profile__menu">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style="
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
">
                            <span id="search_concept">Tất cả</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><span class="caret"></b>
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

                
        </div>
		<div class="col-md-12 sm-12 mt-3">
			<div class="sub-menu row no-gutters">
				<% if (facetGlobal != null && facetGlobal.size() > 0) {%>
					<%
                     	for (FacetResult fvalue : facetGlobal) {
                     	if ( fvalue.getAuthorityKey().equalsIgnoreCase("publications") ||
                     			fvalue.getAuthorityKey().equalsIgnoreCase("researcherprofiles") ||
                     			fvalue.getAuthorityKey().equalsIgnoreCase("cristechs") ||
                     			fvalue.getAuthorityKey().equalsIgnoreCase("crisstandards") ||
                     			fvalue.getAuthorityKey().equalsIgnoreCase("crispatents") ||
                     			fvalue.getAuthorityKey().equalsIgnoreCase("orgunits") ||
                     			fvalue.getAuthorityKey().equalsIgnoreCase("fundings") ||
                     			fvalue.getAuthorityKey().equalsIgnoreCase("crisawards")) {
                    %>
				<div class="link-wrapper col-6 col-md-3 col-xl-auto flex-xl-grow-1 <%=fvalue.getAuthorityKey() %>">
					<a href="<%= request.getContextPath()
			                                    + "/cris/explore/"
			                            + URLEncoder.encode(fvalue.getAuthorityKey(), "UTF-8")%>"
			                                   title="<fmt:message key="jsp.search.facet.narrow"><fmt:param><%=fvalue.getDisplayedValue()%></fmt:param></fmt:message>">
						<span><%= fvalue.getCount()%></span>
						<%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 36)%>
					</a>
				</div>
					<% } } %>
					<% } %>
			</div>
			
		<div class="events-slider-wrapper">
				<div class="events-slider">
					<div v-for="(item, index) in eventsData" v-bind:key="index">
						<img :src="processImage(item['crisevents.eventsimage'])">
						<a :href="'/jspui/cris/events/' + item['cris-id']" class="event-content-wrapper">
							<span class="row">
								<span class="col col-auto align-items-center d-flex">
									<span class="time-big">
										<span>{{item["crisevents.eventsstartdate"] !== undefined ? new Date(item["crisevents.eventsstartdate"][0]).getDate() : ""}}</span>
										<span>{{item["crisevents.eventsenddate"] !== undefined ? new Date(item["crisevents.eventsenddate"][0]).getDate() : ""}}</span>
									</span>
								</span>
								<span class="col">
									<span class="event-cotent">
										<span class="event-title">{{item["crisauthoritylookup_sort"]}}</span>
										<span class="event-desc" style="max-height: 44px; overflow: hidden;">{{item["crisevents.eventsdescription"] !== undefined ? item["crisevents.eventsdescription"][0] : ""}}</span>
										<span class="event-address"><i class="fas fa-map-marker-alt"></i> {{item["crisevents.eventsplace"] !== undefined ? item["crisevents.eventsplace"][0] : ""}}</span>
										<span class="event-time"><i class="fas fa-calendar-alt"></i> {{item["crisevents.eventsstartdate"] !== undefined ? item["crisevents.eventsstartdate"][0] : ""}} - {{item["crisevents.eventsenddate"] !== undefined ? item["crisevents.eventsenddate"][0] : ""}}</span>
									</span>
								</span>
							</span>
						</a>
					</div>
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
            <% } %> 


        </div>
    </div>
    <div class="row mt-4">
    	<div class="col-md-7 px-0">
                    <img src="/jspui/static/custom/images/report_todo.png" />
                </div>
                <%
                    if (submissions != null && submissions.count() > 0) {
                %>
                <div class="col-md-5 px-0 discovery-result-results-global ">
                    <%@ include file="/dspace-cris/explore/topObjectsRecent.jsp" %>
                </div>
                <% } %>
                
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
