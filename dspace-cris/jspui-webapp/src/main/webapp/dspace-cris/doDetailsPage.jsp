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

<div id="content">
<div class="row">
	<div class="col-lg-12">
		<div class="form-inline">
	         <div class="form-group">
				 <h1><fmt:message key="jsp.layout.do.detail.name" /> ${entity.name}</h1>
			      <%
			      if (isAdmin) {
				  %>		
				  <fmt:message key="jsp.cris.detail.info.sourceid.none" var="i18nnone" />
				  <div class="cris-record-info">
					<span class="cris-record-info-sourceid"><b><fmt:message key="jsp.cris.detail.info.sourceid" /></b> ${!empty entity.sourceID?entity.sourceID:i18nnone}</span>
					<span class="cris-record-info-sourceref"><b><fmt:message key="jsp.cris.detail.info.sourceref" /></b> ${!empty entity.sourceRef?entity.sourceRef:i18nnone}</span>
					<span class="cris-record-info-created"><b><fmt:message key="jsp.cris.detail.info.created" /></b> ${entity.timeStampInfo.timestampCreated.timestamp}</span>
					<span class="cris-record-info-updated"><b><fmt:message key="jsp.cris.detail.info.updated" /></b> ${entity.timeStampInfo.timestampLastModified.timestamp}</span>
				  </div>	
				  <%
    			  }
				  %>	
			</div>
		 	<div class="form-group pull-right" style="margin-top:1.5em;">
				<div class="btn-group">
					<a class="btn btn-default" href="<%= request.getContextPath() %>/cris/stats/do.html?id=${entity.uuid}"><i class="fa fa-bar-chart-o"></i> <fmt:message key="jsp.cris.detail.link.statistics" /></a>
					<c:choose>
	       					<c:when test="${!subscribed}">
	               				<a class="btn btn-default" href="<%= request.getContextPath() %>/cris/tools/subscription/subscribe?uuid=${entity.uuid}"><i class="fa fa-bell"></i> <fmt:message key="jsp.cris.detail.link.email.alert" /></a>
	       					</c:when>
	       					<c:otherwise>
	               				<a class="btn btn-default" href="<%= request.getContextPath() %>/cris/tools/subscription/unsubscribe?uuid=${entity.uuid}"><i class="fa fa-bell-o"></i> <fmt:message key="jsp.cris.detail.link.email.alert.remove" /></a>
	       					</c:otherwise>      
					</c:choose>			
					<a class="btn btn-default" href="<%= request.getContextPath() %>/open-search?query=dc.relation.ispartof_authority:${authority}&amp;format=rss"><i class="fa fa-rss"></i> <fmt:message key="jsp.cris.detail.link.rssfeed" /></a>
				</div>
				<c:if test="${(do_page_menu || canEdit) && !empty entity}"> 		
					<c:if test="${!empty addModeType && addModeType=='display'}">
					<div class="btn-group">
	      				<a class="btn btn-default" href="<%= request.getContextPath() %>/cris/tools/${specificPartPath}/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.edit.do"><fmt:param>${entity.typo.label}</fmt:param></fmt:message></a>
		  				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			    			<i class="fa fa-cog"></i> <i class="fa fa-caret-down"></i>
			  			</button>
			  			<ul class="dropdown-menu" role="menu">
						    <li>
									<a href="<%= request.getContextPath() %>/cris/tools/${specificPartPath}/editDynamicData.htm?id=${entity.id}&anagraficaId=${entity.dynamicField.id}<c:if test='${!empty tabIdForRedirect}'>&tabId=${tabIdForRedirect}</c:if>"><i class="fa fa-pencil-square-o"></i> <fmt:message key="jsp.layout.navbar-hku.staff-mode.edit.do"><fmt:param>${entity.typo.label}</fmt:param></fmt:message></a>
							</li>
						</ul>
		  			</div>
			  		</c:if>
 				</c:if> 			
			</div>
	   </div>
    </div>
</div>
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
