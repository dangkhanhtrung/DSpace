<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>

<%--
  - Display the form to refine the simple-search and dispaly the results of the search
  -
  - Attributes to pass in:
  -
  -   scope            - pass in if the scope of the search was a community
  -                      or a collection
  -   scopes 		   - the list of available scopes where limit the search
  -   sortOptions	   - the list of available sort options
  -   availableFilters - the list of filters available to the user
  -
  -   query            - The original query
  -   queryArgs		   - The query configuration parameters (rpp, sort, etc.)
  -   appliedFilters   - The list of applied filters (user input or facet)
  -
  -   search.error     - a flag to say that an error has occurred
  -   spellcheck	   - the suggested spell check query (if any)
  -   qResults		   - the discovery results
  -   items            - the results.  An array of Items, most relevant first
  -   communities      - results, Community[]
  -   collections      - results, Collection[]
  -
  -   admin_button     - If the user is an admin
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.dspace.app.cris.model.ACrisObject" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"
           prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"
           prefix="c" %>
<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%@ page import="java.net.URLEncoder"            %>
<%@ page import="org.dspace.content.Community"   %>
<%@ page import="org.dspace.content.Collection"  %>
<%@ page import="org.dspace.content.Item"        %>
<%@ page import="org.dspace.search.QueryResults" %>
<%@ page import="org.dspace.sort.SortOption" %>
<%@ page import="java.util.Enumeration" %>
<%@ page import="java.util.Set" %>
<%@ page import="org.dspace.core.ConfigurationManager" %>
<%@page import="org.dspace.browse.BrowseInfo"%>
<%@page import="org.dspace.browse.BrowseDSpaceObject"%>
<%@page import="org.dspace.core.Utils"%>
<%@page import="com.coverity.security.Escape"%>
<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilterFacet"%>
<%@page import="org.dspace.app.webui.util.UIUtil"%>
<%@ page import="org.dspace.eperson.EPerson" %>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.dspace.discovery.DiscoverFacetField"%>
<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilter"%>
<%@page import="org.dspace.discovery.DiscoverFilterQuery"%>
<%@page import="org.dspace.discovery.DiscoverQuery"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="java.util.Map"%>
<%@page import="org.dspace.discovery.DiscoverResult.FacetResult"%>
<%@page import="org.dspace.discovery.DiscoverResult"%>
<%@page import="org.dspace.content.DSpaceObject"%>
<%@page import="java.util.List"%>
<%@page import="org.dspace.handle.HandleManager"%>

<%
    int showPaggingMax = 0;
    String hdlPrefix = ConfigurationManager.getProperty("handle.prefix");
    // Get the attributes
    DSpaceObject scope = (DSpaceObject) request.getAttribute("scope");
    String searchScope = (String) request.getParameter("location");
    if (searchScope == null) {
        searchScope = "";
    }
    List<DSpaceObject> scopes = (List<DSpaceObject>) request.getAttribute("scopes");
    List<String> sortOptions = (List<String>) request.getAttribute("sortOptions");

    String query = (String) request.getAttribute("query");
    if (query == null) {
        query = "";
    }
    Boolean error_b = (Boolean) request.getAttribute("search.error");
    boolean error = (error_b == null ? false : error_b.booleanValue());

    DiscoverQuery qArgs = (DiscoverQuery) request.getAttribute("queryArgs");
    String sortedBy = qArgs.getSortField();
    String order = qArgs.getSortOrder().toString();
    String sortIdx = null;
    SortOption sortOption = null;
    if (sortedBy != null && sortedBy.startsWith("bi_sort_")) {
        sortIdx = sortedBy.substring(8, sortedBy.length() - 5);
        sortOption = SortOption.getSortOption(Integer.valueOf(sortIdx));
    }
    String ascSelected = (SortOption.ASCENDING.equalsIgnoreCase(order) ? "selected=\"selected\"" : "");
    String descSelected = (SortOption.DESCENDING.equalsIgnoreCase(order) ? "selected=\"selected\"" : "");
    String httpFilters = "";
    String spellCheckQuery = (String) request.getAttribute("spellcheck");
    List<DiscoverySearchFilter> availableFilters = (List<DiscoverySearchFilter>) request.getAttribute("availableFilters");
    List<String[]> appliedFilters = (List<String[]>) request.getAttribute("appliedFilters");
    List<String> appliedFilterQueries = (List<String>) request.getAttribute("appliedFilterQueries");
    Map<String, String> displayAppliedFilters = new HashMap<String, String>();

    if (appliedFilters != null && appliedFilters.size() > 0) {
        int idx = 1;
        for (String[] filter : appliedFilters) {
            httpFilters += "&amp;filter_field_" + idx + "=" + URLEncoder.encode(filter[0], "UTF-8");
            httpFilters += "&amp;filter_type_" + idx + "=" + URLEncoder.encode(filter[1], "UTF-8");
            httpFilters += "&amp;filter_value_" + idx + "=" + URLEncoder.encode(filter[2], "UTF-8");
            idx++;
        }
    }
    int rpp = qArgs.getMaxResults();
    int etAl = ((Integer) request.getAttribute("etal")).intValue();

    String[] options = new String[]{"equals", "contains", "authority", "notequals", "notcontains", "notauthority"};

    EPerson user = (EPerson) request.getAttribute("dspace.current.user");

    // Admin user or not
    Boolean admin_b = (Boolean) request.getAttribute("admin_button");
    boolean admin_button = (admin_b == null ? false : admin_b.booleanValue());

    boolean exportBiblioEnabled = ConfigurationManager.getBooleanProperty("exportcitation.list.enabled", false);
    boolean exportBiblioAll = ConfigurationManager.getBooleanProperty("exportcitation.show.all", false);
    String cfg = ConfigurationManager.getProperty("exportcitation.options");

    DiscoverResult qResults = (DiscoverResult) request.getAttribute("queryresults");
    Item[] items = (Item[]) request.getAttribute("items");
    Community[] communities = (Community[]) request.getAttribute("communities");
    Collection[] collections = (Collection[]) request.getAttribute("collections");
    Map<Integer, BrowseDSpaceObject[]> mapOthers = (Map<Integer, BrowseDSpaceObject[]>) request.getAttribute("resultsMapOthers");

    boolean brefine = false;

    List<DiscoverySearchFilterFacet> facetsConf = (List<DiscoverySearchFilterFacet>) request.getAttribute("facetsConfig");
    Map<String, Boolean> showFacets = new HashMap<String, Boolean>();

    for (DiscoverySearchFilterFacet facetConf : facetsConf) {
        if (qResults != null) {
            String f = facetConf.getIndexFieldName();
            List<FacetResult> facet = qResults.getFacetResult(f);
            if (facet.size() == 0) {
                facet = qResults.getFacetResult(f + ".year");
                if (facet.size() == 0) {
                    showFacets.put(f, false);
                    continue;
                }
            }
            boolean showFacet = false;
            for (FacetResult fvalue : facet) {
                if (!appliedFilterQueries.contains(f + "::" + fvalue.getFilterType() + "::" + fvalue.getAsFilterQuery())) {
                    showFacet = true;
                } else {
                    displayAppliedFilters.put(f + "::" + fvalue.getFilterType() + "::" + fvalue.getAsFilterQuery(),
                            fvalue.getDisplayedValue());
                }
            }
            showFacets.put(f, showFacet);
            brefine = brefine || showFacet;
        }
    }
%>

<c:set var="searchinKey">
    jsp.search.results.searchin<%= StringUtils.isNotBlank(searchScope) && !StringUtils.contains(searchScope, hdlPrefix) ? "." + searchScope : ""%>
</c:set>
<%
    String dsoName = "";
    if (StringUtils.contains(searchScope, hdlPrefix)) {
        String hdl = StringUtils.substring(searchScope, 8);
        DSpaceObject dso = HandleManager.resolveToObject(UIUtil.obtainContext(request), hdl);
        dsoName = (dso != null) ? dso.getName() : "";
    }
%>
<dspace:layout titlekey="${searchinKey}">

    <%-- <h1>Search Results</h1> --%>


    <div class="discovery-search-form bg-secondary p-3">
        <%-- Controls for a repeat search --%>
        <div class="discovery-query">
            <form id="update-form" action="simple-search" method="get">
                <div class="row">
                    <div class="col-sm-9 col-7">

                        <div class="form-group">
                            <div class="input-group input-group-alternative mb-4">
                                <input class="form-control" placeholder="search ..." type="text" size="50" id="query" name="query" value="<%= (query == null ? "" : Utils.addEntities(query))%>">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3 col-5">
                        <button @click="processFilters('+', 0)" class="btn btn-icon btn-2 btn-primary btn--block" type="button">
                            <span class="btn-inner--icon"><i class="fa fa-filter"></i> Add filters</span>
                        </button>

                    </div>
                </div>

                <% if (availableFilters.size() > 0) {%>
                <div class="row" v-for="(item, index) in filters" v-bind:key="index">
                    <div class="col-sm-9 col-12">

                        <div class="row">
                            <div class="col-3">
                                <select v-model="filterQuery[index]['filtername']" id="filtername" name="filtername">
                                    <%
                                        for (DiscoverySearchFilter searchFilter : availableFilters) {
                                            String fkey = "jsp.search.filter." + Escape.uriParam(searchFilter.getIndexFieldName());
                                    %><option value="<%= Utils.addEntities(searchFilter.getIndexFieldName())%>"><fmt:message key="<%= fkey%>"/></option><%
                                        }
                                    %>
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
                <div id="availableFilters" class="switch-filters hidden panel panel-success">
                    <div class="panel-body">
                        <input type="hidden" value="<%= Utils.addEntities(searchScope)%>" name="location" />
                        <input type="hidden" value="<%= Utils.addEntities(query)%>" name="query" />
                        <% if (appliedFilterQueries.size() > 0) {
                                int idx = 1;
                                for (String[] filter : appliedFilters) {
                                    boolean found = false;
                        %>
                        <input type="hidden" id="filter_field_<%=idx%>" name="filter_field_<%=idx%>" value="<%= Utils.addEntities(filter[0])%>" />
                        <input type="hidden" id="filter_type_<%=idx%>" name="filter_type_<%=idx%>" value="<%= Utils.addEntities(filter[1])%>" />
                        <input type="hidden" id="filter_value_<%=idx%>" name="filter_value_<%=idx%>" value="<%= Utils.addEntities(filter[2])%>" />
                        <%
                                    idx++;
                                }
                            }%>



                        <input type="hidden" value="<%= rpp%>" name="rpp" />
                        <input type="hidden" value="<%= Utils.addEntities(sortedBy)%>" name="sort_by" />
                        <input type="hidden" value="<%= Utils.addEntities(order)%>" name="order" />

                    </div>        
                </div>
                <% }%>

                <div class="row">
                    <div class="col-sm-9 col-6 text-right">
                        <button @click="clearSearchData" class="btn btn-icon btn-2 btn-primary" type="button">
                            <span class="btn-inner--icon"><i class="fa fa-refresh"></i> Clear all</span>
                        </button>
                    </div>

                    <div class="col-sm-3 col-6">
                        <input type="button" @click="searchData" id="main-query-submit" class="btn btn-icon btn-2 btn-default btn--block" value="Search" />
                    </div>
                </div>
                <input name="location" type="hidden" value="<%=searchScope%>" />
                <input type="hidden" value="<%= rpp%>" name="rpp" />
                <input type="hidden" value="<%= Utils.addEntities(sortedBy)%>" name="sort_by" />
                <input type="hidden" value="<%= Utils.addEntities(order)%>" name="order" />

            </form>
        </div>

    </div>   
    <%

        if (error) {
    %>
    <p class="alert alert-danger text-center">
        <fmt:message key="jsp.search.error.discovery" />
    </p>
    <%
    } else if (qResults != null && qResults.getTotalSearchResults() == 0) {
    %>
    <%-- <p align="center">Search produced no results.</p> --%>
    <p class="alert alert-info text-center mt-3"><fmt:message key="jsp.search.general.noresults"/></p>
    <%
    } else if (qResults != null) {
        long pageTotal = ((Long) request.getAttribute("pagetotal")).longValue();
        long pageCurrent = ((Long) request.getAttribute("pagecurrent")).longValue();
        long pageLast = ((Long) request.getAttribute("pagelast")).longValue();
        long pageFirst = ((Long) request.getAttribute("pagefirst")).longValue();

        // create the URLs accessing the previous and next search result pages
        String baseURL = request.getContextPath()
                + "/simple-search?query="
                + URLEncoder.encode(query, "UTF-8")
                + "&amp;location=" + searchScope
                + httpFilters
                + "&amp;sort_by=" + sortedBy
                + "&amp;order=" + order
                + "&amp;rpp=" + rpp
                + "&amp;etal=" + etAl
                + "&amp;start=";

        String nextURL = baseURL;
        String firstURL = baseURL;
        String lastURL = baseURL;

        String prevURL = baseURL
                + (pageCurrent - 2) * qResults.getMaxResults();

        nextURL = nextURL
                + (pageCurrent) * qResults.getMaxResults();

        firstURL = firstURL + "0";
        lastURL = lastURL + (pageTotal - 1) * qResults.getMaxResults();


    %>
    <hr/>
    <div class="discovery-result-pagination">
        <%    long lastHint = qResults.getStart() + qResults.getMaxResults() <= qResults.getTotalSearchResults()
                    ? qResults.getStart() + qResults.getMaxResults() : qResults.getTotalSearchResults();
        %>
        <%-- <p align="center">Results <//%=qResults.getStart()+1%>-<//%=qResults.getStart()+qResults.getHitHandles().size()%> of --%>
        <div class="alert alert-info"><fmt:message key="jsp.search.results.results">
                <fmt:param><%=qResults.getStart() + 1%></fmt:param>
                <fmt:param><%=lastHint%></fmt:param>
                <fmt:param><%=qResults.getTotalSearchResults()%></fmt:param>
                <fmt:param><%=(float) qResults.getSearchTime() / 1000%></fmt:param>
            </fmt:message>

            <%-- Include a component for modifying sort by, order, results per page, and et-al limit --%>
            <form action="simple-search" method="get" class="inline">
                <input type="hidden" value="<%= Utils.addEntities(searchScope)%>" name="location" />
                <input type="hidden" value="<%= Utils.addEntities(query)%>" name="query" />
                <% if (appliedFilterQueries.size() > 0) {
                        int idx = 1;
                        for (String[] filter : appliedFilters) {
                            boolean found = false;
                %>
                <input type="hidden" id="filter_field_<%=idx%>" name="filter_field_<%=idx%>" value="<%= Utils.addEntities(filter[0])%>" />
                <input type="hidden" id="filter_type_<%=idx%>" name="filter_type_<%=idx%>" value="<%= Utils.addEntities(filter[1])%>" />
                <input type="hidden" id="filter_value_<%=idx%>" name="filter_value_<%=idx%>" value="<%= Utils.addEntities(filter[2])%>" />
                <%
                            idx++;
                        }
                    } %>	
                <label for="rpp"><fmt:message key="search.results.perpage"/></label>
                <select name="rpp" onchange="javascript:jQuery('#rppUpdate').click();">
                    <%
                        for (int i : new Integer[]{5, 10, 20, 50}) {
                            String selected = (i == rpp ? "selected=\"selected\"" : "");
                    %>
                    <option value="<%= i%>" <%= selected%>><%= i%></option>
                    <%
                        }
                    %>
                </select>
                &nbsp;|&nbsp;
                <%
                    if (sortOptions.size() > 0) {
                %>
                <label for="sort_by"><fmt:message key="search.results.sort-by"/></label>
                <input type="hidden" name="sort_by" value="<%= Utils.addEntities(sortedBy)%>" />
                <c:set var="sortedBy">
                    <%= sortedBy%>
                </c:set>
                <% if (StringUtils.isBlank(sortedBy) || StringUtils.equalsIgnoreCase(sortedBy, "score")) { %>
                <fmt:message key="search.sort-by.relevance"/>
                <% } else { %>
                <fmt:message key="search.sort-by.${sortedBy}"/> (<a id="restoreScore" href="#"><fmt:message key="search.sort-by.restore-relevance"/></a>)
                <% } %>
                <%
                    }
                %>
                <input type="hidden" name="order" value="<%= order%>" />
                <input class="sr-only" id="rppUpdate" type="submit" name="submit_search" value="<fmt:message key="search.update" />" />

                <%
                    if (admin_button && mapOthers.isEmpty()) {
                %><input type="submit" class="btn btn-default" name="submit_export_metadata" value="<fmt:message key="jsp.general.metadataexport.button"/>" style="
                       float: right;
                       "/><%
                           }
                %>
            </form>
        </div>
        <%
            if (pageTotal > 1) {
        %>
        <div>
            <nav>
                <ul class="pagination">
                    <%
                        if (pageFirst != pageCurrent) {
                    %>
                    <li class="page-item">
                        <a class="page-link" href="<%= prevURL%>"><i class="fa fa-angle-left"></i></a>
                    </li>
                    <%
                    } else {
                    %>

                    <%
                        }
                        if (pageFirst != 1) {
                    %>
                    <li class="page-item">
                        <a class="page-link" href="<%= firstURL%>">1</a>
                    </li>
                    <li class="disabled page-item" style="margin: 0;width: 25px;">
                        <span style="width: unset;">...</span>
                    </li>   

                    <%
                        }
                        showPaggingMax = 0;
                        for (long q = pageFirst; q <= pageLast; q++) {
                            showPaggingMax = showPaggingMax + 1;
                            String myLink = "<li class='page-item'><a class=\"page-link\" href=\""
                                    + baseURL;

                            if (q == pageCurrent) {
                                myLink = "<li class=\"active page-item\"><a class=\"page-link\" href=\"javascript:;\">" + q + "</a></li>";
                            } else {
                                myLink = myLink
                                        + (q - 1) * qResults.getMaxResults()
                                        + "\">"
                                        + q
                                        + "</a></li>";
                            }
                            if (showPaggingMax <= 4) {
                    %>

                    <%= myLink%>

                    <%
                            }
                        }

                        if (pageTotal > pageLast) {
                    %>
                    <li class="disabled page-item" style="margin: 0;width: 25px;">
                        <span style="width: unset;">...</span>
                    </li>
                    <%
                        }
                        if (pageTotal > pageCurrent) {
                    %>
                    <li class="page-item">
                        <a class="page-link" href="<%= nextURL%>"><i class="fa fa-angle-right"></i></a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="<%= lastURL%>"><i class="fa fa-angle-double-right"></i></a>
                    </li>
                    <%
                        }
                    %>

                </ul>
            </nav>
        </div>
        <% } %>
        <!-- give a content to the div -->
    </div>
    <div class="discovery-result-results">
        <%
            Set<Integer> otherTypes = mapOthers.keySet();
            if (otherTypes != null && otherTypes.size() > 0) {
                for (Integer otype : otherTypes) {
        %>
        <c:set var="typeName"><%= ((ACrisObject) mapOthers.get(otype)[0].getBrowsableDSpaceObject()).getPublicPath()%></c:set>
            <div class="panel panel-info">
                <div class="panel-heading"><h6><fmt:message key="jsp.search.results.cris.${typeName}"/></h6></div>
                    <dspace:browselist config="cris${typeName}" items="<%= mapOthers.get(otype)%>"  order="<%= order%>" sortBy="<%= sortIdx%>" />
        </div>
        <%
                }
            }
        %>
        <% if (communities.length > 0) {%>
        <div class="panel panel-info">
            <dspace:communitylist  communities="<%= communities%>" />
        </div>
        <% } %>

        <% if (collections.length > 0) {%>
        <div class="panel panel-info">
            <dspace:collectionlist collections="<%= collections%>" />
        </div>
        <% } %>

        <% if (items.length > 0) { %>
        <div class="panel panel-info">
            <%
                if (exportBiblioEnabled && (exportBiblioAll || user != null)) {
            %>

            <form target="blank" class="form-inline"  id="exportform" action="<%= request.getContextPath()%>/references">

                <div id="export-biblio-panel" class="alert alert-info mt-3" style="width: 100%;    margin-left: 0px;">
                    <div class="row px-3">
                        <%
                            if (cfg == null) {
                                cfg = "refman, endnote, bibtex, refworks";
                            }
                            String[] cfgSplit = cfg.split("\\s*,\\s*");
                            for (String format : cfgSplit) {
                        %>
                        <div class="custom-control custom-radio mb-2 col-2">
                            <c:set var="format"><%= format%></c:set>
                            <input class="custom-control-input" id="${format}" type="radio" name="format" value="${format}" <c:if test="${format=='bibtex'}"> checked="checked"</c:if>/>
                            <label for="${format}" class="custom-control-label">
                                <fmt:message key="exportcitation.option.${format}" />
                            </label>
                        </div>
                        <% }%>
                        <div class="custom-control custom-checkbox mb-2">
                            <input type="checkbox" id="email" name="email" value="true" class="custom-control-input">
                            <label for="email" class="custom-control-label">
                                <fmt:message key="exportcitation.option.email" />
                            </label>
                        </div>
                    </div>
                    <input id="export-submit-button" class="btn btn-default" type="submit" name="submit_export" value="<fmt:message key="exportcitation.option.submitexport" />" disabled/>
                </div>	
                <dspace:itemlist items="<%= items%>" authorLimit="<%= etAl%>" radioButton="false" inputName="item_id" order="<%= order%>" sortOption="<%= sortOption%>"/>
            </form>
            <% } else {%>
            <dspace:itemlist items="<%= items%>" authorLimit="<%= etAl%>" order="<%= order%>" sortOption="<%= sortOption%>"/>
            <% } %>

        </div>
        <% } %>
    </div>
    <%
        if (pageTotal > 1) {
    %>
    <div>
        <nav>
            <ul class="pagination">
                <%
                    if (pageFirst != pageCurrent) {
                %>
                <li class="page-item">
                    <a class="page-link" href="<%= prevURL%>"><i class="fa fa-angle-left"></i></a>
                </li>
                <%
                } else {
                %>

                <%
                    }
                    if (pageFirst != 1) {
                %>
                <li class="page-item">
                    <a class="page-link" href="<%= firstURL%>">1</a>
                </li>
                <li class="disabled page-item" style="margin: 0;width: 25px;">
                    <span style="width: unset;">...</span>
                </li>   

                <%
                    }
                    showPaggingMax = 0;
                    for (long q = pageFirst; q <= pageLast; q++) {
                        showPaggingMax = showPaggingMax + 1;
                        String myLink = "<li class='page-item'><a class=\"page-link\" href=\""
                                + baseURL;

                        if (q == pageCurrent) {
                            myLink = "<li class=\"active page-item\"><a class=\"page-link\" href=\"javascript:;\">" + q + "</a></li>";
                        } else {
                            myLink = myLink
                                    + (q - 1) * qResults.getMaxResults()
                                    + "\">"
                                    + q
                                    + "</a></li>";
                        }
                        if (showPaggingMax <= 4) {
                %>

                <%= myLink%>

                <%
                        }
                    }

                    if (pageTotal > pageLast) {
                %>
                <li class="disabled page-item" style="margin: 0;width: 25px;">
                    <span style="width: unset;">...</span>
                </li>
                <%
                    }
                    if (pageTotal > pageCurrent) {
                %>
                <li class="page-item">
                    <a class="page-link" href="<%= nextURL%>"><i class="fa fa-angle-right"></i></a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="<%= lastURL%>"><i class="fa fa-angle-double-right"></i></a>
                </li>
                <%
                    }
                %>

            </ul>
        </nav>
    </div>
    <% } %>
    <% } %>
    <dspace:sidebar>


        <%
            DiscoverySearchFilterFacet facetGlobalConf = (DiscoverySearchFilterFacet) request.getAttribute("facetGlobalConfig");
            if (facetGlobalConf != null) {
                String fGlobal = facetGlobalConf.getIndexFieldName();
                if (qResults != null) {
                    List<FacetResult> facetGlobal = qResults.getFacetResult(fGlobal);
                    String fkeyGlobal = "jsp.search.facet.refine." + fGlobal;
                    if (facetGlobal != null && facetGlobal.size() > 0) {
        %>
        <div id="globalFacet" class="facetsBox">
            <div id="facet_<%= fkeyGlobal%>" class="panel panel-success panel__discovery">
                <div class="panel-heading"><h6><i class="fa fa-filter" aria-hidden="true"></i><fmt:message key="<%= fkeyGlobal%>" /></h6>
                    <ul class="list-group"><%
                        boolean activeGlobalFacet = false;
                        for (FacetResult fvalue : facetGlobal) {
                            if (StringUtils.equals(searchScope, fvalue.getAuthorityKey())) {
                                activeGlobalFacet = true;
                            } else {
                                activeGlobalFacet = false;
                            }
                        %><li class="list-group-item<%= activeGlobalFacet ? " active" : ""%>">
                            <i class="fa fa-circle" aria-hidden="true"></i>
                            <a class="pl-3" href="<%= request.getContextPath()
                                    + "/simple-search?query="
                                    + URLEncoder.encode(query, "UTF-8")
                                    + "&amp;location=" + URLEncoder.encode(fvalue.getAuthorityKey(), "UTF-8")%>"
                               title="<fmt:message key="jsp.search.facet.narrow"><fmt:param><%=fvalue.getDisplayedValue()%></fmt:param></fmt:message>">

                               <%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 36)%></a><span class="badge"><%= fvalue.getCount()%></span> </li><%
                                   }
                               %></ul>
                </div>
            </div>
        </div><%
                    }
                }
            }
        %>

        <%
            if (brefine) {
        %>

        <div id="facets" class="facetsBox">

            <%
                for (DiscoverySearchFilterFacet facetConf : facetsConf) {
                    String f = facetConf.getIndexFieldName();
                    if (!showFacets.get(f)) {
                        continue;
                    }
                    List<FacetResult> facet = qResults.getFacetResult(f);
                    if (facet.size() == 0) {
                        facet = qResults.getFacetResult(f + ".year");
                    }
                    int limit = facetConf.getFacetLimit() + 1;

                    String fkey = "jsp.search.facet.refine." + f;
            %><div id="facet_<%= f%>" class="panel panel-success panel__discovery">
                <div>
                    <div class="panel-heading"><h6><i class="fa fa-filter" aria-hidden="true"></i><fmt:message key="<%= fkey%>" /></h6>
                        <ul class="list-group"><%
                            int idx = 1;
                            int currFp = UIUtil.getIntParameter(request, f + "_page");
                            if (currFp < 0) {
                                currFp = 0;
                            }
                            for (FacetResult fvalue : facet) {
                                if (idx != limit && !appliedFilterQueries.contains(f + "::" + fvalue.getFilterType() + "::" + fvalue.getAsFilterQuery())) {
                            %><li class="list-group-item">
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <a class="pl-3" href="<%= request.getContextPath()
                                        + "/simple-search?query="
                                        + URLEncoder.encode(query, "UTF-8")
                                        + "&amp;location=" + searchScope
                                        + "&amp;sort_by=" + sortedBy
                                        + "&amp;order=" + order
                                        + "&amp;rpp=" + rpp
                                        + httpFilters
                                        + "&amp;etal=" + etAl
                                        + "&amp;filtername=" + URLEncoder.encode(f, "UTF-8")
                                        + "&amp;filterquery=" + URLEncoder.encode(fvalue.getAsFilterQuery(), "UTF-8")
                                        + "&amp;filtertype=" + URLEncoder.encode(fvalue.getFilterType(), "UTF-8")%>"
                                   title="<fmt:message key="jsp.search.facet.narrow"><fmt:param><%=fvalue.getDisplayedValue()%></fmt:param></fmt:message>">
                                    <%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 36)%></a><span class="badge"><%= fvalue.getCount()%></span> </li><%
                                                idx++;
                                            }
                                            if (idx > limit) {
                                                break;
                                            }
                                        }
                                        if (currFp > 0 || idx == limit) {
                                    %><li class="list-group-item"><span style="visibility: hidden;">.</span>
                                <% if (currFp > 0) {%>
                                <a class="pull-left" href="<%= request.getContextPath()
                                        + "/simple-search?query="
                                        + URLEncoder.encode(query, "UTF-8")
                                        + "&amp;location=" + searchScope
                                        + "&amp;sort_by=" + sortedBy
                                        + "&amp;order=" + order
                                        + "&amp;rpp=" + rpp
                                        + httpFilters
                                        + "&amp;etal=" + etAl
                                        + "&amp;" + f + "_page=" + (currFp - 1)%>"><fmt:message key="jsp.search.facet.refine.previous" /></a>
                                <% } %>
                                <% if (idx == limit) {%>
                                <a class="panel__discovery__next" href="<%= request.getContextPath()
                                        + "/simple-search?query="
                                        + URLEncoder.encode(query, "UTF-8")
                                        + "&amp;location=" + searchScope
                                        + "&amp;sort_by=" + sortedBy
                                        + "&amp;order=" + order
                                        + "&amp;rpp=" + rpp
                                        + httpFilters
                                        + "&amp;etal=" + etAl
                                        + "&amp;" + f + "_page=" + (currFp + 1)%>"><span class="pull-right"><fmt:message key="jsp.search.facet.refine.next" /></span></a>
                                    <%
                                        }
                                    %></li><%
                                        }
                                %></ul>
                    </div>
                </div></div><%
                    }

                %>
        </div>
        <% }%>
    </dspace:sidebar>
</dspace:layout>
