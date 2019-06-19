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
                	
                	elementObject.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
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
            <%
            	if (f.equalsIgnoreCase("OUSubject") || f.equalsIgnoreCase("rpsubject")
            			 || f.equalsIgnoreCase("PJSubject")
            			 || f.equalsIgnoreCase("AwardsSubject")
            			 || f.equalsIgnoreCase("eventssubject")
            			 || f.equalsIgnoreCase("fundingssubject")
            			 || f.equalsIgnoreCase("journalssubject")) {
            		JsonArray itemArray = new JsonArray();
            		JsonObject elementObj = new JsonObject();
            		elementObj.addProperty("id", "1.Khoa h\u1ECDc t\u1EF1 nhi\u00EAn");
            		elementObj.addProperty("name", "1.Khoa h\u1ECDc t\u1EF1 nhi\u00EAn");
            		elementObj.addProperty("count", 0);
            		elementObj.addProperty("filtertype", "contains");
            		elementObj.addProperty("filtertypequery", "1.");
            		elementObj.add("children", new JsonArray());
            		itemArray.add(elementObj);
            		
            		elementObj = new JsonObject();
            		elementObj.addProperty("id", "2.Khoa h\u1ECDc k\u1EF9 thu\u1EADt v\u00E0 c\u00F4ng ngh\u1EC7");
            		elementObj.addProperty("name", "2.Khoa h\u1ECDc k\u1EF9 thu\u1EADt v\u00E0 c\u00F4ng ngh\u1EC7");
            		elementObj.addProperty("count", 0);
            		elementObj.addProperty("filtertype", "contains");
            		elementObj.addProperty("filtertypequery", "2.");
            		elementObj.add("children", new JsonArray());
            		itemArray.add(elementObj);
            		
            		elementObj = new JsonObject();
            		elementObj.addProperty("id", "3.Khoa h\u1ECDc y, d\u01B0\u1EE3c");
            		elementObj.addProperty("name", "3.Khoa h\u1ECDc y, d\u01B0\u1EE3c");
            		elementObj.addProperty("count", 0);
            		elementObj.addProperty("filtertype", "contains");
            		elementObj.addProperty("filtertypequery", "3.");
            		elementObj.add("children", new JsonArray());
            		itemArray.add(elementObj);
            		
            		elementObj = new JsonObject();
            		elementObj.addProperty("id", "4.Khoa h\u1ECDc n\u00F4ng nghi\u1EC7p");
            		elementObj.addProperty("name", "4.Khoa h\u1ECDc n\u00F4ng nghi\u1EC7p");
            		elementObj.addProperty("count", 0);
            		elementObj.addProperty("filtertype", "contains");
            		elementObj.addProperty("filtertypequery", "4.");
            		elementObj.add("children", new JsonArray());
            		itemArray.add(elementObj);
            		
            		elementObj = new JsonObject();
            		elementObj.addProperty("id", "5.Khoa h\u1ECDc x\u00E3 h\u1ED9i");
            		elementObj.addProperty("name", "5.Khoa h\u1ECDc x\u00E3 h\u1ED9i");
            		elementObj.addProperty("count", 0);
            		elementObj.addProperty("filtertype", "contains");
            		elementObj.addProperty("filtertypequery", "5.");
            		elementObj.add("children", new JsonArray());
            		itemArray.add(elementObj);
            		
            		elementObj = new JsonObject();
            		elementObj.addProperty("id", "6.Khoa h\u1ECDc nh\u00E2n v\u0103n");
            		elementObj.addProperty("name", "6.Khoa h\u1ECDc nh\u00E2n v\u0103n");
            		elementObj.addProperty("count", 0);
            		elementObj.addProperty("filtertype", "contains");
            		elementObj.addProperty("filtertypequery", "6.");
            		elementObj.add("children", new JsonArray());
            		itemArray.add(elementObj);
            		
            		if (facet != null) {
            			long total0 = 0;
            			long total1 = 0;
            			long total2 = 0;
            			long total3 = 0;
            			long total4 = 0;
            			long total5 = 0;
                    	for (FacetResult fvalue : facet) {
                    		if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1.Khoa h\u1ECDc t\u1EF1 nhi\u00EAn") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1. Khoa h\u1ECDc t\u1EF1 nhi\u00EAn")) {
                    			total0 = total0 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2.Khoa h\u1ECDc k\u1EF9 thu\u1EADt v\u00E0 c\u00F4ng ngh\u1EC7") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2. Khoa h\u1ECDc k\u1EF9 thu\u1EADt v\u00E0 c\u00F4ng ngh\u1EC7")) {
                    			total1 = total1 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3.Khoa h\u1ECDc y, d\u01B0\u1EE3c") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3. Khoa h\u1ECDc y, d\u01B0\u1EE3c")) {
                    			total2 = total2 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("4.Khoa h\u1ECDc n\u00F4ng nghi\u1EC7p") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("4. Khoa h\u1ECDc n\u00F4ng nghi\u1EC7p")) {
                    			total3 = total3 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("5.Khoa h\u1ECDc x\u00E3 h\u1ED9i") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("5. Khoa h\u1ECDc x\u00E3 h\u1ED9i")) {
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("6.Khoa h\u1ECDc nh\u00E2n v\u0103n") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("6. Khoa h\u1ECDc nh\u00E2n v\u0103n")) {
                    			total4 = total4 + fvalue.getCount();
                    		}
                    		if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("1.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1.Khoa h\u1ECDc t\u1EF1 nhi\u00EAn")  && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1. Khoa h\u1ECDc t\u1EF1 nhi\u00EAn")) {
                    			elementObj = new JsonObject();
                    			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("filtertype", "authority");
                        		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("count", fvalue.getCount());
                    			itemArray.get(0).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                        		total0 = total0 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("2.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2.Khoa h\u1ECDc k\u1EF9 thu\u1EADt v\u00E0 c\u00F4ng ngh\u1EC7")  && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2. Khoa h\u1ECDc k\u1EF9 thu\u1EADt v\u00E0 c\u00F4ng ngh\u1EC7")) {
                    			elementObj = new JsonObject();
                    			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("filtertype", "authority");
                        		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("count", fvalue.getCount());
                    			itemArray.get(1).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                        		total1 = total1 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("3.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3.Khoa h\u1ECDc y, d\u01B0\u1EE3c") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3. Khoa h\u1ECDc y, d\u01B0\u1EE3c")) {
                    			elementObj = new JsonObject();
                    			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("filtertype", "authority");
                        		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("count", fvalue.getCount());
                    			itemArray.get(2).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                        		total2 = total2 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("4.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("4.Khoa h\u1ECDc n\u00F4ng nghi\u1EC7p") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("4. Khoa h\u1ECDc n\u00F4ng nghi\u1EC7p")) {
                    			elementObj = new JsonObject();
                    			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("filtertype", "authority");
                        		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("count", fvalue.getCount());
                    			itemArray.get(3).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                        		total3 = total3 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("5.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("5.Khoa h\u1ECDc x\u00E3 h\u1ED9i") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("5. Khoa h\u1ECDc x\u00E3 h\u1ED9i")) {
                    			elementObj = new JsonObject();
                    			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("filtertype", "authority");
                        		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("count", fvalue.getCount());
                    			itemArray.get(4).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                        		total4 = total4 + fvalue.getCount();
                    		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("6.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("6.Khoa h\u1ECDc nh\u00E2n v\u0103n") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("6. Khoa h\u1ECDc nh\u00E2n v\u0103n")) {
                    			elementObj = new JsonObject();
                    			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("filtertype", "authority");
                        		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                        		elementObj.addProperty("count", fvalue.getCount());
                    			itemArray.get(5).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                        		total5 = total5 + fvalue.getCount();
                    		}
                    	}
                		itemArray.get(0).getAsJsonObject().getAsJsonObject().addProperty("count", total0);
                		itemArray.get(1).getAsJsonObject().getAsJsonObject().addProperty("count", total1);
                		itemArray.get(2).getAsJsonObject().getAsJsonObject().addProperty("count", total2);
                		itemArray.get(3).getAsJsonObject().getAsJsonObject().addProperty("count", total3);
                		itemArray.get(4).getAsJsonObject().getAsJsonObject().addProperty("count", total4);
                		itemArray.get(5).getAsJsonObject().getAsJsonObject().addProperty("count", total5);
            		}
            %>
            <div id="treeData__container" class="hidden"><%=itemArray %></div>
            <v-treeview :items="treeSubject" :open-all="true" v-if="treeSubject.length > 0">
            	<template v-slot:label="{ item, active }">
		          <div class="v-treeview-node__label__content">
		          	<a class="pl-3" style="    padding: 0 !important;" :href='"<%= request.getContextPath()%>" + "/simple-search?filterquery=" + item.filtertypequery + "&amp;filtername=" + "<%=URLEncoder.encode(f, "UTF-8") %>" + "&amp;filtertype=" + item.filtertype + "&amp;location=" + "<%=URLEncoder.encode(searchScope, "UTF-8") %>"'
					>
                        {{ item.name }}</a>
		          </div> 
		          <div class="badge" v-if="item.count > 0" >{{ item.count }}</div>
		        </template>
            </v-treeview>
	            
            <% } else if (f.equalsIgnoreCase("OUActivity")) { 
            	
            	JsonArray itemArray = new JsonArray();
        		JsonObject elementObj = new JsonObject();
        		elementObj.addProperty("id", "1.Nghi\u00EAn c\u1EE9u khoa h\u1ECDc");
        		elementObj.addProperty("name", "1.Nghi\u00EAn c\u1EE9u khoa h\u1ECDc");
        		elementObj.addProperty("count", 0);
        		elementObj.addProperty("filtertype", "contains");
        		elementObj.addProperty("filtertypequery", "1.");
        		elementObj.add("children", new JsonArray());
        		itemArray.add(elementObj);
        		
        		elementObj = new JsonObject();
        		elementObj.addProperty("id", "2.Ph\u00E1t tri\u1EC3n c\u00F4ng ngh\u1EC7");
        		elementObj.addProperty("name", "2.Ph\u00E1t tri\u1EC3n c\u00F4ng ngh\u1EC7");
        		elementObj.addProperty("count", 0);
        		elementObj.addProperty("filtertype", "contains");
        		elementObj.addProperty("filtertypequery", "2.");
        		elementObj.add("children", new JsonArray());
        		itemArray.add(elementObj);
        		
        		elementObj = new JsonObject();
        		elementObj.addProperty("id", "3.D\u1ECBch v\u1EE5 khoa h\u1ECDc v\u00E0 c\u00F4ng ngh\u1EC7");
        		elementObj.addProperty("name", "3.D\u1ECBch v\u1EE5 khoa h\u1ECDc v\u00E0 c\u00F4ng ngh\u1EC7");
        		elementObj.addProperty("count", 0);
        		elementObj.addProperty("filtertype", "contains");
        		elementObj.addProperty("filtertypequery", "3.");
        		elementObj.add("children", new JsonArray());
        		itemArray.add(elementObj);
        		
        		if (facet != null) {
        			long total0 = 0;
        			long total1 = 0;
        			long total2 = 0;
                	for (FacetResult fvalue : facet) {
                		if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1.Nghi\u00EAn c\u1EE9u khoa h\u1ECDc") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1. Nghi\u00EAn c\u1EE9u khoa h\u1ECDc")) {
                			total0 = total0 + fvalue.getCount();
                		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2.Ph\u00E1t tri\u1EC3n c\u00F4ng ngh\u1EC7") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2. Ph\u00E1t tri\u1EC3n c\u00F4ng ngh\u1EC7")) {
                			total1 = total1 + fvalue.getCount();
                		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3.D\u1ECBch v\u1EE5 khoa h\u1ECDc v\u00E0 c\u00F4ng ngh\u1EC7") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3. D\u1ECBch v\u1EE5 khoa h\u1ECDc v\u00E0 c\u00F4ng ngh\u1EC7")) {
                			total2 = total2 + fvalue.getCount();
                		}
                		if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("1.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1.Nghi\u00EAn c\u1EE9u khoa h\u1ECDc")  && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1. Nghi\u00EAn c\u1EE9u khoa h\u1ECDc")) {
                			elementObj = new JsonObject();
                			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("filtertype", "authority");
                    		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("count", fvalue.getCount());
                			itemArray.get(0).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                			total0 = total0 + fvalue.getCount();
                		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("2.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2.Ph\u00E1t tri\u1EC3n c\u00F4ng ngh\u1EC7")  && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2. Ph\u00E1t tri\u1EC3n c\u00F4ng ngh\u1EC7")) {
                			elementObj = new JsonObject();
                			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("filtertype", "authority");
                    		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("count", fvalue.getCount());
                			itemArray.get(1).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                			total1 = total1 + fvalue.getCount();
                		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("3.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3.D\u1ECBch v\u1EE5 khoa h\u1ECDc v\u00E0 c\u00F4ng ngh\u1EC7") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("3. D\u1ECBch v\u1EE5 khoa h\u1ECDc v\u00E0 c\u00F4ng ngh\u1EC7")) {
                			elementObj = new JsonObject();
                			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("filtertype", "authority");
                    		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("count", fvalue.getCount());
                			itemArray.get(2).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                			total2 = total2 + fvalue.getCount();
                		}
                	}
            		itemArray.get(0).getAsJsonObject().getAsJsonObject().addProperty("count", total0);
            		itemArray.get(1).getAsJsonObject().getAsJsonObject().addProperty("count", total1);
            		itemArray.get(2).getAsJsonObject().getAsJsonObject().addProperty("count", total2);
        		}
            	
            %>
            
            <div id="treeDataActivity__container" class="hidden"><%=itemArray %></div>
            <v-treeview :items="treeActivity" :open-all="true" v-if="treeActivity.length > 0">
            	<template v-slot:label="{ item, active }">
		          <div class="v-treeview-node__label__content">
		          	<a class="pl-3" style="    padding: 0 !important;" :href='"<%= request.getContextPath()%>" + "/simple-search?filterquery=" + item.filtertypequery + "&amp;filtername=" + "<%=URLEncoder.encode(f, "UTF-8") %>" + "&amp;filtertype=" + item.filtertype + "&amp;location=" + "<%=URLEncoder.encode(searchScope, "UTF-8") %>"'
					>
                        {{ item.name }}</a>
		          </div> 
		          <div class="badge" v-if="item.count > 0" >{{ item.count }}</div>
		        </template>
            </v-treeview>
	            
	            <% } else if (f.equalsIgnoreCase("PJAuthority")) { 
            	
            	JsonArray itemArray = new JsonArray();
        		JsonObject elementObj = new JsonObject();
        		elementObj.addProperty("id", "1.C\u00E1c b\u1ED9, ng\u00E0nh, c\u01A1 quan trung \u01B0\u01A1ng");
        		elementObj.addProperty("name", "1.C\u00E1c b\u1ED9, ng\u00E0nh, c\u01A1 quan trung \u01B0\u01A1ng");
        		elementObj.addProperty("count", 0);
        		elementObj.addProperty("filtertype", "contains");
        		elementObj.addProperty("filtertypequery", "1.");
        		elementObj.add("children", new JsonArray());
        		itemArray.add(elementObj);
        		
        		elementObj = new JsonObject();
        		elementObj.addProperty("id", "2.T\u1EC9nh, th\u00E0nh ph\u1ED1");
        		elementObj.addProperty("name", "2.T\u1EC9nh, th\u00E0nh ph\u1ED1");
        		elementObj.addProperty("count", 0);
        		elementObj.addProperty("filtertype", "contains");
        		elementObj.addProperty("filtertypequery", "2.");
        		elementObj.add("children", new JsonArray());
        		itemArray.add(elementObj);
        		        		
        		if (facet != null) {
        			long total0 = 0;
        			long total1 = 0;
                	for (FacetResult fvalue : facet) {
                		if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1.C\u00E1c b\u1ED9, ng\u00E0nh, c\u01A1 quan trung \u01B0\u01A1ng") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1. C\u00E1c b\u1ED9, ng\u00E0nh, c\u01A1 quan trung \u01B0\u01A1ng")) {
                			total0 = total0 + fvalue.getCount();
                		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2.T\u1EC9nh, th\u00E0nh ph\u1ED1") || StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2. T\u1EC9nh, th\u00E0nh ph\u1ED1")) {
                			total1 = total1 + fvalue.getCount();
                		}
                		if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("1.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1.C\u00E1c b\u1ED9, ng\u00E0nh, c\u01A1 quan trung \u01B0\u01A1ng")  && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("1. C\u00E1c b\u1ED9, ng\u00E0nh, c\u01A1 quan trung \u01B0\u01A1ng")) {
                			elementObj = new JsonObject();
                			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("count", fvalue.getCount());
                    		elementObj.addProperty("filtertype", "authority");
                    		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                			itemArray.get(0).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                			total0 = total0 + fvalue.getCount();
                		} else if (StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).startsWith("2.") && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2.T\u1EC9nh, th\u00E0nh ph\u1ED1")  && !StringUtils.abbreviate(fvalue.getDisplayedValue(), 936).equals("2. T\u1EC9nh, th\u00E0nh ph\u1ED1")) {
                			elementObj = new JsonObject();
                			elementObj.addProperty("id", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("name", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                    		elementObj.addProperty("count", fvalue.getCount());
                    		elementObj.addProperty("filtertype", "authority");
                    		elementObj.addProperty("filtertypequery", StringUtils.abbreviate(fvalue.getDisplayedValue(), 936));
                			itemArray.get(1).getAsJsonObject().getAsJsonArray("children").add(elementObj);
                			total1 = total1 + fvalue.getCount();
                		}
                	}
            		itemArray.get(0).getAsJsonObject().getAsJsonObject().addProperty("count", total0);
            		itemArray.get(1).getAsJsonObject().getAsJsonObject().addProperty("count", total1);
        		}
            	
            %>
            
            <div id="treeDataAuthority__container" class="hidden"><%=itemArray %></div>
            <v-treeview :items="treeAuthority" :open-all="true" v-if="treeAuthority.length > 0">
            	<template v-slot:label="{ item, active }">
		          <div class="v-treeview-node__label__content">
		          	<a class="pl-3" style="    padding: 0 !important;" :href='"<%= request.getContextPath()%>" + "/simple-search?filterquery=" + item.filtertypequery + "&amp;filtername=" + "<%=URLEncoder.encode(f, "UTF-8") %>" + "&amp;filtertype=" + item.filtertype + "&amp;location=" + "<%=URLEncoder.encode(searchScope, "UTF-8") %>"'
					>
                        {{ item.name }}</a>
		          </div> 
		          <div class="badge" v-if="item.count > 0" >{{ item.count }}</div>
		        </template>
            </v-treeview>
            
            <% } else if (f.equalsIgnoreCase("subject")) { 
            	
        		JsonObject elementObj = new JsonObject();
        		
            	if (facet != null) {
                	for (FacetResult fvalue : facet) {
                		elementObj.addProperty(StringUtils.abbreviate(fvalue.getDisplayedValue(), 936), fvalue.getCount());
                	}
        		}
            %>
            	<div id="treeDataRaw__container" class="hidden"><%=elementObj %></div>
            	<v-treeview :items="treeSOS" :open-all="true" v-if="treeSOS.length > 0">
            	<template v-slot:label="{ item, active }">
		          <div class="v-treeview-node__label__content">
		          	<a class="pl-3" style="    padding: 0 !important;" :href='"<%= request.getContextPath()%>" + "/simple-search?filterquery=" + item.filtertypequery + "&amp;filtername=" + "<%=URLEncoder.encode(f, "UTF-8") %>" + "&amp;filtertype=" + item.filtertype + "&amp;location=" + "<%=URLEncoder.encode(searchScope, "UTF-8") %>"'
					>
                        {{ item.name.substring(item.numberpoint) }}
                    </a>
		          </div> 
		          <div class="badge" v-if="item.count > 0" >{{ item.count }}</div>
		        </template>
            </v-treeview>
            <% } else { %>
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
                        <%= StringUtils.abbreviate(fvalue.getDisplayedValue(), 936)%></a><span class="badge"><%= fvalue.getCount()%></span> </li><%
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
                    %></ul>
                    <%} %>
                    </div></div><%
                    }
                %></div></div>
                
                <div class="hidden" id="chart__data_custom">
                
                <%=arrayObject %>
                
                </div>
                <%
    }

%>