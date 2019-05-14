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
    	                  {text: "SỐ NGƯỜI TRONG CÁC TỔ CHỨC KHOA HỌC VÀ CÔNG NGHỆ\n", alignment: "center", bold: true},
    	                  {text: "Năm: [$year$]" + "\n", fontSize: 11, alignment: "center"},
    	                  {text: "Đơn vị tính: [$currency$]" + "\n", fontSize: 11, alignment: "right"}
    	              ], 
    	              margin: [0, 20],
    	              style: "headerTitle"
    	          },
    	          {
    	              style: "tableExample",
    	              table: {
    	                  widths: ["*", 50, 40, 40, 40, 40, 40, 40, 40, 40, 40],
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
    	                              text: "Chia theo học vị",
    	                              colSpan: 5,
    	                              alignment: "center",
    	                              bold: true,
    	                              style: "tdStyle"
    	                          },
    	                          "",
    	                          "",
    	                          "",
    	                          "",
    	                          {
    	                              text: "Chia theo chức danh",
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
    	                              text: "Tiến sĩ",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Thạc sĩ",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Cử nhân",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Kỹ sư",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Khác",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Giáo sư",  
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Phó Giáo sư",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Nghiên cứu",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "Khác",
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
    	                          },
    	                          {
    	                              text: "6",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "7",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "8",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "9",
    	                              alignment: "center",
    	                              style: "tdStyle"
    	                          },
    	                          {
    	                              text: "10",
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
                    text: "131045",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "10376",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "31128",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "40719",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "44000",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "4822",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "31000",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "40000",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "50045",
                    alignment: "center",
                    bold: true
                },
                {
                    text: "10045",
                    alignment: "center",
                    bold: true
                }
    		],
    		[
    			{
                    text: " - Nữ",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "39314",
                    alignment: "center"
                },
                {
                    text: "3113",
                    alignment: "center"
                },
                {
                    text: "9338",
                    alignment: "center"
                },
                {
                    text: "12216",
                    alignment: "center"
                },
                {
                    text: "13200",
                    alignment: "center"
                },
                {
                    text: "1447",
                    alignment: "center"
                },
                {
                    text: "9300",
                    alignment: "center"
                },
                {
                    text: "12000",
                    alignment: "center"
                },
                {
                    text: "15014",
                    alignment: "center"
                },
                {
                    text: "3014",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: "2. Chia theo loại hình tổ chức",
                    alignment: "left",
                    bold: true
                },
                "","","","","","","","","",""
    		],
    		[
    			{
                    text: " - Tổ chức nghiên cứu khoa học",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "95414",
                    alignment: "center"
                },
                {
                    text: "7900",
                    alignment: "center"
                },
                {
                    text: "20150",
                    alignment: "center"
                },
                {
                    text: "20000",
                    alignment: "center"
                },
                {
                    text: "10200",
                    alignment: "center"
                },
                {
                    text: "0",
                    alignment: "center"
                },
                {
                    text: "20000",
                    alignment: "center"
                },
                {
                    text: "30000",
                    alignment: "center"
                },
                {
                    text: "40000",
                    alignment: "center"
                },
                {
                    text: "5000",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Tổ chức phát triển công nghệ",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "2417",
                    alignment: "center"
                },
                {
                    text: "2176",
                    alignment: "center"
                },
                {
                    text: "7800",
                    alignment: "center"
                },
                {
                    text: "10000",
                    alignment: "center"
                },
                {
                    text: "10000",
                    alignment: "center"
                },
                {
                    text: "2000",
                    alignment: "center"
                },
                {
                    text: "5000",
                    alignment: "center"
                },
                {
                    text: "8000",
                    alignment: "center"
                },
                {
                    text: "5000",
                    alignment: "center"
                },
                {
                    text: "3045",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Tổ chức dịch vụ KH&CN",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "33214",
                    alignment: "center"
                },
                {
                    text: "300",
                    alignment: "center"
                },
                {
                    text: "3178",
                    alignment: "center"
                },
                {
                    text: "10719",
                    alignment: "center"
                },
                {
                    text: "23800",
                    alignment: "center"
                },
                {
                    text: "2822",
                    alignment: "center"
                },
                {
                    text: "6000",
                    alignment: "center"
                },
                {
                    text: "2000",
                    alignment: "center"
                },
                {
                    text: "5045",
                    alignment: "center"
                },
                {
                    text: "2000",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: "3. Chia theo quốc tịch",
                    alignment: "left",
                    bold: true
                },
                "","","","","","","","","",""
    		],
    		[
    			{
                    text: " - Người Việt Nam",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "117941",
                    alignment: "center"
                },
                {
                    text: "9338",
                    alignment: "center"
                },
                {
                    text: "28015",
                    alignment: "center"
                },
                {
                    text: "36647",
                    alignment: "center"
                },
                {
                    text: "39600",
                    alignment: "center"
                },
                {
                    text: "4340",
                    alignment: "center"
                },
                {
                    text: "27900",
                    alignment: "center"
                },
                {
                    text: "36000",
                    alignment: "center"
                },
                {
                    text: "45041",
                    alignment: "center"
                },
                {
                    text: "9041",
                    alignment: "center"
                }
    		],
    		[
    			{
                    text: " - Người nước ngoài",
                    alignment: "left",
                    style: "collv1"
                },
                {
                    text: "13105",
                    alignment: "center"
                },
                {
                    text: "1038",
                    alignment: "center"
                },
                {
                    text: "3113",
                    alignment: "center"
                },
                {
                    text: "4072",
                    alignment: "center"
                },
                {
                    text: "4400",
                    alignment: "center"
                },
                {
                    text: "482",
                    alignment: "center"
                },
                {
                    text: "3100",
                    alignment: "center"
                },
                {
                    text: "4000",
                    alignment: "center"
                },
                {
                    text: "5005",
                    alignment: "center"
                },
                {
                    text: "1005",
                    alignment: "center"
                }
    		],
    	]
    }
  })
</script>
</dspace:layout>
