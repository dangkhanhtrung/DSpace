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
    	                  {text: "SỐ TỔ CHỨC KHOA HỌC VÀ CÔNG NGHỆ\n", alignment: "center", bold: true},
    	                  {text: "Năm: [$year$]" + "\n", fontSize: 11, alignment: "center"},
    	                  {text: "Đơn vị tính: [$currency$]" + "\n", fontSize: 11, alignment: "right"}
    	              ], 
    	              margin: [0, 20],
    	              style: "headerTitle"
    	          },
    	          {
    	              style: "tableExample",
    	              table: {
    	                  widths: ["*", 100, 100, 100, 100],
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
    	                              text: "Chia theo loại hình kinh tế",
    	                              colSpan: 3,
    	                              alignment: "center",
    	                              bold: true,
    	                              style: "tdStyle"
    	                          },
    	                          "",
    	                          ""
    	                      ],
    	                      [
    	                          "",
    	                          "",
    	                          {
    	                              text: "Công lập",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Ngoài công lập",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Vốn nước ngoài",
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
                    text: "I.Tổng số",
                    alignment: "left",
                    bold: true
                },
                {
                    text: "4560",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "2500",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "1600",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "460",
                    alignment: "center",
                    bold: true
                }
    		],
    		[
    			{
                    text: "II.Chia theo loại hình hoạt động ",
                    alignment: "left",
                    bold: true
                },
                "","","","",
    		],
    		[
    			{
                    text: " - Nghiên cứu khoa học",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "2280",
                    alignment: "center"
                },
                {
                    text: "1250",
                    alignment: "center"
                },
                {
                    text: "800",
                    alignment: "center"
                },
                {
                    text: "230",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Phát triển công nghệ",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "1368",
                    alignment: "center"
                },
                {
                    text: "750",
                    alignment: "center"
                },
                {
                    text: "480",
                    alignment: "center"
                },
                {
                    text: "138",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Dịch vụ khoa học và công nghệ",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "912",
                    alignment: "center"
                },
                {
                    text: "500",
                    alignment: "center"
                },
                {
                    text: "320",
                    alignment: "center"
                },
                {
                    text: "92",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: "III. Chia theo Lĩnh vực khoa học và công nghệ",
                    alignment: "left",
                    bold: true
                },
                "","","","",
    		],
    		[
    			{
                    text: " - Khoa học tự nhiên",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "456",
                    alignment: "center"
                },
                {
                    text: "250",
                    alignment: "center"
                },
                {
                    text: "160",
                    alignment: "center"
                },
                {
                    text: "46",
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
                    text: "1140",
                    alignment: "center"
                },
                {
                    text: "625",
                    alignment: "center"
                },
                {
                    text: "400",
                    alignment: "center"
                },
                {
                    text: "115",
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
                    text: "684",
                    alignment: "center"
                },
                {
                    text: "375",
                    alignment: "center"
                },
                {
                    text: "240",
                    alignment: "center"
                },
                {
                    text: "69",
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
                    text: "228",
                    alignment: "center"
                },
                {
                    text: "125",
                    alignment: "center"
                },
                {
                    text: "80",
                    alignment: "center"
                },
                {
                    text: "23",
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
                    text: "684",
                    alignment: "center"
                },
                {
                    text: "375",
                    alignment: "center"
                },
                {
                    text: "240",
                    alignment: "center"
                },
                {
                    text: "69",
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
                    text: "1368",
                    alignment: "center"
                },
                {
                    text: "750",
                    alignment: "center"
                },
                {
                    text: "480",
                    alignment: "center"
                },
                {
                    text: "138",
                    alignment: "center"
                }
    		],
    	]
    }
  })
</script>
</dspace:layout>
