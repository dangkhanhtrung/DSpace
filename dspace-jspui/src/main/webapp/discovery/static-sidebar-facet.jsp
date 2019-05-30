<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - fragment JSP to be included in site, community or collection home to show discovery facets
  -
  - Attributes required:
  -    discovery.fresults    - the facets result to show
  -    discovery.facetsConf  - the facets configuration
  -    discovery.searchScope - the search scope 
--%>

<%@page import="com.amazonaws.util.json.JSONObject"%>
<%@page import="com.google.gson.JsonObject"%>
<%@page import="com.google.gson.JsonArray"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilterFacet"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Set"%>
<%@ page import="java.util.Map"%>
<%@ page import="org.dspace.discovery.DiscoverResult.FacetResult"%>
<%@ page import="java.util.List"%>
<%@ page import="java.net.URLEncoder"%>
<%@ page import="org.apache.commons.lang.StringUtils"%>

<%
    boolean brefine = false;

    Map<String, List<FacetResult>> mapFacetes = (Map<String, List<FacetResult>>) request.getAttribute("discovery.fresults");
    List<DiscoverySearchFilterFacet> facetsConf = (List<DiscoverySearchFilterFacet>) request.getAttribute("facetsConfig");
    String searchScope = (String) request.getAttribute("discovery.searchScope");

    if (searchScope == null) {
        searchScope = "";
    }

    if (mapFacetes != null) {
        for (DiscoverySearchFilterFacet facetConf : facetsConf) {
            String f = facetConf.getIndexFieldName();
            List<FacetResult> facet = mapFacetes.get(f);
            if (facet != null && facet.size() > 0) {
                brefine = true;
                break;
            } else {
                facet = mapFacetes.get(f + ".year");
                if (facet != null && facet.size() > 0) {
                    brefine = true;
                    break;
                }
            }
        }
    }
    if (brefine) {
%>
<div class="col-md-<%= discovery_panel_cols%>">
    <div id="facets" class="facetsBox row panel panel__discovery__expose">
    	
    	<%
    		JsonArray arrayObject = new JsonArray();
    	
            for (DiscoverySearchFilterFacet facetConf : facetsConf) {
                String fx = facetConf.getIndexFieldName();
                List<FacetResult> facetx = mapFacetes.get(fx);
                if (facetx == null) {
                	facetx = mapFacetes.get(fx + ".year");
                }
                if (facetx == null) {
                    continue;
                }
                String fkeyx = "jsp.search.facet.refine." + fx;
                
                
                JsonObject currentObject = new JsonObject();
                
                currentObject.add(fkeyx, new JsonArray());
                
                int limitx = facetConf.getFacetLimit() + 1;
                
                for (FacetResult fvalue : facetx) {
                	
                	JsonObject elementObject = new JsonObject();
                	
                	elementObject.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 36));
                	elementObject.addProperty("y", fvalue.getCount());
                	
                	currentObject.getAsJsonArray(fkeyx).add(elementObject);
                	
        %>
        
        <%
            }
            	arrayObject.add(currentObject);
            }
        %>
        
        <%
            for (DiscoverySearchFilterFacet facetConf : facetsConf) {
                String f = facetConf.getIndexFieldName();
                List<FacetResult> facet = mapFacetes.get(f);
                if (facet == null) {
                    facet = mapFacetes.get(f + ".year");
                }
                if (facet == null) {
                    continue;
                }
                String fkey = "jsp.search.facet.refine." + f;
                int limit = facetConf.getFacetLimit() + 1;
        %><div id="facet_<%= f%>" class="facet btn--block panel__discovery">
            <div class="panel-heading">
            <h6><i class="fa fa-filter" aria-hidden="true"></i><fmt:message key="<%= fkey%>" /></h6>
            <ul class="list-group"><%
                int idx = 1;
                int currFp = UIUtil.getIntParameter(request, f + "_page");
                if (currFp < 0) {
                    currFp = 0;
                }
                if (facet != null) {
                    for (FacetResult fvalue : facet) {
                        if (idx != limit) {
                %><li class="list-group-item">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                    <a class="pl-3" href="<%= request.getContextPath()
                            + "/simple-search?filterquery=" + URLEncoder.encode(fvalue.getAsFilterQuery(), "UTF-8")
                            + "&amp;filtername=" + URLEncoder.encode(f, "UTF-8")
                            + "&amp;filtertype=" + URLEncoder.encode(fvalue.getFilterType(), "UTF-8")
                                    + "&amp;location=" + URLEncoder.encode(searchScope, "UTF-8")%>"
                       title="<fmt:message key="jsp.search.facet.narrow"><fmt:param><%=fvalue.getDisplayedValue()%></fmt:param></fmt:message>">
                        <%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 36)%></a><span class="badge"><%= fvalue.getCount()%></span> </li><%
                                }
                                idx++;
                            }
                            if (currFp > 0 || idx > limit) {
                        %><li class="list-group-item"><span style="visibility: hidden;">.</span>
                        <% if (currFp > 0) {%>
                        <a class="pull-left panel__discovery__back" href="<%="?location=" + URLEncoder.encode(searchScope, "UTF-8")
                                + "&" + f + "_page=" + (currFp - 1)%>"><fmt:message key="jsp.search.facet.refine.previous" /></a>
                    <% } %>
                    <% if (idx > limit) {%>
                    <a class="panel__discovery__next" href="<%="?location=" + URLEncoder.encode(searchScope, "UTF-8")
                            + "&" + f + "_page=" + (currFp + 1)%>"><span class="pull-right"><fmt:message key="jsp.search.facet.refine.next" /></span></a>
                        <%
                            }
                        %></li><%
                                }
                            }
                    %></ul></div></div><%
                    }
                %></div></div>
                
                <div class="hidden" id="chart__data_custom">
                
                <%=arrayObject %>
                
                </div>
                <%
    }

%>