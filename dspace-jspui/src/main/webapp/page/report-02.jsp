<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - Home page JSP
  -
  - Attributes:
  -    communities - Community[] all communities in DSpace
  -    recent.submissions - RecetSubmissions
--%>

<%@page import="org.dspace.discovery.configuration.DiscoveryRecentSubmissionsConfiguration"%>
<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%@ page import="java.io.File" %>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.core.*" %>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>
<%@ page import="org.dspace.core.I18nUtil" %>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@ page import="org.dspace.app.webui.components.RecentSubmissions" %>
<%@ page import="org.dspace.content.Community" %>
<%@ page import="org.dspace.core.ConfigurationManager" %>
<%@ page import="org.dspace.core.NewsManager" %>
<%@ page import="org.dspace.browse.ItemCounter" %>
<%@ page import="org.dspace.content.Metadatum" %>
<%@ page import="org.dspace.content.Item" %>
<%@ page import="org.dspace.discovery.configuration.DiscoveryViewConfiguration" %>
<%@page import="org.dspace.app.webui.components.MostViewedBean"%>
<%@page import="org.dspace.app.webui.components.MostViewedItem"%>
<%@page import="org.dspace.discovery.SearchUtils"%>
<%@page import="org.dspace.discovery.IGlobalSearchResult"%>
<%@page import="org.dspace.core.Utils"%>
<%@page import="org.dspace.content.Bitstream"%>
<%@ page import="org.dspace.app.webui.util.LocaleUIHelper" %>

<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilter" %>

<%@page import="org.dspace.discovery.configuration.DiscoveryConfiguration" %>
<%@page import="org.dspace.discovery.configuration.DiscoverySearchFilterFacet" %>

<%@page import="org.dspace.discovery.DiscoverQuery" %>
<%@page import="org.dspace.app.webui.discovery.DiscoverUtility" %>
<%@page import="org.dspace.discovery.DiscoverResult" %>
<%@page import="org.dspace.core.Context" %>
<%@page import="org.apache.commons.lang.StringUtils"%>


<%@page import="org.dspace.handle.HandleManager"%>
<%@page import="org.dspace.search.DSQuery"%>
<%@page import="org.dspace.search.QueryArgs"%>
<%@page import="org.dspace.search.QueryResults"%>
<%@page import="org.dspace.content.DSpaceObject"%>
<%@page import="org.dspace.core.Constants"%>
<%@page import="org.dspace.authorize.AuthorizeManager"%>
<%@page import="org.dspace.app.webui.search.SearchProcessorException"%>
<%@page import="java.sql.SQLException"%>


<%
    Community[] communities = (Community[]) request.getAttribute("communities");

    Locale sessionLocale = UIUtil.getSessionLocale(request);
    Config.set(request.getSession(), Config.FMT_LOCALE, sessionLocale);

    boolean feedEnabled = ConfigurationManager.getBooleanProperty("webui.feed.enable");
    String feedData = "NONE";
    if (feedEnabled) {
        feedData = "ALL:" + ConfigurationManager.getProperty("webui.feed.formats");
    }
    
%>

<script type="text/javascript" src="<%= request.getContextPath() %>/page/dspace.min.js"></script>

<dspace:layout locbar="nolink" titlekey="jsp.home.title" feedData="<%= feedData%>">
 
    <div id="appsss">
    
    	<pdf-make :datasource="datasource" :datarow="datarow"></pdf-make>
    
	</div>
	<script>

  new Vue({
    el: '#appsss',
    data: {
    	datasource: {
    		pageOrientation: "landscape",
    		content: [
    	          {
    	              text: [
    	                  {text: "NHIỆM VỤ KHOA HỌC CÔNG NGHỆ\n", alignment: "center", bold: true},
    	                  {text: "Năm: [$year$]" + "\n", fontSize: 11, alignment: "center"},
    	                  {text: "Đơn vị tính: [$currency$]" + "\n", fontSize: 11, alignment: "right"}
    	              ], 
    	              margin: [0, 20],
    	              style: "headerTitle"
    	          },
    	          {
    	              style: "tableExample",
    	              table: {
    	                  widths: ["*", 100, 100, 100],
    	                  headerRows: 2,
    	                  body: [
    	                      [
    	                          {
    	                              text: "",
    	                              rowSpan: 2,
    	                              alignment: "center",
    	                              bold: true,
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "\nTổng số",
    	                              rowSpan: 2,
    	                              alignment: "center",
    	                              bold: true,
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Tình trạng tiến hành",
    	                              colSpan: 2,
    	                              alignment: "center",
    	                              bold: true,
    	                              style: "tdStyle"
    	                          },
    	                          ""
    	                      ],
    	                      [
    	                          "",
    	                          "",
    	                          {
    	                              text: "Số nhiệm vụ đang tiến hành",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Số nhiệm vụ đã được nghiêm thu",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          }
    	                      ],
    	                      [
    	                          {
    	                              text: "A",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "1",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "2",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "3",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          }
    	                      ]
    	                  ]
    	              },
    	              margin: [0, 0, 0, 5]
    	          }
    	      ]
    	},
    	datarow: [
    		[
    			{
                    text: "1. Tổng số nhiệm vụ KH&CN ",
                    alignment: "left",
                    bold: true
                },
                {
                    text: "32400",
                    alignment: "center"
                },
                {
                    text: "5600",
                    alignment: "center"
                },
                {
                    text: "26800",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Đề tài KHCN",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "22680",
                    alignment: "center"
                },
                {
                    text: "3920",
                    alignment: "center"
                },
                {
                    text: "18760",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Đề án KHCN",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "6480",
                    alignment: "center"
                },
                {
                    text: "1120",
                    alignment: "center"
                },
                {
                    text: "5360",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Dự án KHCN",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "3240",
                    alignment: "center"
                },
                {
                    text: "560",
                    alignment: "center"
                },
                {
                    text: "2680",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: "2. Chia theo cấp quản lý",
                    alignment: "left",
                    bold: true
                },
                "","",""
    		],
    		[
    			{
                    text: " - Cấp quốc gia",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "1620",
                    alignment: "center"
                },
                {
                    text: "280",
                    alignment: "center"
                },
                {
                    text: "1340",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Cấp bộ",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "6480",
                    alignment: "center"
                },
                {
                    text: "1120",
                    alignment: "center"
                },
                {
                    text: "5360",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Cấp tỉnh",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "8100",
                    alignment: "center"
                },
                {
                    text: "1400",
                    alignment: "center"
                },
                {
                    text: "6700",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Cấp cơ sở",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "11340",
                    alignment: "center"
                },
                {
                    text: "1960",
                    alignment: "center"
                },
                {
                    text: "9380",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Doanh nghiệp",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "4860",
                    alignment: "center"
                },
                {
                    text: "840",
                    alignment: "center"
                },
                {
                    text: "4020",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: "3. Chia theo lĩnh vực nghiên cứu ",
                    alignment: "left",
                    bold: true
                },
                "","",""
    		],
    		[
    			{
                    text: " - Khoa học tự nhiên",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "3240",
                    alignment: "center"
                },
                {
                    text: "560",
                    alignment: "center"
                },
                {
                    text: "2680",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Khoa học kỹ thuật và công nghệ",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "8100",
                    alignment: "center"
                },
                {
                    text: "1400",
                    alignment: "center"
                },
                {
                    text: "6700",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Khoa học y, dược",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "4860",
                    alignment: "center"
                },
                {
                    text: "840",
                    alignment: "center"
                },
                {
                    text: "4020",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Khoa học nông nghiệp",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "1620",
                    alignment: "center"
                },
                {
                    text: "280",
                    alignment: "center"
                },
                {
                    text: "1340",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Khoa học xã hội",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "4860",
                    alignment: "center"
                },
                {
                    text: "840",
                    alignment: "center"
                },
                {
                    text: "4020",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Khoa học nhân văn",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "9720",
                    alignment: "center"
                },
                {
                    text: "1680",
                    alignment: "center"
                },
                {
                    text: "8040",
                    alignment: "center"
                }
    		]
    	]
    }
  })
</script>
</dspace:layout>
