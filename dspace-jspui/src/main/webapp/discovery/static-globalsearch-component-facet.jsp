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

<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilterFacet"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Set"%>
<%@ page import="java.util.Map"%>
<%@ page import="org.dspace.discovery.DiscoverResult.FacetResult"%>
<%@ page import="java.util.List"%>
<%@ page import="java.net.URLEncoder"%>
<%@ page import="org.apache.commons.lang.StringUtils"%>
<script type="text/javascript">
<!--
    jQuery(document).ready(function () {

        jQuery("#searchglobalprocessor .search-panel .dropdown-menu li a").click(function () {
            jQuery('#search_param').val('');
            jQuery('#search_param').val(jQuery(this).attr('title'));
            return jQuery('#searchglobalprocessor').submit();
        });

        jQuery("#group-left-info").popover({
            trigger: 'click',
            html: true,
            title: function () {
                return jQuery('#group-left-info-popover-head').html();
            },
            content: function () {
                return jQuery('#group-left-info-popover-content').html();
            }
        });

        jQuery('#group-left-info').on('click', function () {
            jQuery('#group-center-info').popover('hide');
            jQuery('#group-right-info').popover('hide');
        });

        jQuery('#group-center-info').popover({
            trigger: 'click',
            html: true,
            title: function () {
                return jQuery('#group-center-info-popover-head').html();
            },
            content: function () {
                return jQuery('#group-center-info-popover-content').html();
            }
        });
        jQuery('#group-center-info').on('click', function () {
            jQuery('#group-left-info').popover('hide');
            jQuery('#group-right-info').popover('hide');
        });

        jQuery('#group-right-info').popover({
            trigger: 'click',
            html: true,
            title: function () {
                return jQuery('#group-right-info-popover-head').html();
            },
            content: function () {
                return jQuery('#group-right-info-popover-content').html();
            }
        });
        jQuery('#group-right-info').on('click', function () {
            jQuery('#group-left-info').popover('hide');
            jQuery('#group-center-info').popover('hide');
        });



    });
-->
</script>
<%

    String facetGlobalName = (String) request.getAttribute("facetGlobalName");
    List<DiscoverySearchFilterFacet> facetsGlobalConf = (List<DiscoverySearchFilterFacet>) request.getAttribute("facetsGlobalConfig");
    Map<String, List<FacetResult>> mapGlobalFacetes = (Map<String, List<FacetResult>>) request.getAttribute("discovery.global.fresults");

    Map<String, String> mapFacetFirstLevel = (Map<String, String>) request.getAttribute("facetGlobalFirstLevel");
    Map<String, String> mapFacetSecondLevel = (Map<String, String>) request.getAttribute("facetGlobalSecondLevel");

%>


<%    long totGroupLeft = 0;
    long totGroupCenter = 0;
    long totGroupRight = 0;
    if (facetsGlobalConf != null) {
        for (DiscoverySearchFilterFacet facetConf : facetsGlobalConf) {
            String f = facetConf.getIndexFieldName();
            if (f.equals(facetGlobalName)) {
                List<FacetResult> facet = mapGlobalFacetes.get(f);
                if (facet != null) {
                    for (FacetResult ft : facet) {
                        if (mapFacetFirstLevel.containsKey(ft.getAuthorityKey())) {
                            if (mapFacetFirstLevel.get(ft.getAuthorityKey()).equals("group-left")) {
                                totGroupLeft += ft.getCount();
                            }
                            if (mapFacetFirstLevel.get(ft.getAuthorityKey()).equals("group-center")) {
                                totGroupCenter += ft.getCount();
                            }
                            if (mapFacetFirstLevel.get(ft.getAuthorityKey()).equals("group-right")) {
                                totGroupRight += ft.getCount();
                            }
                        }
                    }
                }
            }
        }
    }
%>
<div class="row">
    <div class="col-12 mb-2">
        <a href="#group-left-info-popover-content">
            <div id="group-left-info" class="card card-stats mb-4 mb-xl-0 card-body_1">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-white mb-0">People</h5>
                            <span class="h2 font-weight-bold mb-0 text-white"><%= totGroupLeft%></span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-white text-white rounded-circle shadow">
                                <i class="fa fa-users fa-5x"></i>
                            </div>
                        </div>
                    </div>
                    <p class="mb-0 text-white text-sm">

                        <span class="text-nowrap">Explore the researcher community</span>
                    </p>
                </div>
            </div>

        </a>
    </div>
    <div class="col-12 mb-2">
        <a href="#group-center-info-popover-content">
            <div id="group-center-info" class="card card-stats mb-4 mb-xl-0 card-body_2">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-white mb-0">Repository other entities</h5>
                            <span class="h2 font-weight-bold mb-0 text-white"><%= totGroupCenter%></span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-white text-white rounded-circle shadow">
                                <i class="fa fa-cogs fa-5x"></i>
                            </div>
                        </div>
                    </div>
                    <p class="mb-0 text-white text-sm">

                        <span class="text-nowrap">Explore entities</span>
                    </p>
                </div>
            </div>
        </a>
    </div>
    <div class="col-12 mb-2">
        <a href="#group-right-info-popover-content">
            <div id="group-right-info" class="card card-stats mb-4 mb-xl-0 card-body_3">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-white mb-0"><fmt:message key="jsp.home.explore.group-right-info" /></h5>
                            <span class="h2 font-weight-bold mb-0 text-white"><%= totGroupRight%></span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-white text-white rounded-circle shadow">
                                <i class="fa fa-file-text-o fa-5x"></i>
                            </div>
                        </div>
                    </div>
                    <p class="mb-0 text-white text-sm">
                        <span class="text-nowrap"><fmt:message key="jsp.home.explore.title.group-right-info" /></span>
                    </p>
                </div>
            </div>
        </a>
    </div>

</div>

<div id="group-left-info-popover-content" class="hidden">
    <ul class="list-group">
        <%
            if (facetsGlobalConf != null) {
                for (DiscoverySearchFilterFacet facetConf : facetsGlobalConf) {
                    String f = facetConf.getIndexFieldName();
                    List<FacetResult> facet = mapGlobalFacetes.get(f);
                    if (facet != null) {
                        for (FacetResult fvalue : facet) {
                            if (mapFacetFirstLevel.containsKey(fvalue.getAuthorityKey())) {
                                if (mapFacetFirstLevel.get(fvalue.getAuthorityKey()).equals("group-left")) {
                                    String fkey = "jsp.home.group-left-info." + fvalue.getAuthorityKey();
        %>

        <li class="list-group-item"> <span class="badge"><%= fvalue.getCount()%></span> <a href="<%= request.getContextPath()%>/simple-search?query=&location=<%=fvalue.getAuthorityKey()%>"><fmt:message key="<%= fkey%>"/></a></li>
            <%
                                }
                            }
                        }
                    }

                }

            %>
            <%                    for (DiscoverySearchFilterFacet facetConf : facetsGlobalConf) {
                    String f = facetConf.getIndexFieldName();
                    if (mapFacetSecondLevel.containsKey(f)) {
                        if (mapFacetFirstLevel.get(mapFacetSecondLevel.get(f)).equals("group-left")) {
            %>
        <li role="presentation" class="dropdown-header"><fmt:message key="jsp.home.group.dropdown.header.secondlevel"/></li>
        <%
            List<FacetResult> facet = mapGlobalFacetes.get(f);
            if (facet != null) {
                for (FacetResult fvalue : facet) {
        %>

        <li class="list-group-item"> <span class="badge"><%= fvalue.getCount()%></span> <a href="<%= request.getContextPath()
                + "/simple-search?filterquery=" + URLEncoder.encode(fvalue.getAsFilterQuery(), "UTF-8")
                + "&amp;filtername=" + URLEncoder.encode(f, "UTF-8")
                                                + "&amp;filtertype=" + URLEncoder.encode(fvalue.getFilterType(), "UTF-8")%>"
                                                                                            title="<fmt:message key="jsp.search.facet.narrow"><fmt:param><%=fvalue.getDisplayedValue()%></fmt:param></fmt:message>">
                <%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 936)%></a></li>
                <%
                                        }
                                    }
                                }
                            }

                        }
                    }
                %>
    </ul>
</div>		

<div id="group-center-info-popover-content" class="hidden">
    <ul class="list-group">
        <%
            if (facetsGlobalConf != null) {
                for (DiscoverySearchFilterFacet facetConf : facetsGlobalConf) {
                    String f = facetConf.getIndexFieldName();
                    List<FacetResult> facet = mapGlobalFacetes.get(f);
                    if (facet != null) {
                        for (FacetResult fvalue : facet) {
                            if (mapFacetFirstLevel.containsKey(fvalue.getAuthorityKey())) {
                                if (mapFacetFirstLevel.get(fvalue.getAuthorityKey()).equals("group-center")) {
                                    String fkey = "jsp.home.group-center-info." + fvalue.getAuthorityKey();
        %>

        <li class="list-group-item"> <span class="badge"><%= fvalue.getCount()%></span> <a href="<%= request.getContextPath()%>/simple-search?query=&location=<%=fvalue.getAuthorityKey()%>"><fmt:message key="<%= fkey%>"/></a></li>
            <%
                                }
                            }
                        }
                    }

                }

            %>
            <%                    for (DiscoverySearchFilterFacet facetConf : facetsGlobalConf) {
                    String f = facetConf.getIndexFieldName();
                    if (mapFacetSecondLevel.containsKey(f)) {
                        if (mapFacetFirstLevel.get(mapFacetSecondLevel.get(f)).equals("group-center")) {
            %>
        <li role="presentation" class="dropdown-header"><fmt:message key="jsp.home.group.dropdown.header.secondlevel"/></li>
        <%
            List<FacetResult> facet = mapGlobalFacetes.get(f);
            if (facet != null) {
                for (FacetResult fvalue : facet) {
        %>

        <li class="list-group-item"> <span class="badge"><%= fvalue.getCount()%></span> <a href="<%= request.getContextPath()
                + "/simple-search?filterquery=" + URLEncoder.encode(fvalue.getAsFilterQuery(), "UTF-8")
                + "&amp;filtername=" + URLEncoder.encode(f, "UTF-8")
                                                + "&amp;filtertype=" + URLEncoder.encode(fvalue.getFilterType(), "UTF-8")%>"
                                                                                            title="<fmt:message key="jsp.search.facet.narrow"><fmt:param><%=fvalue.getDisplayedValue()%></fmt:param></fmt:message>">
                <%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 936)%></a></li>
                <%
                                        }
                                    }
                                }
                            }

                        }
                    }
                %>
    </ul>
</div>		

<div id="group-right-info-popover-content" class="hidden">
    <ul class="list-group">
        <%
            if (facetsGlobalConf != null) {
                for (DiscoverySearchFilterFacet facetConf : facetsGlobalConf) {
                    String f = facetConf.getIndexFieldName();
                    List<FacetResult> facet = mapGlobalFacetes.get(f);
                    if (facet != null) {
                        for (FacetResult fvalue : facet) {
                            if (mapFacetFirstLevel.containsKey(fvalue.getAuthorityKey())) {
                                if (mapFacetFirstLevel.get(fvalue.getAuthorityKey()).equals("group-right")) {
                                    String fkey = "jsp.home.group-right-info." + fvalue.getAuthorityKey();
        %>

        <li class="list-group-item"> <span class="badge"><%= fvalue.getCount()%></span> <a href="<%= request.getContextPath()%>/simple-search?query=&location=<%=fvalue.getAuthorityKey()%>"><fmt:message key="<%= fkey%>"/></a></li>
            <%
                                }
                            }
                        }
                    }

                }

            %>
            <%                                    for (DiscoverySearchFilterFacet facetConf : facetsGlobalConf) {
                    String f = facetConf.getIndexFieldName();
                    if (mapFacetSecondLevel.containsKey(f)) {
                        if (mapFacetFirstLevel.get(mapFacetSecondLevel.get(f)).equals("group-right")) {
            %>
        <li role="presentation" class="dropdown-header"><fmt:message key="jsp.home.group.dropdown.header.secondlevel"/></li>
        <%
            List<FacetResult> facet = mapGlobalFacetes.get(f);
            if (facet != null) {
                for (FacetResult fvalue : facet) {
        %>

        <li class="list-group-item"> <span class="badge"><%= fvalue.getCount()%></span> <a href="<%= request.getContextPath()
                                                + "/simple-search?filterquery=" + URLEncoder.encode(fvalue.getAsFilterQuery(), "UTF-8")
                                                + "&amp;filtername=" + URLEncoder.encode(f, "UTF-8")
                                                + "&amp;filtertype=" + URLEncoder.encode(fvalue.getFilterType(), "UTF-8")%>"
                                                                                            title="<fmt:message key="jsp.search.facet.narrow"><fmt:param><%=fvalue.getDisplayedValue()%></fmt:param></fmt:message>">
                <%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 936)%></a></li>
                <%
                                        }
                                    }
                                }
                            }
                        }
                    }
                %>
    </ul>
</div>		