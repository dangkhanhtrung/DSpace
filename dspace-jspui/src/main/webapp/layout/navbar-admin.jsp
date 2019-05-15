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
"><img src="/jspui/static/custom/images/logo.png" alt="logo"><span class="d-none d-sm-block ml-3">Cơ sở dữ liệu tích hợp Thông tin<br> Khoa học và Công nghệ</span></a> <button type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary"
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
                        Content  <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_admin">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/edit-communities">Communities & Collections</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/edit-item">Items</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/duplicate">Deduplication</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/workflow">Workflow</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/supervise">Supervisors</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/curate">Curation Tasks</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/withdrawn">Withdrawn Items</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/privateitems">Private Items</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/metadataimport">Import metadata</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/batchimport">Batch import</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/authority">Authority Management</a>

                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<%= request.getContextPath()%>/cris/administrator/index.htm">CRIS Module </a>
                </li>
				
				<li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1_access" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Access Control  <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_access">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/edit-epeople">E-people</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/group-edit">Groups</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/tools/authorize">Authorization</a>

                    </div>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1_statistics " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Statistics  <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_statistics">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/cris/stats/site.html?handle=123456789/0">Site Statistics</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/loginstats">Login Statistics</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/workflowstats">Workflow Statistics</a>

                    </div>
                </li>
                
                 <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbar-primary_dropdown_1_general " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        General Settings <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1_general">

                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/metadata-schema-registry">Metadata Registry</a>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/format-registry">Bitstream Format Registry</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/news-edit">Edit News</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="<%= request.getContextPath()%>/dspace-admin/license-edit">Edit Default License</a>

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