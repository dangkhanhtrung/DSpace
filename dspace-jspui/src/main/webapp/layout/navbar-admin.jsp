<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - Navigation bar for admin pages
  --%>

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ page import="java.util.LinkedList" %>
<%@ page import="java.util.List" %>

<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>

<%@ page import="org.dspace.browse.BrowseInfo" %>
<%@ page import="org.dspace.sort.SortOption" %>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@ page import="org.dspace.eperson.EPerson" %>
<%@ page import="org.apache.commons.lang.StringUtils"%>
<%@ page import="org.dspace.core.ConfigurationManager"%>
<%@ page import="org.dspace.app.cris.model.CrisConstants"%>

<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vuetify/1.5.16/vuetify.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/vuetify/1.5.16/vuetify.min.css" rel="stylesheet">
<link rel="stylesheet" href="<%= request.getContextPath()%>/static/css/argon.min.css" type="text/css" />
<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
<%
	// Is anyone logged in?
	EPerson user = (EPerson) request.getAttribute("dspace.current.user");

    // Get the current page, minus query string
    String currentPage = UIUtil.getOriginalURL(request);    
    int c = currentPage.indexOf( '?' );
    if( c > -1 )
    {
        currentPage = currentPage.substring(0, c);
    }

    boolean crisModuleEnabled = ConfigurationManager.getBooleanProperty(CrisConstants.CFG_MODULE,"enabled");
    String handlePrefix = ConfigurationManager.getProperty("handle.prefix");
    
    boolean mintDoiToolEnabled = ConfigurationManager.getBooleanProperty("doi.admin.feature");
    
    // E-mail may have to be truncated
    String navbarEmail = null;
    if (user != null)
    {
        navbarEmail = user.getEmail();
    }

	boolean statsCleanerEnabled = ConfigurationManager.getBooleanProperty("usage-statistics","webui.statistics.showCleaner");
    

%>

<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container py-2 px-0" style="height: 61px;border-bottom: 1px solid lightgray;"><a href="/jspui" class="navbar-brand" style="
    display: flex;text-transform: uppercase;
"><img src="/jspui/static/custom/images/logo.png" alt="logo"><span class="d-sm-block ml-3 mt-1">Cơ sở dữ liệu tích hợp <br> Thông tin khoa học và Công nghệ</span></a> <button type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary"
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
  <ul class="navbar-nav">

            	<li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1_admin" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Nội dung  <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_admin">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/edit-communities">Đơn vị và bộ sưu tập</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/edit-item">Công bố</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/duplicate">Loại bỏ trùng lặp</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/workflow">Quy trình làm việc</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/supervise">Supervisors</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/curate">Curation Tasks</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/withdrawn">Withdrawn Items</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/privateitems">Ẩn công bố</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/metadataimport">Nhập cấu trúc siêu dữ liệu</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/batchimport">Nhập dữ liệu công bố</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/authority">Authority Management</a>

                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<%= request.getContextPath()%>/cris/administrator/index.htm">Quản trị đối tượng </a>
                </li>
				
				<li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1_access" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Quản lý truy cập  <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_access">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/edit-epeople">Người dùng</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/group-edit">Nhóm người dùng</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/authorize">Phân quyền</a>

                    </div>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1_statistics " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Thống kê  <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_statistics">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/cris/stats/site.html?handle=123456789/0">Thống kê trang Web</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/loginstats">Thống kê truy cập</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/workflowstats">Thống kê quy trình làm việc</a>

                    </div>
                </li>
                
                 <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1_general " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cài đặt <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_general">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/metadata-schema-registry">Khai báo siêu dữ liệu</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/format-registry">Khai báo định dạng dữ liệu</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/news-edit">Sửa tin tức</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/license-edit">Sửa giấy phép mặc định</a>

                    </div>
                </li>
                
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
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin"><fmt:message key="jsp.administer"/></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/logout">Đăng xuất</a>
                    </div>
                </li>

                <%
                }
                %>
            </ul>
    </div>
  </div>
</nav>