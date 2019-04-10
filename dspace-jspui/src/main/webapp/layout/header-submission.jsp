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
<%@ page import="java.util.Enumeration"%>
<%@ page import="org.dspace.app.webui.util.JSPManager" %>
<%@ page import="org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.app.util.Util" %>
<%@ page import="javax.servlet.jsp.jstl.core.*" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.*" %>

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
%>

<!DOCTYPE html>
<html>
    <head>
        <title><%= title%> | <%= siteName%></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="Generator" content="<%= generator%>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="<%= request.getContextPath()%>/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="<%= request.getContextPath()%>/static/css/jquery-ui-1.10.3.custom/redmond/jquery-ui-1.10.3.custom.css" type="text/css" />
        <link rel="stylesheet" href="<%= request.getContextPath()%>/static/css/argon.min.css" type="text/css" />
        <link href="<%= request.getContextPath()%>/static/css/font-awesome/css/font-awesome.min.css" rel="stylesheet">

        <style>
            body .navbar {
                width: 100%;
                height: 42px;
                padding: 0 15px;
            }
            body .navbar-brand {
                text-transform: unset;
            }
            body .panel__discovery {
                margin: .5rem 0 !important;
                border-top: 2px solid #1565C0;
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
            body .btn {
                line-height: 14px;
                text-transform: unset;
                padding: .5rem 1rem;
            }
            body .form-control {
                height: 32px;
            }
            body .form-group {
                margin-bottom: .5rem;
            }
            body .input-group-text {
                padding: .5rem .75rem;
            }
            body .btn--block {
                width: 100%;
                display: block;
            }
            body select {
                transition: box-shadow .15s ease;
                border: 0;
                box-shadow: 0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02);
                background: #ffffff;
                height: 32px;

            }
            body .discovery-search-form select {
                width: 100%;
            }
            body .alert-info {
                background-color: transparent !important;
                border: 1px solid #00a5c3 !important;
                color: inherit !important;
            }
            body .discovery-result-pagination select {
                box-shadow: none;
            }
            body .table .thead-light th {
                border-color: #f4f5f7;
                background-color: #f4f5f7;
            }
            body .table th {
                color: #162b4d;
                border-color: #f4f5f7;
                background-color: #f4f5f7;
                position: relative;
                padding: 8px 1rem;
                border: .0625rem solid #dee2e6;

            }
            body .table th > a {
                margin-left: -10px;
                display: block;
                margin-right: 10px;
            }
            body .table td {
                padding: 8px;
                border: .0625rem solid #dee2e6;
            }
            body .table th i.fa-sort {
                position: absolute;
                right: 10px;
                top: 12px;
            }
            body .page-item.active .page-link {
                background: #1565c0;
            }
            body .page-item .page-link, body .page-item  {
                width: 32px;
                height: 32px;
                margin: 0 3px;
            }
            body .page-item .page-link {
                margin: 0;
            }
            body .pagination,
            body .discovery-result-results {
                float: right;
            }
            body .discovery-result-results {
                width: 100%;
            }
            body .card-body {
                box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
                border-radius: 2px;
            }
            body .card-body_3 .card-body {
                background: #00695C;
                border-color: #00695C;
            }
            body .card-body_3 .card-body i {
                color: #00695C;
            }
            body .card-body_2 .card-body {
                background: rgb(38, 198, 218);
                border-color: rgb(38, 198, 218);
            }
            body .card-body_2 .card-body i {
                color: rgb(38, 198, 218);
            }
            body .card-body_1 .card-body {
                background: rgb(56, 95, 115);
                border-color: rgb(56, 95, 115);
            }
            body .card-body_1 .card-body i {
                color: rgb(56, 95, 115);
            }
            body .hidden {
                display: none !important;
            }
            body .popover-body {
                min-height: 34px;
            }
            body .dropdown-menu {
                padding: .5rem .5rem;
            }
            body .discovery-result-results .list-group-item-heading h4 {
                font-size: 16px;
            }
            body .discovery-result-results-global .panel-info {
                border-top: 2px solid #0064c7;
                margin-bottom: 15px;
            }
            body .discovery-result-results-global .panel-info > .panel-heading > span {
                font-size: 1rem;
                font-weight: bold;
                color: #1565c0;
            }
            body .discovery-result-results-global .panel-info > .panel-heading {
                position: relative;
                margin-bottom: 2px;
                padding: 10px 10px;
                border: 1px solid #dce2e6;
            }
            body .discovery-result-results-global .panel-info > .panel-heading .list-item {
                border: none;
            }
            body .discovery-result-results-global .panel-info > .panel-heading .list-item .list-group-item {
                background-color: transparent;
                border: none;
                padding: 10px 0;
                border-bottom: 1px solid #dce2e6;
            }
            body .discovery-result-results-global .panel-info > .panel-heading .list-item .list-group-item:last-child {

                border-bottom: none !important;
            }

            .media-body {
                min-width: 95px;
            }
            .media-heading {
                margin-top: 0;
                margin-bottom: 5px;
                color: #ffffff;
                font-size: 14px;
            }
            .metric-counter {
                font-size: 1.5em;
                font-family: sans-serif;
                font-weight: bolder;
            }
            .media.google, .media.google a {
                color: white;
                background: #4285f4;
            }
            .media {
                padding: 1em;
                border-radius: 0.4em;
            }
            .media, .media-body {
                zoom: 1;
                overflow: hidden;
            }
            .media-body, .media-left, .media-right {
                display: table-cell;
                vertical-align: top;
            }
            .media-left, .media>.pull-left {
                padding-right: 10px;
            }
            .media, .media-body, .media-heading {
                overflow: visible;
            }
            .media-body, .media-left, .media-right {
                display: table-cell;
                vertical-align: top;
            }
            .media-heading {
                margin-top: 0;
                margin-bottom: 5px;
                color: #ffffff;
                font-size: 14px;
            }
            .metric-counter {
                font-size: 1.5em;
                font-family: sans-serif;
                font-weight: bolder;
            }


            .metric-ranking > span {
                display: block;
                height: 1.7em;
                width: 1.7em;
                line-height: 1.7em;
                -moz-border-radius: 0.85em;
                border-radius: 0.85em;
                background-color: #f0ad4e;
                color: white;
                text-align: center;
                font-size: 0.75em;
            }
            .metric-ranking {
                display: block;
                height: 1.7em;
                width: 1.7em;
                padding: 0.2em;
                line-height: 1.7em;
                -moz-border-radius: 0.85em;
                border-radius: 0.85em;
                background-color: white;
                color: white;
                text-align: center;
            }
            .metric-counter {
                font-size: 1.5em;
                font-family: sans-serif;
                font-weight: bolder;
            }
            .media > .media-heading {
                text-transform: uppercase;
            }
            .media > .media-body > .row {
                text-transform: uppercase;
            }

            .media {
                padding: 1em;
                border-radius: 0.4em; 
            }

            .media.download, .media.download_aggregate, .media.download_count,
            .media.download a, .media.download_aggregate a, .media.download_count a {
                color: white;
                background: #c0392b;
            }
            .media.view, .media.view_aggregate, .media.view_count,
            .media.view a, .media.view_aggregate a, .media.view_count a {
                color: white;
                background: #72c02c;
            }
            .media.scopus, .media.scopus_aggregate, .media.scopus_count,
            .media.scopus a, .media.scopus_aggregate a, .media.scopus_count a {
                color: white;
                background: #ff7800;
            }
            .media.pubmed, .media.pubmed_aggregate, .media.pubmed_count,
            .media.pubmed a, .media.pubmed_aggregate a, .media.pubmed_count a {
                color: white;
                background: #141927;
            }
            .media.wos, .media.wos_aggregate, .media.wos_count,
            .media.wos a, .media.wos_aggregate a, .media.wos_count a {
                color: white;
                background: #505050;
            }
            .media.google, .media.google a {
                color: white;
                background: #4285f4;
            }
            .media.altmetric {
                background: white;
                color: #c7254e;
                border: 3px solid #c7254e;
            }
            .media > .media-left > i.fa {
                font-size: 3em;
            }
            body .navbar>.container, body .navbar>.container-fluid {
                height: 42px;
            }
            body .navbar-nav .nav-link {
                padding: 0 15px !important;
            }
            body .btn-default.disabled, body .btn-default:disabled {
                color: inherit;
                border-color: #d4d4d4;
                background-color: #d4d4d4;
            }
            body .custom-radio .custom-control-input~.custom-control-label {
                justify-content: left;
            }
            body .media.dedup {
                background: #C62828;
                margin-bottom: 8px;
                color: #fff;
            }
            body .media.dedup a {
                color: #fff;
            }
            body .itemDisplayTable a {
                border-bottom: 1px dashed;
            }
            body .nav-pills .nav-link {
    padding: .35rem 1rem;
    height: 32px;
}
.my_tabs .panel-group > .panel {
    padding: 5px 15px;
    border-bottom: .0625rem solid rgba(0,0,0,.1);
}
.my_tabs .panel-group > .panel:last-child {
    border-bottom: none;
}

.my_tabs .panel-group > .panel .panel-heading h6 {
    margin: 0;
    padding: 5px 0;
    position: relative;
}
.my_tabs .panel-group > .panel .panel-heading .panel-title i {
        position: absolute;
    right: 15px;
    top: 10px;  
}
        </style>

         <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/popper/popper.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/bootstrap/bootstrap.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/headroom/headroom.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/vue.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/argon.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/axios.min.js"></script>
        <script type="text/javascript" src="<%= request.getContextPath()%>/static/vendor/header-submission/index.js"></script>
        <script type='text/javascript'>
            var j = jQuery.noConflict();
            var $ = jQuery.noConflict();
            var JQ = j;
            dspaceContextPath = "<%=request.getContextPath()%>";
        </script>

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


        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="<%= request.getContextPath()%>/static/js/html5shiv.js"></script>
          <script src="<%= request.getContextPath()%>/static/js/respond.min.js"></script>
        <![endif]-->
    </head>
    <%-- HACK: leftmargin, topmargin: for non-CSS compliant Microsoft IE browser --%>
    <%-- HACK: marginwidth, marginheight: for non-CSS compliant Netscape browser --%>
    <body class="undernavigation">
        <div id="app">
        <dspace:include page="/layout/navbar-minimal.jsp" />
        <br/>

        <main id="content" role="main">

            <%-- Page contents --%>
            <div class="container fullheight">
                <% if (request.getAttribute("dspace.layout.sidebar") != null) { %>
                <div class="row">
                    <div class="col-md-9">
                        <% }%>		