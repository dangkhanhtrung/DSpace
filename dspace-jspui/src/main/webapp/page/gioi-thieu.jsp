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
<dspace:layout locbar="nolink" titlekey="jsp.home.title" feedData="<%= feedData%>">
 
    <div id="appsss">
    	
    	<div class="html-word">
	<label style="font-weight: bold; margin: 0 0 10px; display: block;">1. Giới thiệu</label>
	<p style="margin: 0 0 10px;">Hệ thống trao đổi và tích hợp các cơ sở dữ liệu của Bộ Khoa học và Công nghệ phục vụ  các cá nhân, đơn vị tác nghiệp, tổ chức doanh nghiệp trong và ngoài  Bộ KHCN khai thác thông tin KHCN được tập trung, tổng quan nhất qua cổng thông tin “Cơ sở dữ liệu tích hợp Thông tin Khoa học và Công nghệ”.</p>
	<p style="margin: 0 0 10px;">Nhiệm vụ “Xây dựng hệ thống trao đổi và tích hợp các cơ sở dữ liệu của Bộ Khoa học và Công nghệ theo quyết định số 1208/QĐ-BKHCN ngày 9 tháng 05 năm 2018 của Bộ trưởng Bộ Khoa học và Công nghệ.</p>
	<p style="margin: 0 0 10px;">Các CSDL KHCN được tích hợp, liên kết với nhau bao gồm:</p>
	<ol style="padding: 0 0 0 40px; margin: 0;">
		<li style="margin-bottom: 10px;">CSDL Cá nhân</li>
		<li style="margin-bottom: 10px;">CSDL Công bố</li>
		<li style="margin-bottom: 10px;">CSDL Nhiệm vụ</li>
		<li style="margin-bottom: 10px;">CSDL  Tổ chức</li>
		<li style="margin-bottom: 10px;">CSDL Sáng chế</li>
		<li style="margin-bottom: 10px;">CSDL Tiêu chuẩn</li>
		<li style="margin-bottom: 10px;">CSDL Công nghệ</li>
		<li style="margin-bottom: 10px;">CSDL Giải thưởng</li>
		<li style="margin-bottom: 10px;">CSDL Sự kiên </li>
		<li style="margin-bottom: 10px;">CSDL Quỹ tài trợ</li> 
		<li style="margin-bottom: 10px;">CSDL Tạp chí</li>
		<li style="margin-bottom: 10px;">CSSDL Giấy chứng nhận</li>
		<li style="margin-bottom: 10px;">CSDL Dữ liệu mở</li>
	</ol>
	<label style="font-weight: bold; margin: 0 0 10px; display: block;">Mô hình kiến trúc hệ thống</label>
	<img width="624" src="https://s3-eu-west-1.amazonaws.com/froala-eu/temp_files%2F1563439992465-1563439992465.png" style="display: block; margin: 0 auto 10px;">
	<label style="font-weight: bold; margin: 0 0 10px; display: block;">Mô hình CSDL</label>
	<img width="624" src="https://s3-eu-west-1.amazonaws.com/froala-eu/temp_files%2F1563439992505-1563439992505.png" style="display: block; margin: 0 auto 10px;">
	<label style="font-weight: bold; margin: 0 0 10px; display: block;">2. Tính năng</label>
	<p style="margin: 0 0 10px;">Giao diện tương đối thân thiện, dễ tìm kiếm, khai thác thông tin KHCN:</p>
	<ul style="padding: 0 0 0 40px; margin: 0;">
		<li style="margin-bottom: 10px;">Tìm kiếm dữ liệu theo các bộ tiêu chí;</li>
		<li style="margin-bottom: 10px;">Tra cứu được thông tin liên kết giữa các dữ liệu KHCN</li>
		<li style="margin-bottom: 10px;">Tải về các bộ dữ liệu mở, dữ liệu mô tả (metadata)</li>
		<li style="margin-bottom: 10px;">Báo cáo, thống kê các dữ liệu</li>
		<li style="margin-bottom: 10px;">Cung cấp thông tin CSDL dạng API</li>
	</ul>
	<label style="font-weight: bold; margin: 0 0 10px; display: block;">3. Điểm nổi bật</label>
	<ul style="padding: 0 0 0 40px; margin: 0;">
		<li style="margin-bottom: 10px;">Hệ thống CSDL KHCN áp dụng chuẩn giao thức toàn cầu OAI-PMH,  trao đổi thông tin về khoa học và công nghệ. OAI-PMH  được xây dựng dựa trên nền tảng công nghệ API Restful.</li>
		<li style="margin-bottom: 10px;">Có tính liên kết giữa các đối tượng CSDL quản   lý (chẳng hạn xem thông tin Chuyên gia sẽ biết được các bài báo chuyên gia đã công bố) dễ dàng khai thác thông tin tổng quan nhất về khoa học công nghệ và chỉ dẫn đến hệ thống CSDL liên quan để xem thông tin chi tiết.</li>
		<li style="margin-bottom: 10px;">Hệ thống đảm bảo sẵn sàng tích hợp các dữ liệu khác, luôn được cập nhật phong phú nguồn thông tin KHCN trong nước và quốc tế, mở rộng nâng cấp thành CSDLQG KHCN.</li>
		<li style="margin-bottom: 10px;">Hệ thống tích hợp CSDL của Bộ KHCN là nền tảng để xây dựng hệ thống thông tin KHCN ĐBSCL, xây dựng hệ thống CSDL quốc gia KHCN.</li>
	</ul>
	<label style="font-weight: bold; margin: 0 0 10px; display: block;">4. Lợi ích</label>
	<ul style="padding: 0 0 0 40px; margin: 0;">
		<li style="margin-bottom: 10px;">Tăng cường chất lượng thông tin KHCN</li>
		<li style="margin-bottom: 10px;">Cải thiện năng suất và hiệu quả hoạt động KHCN</li>
		<li style="margin-bottom: 10px;">Cải thiện khả năng tương tác dữ liệu KHCN</li>
		<li style="margin-bottom: 10px;">Cải thiện khả năng quản trị, tuân thủ quy định và quản lý rủi ro</li>
		<li style="margin-bottom: 10px;">Hỗ trợ báo cáo và cải thiện việc ra quyết định về KHCN</li>
	</ul>
</div>
    	
    
	</div>
</dspace:layout>
