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
    	                  {text: "CÔNG BỐ KHOA HỌC VÀ CÔNG NGHỆ\n", alignment: "center", bold: true},
    	                  {text: "Năm: [$year$]" + "\n", fontSize: 11, alignment: "center"},
    	                  {text: "Đơn vị tính: [$currency$]" + "\n", fontSize: 11, alignment: "right"}
    	              ], 
    	              margin: [0, 20],
    	              style: "headerTitle"
    	          },
    	          {
    	              style: "tableExample",
    	              table: {
    	                  widths: ["*", 100, 50, 50, 50, 50],
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
    	                              text: "Bộ sưu tập",
    	                              colSpan: 4,
    	                              alignment: "center",
    	                              bold: true,
    	                              style: "tdStyle"
    	                          },
    	                          "",
    	                          "",
    	                          ""
    	                      ],
    	                      [
    	                          "",
    	                          "",
    	                          {
    	                              text: "ISI",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Scopus",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Quốc tế",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Trong nước",
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
    	                          },
    	                          {
    	                              text: "4",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "5",
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
                    text: "1. Tổng số Công bố",
                    alignment: "left",
                    bold: true
                },
                {
                    text: "350680",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "5000",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "78000",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "10980",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "256700",
                    alignment: "center",
                    bold: true
                }
    		],
    		[
    			{
                    text: "2. Chia theo Loại công bố",
                    alignment: "left",
                    bold: true
                },
                "","","","",""
    		],
    		[
    			{
                    text: " - Bài báo",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "122738",
                    alignment: "center"
                },
                {
                    text: "1750",
                    alignment: "center"
                },
                {
                    text: "27300",
                    alignment: "center"
                },
                {
                    text: "3843",
                    alignment: "center"
                },
                {
                    text: "89845",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Kỷ yếu hội thảo",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "35068",
                    alignment: "center"
                },
                {
                    text: "500",
                    alignment: "center"
                },
                {
                    text: "7800",
                    alignment: "center"
                },
                {
                    text: "1098",
                    alignment: "center"
                },
                {
                    text: "25670",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Báo cáo",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "70136",
                    alignment: "center"
                },
                {
                    text: "1000",
                    alignment: "center"
                },
                {
                    text: "15600",
                    alignment: "center"
                },
                {
                    text: "2196",
                    alignment: "center"
                },
                {
                    text: "51340",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Sách",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "17534",
                    alignment: "center"
                },
                {
                    text: "250",
                    alignment: "center"
                },
                {
                    text: "3900",
                    alignment: "center"
                },
                {
                    text: "549",
                    alignment: "center"
                },
                {
                    text: "12835",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Luận án tiến sĩ",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "52602",
                    alignment: "center"
                },
                {
                    text: "750",
                    alignment: "center"
                },
                {
                    text: "11700",
                    alignment: "center"
                },
                {
                    text: "1647",
                    alignment: "center"
                },
                {
                    text: "38505",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Luận án thạc sĩ (Master’s Thesis)",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "52602",
                    alignment: "center"
                },
                {
                    text: "750",
                    alignment: "center"
                },
                {
                    text: "11700",
                    alignment: "center"
                },
                {
                    text: "1647",
                    alignment: "center"
                },
                {
                    text: "38505",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: "3. Chia theo lĩnh vực KHCN",
                    alignment: "left",
                    bold: true
                },
                "","","","",""
    		],
    		[
    			{
                    text: " - Khoa học tự nhiên",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "35068",
                    alignment: "center"
                },
                {
                    text: "500",
                    alignment: "center"
                },
                {
                    text: "7800",
                    alignment: "center"
                },
                {
                    text: "1098",
                    alignment: "center"
                },
                {
                    text: "25670",
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
                    text: "52602",
                    alignment: "center"
                },
                {
                    text: "750",
                    alignment: "center"
                },
                {
                    text: "11700",
                    alignment: "center"
                },
                {
                    text: "1647",
                    alignment: "center"
                },
                {
                    text: "38505",
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
                    text: "70136",
                    alignment: "center"
                },
                {
                    text: "1000",
                    alignment: "center"
                },
                {
                    text: "15600",
                    alignment: "center"
                },
                {
                    text: "2196",
                    alignment: "center"
                },
                {
                    text: "51340",
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
                    text: "52602",
                    alignment: "center"
                },
                {
                    text: "750",
                    alignment: "center"
                },
                {
                    text: "11700",
                    alignment: "center"
                },
                {
                    text: "1647",
                    alignment: "center"
                },
                {
                    text: "38505",
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
                    text: "35068",
                    alignment: "center"
                },
                {
                    text: "500",
                    alignment: "center"
                },
                {
                    text: "7800",
                    alignment: "center"
                },
                {
                    text: "1098",
                    alignment: "center"
                },
                {
                    text: "25670",
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
                    text: "105204",
                    alignment: "center"
                },
                {
                    text: "1500",
                    alignment: "center"
                },
                {
                    text: "23400",
                    alignment: "center"
                },
                {
                    text: "3294",
                    alignment: "center"
                },
                {
                    text: "77010",
                    alignment: "center"
                }
    		],
    	]
    }
  })
</script>
</dspace:layout>
