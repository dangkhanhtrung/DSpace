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

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="/WEB-INF/dspace-tags.tld" prefix="dspace" %>

<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
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
    
    String[] mlinks = new String[0];
    String mlinksConf = ConfigurationManager.getProperty("cris", "navbar.cris-entities");
    if (StringUtils.isNotBlank(mlinksConf)) {
        mlinks = StringUtils.split(mlinksConf, ",");
    }
%>


<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container py-2" style="height: 61px;border-bottom: 1px solid lightgray;"><a href="/jspui" class="navbar-brand" style="
    display: flex;
"><img src="/jspui/static/custom/images/logo.png" alt="logo"><span class="d-none d-sm-block ml-3">Cơ sở dữ liệu thông tin<br> khoa học công nghệ quốc gia</span></a> <button type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary"
      aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
    <div id="navbar-primary" class="collapse navbar-collapse" style="
    text-align: right;
    float: right;
">
      <div class="navbar-collapse-header">
        <div class="row">
          <div class="col-6 collapse-brand"><a href="/jspui">
                            Trang chủ
                        </a></div>
          <div class="col-6 collapse-close"><button type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span></span> <span></span></button></div>
        </div>
      </div>
      <ul class="navbar-nav" style="
    float: right;
    text-align: right;
    width: 100%;
">
        <li class="nav-item "><a href="/jspui" class="nav-link">
                            Trang chủ
                        </a></li>
        <li class="nav-item "><a href="#" class="nav-link">
                            Giới thiệu
                        </a></li>
        <li class="nav-item "><a href="#" class="nav-link">
                            Hỏi đáp
                        </a></li>
        <li class="nav-item "><a href="#" class="nav-link">
                           Liên hệ
                        </a></li>
        <li class="nav-item"><a href="/jspui/mydspace" class="nav-link">Đăng nhập</a></li>
      </ul>
    </div>
  </div>
</nav>