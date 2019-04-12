<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - Default navigation bar
--%>

<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="/WEB-INF/dspace-tags.tld" prefix="dspace" %>

<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
<%@ page import="org.dspace.core.I18nUtil" %>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@ page import="org.dspace.app.webui.util.LocaleUIHelper" %>
<%@ page import="org.dspace.content.Collection" %>
<%@ page import="org.dspace.content.Community" %>
<%@ page import="org.dspace.eperson.EPerson" %>
<%@ page import="org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.browse.BrowseIndex" %>
<%@ page import="org.dspace.browse.BrowseInfo" %>
<%@ page import="java.util.Map" %>
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

    // E-mail may have to be truncated
    String navbarEmail = null;

    if (user != null) {
        navbarEmail = user.getEmail();
    }

    // get the browse indices
    BrowseIndex[] bis = BrowseIndex.getBrowseIndices();
    BrowseInfo binfo = (BrowseInfo) request.getAttribute("browse.info");
    String browseCurrent = "";
    if (binfo != null) {
        BrowseIndex bix = binfo.getBrowseIndex();
        // Only highlight the current browse, only if it is a metadata index,
        // or the selected sort option is the default for the index
        if (bix.isMetadataIndex() || bix.getSortOption() == binfo.getSortOption()) {
            if (bix.getName() != null) {
                browseCurrent = bix.getName();
            }
        }
    }

    String extraNavbarData = (String) request.getAttribute("dspace.cris.navbar");
    // get the locale languages
    Locale[] supportedLocales = I18nUtil.getSupportedLocales();
    Locale sessionLocale = UIUtil.getSessionLocale(request);
    boolean isRtl = StringUtils.isNotBlank(LocaleUIHelper.ifLtr(request, "", "rtl"));

    String[] mlinks = new String[0];
    String mlinksConf = ConfigurationManager.getProperty("cris", "navbar.cris-entities");
    if (StringUtils.isNotBlank(mlinksConf)) {
        mlinks = StringUtils.split(mlinksConf, ",");
    }

    boolean showCommList = ConfigurationManager.getBooleanProperty("community-list.show.all", true);
%>
             
<header class="page-header">
		<div class="container">
			<a href="<%= request.getContextPath()%>" class="mLogo">
				<img src="/jspui/static/custom/images/logo.png" alt="logo">
				<span>Cổng thông tin khai thác dữ liệu<br>khoa học và công nghệ</span>
				<img src="/jspui/static/custom/images/logo_nasati-color.png" alt="logo-nasati">
			</a>
		</div>
	</header>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
        <a class="navbar-brand" href="<%= request.getContextPath()%>">Trang chủ</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-primary">
            <div class="navbar-collapse-header">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="<%= request.getContextPath()%>">
                            Trang chủ
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <ul class="navbar-nav">
                <% for (String mlink : mlinks) { %>
                    <c:set var="exploremlink">
                    <%= mlink.trim() %>
                    </c:set>
                    <c:set var="fmtkey">
                    jsp.layout.navbar-default.cris.<%= mlink.trim() %>
                    </c:set>
                    <li class="nav-item <c:if test="${exploremlink == location}">active</c:if>">
                        <a class="nav-link" href="<%= request.getContextPath() %>/simple-search?query=&location=<%= mlink.trim() %>">
                            <fmt:message key="${fmtkey}"/>
                        </a>
                    </li>
                <% } %>
                <%
                    if (user != null) {
                %>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/mydspace"><fmt:message key="jsp.layout.navbar-default.users"/></a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/subscribe"><fmt:message key="jsp.layout.navbar-default.receive"/></a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/profile"><fmt:message key="jsp.layout.navbar-default.edit"/></a>
                        <%
                            if (isAdmin) {
                        %>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin"><fmt:message key="jsp.administer"/></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/logout">Đăng xuất</a>
                        <% } %>
                    </div>
                </li>

                <%
                } else {
                %>
                <li class="nav-item">
                    <a class="nav-link" href="<%= request.getContextPath()%>/mydspace">Đăng nhập</a>
                </li>
                <%
                    }
                %>

            </ul>
        </div>
    </div>
</nav>
