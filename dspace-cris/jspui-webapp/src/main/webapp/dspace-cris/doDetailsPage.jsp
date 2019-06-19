<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    https://github.com/CILEA/dspace-cris/wiki/License

--%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display"%>

<%@ page import="org.dspace.app.webui.util.UIUtil" %>

<%@ taglib uri="jdynatags" prefix="dyna"%>
<%@ taglib uri="researchertags" prefix="researcher"%>
<c:set var="root" scope="request"><%=request.getContextPath()%></c:set>
<c:set var="entity" value="${entity}" scope="request" />
<c:choose>
    <c:when test="${param.onlytab}">
        <c:forEach items="${tabList}" var="areaIter" varStatus="rowCounter">
            <c:if test="${areaIter.id == tabId}">	
                <c:set var="area" scope="request" value="${areaIter}"></c:set>
                <c:set var="currTabIdx" scope="request" value="${rowCounter.count}" />
                <jsp:include page="singleTabDetailsPage.jsp"></jsp:include>
            </c:if>
        </c:forEach>
    </c:when>
    <c:otherwise>
        <c:forEach items="${tabList}" var="areaIter" varStatus="rowCounter">
            <c:if test="${areaIter.id == tabId}">
                <c:set var="currTabIdx" scope="request" value="${rowCounter.count}" />
            </c:if>
        </c:forEach>
        <%
                // Is the logged in user an admin
                Boolean admin = (Boolean)request.getAttribute("isAdmin");
                boolean isAdmin = (admin == null ? false : admin.booleanValue());

                // Can the logged in user edit
                Boolean bEdit = (Boolean)request.getAttribute("canEdit");
                boolean canEdit = (bEdit == null ? false : bEdit.booleanValue());

            // Get the current page, minus query string
            String currentPage = UIUtil.getOriginalURL(request);
            int c = currentPage.indexOf( '?' );
            if( c > -1 )
            {
                currentPage = currentPage.substring( 0, c );
            }

        %>
        <c:set var="admin" scope="request"><%= isAdmin %></c:set>

        <c:set var="dspace.layout.head.last" scope="request">

        </c:set>

        <dspace:layout title="${entity.typo.label} ${entity.name}">

            <div id="content" class="detail_view">
                <div class="row">
                    <div class="col-lg-12" style="display: flex;">
                        <a href="javascript:;" onclick="window.history.go(-1); return false;" style="
                        	width: 105px !important;
                        	min-width: 105px !important;
						    font-size: 14px;
						    border: 1px solid;
						    padding: 3px 15px 5px 10px;
						    border-radius: 4px;
						    margin-right: 5px !important;
						    height: 28px;
						    margin-top: 4px;
						"><i class="fa fa-chevron-left mr-2"></i> Quay lại</a>
                            <h1><fmt:message key="jsp.layout.ou.detail.name" /> 
                            ${entity.typo.label}
                            </h1>
                    </div>
                </div>
                    <hr/>
                <c:if test="${!entity.status}">
                    <div class="warning">
                        <fmt:message key="jsp.layout.hku.detail.do-disabled" />
                        <a 
                            href="<%= request.getContextPath() %>/cris/tools/${specificPartPath}/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>">
                            <fmt:message key="jsp.layout.hku.detail.do-disabled.fixit" />
                        </a>
                    </div>
                </c:if>

                <c:if test="${not empty messages}">
                    <div class="message" id="successMessages"><c:forEach var="msg"
                               items="${messages}">
                            <div id="authority-message">${msg}</div>
                        </c:forEach></div>
                        <c:remove var="messages" scope="session" />
                    </c:if>					
                <div id="researcher" class="row">
                    <jsp:include page="commonDetailsPage.jsp"></jsp:include>
                    </div>

                </div>
            </dspace:layout>
    </c:otherwise>
</c:choose>


<script type="text/javascript"><!--
    	var j = jQuery;	
    	
    	var activeTab = function(){
    		
    		var ajaxurlrelations = "<%=request.getContextPath()%>/cris/${specificPartPath}/viewNested.htm";
			j('.nestedinfo').each(function(){
				var id = j(this).html();
				j.ajax( {
					url : ajaxurlrelations,
					data : {																			
						"parentID" : ${entity.id},
						"typeNestedID" : id,
						"pageCurrent": j('#nested_'+id+"_pageCurrent").html(),
						"limit": j('#nested_'+id+"_limit").html(),
						"editmode": j('#nested_'+id+"_editmode").html(),
						"totalHit": j('#nested_'+id+"_totalHit").html(),
							"admin": true,
						"externalJSP": j('#nested_'+id+"_externalJSP").html()
					},
					success : function(data) {																										
						j('#viewnested_'+id).html(data);
						var ajaxFunction = function(page){
							j.ajax( {
								url : ajaxurlrelations,
								data : {																			
									"parentID" : ${entity.id},
									"typeNestedID" : id,													
									"pageCurrent": page,
									"limit": j('#nested_'+id+"_limit").html(),
									"editmode": j('#nested_'+id+"_editmode").html(),
									"totalHit": j('#nested_'+id+"_totalHit").html(),
								"admin": true,
									"externalJSP": j('#nested_'+id+"_externalJSP").html()
								},
								success : function(data) {									
									j('#viewnested_'+id).html(data);
									postfunction();
								},
								error : function(data) {
								}
							});		
						};
						var postfunction = function(){
							j('#nested_'+id+'_next').click(
									function() {
								    	ajaxFunction(parseInt(j('#nested_'+id+"_pageCurrent").html())+1);
										
							});
							j('#nested_'+id+'_prev').click(
									function() {
										ajaxFunction(parseInt(j('#nested_'+id+"_pageCurrent").html())-1);
							});
							j('.nested_'+id+'_nextprev').click(
									function(){
										ajaxFunction(j(this).attr('id').substr(('nested_'+id+'_nextprev_').length));
							});
						};
						postfunction();
					},
					error : function(data) {
					}
				});
			});
    	};
    	
		j(document).ready(function(){
			
			activeTab();
		});
		-->
	</script>