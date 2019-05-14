<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    https://github.com/CILEA/dspace-cris/wiki/License

--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<%@ taglib uri="jdynatags" prefix="dyna"%>
<%@ taglib uri="researchertags" prefix="researcher"%>

<%@page import="org.dspace.app.webui.cris.dto.ComponentInfoDTO"%>
<%@page import="java.util.Map" %>
<%@page import="org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.app.cris.integration.RPAuthority"%>
<%@ page import="org.dspace.app.cris.network.NetworkPlugin"%>
<%@ page import="org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@ page import="org.dspace.eperson.EPerson" %>

<% 
        Map<String, ComponentInfoDTO> mapInfo = ((Map<String, ComponentInfoDTO>)(request.getAttribute("componentinfomap"))); 
        boolean showBadgeCount = ConfigurationManager.getBooleanProperty("cris", "webui.tab.show.count.for.firstcomponent", false);

    boolean networkModuleEnabled = ConfigurationManager.getBooleanProperty(NetworkPlugin.CFG_MODULE,"network.enabled");
    boolean changeStatusAdmin = ConfigurationManager.getBooleanProperty("cris","rp.changestatus.admin");
    boolean claimEnabled = ConfigurationManager.getBooleanProperty("cris","rp.claim.enabled");
%>

<div class="col-12 col-sm-3">
    <ul class="ul__user__info mb-3">
        <c:forEach items="${tabList}" var="area" varStatus="rowCounter">
            <c:set var="tablink"><c:choose>
                    <c:when test="${rowCounter.count == 1}">${root}/cris/${specificPartPath}/${authority}?onlytab=true</c:when>
                    <c:otherwise>${root}/cris/${specificPartPath}/${authority}/${area.shortName}.html?onlytab=true</c:otherwise>
                </c:choose></c:set>

            <c:choose>
                <c:when test="${(researcher:isTabHidden(entity,area.shortName) == false)}">
                    <c:set var="tabName" value="researcher-menu-item"/>
                </c:when>
                <c:otherwise>
                    <c:set var="tabName" value="researcher-menu-item-hidden"/>
                </c:otherwise>
            </c:choose>

            <li data-tabname="${area.shortName}" class="${tabName}" id="bar-tab-${area.id}">
                <c:choose>
                    <c:when test="${area.id == tabId}">
                        <a href="#tab-${area.id}">
                            <c:if test="${!empty area.ext}">
                                <img style="width: 16px;vertical-align: middle;" border="0" 
                                     src="<%=request.getContextPath()%>/cris/researchertabimage/${area.id}" alt="icon" />
                            </c:if>	
                            <spring:message code="${entity.class.simpleName}.tab.${area.shortName}.label" text="${area.title}"></spring:message>
                                <% if(showBadgeCount) { %>
                                <c:set var="firstComponentFound" value="false"/>
                                <c:forEach items="${area.mask}" var="box" varStatus="boxRowCounter">
                                    <c:if test="${!empty box.externalJSP && !firstComponentFound}"> 
                                        <%  
                                        if(mapInfo!=null && !mapInfo.isEmpty()) {
																		
                                                for(String key : mapInfo.keySet()) {
                                        %>
                                        <c:set var="key"><%= key %></c:set>
                                        <c:if test="${box.externalJSP eq key && !firstComponentFound}">
                                            <%									    
                                                    ComponentInfoDTO iii = (ComponentInfoDTO)(mapInfo.get(key));
                                            %>
                                            <%								        
                                                            if(iii.getTotal()>0) {
                                            %>
                                        <span class="badge badge-primary badge-pill"><%= iii.getTotal() %></span>
                                        <c:set var="firstComponentFound" value="true"/>
                                        <% 		
										} %>
                                    </c:if>		
                                    <%
                                                }
                                        }
                                    %>
                                </c:if>
                            </c:forEach>
                            <% } %>
                        </a>

                    </c:when>
                    <c:otherwise>
                        <a href="${tablink}">
                            <c:if test="${!empty area.ext}">
                                <img style="width: 16px;vertical-align: middle;" border="0"
                                     src="<%=request.getContextPath()%>/cris/researchertabimage/${area.id}"
                                     alt="icon" />
                            </c:if>	
                            <spring:message code="${entity.class.simpleName}.tab.${area.shortName}.label" text="${area.title}"></spring:message>
                                <% if(showBadgeCount) { %>
                                <c:set var="firstComponentFound" value="false"/>
                                <c:forEach items="${area.mask}" var="box" varStatus="boxRowCounter">
                                    <c:if test="${!empty box.externalJSP && !firstComponentFound}"> 
                                        <%  
                                        if(mapInfo!=null && !mapInfo.isEmpty()) {
																		
                                                for(String key : mapInfo.keySet()) {
                                        %>
                                        <c:set var="key"><%= key %></c:set>
                                        <c:if test="${box.externalJSP eq key && !firstComponentFound}">
                                            <%									    
                                                    ComponentInfoDTO iii = (ComponentInfoDTO)(mapInfo.get(key));
                                            %>
                                            <%								        
                                                            if(iii.getTotal()>0) {
                                            %>
                                        <span class="badge badge-primary badge-pill"><%= iii.getTotal() %></span>
                                        <c:set var="firstComponentFound" value="true"/>
                                        <% 		
										} %>
                                    </c:if>		
                                    <%
                                                }
                                        }
                                    %>
                                </c:if>
                            </c:forEach>
                            <% } %>
                        </a>
                    </c:otherwise>
                </c:choose></li>

        </c:forEach>
    </ul>


    <div class="form-group pull-right extend__profile__menu" style="width: 100%;">
        <c:if test="${(researcher_page_menu || canEdit) && !empty researcher}">
            <div class="extend__profile__menu mb-3">
                <% if(networkModuleEnabled) { %>
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left"
                   href="<%= request.getContextPath() %>/cris/network/${researcher.crisID}">
                    <i class="fa fa-globe"></i>
                    <fmt:message key="jsp.cris.detail.link.network" />
                </a>
                <% } %>
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left"
                   href="<%= request.getContextPath() %>/cris/stats/rp.html?id=${researcher.uuid}">
                    <i class="fa fa-bar-chart-o"></i>
                    <fmt:message key="jsp.cris.detail.link.statistics" />
                </a>
                <c:choose>
                    <c:when test="${!subscribed}">
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" 
                           href="<%= request.getContextPath() %>/cris/tools/subscription/subscribe?uuid=${researcher.uuid}">
                            <i class="fa fa-bell"></i>
                            <fmt:message key="jsp.cris.detail.link.email.alert" />
                        </a>
                    </c:when>
                    <c:otherwise>
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" 
                           href="<%= request.getContextPath() %>/cris/tools/subscription/unsubscribe?uuid=${researcher.uuid}">
                            <i class="fa fa-stop"></i>
                            <fmt:message key="jsp.cris.detail.link.email.alert.remove" />
                        </a>
                    </c:otherwise>
                </c:choose>
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" 
                   href="<%= request.getContextPath() %>/open-search?query=author_authority:${authority}&amp;format=rss">
                    <i class="fa fa-rss"></i>
                    <fmt:message key="jsp.cris.detail.link.rssfeed" />
                </a>
            </div>

            <div class="btn-group">
                <c:if test="${!empty addModeType && addModeType=='display'}">
                    <a class="btn btn-default" href="<%= request.getContextPath() %>/cris/tools/rp/editDynamicData.htm?id=${researcher.id}&anagraficaId=${researcher.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-edit"></i> Edit Page</a>
                </c:if>
                <button style="width: 110px;text-align: left;" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-cog"></i> select
                </button>
                <ul class="dropdown-menu" role="menu">
                    <c:if test="${!empty addModeType && addModeType=='display'}">
                        <li>
                            <a href="<%= request.getContextPath() %>/cris/tools/rp/editDynamicData.htm?id=${researcher.id}&anagraficaId=${researcher.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.edit.primary-data"/></a>
                            </li>
                        <c:if test="${researcher_page_menu && !empty researcher}">
                            <li>
                                <a href="${root}/cris/uuid/${researcher.uuid}/relMgmt/publications"><i class="fa fa-book"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.manage-publication"/></a>								
                            </li>
                            <li>
                                <a href="${root}/cris/uuid/${researcher.uuid}/relMgmt/projects"><i class="fa fa-book"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.manage-project"/></a>								
                            </li>							
                        </c:if>
                    </c:if>
                    <c:if test="${admin}">				
                        <li>
                            <a href="${root}/cris/tools/rp/rebindItemsToRP.htm?id=${researcher.id}"><i class="fa fa-search"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.bind.items"/></a>
                        </li>
                    </c:if>
                    <li>
                        <a href="${root}/cris/tools/rp/rebindItemsToRP.htm?id=${researcher.id}&operation=list"><i class="fa fa-search"></i> <fmt:message key="jsp.authority-claim.choice.list.items"/></a>
                    </li>							
                </ul>
            </div> 

            <%-- 					<div class="btn-group">
                                                            <a class="btn btn-default" href="${root}/cris/uuid/${researcher.uuid}/relMgmt/publications"><i class="fa fa-book"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.manage-publication"/></a>
                                                    </div> --%>
        </c:if>

        <c:if test="${(ou_page_menu || canEdit) && !empty ou}">

            <div class="extend__profile__menu mb-3">
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left"
                   href="<%= request.getContextPath() %>/cris/stats/ou.html?id=${entity.uuid}"><i class="fa fa-bar-chart-o"></i> <fmt:message key="jsp.cris.detail.link.statistics" /></a>
                <c:choose>
                    <c:when test="${!subscribed}">
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/cris/tools/subscription/subscribe?uuid=${entity.uuid}"><i class="fa fa-bell"></i> <fmt:message key="jsp.cris.detail.link.email.alert" /></a>
                    </c:when>
                    <c:otherwise>
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/cris/tools/subscription/unsubscribe?uuid=${entity.uuid}"><i class="fa fa-bell-o"></i> <fmt:message key="jsp.cris.detail.link.email.alert.remove" /></a>
                    </c:otherwise>      
                </c:choose>
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/open-search?query=dc.relation_authority:${authority}&amp;format=rss"><i class="fa fa-rss"></i> <fmt:message key="jsp.cris.detail.link.rssfeed" /></a>            
            </div>

            <c:if test="${!empty addModeType && addModeType=='display'}"> 	
                <div class="btn-group">
                    <a class="btn btn-default" href="<%= request.getContextPath() %>/cris/tools/ou/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> Edit Page</a>
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-cog"></i> select
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="<%= request.getContextPath() %>/cris/tools/ou/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.edit.primary-data"/></a>
                            </li>
                        </ul>
                    </div>
            </c:if>

        </c:if>

        <c:if test="${(grant_page_menu || canEdit) && !empty project}"> 

            <div class="extend__profile__menu mb-3">
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left"
                   href="<%= request.getContextPath() %>/cris/stats/pj.html?id=${entity.uuid}"><i class="fa fa-bar-chart-o"></i> <fmt:message key="jsp.cris.detail.link.statistics" /> </a>
                <c:choose>
                    <c:when test="${!subscribed}">
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/cris/tools/subscription/subscribe?uuid=${entity.uuid}"><i class="fa fa-bell"></i> <fmt:message key="jsp.cris.detail.link.email.alert" /></a>
                    </c:when>
                    <c:otherwise>
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/cris/tools/subscription/unsubscribe?uuid=${entity.uuid}"><i class="fa fa-bell-o"></i> <fmt:message key="jsp.cris.detail.link.email.alert.remove" /></a>
                    </c:otherwise>      
                </c:choose>
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/open-search?query=dc.relation_authority:${authority}&amp;format=rss"><i class="fa fa-rss"></i> <fmt:message key="jsp.cris.detail.link.rssfeed" /></a>
            </div>

            <c:if test="${!empty addModeType && addModeType=='display'}">
                <div class="btn-group">
                    <a class="btn btn-default" href="<%= request.getContextPath() %>/cris/tools/project/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.edit.project"/></a>
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-cog"></i> select
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="<%= request.getContextPath() %>/cris/tools/project/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.edit.project"/></a>
                            </li>
                        </ul>
                    </div>
            </c:if>
        </c:if>

        <c:if test="${(do_page_menu || canEdit) && empty researcher && empty ou && empty project}"> 

            <div class="extend__profile__menu mb-3">
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left"
                   href="<%= request.getContextPath() %>/cris/stats/do.html?id=${entity.uuid}"><i class="fa fa-bar-chart-o"></i> <fmt:message key="jsp.cris.detail.link.statistics" /></a>
                <c:choose>
                    <c:when test="${!subscribed}">
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/cris/tools/subscription/subscribe?uuid=${entity.uuid}"><i class="fa fa-bell"></i> <fmt:message key="jsp.cris.detail.link.email.alert" /></a>
                    </c:when>
                    <c:otherwise>
                        <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/cris/tools/subscription/unsubscribe?uuid=${entity.uuid}"><i class="fa fa-bell-o"></i> <fmt:message key="jsp.cris.detail.link.email.alert.remove" /></a>
                    </c:otherwise>      
                </c:choose>
                <a class="btn btn-tooltip btn-default btn-sm btn--block mt-2 text-left" href="<%= request.getContextPath() %>/open-search?query=dc.relation.ispartof_authority:${authority}&amp;format=rss"><i class="fa fa-rss"></i> <fmt:message key="jsp.cris.detail.link.rssfeed" /></a>
            </div>

            <c:if test="${!empty addModeType && addModeType=='display'}">
                <div class="btn-group">
                    <a class="btn btn-default" href="<%= request.getContextPath() %>/cris/tools/${specificPartPath}/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> Edit page</a>
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-cog"></i> select
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="<%= request.getContextPath() %>/cris/tools/${specificPartPath}/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.edit.do"><fmt:param>${entity.typo.label}</fmt:param></fmt:message></a>
                            </li>
                        </ul>
                    </div>
            </c:if>
        </c:if>
        
        <c:if test="${claim && !researcher_page_menu && empty researcher.epersonID && !userHasRP}" >
            <div class="btn-group">				
                <c:choose>				
                    <c:when test="${selfClaimRP}">
                        <span id="self-claim-rp" class="btn btn-primary"><i class="fa fa-user"></i>&nbsp;<fmt:message key="jsp.cris.detail.info.claimrp"/></span>
                    </c:when>
                    <c:when test="${!selfClaimRP && (empty researcher.email.value && empty anagraficaObject.anagrafica4view['orcid'])}">
                        <a class="btn btn-primary" href="<%= request.getContextPath() %>/feedback?claimProfile=${researcher.crisID}"><i class="fa fa-user"></i>&nbsp;<fmt:message key="jsp.cris.detail.info.claimrp"/></a>
                    </c:when>
                    <c:when test="${!selfClaimRP && isLoggedIn && empty anagraficaObject.anagrafica4view['orcid']}">
                        <a class="btn btn-primary" href="<%= request.getContextPath() %>/feedback?claimProfile=${researcher.crisID}"><i class="fa fa-user"></i>&nbsp;<fmt:message key="jsp.cris.detail.info.claimrp"/></a>
                    </c:when>										
                    <c:otherwise>
                        <span id="claim-rp" class="btn btn-primary"><i class="fa fa-user"></i>&nbsp;<fmt:message key="jsp.cris.detail.info.claimrp"/></span>							
                    </c:otherwise>
                </c:choose>
            </div>
        </c:if>
    </div>

</div>


<c:forEach items="${tabList}" var="areaIter" varStatus="rowCounter">
    <c:if test="${areaIter.id == tabId}">
        <c:set var="area" scope="request" value="${areaIter}"></c:set>
        <jsp:include page="singleTabDetailsPage.jsp"></jsp:include>
    </c:if>

</c:forEach>
<div class="clearfix">&nbsp;</div>