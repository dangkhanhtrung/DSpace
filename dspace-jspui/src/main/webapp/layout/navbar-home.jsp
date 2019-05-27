<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - Default navigation bar
--%>

<%@page import="org.dspace.discovery.DiscoverResult"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="org.dspace.discovery.DiscoverResult.FacetResult"%>
<%@page
	import="org.dspace.discovery.configuration.DiscoverySearchFilterFacet"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ page contentType="text/html;charset=UTF-8"%>

<%@ taglib uri="/WEB-INF/dspace-tags.tld" prefix="dspace"%>

<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ page import="org.dspace.app.webui.util.UIUtil"%>
<%@ page import="org.dspace.content.Collection"%>
<%@ page import="org.dspace.content.Community"%>
<%@ page import="org.dspace.eperson.EPerson"%>
<%@ page import="org.dspace.core.ConfigurationManager"%>
<%@ page import="org.dspace.browse.BrowseIndex"%>
<%@ page import="org.dspace.browse.BrowseInfo"%>
<%@ page import="java.util.Map"%>
<%
	// Is anyone logged in?
	EPerson user = (EPerson) request.getAttribute("dspace.current.user");

	// Is the logged in user an admin
	Boolean admin = (Boolean) request.getAttribute("is.admin");
	boolean isAdmin = (admin == null ? false : admin.booleanValue());

	// Get the current page, minus query string
	String currentPage = UIUtil.getOriginalURL(request);
	int c = currentPage.indexOf('?');
	if (c > -1) {
		currentPage = currentPage.substring(0, c);
	}

	String[] mlinks = new String[0];
	String mlinksConf = ConfigurationManager.getProperty("cris", "navbar.cris-entities");
	if (StringUtils.isNotBlank(mlinksConf)) {
		mlinks = StringUtils.split(mlinksConf, ",");
	}
%>


<nav class="navbar navbar-expand-lg navbar-light bg-white">
	<div class="container py-2 px-0"
		style="height: 61px; border-bottom: 1px solid lightgray;">
		<a href="/jspui" class="navbar-brand"
			style="display: flex; text-transform: uppercase;"><img
			src="/jspui/static/custom/images/logo.png" alt="logo"><span
			class="d-none d-sm-block ml-3">Cơ sở dữ liệu tích hợp <br>
				Thông tin khoa học và Công nghệ
		</span></a>
		<button type="button" data-toggle="collapse"
			data-target="#navbar-primary" aria-controls="navbar-primary"
			aria-expanded="false" aria-label="Toggle navigation"
			class="navbar-toggler">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="navbar-primary" class="collapse navbar-collapse"
			style="text-align: right; float: right;">
			<div class="navbar-collapse-header">
				<div class="row">
					<div class="col-6 collapse-brand">
						<a href="/jspui"> Trang chủ </a>
					</div>
					<div class="col-6 collapse-close">
						<button type="button" data-toggle="collapse"
							data-target="#navbar-primary" aria-controls="navbar-primary"
							aria-expanded="false" aria-label="Toggle navigation"
							class="navbar-toggler">
							<span></span> <span></span>
						</button>
					</div>
				</div>
			</div>
			<ul class="navbar-nav"
				style="float: right; text-align: right; width: 100%;">
				<li class="nav-item "><a href="<%=request.getContextPath()%>"
					class="nav-link"> Trang chủ </a></li>
				<li class="nav-item "><a
					href="<%=request.getContextPath()%>/page/gioi-thieu.jsp"
					class="nav-link"> Giới thiệu </a></li>
				<li class="nav-item dropdown"><a class="nav-link" href="#"
					id="navbar-primary_dropdown_1_report" role="button"
					data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Báo cáo </a>
					<div class="dropdown-menu dropdown-menu-right"
						aria-labelledby="navbar-primary_dropdown_1_report">

						<a class="dropdown-item"
							href="<%=request.getContextPath()%>/page/report-01.jsp">
							CÔNG BỐ KHOA HỌC VÀ CÔNG NGHỆ </a> <a class="dropdown-item"
							href="<%=request.getContextPath()%>/page/report-02.jsp">
							NHIỆM VỤ KHOA HỌC CÔNG NGHỆ </a> <a class="dropdown-item"
							href="<%=request.getContextPath()%>/page/report-03.jsp"> SỐ
							TỔ CHỨC KHOA HỌC VÀ CÔNG NGHỆ </a> <a class="dropdown-item"
							href="<%=request.getContextPath()%>/page/report-04.jsp"> SỐ
							NGƯỜI TRONG CÁC TỔ CHỨC KHOA HỌC VÀ CÔNG NGHỆ </a>
					</div></li>
				<%
					if (user != null) {
				%>
				<li class="nav-item dropdown"><a class="nav-link" href="#"
					id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown"
					aria-haspopup="true" aria-expanded="false"> <i
						class="fa fa-user" aria-hidden="true"></i>
				</a>
					<div class="dropdown-menu dropdown-menu-right"
						aria-labelledby="navbar-primary_dropdown_1">

						<a class="dropdown-item"
							href="<%=request.getContextPath()%>/mydspace"><fmt:message
								key="jsp.layout.navbar-default.users" /></a> <a
							class="dropdown-item"
							href="<%=request.getContextPath()%>/subscribe"><fmt:message
								key="jsp.layout.navbar-default.receive" /></a> <a
							class="dropdown-item"
							href="<%=request.getContextPath()%>/profile"><fmt:message
								key="jsp.layout.navbar-default.edit" /></a> <a class="dropdown-item"
							href="<%=request.getContextPath()%>/dspace-admin"><fmt:message
								key="jsp.administer" /></a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item"
							href="<%=request.getContextPath()%>/logout">Đăng xuất</a>
					</div></li>

				<%
					} else {
				%>
				<li class="nav-item"><a href="/jspui/mydspace" class="nav-link">Đăng
						nhập</a></li>
				<%
					}
				%>
			</ul>
		</div>
	</div>
</nav>

<nav id="nav__id__expose" class="navbar navbar-expand-lg navbar-dark bg-primary"
	style="margin-top: -1px; height: 42px;">
	<div class="container px-0">
		<button type="button" data-toggle="collapse"
			data-target="navbar-primary-ccx" aria-controls="navbar-primary-ccx"
			aria-label="Toggle navigation" class="navbar-toggler">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="navbar-primary-ccx" class="collapse navbar-collapse">
			<div class="navbar-collapse-header">
				<div class="row">
					<div class="col-6 collapse-brand"></div>
					<div class="col-6 collapse-close">
						<button type="button" data-toggle="collapse"
							data-target="#navbar-primary" aria-controls="navbar-primary"
							aria-label="Toggle navigation" class="navbar-toggler">
							<span></span><span></span>
						</button>
					</div>
				</div>
			</div>
			<ul class="navbar-nav ml-lg-auto">
				<%
					if (StringUtils.isNotBlank(mlinksConf)) {
						mlinks = StringUtils.split(mlinksConf, ",");
					}

					for (String mlink : mlinks) {
						String exploremlink = mlink.trim();
						String fmtkey = "jsp.layout.navbar-default.cris." + mlink.trim();
				%>
				<li class="nav-item" :class='{"active": "<%= exploremlink %>" === "${ location }"}'><a class="nav-link"
					href="<%=request.getContextPath()%>/cris/explore/<%=mlink.trim()%>">
						<fmt:message
							key='<%="jsp.layout.navbar-default.cris." + mlink.trim()%>' />
							
				</a></li>
				<%
					}
				%>
			</ul>
		</div>
	</div>
</nav>
