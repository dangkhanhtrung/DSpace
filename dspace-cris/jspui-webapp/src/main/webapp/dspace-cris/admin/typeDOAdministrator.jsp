<%--
    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at
    https://github.com/CILEA/dspace-cris/wiki/License
--%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace"%>
<%@ taglib uri="http://displaytag.sf.net" prefix="display"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="org.dspace.app.cris.model.CrisConstants"%>

<c:set var="CRIS_DYNAMIC_TYPE_ID_START"><%=CrisConstants.CRIS_DYNAMIC_TYPE_ID_START%></c:set>
<dspace:layout locbar="link" style="submission" navbar="admin" titlekey="jsp.dspace-admin.do">
			<h1><fmt:message key="jsp.dspace-admin.do" />
			<a class="pull-right" target="_blank" href='<%=request.getContextPath()%><%=LocaleSupport.getLocalizedMessage(pageContext,
                                "help.site-admin.do")%>'><fmt:message
				key="jsp.help" /></a></h1>

	<c:if test="${not empty messages}">
		<div class="alert alert-success" id="successMessages"><c:forEach var="msg"
			items="${messages}">
			<div id="authority-message">${msg}</div>
		</c:forEach></div>
		<c:remove var="messages" scope="session" />
	</c:if>


	<c:if test="${!empty error}">
		<span id="errorMessage" class="alert alert-danger"><fmt:message key="jsp.layout.hku.prefix-error-code"/> <fmt:message key="${error}"/></span>
	</c:if>

	<ul>
		<li>
			<a id="addentity" href="<%=request.getContextPath()%>/cris/administrator/do/add.htm"><fmt:message
			key="jsp.dspace-admin.hku.add-typodynamicobject" /></a>	
		</li>
	</ul>
	
	<fieldset><legend><fmt:message key="jsp.dspace-admin.hku.list-typodynamicobject" /></legend>
	<div style="padding: 0; margin: 0 10px;">			
			<display:table name="${researchobjects}" cellspacing="0" cellpadding="0" 
			requestURI="" id="objectList" htmlId="objectList"  class="table" export="false">
				<display:column titleKey="jsp.layout.table.cris.admin-list.id"> 
					<a href="<%=request.getContextPath()%>/cris/administrator/${objectList.shortName}/index.htm?id=${objectList.id}">${objectList.id}</a>
				</display:column>									
				<display:column titleKey="jsp.layout.table.cris.admin-list.shortname" sortable="true" >
					<a href="<%=request.getContextPath()%>/cris/administrator/${objectList.shortName}/index.htm?id=${objectList.id}">${objectList.shortName}</a>
			   </display:column>
				<display:column titleKey="jsp.layout.table.cris.admin-list.label" property="label" sortable="true"/>
				<display:column titleKey="jsp.layout.table.cris.admin-list.typodef" sortable="true">
					${objectList.id + CRIS_DYNAMIC_TYPE_ID_START}
				</display:column>
				<display:column titleKey="jsp.layout.table.cris.admin-list.actions">
					<a href="<%=request.getContextPath()%>/cris/administrator/do/edit.htm?id=${objectList.id}">Edit</a>
					<a href="<%=request.getContextPath()%>/cris/administrator/do/delete.htm?id=${objectList.id}">Delete</a>					
				</display:column>	
			</display:table>
			<table class="table" cellpadding="0" cellspacing="0">
			<tbody>
			<tr class="odd">
	<td width="89">
		<a href="/jspui/cris/administrator/rp/index.htm">9</a>
	</td>
	<td width="107">
		<a href="/jspui/cris/administrator/rp/index.htm">researcher profiles</a>
	</td>
	<td>Quản lý cơ sở dữ liệu nhân lực khoa học và công nghệ. Nhân lực làm việc trong các lĩnh vực: Giám định sở hữu trí tuệ; Đại diện sở hữu công nghiệp; Đánh giá sự phù hợp; Kiểm định chất lượng, chuẩn đo lường; Hoạt động công nghệ cao; Hoạt động khoa học công nghệ</td>

</tr>
<tr class="even">
	<td>
		<a href="/jspui/cris/administrator/project/index.htm">10</a>
	</td>
	<td>
		<a href="/jspui/cris/administrator/project/index.htm">project</a>
	</td>
	<td>Quản lý cơ sở dữ liệu nhiệm vụ khoa học và công nghệ. Bao gồm các nhiệm vụ: Đề tài; Đề án;Dự án; Hợp tác quốc tế</td>

</tr>
<tr class="odd">
	<td>
		<a href="/jspui/cris/administrator/ou/index.htm">11</a>
	</td>
	<td>
		<a href="/jspui/cris/administrator/ou/index.htm">orgunits</a>
	</td>
	<td>Quản lý cơ sở dữ liệu tổ chức khoa học và công nghệ. Tổ chức làm việc trong các lĩnh vực: Giám định sở hữu trí tuệ; Đại diện sở hữu công nghiệp; Đánh giá sự phù hợp; Kiểm định chất lượng, chuẩn đo lường; Hoạt động công nghệ cao; Hoạt động khoa học công nghệ</td>

</tr>
<tr class="even">
	<td>
		<a href="/jspui/handle/123456789/1">12</a>
	</td>
	<td>
		<a href="/jspui/handle/123456789/1">publications</a>
	</td>
	<td>Quản lý cơ sở dữ liệu công bố khoa học  và công nghệ. Bao gồm các loại công bố: Bài báo; Kỷ yếu hội thảo; Báo cáo khoa học; Sách; Luận án tiến sĩ; Luận án thạc sĩ; Bài trích tạp chí; Bài trích kỷ yếu; Bài trích sách; Bài nghiên cứu</td>

</tr>
<tr class="odd">
	<td>
		<a href="/jspui/handle/123456789/6">13</a>
	</td>
	<td>
		<a href="/jspui/handle/123456789/6">Dữ liệu</a>
	</td>
	<td>Quản lý cơ sở dữ liệu về các dữ liệu (dataset. Bao gồm có các loại dữ liệu: Dữ liệu danh mục; Metadata; Dữ liệu mở</td>

</tr>
			</tbody>
			</table>
	</div>
	</fieldset>
</dspace:layout>