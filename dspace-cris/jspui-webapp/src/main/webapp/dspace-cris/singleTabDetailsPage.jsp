<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    https://github.com/CILEA/dspace-cris/wiki/License

--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>
<%@ taglib uri="http://displaytag.sf.net" prefix="display"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ page import="java.net.URL"%>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@ page import="java.util.Locale"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="it.cilea.osd.jdyna.web.Box"%>
<%@ page import="org.dspace.storage.rdbms.DatabaseManager"%>
<%@ page import="org.dspace.storage.rdbms.TableRow"%>
<%@ page import="java.util.ArrayList"%>

<%@ taglib uri="jdynatags" prefix="dyna"%>
<%@ taglib uri="researchertags" prefix="researcher"%>
<%
    Locale sessionLocale = UIUtil.getSessionLocale(request);
        String currLocale = null;
        if (sessionLocale != null) {
                currLocale = sessionLocale.toString();
        }
    List<Box> boxs = (List<Box>)(request.getAttribute("propertiesHolders"));
    Map<String, Long> mapCount = new HashMap<String, Long>();
        for(Box box : boxs) {
                if(box!=null) {
                           String nameBoxCountAttribute = "count" + box.getShortName(); 
                           Long objnameBoxCountAttribute = (Long)request.getAttribute(nameBoxCountAttribute);
                           mapCount.put(box.getShortName(), objnameBoxCountAttribute);
                } 
        }
%>
<c:set var="currLocale"><%=currLocale %></c:set>
<div class="col-12 col-sm-9" id="tab-${area.id}">
    <div class="row">
        <c:forEach items="${propertiesHolders}" var="holder">
            <c:set var="holdershortname" value="${holder.shortName}" scope="page"/>
            <c:set var="extraCSS">
                <c:choose>
                    <c:when test="${holder.priority % 10 == 2}">col-md-6</c:when>
                    <c:otherwise>col-md-12</c:otherwise>
                </c:choose>
            </c:set>

            <% Long counterBoxMap = (Long)mapCount.get(pageContext.getAttribute("holdershortname")); 
                    if(counterBoxMap==null) {
            %>
            <c:set
                value="${researcher:isBoxHidden(entity,holder.shortName)}"
                var="invisibleBox"></c:set>
            <% } else {	%>
            <c:set
            value="<%= counterBoxMap>0?false:true %>"
                var="invisibleBox"></c:set>
            <% } %>		
            <c:if test="${invisibleBox==false}">

                <%!public URL fileURL;%>

                <c:set var="urljspcustom"
                       value="/dspace-cris/jdyna/custom/${holder.externalJSP}.jsp" scope="request" />

                <%
                        String filePath = (String)pageContext.getRequest().getAttribute("urljspcustom");

                                        fileURL = pageContext.getServletContext().getResource(
                                                        filePath);
                %>
                <%
                        if (fileURL == null) {
                %>
                <div class="panel-group ${extraCSS}" id="${holder.shortName}">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="btn--block a__icon__down" data-toggle="collapse" data-parent="#${holder.shortName}" href="#collapseOne${holder.shortName}">
                                    <spring:message code="${entity.class.simpleName}.box.${holder.shortName}.label" text="${holder.title}"></spring:message>
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne${holder.shortName}" class="panel-collapse in collapse show">
                            <div class="panel-body">
                                <c:set var="hideLabel">${fn:length(propertiesDefinitionsInHolder[holder.shortName]) le 1}</c:set>

                                <vuejx-sub-list value="${holder.shortName}" id="" ></vuejx-sub-list>
                                <%                                     
                                    org.dspace.core.Context context = null;
                                    context = UIUtil.obtainContext(request);
                                    String field;
                                    String query;                                    
                                %>                                
                                <table>
                                    <c:set var="hiddenfield" value="" />
	                                <c:forEach
	                                    items="${propertiesDefinitionsInHolder[holder.shortName]}"
	                                    var="tipologiaDaVisualizzareNoI18n" varStatus="status">
	                                    <c:set var="tipologiaDaVisualizzare" value="${researcher:getPropertyDefinitionI18N(tipologiaDaVisualizzareNoI18n,currLocale)}" />
	                                    <%!public URL fileFieldURL;%>
	                                    <c:set var="dataCHK" value="${anagraficaObject.anagrafica4view[tipologiaDaVisualizzare.shortName]}" />
                                        <c:set var="field_name" value="${tipologiaDaVisualizzare.shortName}" />
                                        <%
                                        try{
                                            field = (String)pageContext.getAttribute("field_name");
                                            query = "SELECT * FROM mapping_xml WHERE field_name='"+field+"'";
                                            List<TableRow> tablerow = DatabaseManager.queryTable(context, "mapping_xml", query).toList();
                                            Boolean view_detail = tablerow.get(0).getBooleanColumn("view_detail");
                                            String valuefield = tablerow.get(0).getStringColumn("exclusive_ext");
                                            request.setAttribute("view_detail", view_detail);
                                            request.setAttribute("fieldname", field);
                                            request.setAttribute("valuefield", valuefield);
                                        }
                                        catch (Exception e){}
                                        %>
                                        <c:if test="${tipologiaDaVisualizzare.shortName != hiddenfield}">
                                            <c:set var="hiddenfield" value="" />                         
                                            <c:choose>
                                            <c:when test="${view_detail}">                                                
                                                <c:if test="${not empty anagraficaObject.anagrafica4view[fieldname]}"> 
                                                    <c:set var="hiddenfield" value="${valuefield}" />   
        											<tr>
        												<td width="150" style="vertical-align: text-top;">
        													<strong>${tipologiaDaVisualizzare.label}</strong>       
        												</td>
        												<td>
        													<c:set var="urljspcustomfield"
        				                                           value="/dspace-cris/jdyna/custom/field/${tipologiaDaVisualizzare.shortName}.jsp" scope="request" />
        				
        				                                    <%
        				                                            String fileFieldPath = (String)pageContext.getRequest().getAttribute("urljspcustomfield");
        											
        				                                                            fileFieldURL = pageContext.getServletContext().getResource(
        				                                                                            fileFieldPath);
        				                                    %>
        				                                    <%
        				                                            if (fileFieldURL == null) {
        				                                    %>
        				                                    <c:if
        				                                        test="${dyna:instanceOf(tipologiaDaVisualizzare,'it.cilea.osd.jdyna.model.ADecoratorTypeDefinition')}">
        				
        				                                        <c:set var="totalHit" value="0"/>
        				                                        <c:set var="limit" value="5"/>
        				                                        <c:set var="offset" value="0"/>											
        				                                        <c:set var="pageCurrent" value="0"/>	
        				                                        <c:set var="editmode" value="false"/>
        				
        				                                        <div
        				                                            id="viewnested_${tipologiaDaVisualizzare.real.id}" class="viewnested">
        				                                            <img src="<%=request.getContextPath()%>/image/cris/bar-loader.gif" class="loader" />
        				                                            <fmt:message key="jsp.jdyna.nestedloading" />
        				                                            <span class="spandatabind nestedinfo">${tipologiaDaVisualizzare.real.id}</span>
        				                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_totalHit" class="spandatabind">0</span>
        				                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_limit" class="spandatabind">5</span>
        				                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_pageCurrent" class="spandatabind">0</span>
        				                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_editmode" class="spandatabind">false</span>
        				                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_externalJSP" class="spandatabind">${tipologiaDaVisualizzare.externalJSP}</span>
        				                                        </div>
        				                                    </c:if>
        				                                    <c:if
        				                                        test="${dyna:instanceOf(tipologiaDaVisualizzare,'it.cilea.osd.jdyna.model.ADecoratorPropertiesDefinition')}">
        				                                        <dyna:display tipologia="${tipologiaDaVisualizzare.real}"
        				                                                      hideLabel="true"
        				                                                      values="${anagraficaObject.anagrafica4view[tipologiaDaVisualizzare.shortName]}" />
        				                                    </c:if>
        												</td>
        											</tr>
        		                                    <% } else { %>
        		                                    <c:set var="tipologiaDaVisualizzare" value="${tipologiaDaVisualizzare}" scope="request" />
        		                                    <c:import url="${urljspcustomfield}" />
        		                                    <% } %>
                                                </c:if>
                                            </c:when>
                                            <c:otherwise>
                                                <tr>
                                                    <td width="150" style="vertical-align: text-top;">
                                                        <strong>${tipologiaDaVisualizzare.label}</strong>
                                                    </td>
                                                    <td>
                                                        <c:set var="urljspcustomfield"
                                                               value="/dspace-cris/jdyna/custom/field/${tipologiaDaVisualizzare.shortName}.jsp" scope="request" />
                    
                                                        <%
                                                                String fileFieldPath = (String)pageContext.getRequest().getAttribute("urljspcustomfield");
                                                
                                                                                fileFieldURL = pageContext.getServletContext().getResource(
                                                                                                fileFieldPath);
                                                        %>
                                                        <%
                                                                if (fileFieldURL == null) {
                                                        %>
                                                        <c:if
                                                            test="${dyna:instanceOf(tipologiaDaVisualizzare,'it.cilea.osd.jdyna.model.ADecoratorTypeDefinition')}">
                    
                                                            <c:set var="totalHit" value="0"/>
                                                            <c:set var="limit" value="5"/>
                                                            <c:set var="offset" value="0"/>                                         
                                                            <c:set var="pageCurrent" value="0"/>    
                                                            <c:set var="editmode" value="false"/>
                    
                                                            <div
                                                                id="viewnested_${tipologiaDaVisualizzare.real.id}" class="viewnested">
                                                                <img src="<%=request.getContextPath()%>/image/cris/bar-loader.gif" class="loader" />
                                                                <fmt:message key="jsp.jdyna.nestedloading" />
                                                                <span class="spandatabind nestedinfo">${tipologiaDaVisualizzare.real.id}</span>
                                                                <span id="nested_${tipologiaDaVisualizzare.real.id}_totalHit" class="spandatabind">0</span>
                                                                <span id="nested_${tipologiaDaVisualizzare.real.id}_limit" class="spandatabind">5</span>
                                                                <span id="nested_${tipologiaDaVisualizzare.real.id}_pageCurrent" class="spandatabind">0</span>
                                                                <span id="nested_${tipologiaDaVisualizzare.real.id}_editmode" class="spandatabind">false</span>
                                                                <span id="nested_${tipologiaDaVisualizzare.real.id}_externalJSP" class="spandatabind">${tipologiaDaVisualizzare.externalJSP}</span>
                                                            </div>
                                                        </c:if>
                                                        <c:if
                                                            test="${dyna:instanceOf(tipologiaDaVisualizzare,'it.cilea.osd.jdyna.model.ADecoratorPropertiesDefinition')}">
                                                            <dyna:display tipologia="${tipologiaDaVisualizzare.real}"
                                                                          hideLabel="true"
                                                                          values="${anagraficaObject.anagrafica4view[tipologiaDaVisualizzare.shortName]}" />
                                                        </c:if>
                                                    </td>
                                                </tr>
                                            
                                            
                                                <% } else { %>
                                                <c:set var="tipologiaDaVisualizzare" value="${tipologiaDaVisualizzare}" scope="request" />
                                                <c:import url="${urljspcustomfield}" />
                                                <% } %>
                                            </c:otherwise>
                                            </c:choose>
                                        </c:if>
	                                </c:forEach>	
                                </table>	
                            </div>
                        </div>
                    </div>
                </div>


                <%
                        } else {
                %>
                <c:set var="extraCSS" value="${extraCSS}" scope="request" />
                <c:set var="holder" value="${holder}" scope="request" />							
                <c:import url="${urljspcustom}" />

                <%
                        }
                %>

            </c:if>
        </c:forEach>
    </div>
    <div id="tab-nguondulieu" class="row">
	  <div class="panel panel-default" style="
	    width: 100%;
	">
	    <div class="panel-heading">
	      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#collapseOnenguondulieu" href="#collapseOnenguondulieu" class="btn--block a__icon__down pb-1">Nguồn dữ liệu</a></h4>
	    </div>
	    <div id="collapseOnenguondulieu" class="panel-collapse in collapse show">
	      <div class="panel-body">
	        <div class="row cris-record-info" style="width: 100%;">
	          
	          <div class="col-sm-6">
                                        <span class="cris-record-info-sourceid"><b><fmt:message key="jsp.cris.detail.info.sourceid" /></b> ${!empty entity.sourceID?entity.sourceID:i18nnone}</span>
                                        <br/>
                                        <span class="cris-record-info-sourceref"><b><fmt:message key="jsp.cris.detail.info.sourceref" /></b> ${!empty entity.sourceRef?entity.sourceRef:i18nnone}</span>
                                    </div> 
                                    <div class="col-sm-6">
                                        <span class="cris-record-info-created"><b><fmt:message key="jsp.cris.detail.info.created" /></b> <fmt:formatDate value="${entity.timeStampInfo.timestampCreated.timestamp}" pattern="dd/MM/yyyy HH:mm:ss" /></span>
                                        <br/>
                                        <span class="cris-record-info-updated"><b><fmt:message key="jsp.cris.detail.info.updated" /></b> <fmt:formatDate value="${entity.timeStampInfo.timestampLastModified.timestamp}" pattern="dd/MM/yyyy HH:mm:ss" /></span>
                                    </div>
                                    
	        </div>
	      </div>
	    </div>
	  </div>
	</div>

</div>
