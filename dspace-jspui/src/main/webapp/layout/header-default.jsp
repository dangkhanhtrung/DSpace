<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - HTML header for main home page
--%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ page import="java.util.List"%>
<%@ page import="java.util.Locale"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="org.dspace.app.webui.util.JSPManager" %>
<%@ page import="org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.core.I18nUtil" %>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@ page import="org.dspace.app.util.Util" %>
<%@ page import="org.dspace.app.webui.util.LocaleUIHelper" %>
<%@ page import="javax.servlet.jsp.jstl.core.*" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.*" %>
<%@ page import="org.apache.commons.lang.StringUtils"%>

<%
    String title = (String) request.getAttribute("dspace.layout.title");
    String navbar = (String) request.getAttribute("dspace.layout.navbar");
    boolean locbar = ((Boolean) request.getAttribute("dspace.layout.locbar")).booleanValue();

    String siteName = ConfigurationManager.getProperty("dspace.name");
    String feedRef = (String) request.getAttribute("dspace.layout.feedref");
    boolean osLink = ConfigurationManager.getBooleanProperty("websvc.opensearch.autolink");
    String osCtx = ConfigurationManager.getProperty("websvc.opensearch.svccontext");
    String osName = ConfigurationManager.getProperty("websvc.opensearch.shortname");
    List parts = (List) request.getAttribute("dspace.layout.linkparts");
    String extraHeadData = (String) request.getAttribute("dspace.layout.head");
    String extraHeadDataLast = (String) request.getAttribute("dspace.layout.head.last");
    String dsVersion = Util.getSourceVersion();
    String generator = dsVersion == null ? "DSpace" : "DSpace " + dsVersion;
    String analyticsKey = ConfigurationManager.getProperty("jspui.google.analytics.key");

    boolean cookiesPolicyEnabled = ConfigurationManager.getBooleanProperty("cookies.policy.enabled", false);

    // get the locale languages
    Locale[] supportedLocales = I18nUtil.getSupportedLocales();
    Locale sessionLocale = UIUtil.getSessionLocale(request);
    boolean isRtl = StringUtils.isNotBlank(LocaleUIHelper.ifLtr(request, "", "rtl"));
    String resourceSyncBaseURL = ConfigurationManager.getProperty("resourcesync", "base-url");
    String sidebar = (String) request.getAttribute("dspace.layout.sidebar");
%>

<!DOCTYPE html>
<html>
    <head>
        <title><%= title%> | <%= siteName%></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="Generator" content="<%= generator%>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">		
        <link rel="resourcesync sitemap" href="<%= resourceSyncBaseURL%>/resourcesync.xml" type="application/xml"/>
        <link rel="shortcut icon" href="<%= request.getContextPath()%>/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="<%= request.getContextPath()%>/static/css/argon.min.css" type="text/css" />
        <link href="<%= request.getContextPath()%>/static/css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link src="<%= request.getContextPath()%>/static/vendor/nucleo/css/nucleo.css" rel="stylesheet">

        <style>
            body .navbar {
                width: 100%;
            }
            body .navbar-brand {
                text-transform: unset;
            }
            body .panel__discovery {
                margin: .5rem 0 !important;
                border-top: 4px solid #1565C0;
            }
            body .panel__discovery > div {
                border: 1px solid #dde2e6;
                border-top: 0;
            }
            body .panel__discovery .list-group-item {
                border: none;
            }
            body .panel__discovery .badge {
                text-transform: uppercase;
                position: absolute;
                right: 6px;
                background: #1565c0;
                color: #fff;
                border-radius: 10px;
                min-width: 28px;
                top: 3px;
                font-weight: 100;
                font-size: 10px;
                height: 20px;
                padding: 5px;
            }
            body .panel__discovery .list-group-item {
                padding: 0.3rem .4rem;
            }
            body .panel__discovery .list-group-item i {
                font-size: 6px;
                color: #C62828;
                position: absolute;
                left: 12px;
                margin-top: 7px;
            }
            body .panel__discovery .list-group-item a {
                display: block;
                margin-left: 5px;
                max-width: 150px;
                font-size: 14px;
                color: #162b4d;
            }
            body .panel__discovery .panel-heading {
                padding: .8rem 0 0;
            }
            body .panel__discovery .panel-heading > h6 > i {
                margin-right: 10px;
                font-weight: bold;
            }
            body .panel__discovery .panel-heading > h6 {
                margin-bottom: 2px;
                font-weight: bold;
                color: #1565c0;
                    padding: 0 10px;
            }
            body .panel__discovery .list-group-item.active {
                background-color: unset;
            }
            body .panel__discovery .panel__discovery__next {
                    position: absolute;
                    top: 5px;
                    right: 8px;
            }
        </style>

        <script type='text/javascript' src="<%= request.getContextPath()%>/static/js/jquery/jquery-1.11.3.min.js"></script>
        <script type='text/javascript' src='<%= request.getContextPath()%>/static/js/jquery/jquery-ui-1.11.4.min.js'></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/moment.js"></script>
        <script type='text/javascript' src='<%= request.getContextPath()%>/static/js/bootstrap/bootstrap.min.js'></script>
        <script type='text/javascript' src='<%= request.getContextPath()%>/static/js/holder.js'></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/utils.js"></script>
        <script type='text/javascript' src='<%= request.getContextPath()%>/static/js/custom-functions.js'></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/choice-support.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/jdyna/jdyna.js"></script>    
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/dataTables.bootstrap.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/dataTables.buttons.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/buttons.bootstrap.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/buttons.html5.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/dataTables.responsive.min.js"></script>	
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/bootstrap-datetimepicker.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/dataTables.select.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/js/jszip.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/popper/popper.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/bootstrap/bootstrap.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/headroom/headroom.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/vue.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/argon.min.js"></script>
        <script type='text/javascript'>
            var j = jQuery.noConflict();
            var $ = jQuery.noConflict();
            var JQ = j;
            dspaceContextPath = "<%=request.getContextPath()%>";
            jQuery(document).ready(function ($) {
                $('span[data-toggle="tooltip"]').tooltip();
                $('i[data-toggle="tooltip"]').tooltip();
            });
        </script>
        <% if (StringUtils.isNotBlank(LocaleUIHelper.ifLtr(request, "", "rtl"))) { %>
        <script type="text/javascript">
            jQuery(document).ready(function () {
                var sxLayout = jQuery('#sx-layout');
                var dxLayout = jQuery('#dx-layout');
                var sxLayoutContent = sxLayout.html();
                var dxLayoutContent = "";
                jQuery('.badge').css('float', 'none');
                jQuery.each(jQuery('.badge'), function (index, value) {
                    jQuery(value).appendTo(jQuery(value).parent());
                });
                if (dxLayout.size() == 0) {
                    sxLayout.insertAfter(jQuery('#central-layout'));
                    sxLayout.addClass('hidden-xs');
                    sxLayout.children('.list-group').css('margin-right', '-50px');
                }
                else {
                    dxLayoutContent = dxLayout.html();
                    sxLayout.html(dxLayoutContent);
                    dxLayout.html(sxLayoutContent);
                    sxLayout.removeClass('hidden-xs');
                    dxLayout.addClass('hidden-xs');
                    dxLayout.children('.list-group').css('margin-right', '-50px');
                }
            });
        </script>
        <% } %>
        <%--Gooogle Analytics recording.--%>
        <%
            if (analyticsKey != null && analyticsKey.length() > 0) {
        %>
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', '<%= analyticsKey%>']);
            _gaq.push(['_trackPageview']);

            (function () {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        </script>
        <%
            }
            if (extraHeadDataLast != null) {%>
        <%= extraHeadDataLast%>
        <%
            }
        %>


        <!-- HTML5 shiv and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>  
          <script src="<%= request.getContextPath()%>/static/js/html5shiv.js"></script>
          <script src="<%= request.getContextPath()%>/static/js/selectivizr-min.js"></script>
          <script src="<%= request.getContextPath()%>/static/js/respond.min.js"></script>
          <link rel="stylesheet" href="<%= request.getContextPath()%>/static/css/bootstrap/dspace-theme-IElte9.css" type="text/css" />
        <![endif]-->
    </head>

    <%-- HACK: leftmargin, topmargin: for non-CSS compliant Microsoft IE browser --%>
    <%-- HACK: marginwidth, marginheight: for non-CSS compliant Netscape browser --%>
    <body class="undernavigation" dir="<%= LocaleUIHelper.ifLtr(request, "ltr", "rtl")%>">
        <div id="app">
            <dspace:include page="<%= navbar%>" />
            <br/>
            <main id="content" role="main">

                <%-- Page contents --%>
                <div class="container fullheight">


                    <% if (request.getAttribute("dspace.layout.sidebar") != null) {%>
                    <div class="row">
                        <%-- Right-hand side bar if appropriate --%>
                        <%
                            if (sidebar != null) {
                        %>
                        <div class="col-md-3">
                            <%= sidebar%>
                        </div>
                        <%
                            }
                        %>
                        <div class="col-md-9 <%= isRtl ? "pull-right" : ""%>">
                            <% }%>		
