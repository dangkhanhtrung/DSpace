<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    https://github.com/CILEA/dspace-cris/wiki/License

--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="researchertags" prefix="researcher"%>
<%@ taglib uri="jdynatags" prefix="dyna"%>
<%@ taglib uri="http://ajaxtags.org/tags/ajax" prefix="ajax"%>

<%@page import="java.util.List"%>
<%@ page import="java.util.Locale"%>
<%@ page import="org.dspace.app.webui.util.UIUtil" %>
<%@page import="java.util.ArrayList"%>
<%@page import="it.cilea.osd.jdyna.model.PropertiesDefinition"%>
<%@page
    import="it.cilea.osd.jdyna.model.ADecoratorPropertiesDefinition"%>
    <%@page
        import="org.dspace.app.cris.model.jdyna.DecoratorRestrictedField"%>
        <%@ page import="org.dspace.core.ConfigurationManager" %>	
        <%@page import="it.cilea.osd.jdyna.model.AccessLevelConstants"%>
        <%@page import="java.net.URL"%>
        <%@page import="org.dspace.eperson.EPerson" %>

        <%
            // Is anyone logged in?
            EPerson user = (EPerson) request.getAttribute("dspace.current.user");

            // Is the logged in user an admin
            Boolean admin = (Boolean)request.getAttribute("isAdmin");
            boolean isAdmin = (admin == null ? false : admin.booleanValue());
            boolean changeStatusAdmin = ConfigurationManager.getBooleanProperty("cris","rp.changestatus.admin");

            Locale sessionLocale = UIUtil.getSessionLocale(request);
                String currLocale = null;
                if (sessionLocale != null) {
                        currLocale = sessionLocale.toString();
                }
        %>
        <c:set var="root"><%=request.getContextPath()%></c:set>
        <c:set var="admin"><%=isAdmin%></c:set>
        <c:set var="currentUser"><%=user%></c:set>
        <c:set var="HIGH_ACCESS"><%=AccessLevelConstants.HIGH_ACCESS%></c:set>
        <c:set var="ADMIN_ACCESS"><%=AccessLevelConstants.ADMIN_ACCESS%></c:set>
        <c:set var="LOW_ACCESS"><%=AccessLevelConstants.LOW_ACCESS%></c:set>
        <c:set var="STANDARD_ACCESS"><%=AccessLevelConstants.STANDARD_ACCESS%></c:set>
        <c:set var="tabId" value="${anagraficadto.tabId}" />

        <c:forEach items="${tabList}" var="areaIter" varStatus="rowCounter">
            <c:if test="${areaIter.id == tabId}">
                <c:set var="currTabIdx" scope="request" value="${rowCounter.count}" />
            </c:if>
        </c:forEach>

        <c:set var="commandObject" value="${anagraficadto}" scope="request" />

        <c:set var="simpleNameAnagraficaObject"
               value="${simpleNameAnagraficaObject}" scope="page" />

        <c:set var="disabledfield" value=" readonly=\"readonly\" "></c:set>
        <fmt:message key="jsp.layout.hku.researcher.alert.eperson" var="messagealerteperson"/>
        <c:set var="dspace.layout.head.last" scope="request">	
            <link href="<%=request.getContextPath()%>/js/jscalendar/calendar-blue.css" type="text/css" rel="stylesheet" />
            <link rel="stylesheet" href="<%= request.getContextPath() %>/css/commons-edit-jquery-for-cris.css" type="text/css" />
            <link rel="stylesheet" href="<%= request.getContextPath() %>/css/researcher.css" type="text/css" />
            <link rel="stylesheet" href="<%= request.getContextPath() %>/css/jdyna.css" type="text/css" />     
            <link href="<%= request.getContextPath() %>/css/select2/select2.css" type="text/css" rel="stylesheet" />
            <link href="<%= request.getContextPath() %>/css/select2/select2-bootstrap.css" type="text/css" rel="stylesheet" />
            <link href="<%= request.getContextPath() %>/css/jstree/themes/default/style.min.css" type="text/css" rel="stylesheet" />
            <script type="text/javascript" src="<%= request.getContextPath() %>/js/jscalendar/calendar.js"></script>
            <script type="text/javascript" src="<%= request.getContextPath() %>/js/jscalendar/lang/calendar-en.js"></script>
            <script type="text/javascript" src="<%= request.getContextPath() %>/js/jscalendar/calendar-setup.js"></script>
            <script type="text/javascript" src="<%= request.getContextPath() %>/js/jquery.form.js"></script>
            <script type="text/javascript" src="<%=request.getContextPath()%>/js/select2/select2.min.js"></script>
            <script type="text/javascript" src="<%=request.getContextPath()%>/js/jstree/jstree.min.js"></script>
            <script type="text/javascript" src="<%=request.getContextPath()%>/js/jstree/thirdparty/_makeTree.js"></script>
            <script type="text/javascript" src="<%=request.getContextPath()%>/js/jstree/thirdparty/_queryTreeSort.js"></script>

            <style>
                .ui-autocomplete-loading {
                    background: white url('../../../image/jdyna/indicator.gif') right center no-repeat;
                }    
                .ui-autocomplete {
                    max-height: 100px;
                    overflow-y: auto;
                    /* prevent horizontal scrollbar */
                    overflow-x: hidden;
                }
                /* IE 6 doesn't support max-height
                 * we use height instead, but this forces the menu to always be this tall
                 */
                * html .ui-autocomplete {
                    height: 100px;
                }
                div#hidden_firststandardsdetail {
                    display: none;
                }

                div#standardsdetail {
                    overflow: hidden;
                }

                div#myTabContent {
                    padding: 15px;
                }

                div#standardsdetail > div {
                    display: flex;
                    flex-wrap: wrap;
                }

                .dynaField {
                    width: 50%;
                    flex: 0 0 50%;
                }
                body .dynaLabel, body .dynaLabelRequired {
                    min-height: auto;
                    clear: right;
                }
                body .dynaFieldValue {
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 10px;
                }
                body .dynaFieldValue > input[type="text"],
                body .searchboxpointer {
                    width: 265px;
                    display: block;
                    height: 32px;
                    padding: .625rem .75rem;
                    font-size: 1rem;
                    line-height: 1.2;
                    color: #8898aa;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #cad1d7;
                    border-radius: .25rem;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                    -webkit-transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
                    transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
                    margin-top: 5px;
                }
                body .dynaFieldValue img.addButton,
                body .dynaFieldValue img.deleteButton,
                body .dynaFieldValue img.warn,
                body .dynaFieldValue img.nested_add_button,
                body .dynaFieldValue img.nested_delete_button, body img.nested_edit_button, body img.nested_preferred_button, 
                body .dynaFieldValue img.nested_notpreferred_button {
                    width: 24px;
                    padding: 0px;
                    margin: 8px 10px 2px 8px;
                    border: none;
                    vertical-align: middle;
                    cursor: pointer;
                    height: 24px;
                    padding: 5px;
                }
                body .dynaFieldValue input[type=checkbox], body .dynaFieldValue input[type=radio] {padding: 4px;margin: 15px 5px 10px 20px;}

                body div.jdyna-form-button {
                    border-top: 0;
                    padding-top: 0;
                    margin-top: 15px;
                }
                body .dynaFieldValue img.deleteButton {
                    padding: 6px !important;
    margin: 9px 10px 2px 8px !important;
                }
            </style>

        </c:set>
        <dspace:layout titlekey="jsp.researcher-page.primary-data-form" style="submission" navbar="off">

            <h1>${researcher.fullName} <c:if test="${admin}"><a id="delete" href="delete.htm?id=${researcher.id}"> <span class="fa fa-trash"></span> </a></c:if></h1>


            <c:if test="${not empty messages}">
                <div class="message" id="successMessages"><c:forEach var="msg"
                           items="${messages}">
                        <div id="authority-message" class="alert alert-success">${msg}</div>
                    </c:forEach></div>
                    <c:remove var="messages" scope="session" />
                </c:if>

            <div id="ajaxBusy" style="display:none;height:100%;width:100%;z-index: 2001;" class="ui-widget-overlay"><p><img alt="Loading..." style="position: fixed;left: 50%;top: 35%;" src="<%= request.getContextPath() %>/image/jdyna/indicator.gif"/></p></div>
            <div id="researcher">

                <form:form commandName="anagraficadto"
                           action="" method="post" enctype="multipart/form-data">
                    <%-- if you need to display all errors (both global and all field errors,
                             use wildcard (*) in place of the property name --%>
                    <spring:bind path="anagraficadto.*">
                        <c:if test="${!empty status.errorMessages}">
                            <div id="errorMessages">
                            </c:if>
                            <c:forEach items="${status.errorMessages}" var="error">
                                <span class="errorMessage alert alert-danger"><fmt:message
                                        key="jsp.layout.hku.prefix-error-code" /> ${error}</span>
                            </c:forEach>
                            <c:if test="${!empty status.errorMessages}">
                            </div>
                        </c:if>
                    </spring:bind>

                    <div class="panel panel-default">
                        <div class="container row">
                            <div class="col-md-6 row">
                                <% if(!changeStatusAdmin || isAdmin) { %>
                                <div class="cris-edit-status row">
                                    <spring:bind path="status">
                                        <c:set var="inputValue">
                                            <c:out value="${status.value}" escapeXml="true"></c:out>
                                        </c:set>
                                        <c:set var="inputName">
                                            <c:out value="${status.expression}" escapeXml="false"></c:out>
                                        </c:set>

                                        <input name="_${inputName}" id="_${inputName}"
                                               value="true" type="hidden" />
                                    </spring:bind>
                                    <span class="cris-record-info-status"><b><fmt:message
                                                key="jsp.layout.hku.label.status" /></b></span>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="custom-control custom-radio my-3">
                                                <input class="custom-control-input" id="${inputName} + '_1'" name="${inputName}"
                                                       type="radio" value="false"
                                                       <c:if test="${inputValue==false}">checked="checked"</c:if> />
                                                <label for="${inputName} + '_1'" class="custom-control-label">
                                                    <fmt:message key="jsp.layout.hku.label.status.0" />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="custom-control custom-radio my-3">
                                                <input class="custom-control-input" id="${inputName} + '_2'" name="${inputName}"
                                                       type="radio" value="true"
                                                       <c:if test="${inputValue==true}">checked="checked"</c:if> >
                                                <label for="${inputName} + '_2'" class="custom-control-label">
                                                    <fmt:message key="jsp.layout.hku.label.status.1" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <p style="color: red; text-decoration: underline; font-weight: bold; text-align: center;"><fmt:message key='jsp.rp.edit-tips'/></p>
                                </div>

                                <% } %>
                            </div>

                            <div class="col-md-6">
                                <c:if test="${admin}">
                                    <div class="cris-edit-record-info cris-edit-eperson argon_input" style="width: 100%;">
                                        <spring:bind path="epersonID">
                                            <c:set var="inputValue">
                                                <c:out value="${status.value}" escapeXml="true"></c:out>
                                            </c:set>
                                            <c:set var="inputName">
                                                <c:out value="${status.expression}" escapeXml="false"></c:out>
                                            </c:set>

                                            <div class="form-group argon_input">
                                                <span class="cris-record-info-eperson"><b><fmt:message
                                                            key="jsp.layout.hku.label.eperson" /></b>		
                                                </span>
                                                <input id="eperson" />
                                            </div>
                                            <div id="epersonDIV" class="form-group argon_input jdyna-pointer-value">
                                                <input name="epersonID" id="epersonID" type="hidden" value="${inputValue}" size="60"/>
                                                <c:if test="${!empty inputValue}">
                                                    <script type="text/javascript">
        activeEperson('${inputValue}');
                                                    </script>
                                                </c:if>
                                            </div>
                                        </spring:bind>
                                        <c:choose>
                                            <c:when test="${ 1 != 1 }">
                                                <dyna:text labelKey="jsp.cris.detail.info.sourceid" propertyPath="anagraficadto.sourceID" visibility="false"/>
                                                <div class="dynaClear">&nbsp;</div>			
                                                <dyna:text labelKey="jsp.cris.detail.info.sourceref" propertyPath="anagraficadto.sourceRef" visibility="false"/>
                                                <div class="dynaClear">&nbsp;</div>
                                            </c:when>
                                            <c:otherwise>
                                                <span class="cris-record-info-sourceid"><b><fmt:message key="jsp.cris.detail.info.sourceid" /></b> ${!empty anagraficadto.sourceID?anagraficadto.sourceID:i18nnone}</span>
                                                <span class="cris-record-info-sourceref"><b><fmt:message key="jsp.cris.detail.info.sourceref" /></b> ${!empty anagraficadto.sourceRef?anagraficadto.sourceRef:i18nnone}</span>
                                                    </c:otherwise>
                                                </c:choose>
                                        <span class="cris-record-info-created"><b><fmt:message key="jsp.cris.detail.info.created" /></b> ${anagraficadto.timeStampCreated}</span>
                                        <div class="dynaClear">&nbsp;</div>
                                        <span class="cris-record-info-updated"><b><fmt:message key="jsp.cris.detail.info.updated" /></b> ${anagraficadto.timeStampModified}</span>
                                    </div>
                                </c:if>
                            </div>

                        </div>
                    </div>

                    <dyna:hidden propertyPath="anagraficadto.objectId" />
                    <input type="hidden" id="newTabId" name="newTabId" />

                    <div class="my_tabs">
                        <div class="nav-wrapper">
                            <ul id="tabs-text" role="tablist" class="nav nav-pills nav-fill flex-column flex-md-row">
                                <c:forEach items="${tabList}" var="area" varStatus="rowCounter">
                                    <c:choose> 
                                        <c:when test="${area.id == tabId}">
                                            <li class="nav-item  active">
                                                <a id="tabs-text-${area.id}-tab" data-toggle="tab" href="#tabs-text-${area.id}" role="tab" aria-controls="tabs-text-${area.id}" aria-selected="false" class="nav-link mb-sm-3 mb-md-0  active show">
                                                    ${area.title}
                                                </a>
                                            </li>
                                        </c:when>
                                        <c:otherwise>
                                            <li class="nav-item ">
                                                <a id="tabs-text-${area.id}-tab" data-toggle="tab" href="#tabs-text-${area.id}" role="tab" aria-controls="tabs-text-${area.id}" aria-selected="false" class="nav-link mb-sm-3 mb-md-0">
                                                    ${area.title}
                                                </a>
                                            </li>
                                        </c:otherwise>
                                    </c:choose>

                                </c:forEach>

                            </ul>
                        </div>


                        <div class="card">
                            <div>
                                <div id="myTabContent" class="tab-content">

                                    <c:forEach items="${tabList}" var="area" varStatus="rowCounter">
                                        <c:choose> 
                                            <c:when test="${rowCounter.index == 0}">
                                                <div id="tabs-text-${area.id}" role="tabpanel" aria-labelledby="tabs-text-${area.id}-tab" class="tab-pane fade active show in">


                                                    <c:forEach items="${propertiesHolders}" var="holder">

                                                        <c:set value="${researcher:isThereMetadataNoEditable(holder.shortName, holder.class)}" var="isThereMetadataNoEditable"></c:set>



                                                            <span class="green"><fmt:message
                                                                key='jsp.layout.hku.researcher.message'>
                                                                <fmt:param>
                                                                    <fmt:message
                                                                        key='jsp.layout.hku.researcher.message.${holder.shortName}' />
                                                                </fmt:param>
                                                            </fmt:message></span>




                                                        <%!public URL fileURL;%>

                                                        <c:set var="urljspcustom"
                                                               value="/dspace-cris/jdyna/custom/edit${holder.externalJSP}.jsp" scope="request" />

                                                        <%
                                                                String filePath = (String)pageContext.getRequest().getAttribute("urljspcustom");

                                                                                fileURL = pageContext.getServletContext().getResource(
                                                                                                filePath);
                                                        %>

                                                        <%
                                                                if (fileURL != null) {
                                                        %>




                                                        <c:set var="holder" value="${holder}" scope="request"/>
                                                        <c:set var="extra" value="${extra}" scope="request"/>
                                                        <c:set var="isThereMetadataNoEditable" value="${isThereMetadataNoEditable}" scope="request"/>												
                                                        <c:import url="${urljspcustom}" />


                                                        <%
                                                                } else {
                                                        %>

                                                        <div id="hidden_first${holder.shortName}">&nbsp;</div>
                                                        <div id="${holder.shortName}" class="box ${holder.collapsed?"":"expanded"}">
                                                            <div>
                                                                <c:forEach
                                                                    items="${propertiesDefinitionsInHolder[holder.shortName]}"
                                                                    var="tipologiaDaVisualizzareNoI18n">
                                                                    <c:set var="tipologiaDaVisualizzare" value="${researcher:getPropertyDefinitionI18N(tipologiaDaVisualizzareNoI18n,currLocale)}" />
                                                                    <c:set var="hideLabel">${fn:length(propertiesDefinitionsInHolder[holder.shortName]) le 1}</c:set>
                                                                    <c:set var="disabled" value=" readonly='readonly'"/>

                                                                    <c:set var="show" value="true" />
                                                                    <c:choose>							
                                                                        <c:when
                                                                            test="${admin or (tipologiaDaVisualizzare.accessLevel eq HIGH_ACCESS)}">
                                                                            <c:set var="disabled" value="" />
                                                                            <c:set var="visibility" value="true" />
                                                                        </c:when>
                                                                        <c:when 
                                                                            test="${(tipologiaDaVisualizzare.accessLevel eq LOW_ACCESS)}">
                                                                            <c:set var="disabled" value="${disabledfield}" />
                                                                            <c:set var="visibility" value="false" />
                                                                        </c:when>
                                                                        <c:when 
                                                                            test="${(tipologiaDaVisualizzare.accessLevel eq STANDARD_ACCESS)}">
                                                                            <c:set var="disabled" value="${disabledfield}" />
                                                                            <c:set var="visibility" value="true" />
                                                                        </c:when>
                                                                        <c:otherwise>
                                                                            <c:set var="show" value="false" />
                                                                        </c:otherwise>
                                                                    </c:choose>	
                                                                    <c:if
                                                                        test="${show && dyna:instanceOf(tipologiaDaVisualizzare,'it.cilea.osd.jdyna.model.ADecoratorTypeDefinition')}">

                                                                        <c:set var="totalHit" value="0"/>
                                                                        <c:set var="limit" value="5"/>
                                                                        <c:set var="offset" value="0"/>											
                                                                        <c:set var="pageCurrent" value="0"/>	
                                                                        <c:set var="editmode" value="true"/>

                                                                        <div
                                                                            id="viewnested_${tipologiaDaVisualizzare.real.id}" class="viewnested">
                                                                            <img src="<%=request.getContextPath()%>/image/cris/bar-loader.gif" class="loader" />
                                                                            <fmt:message key="jsp.jdyna.nestedloading" />
                                                                            <span class="spandatabind nestedinfo">${tipologiaDaVisualizzare.real.id}</span>
                                                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_totalHit" class="spandatabind">0</span>
                                                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_limit" class="spandatabind">5</span>
                                                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_pageCurrent" class="spandatabind">0</span>
                                                                            <span id="nested_${tipologiaDaVisualizzare.real.id}_editmode" class="spandatabind">false</span>
                                                                        </div>
                                                                    </c:if>


                                                                    <c:if
                                                                        test="${show && (dyna:instanceOf(tipologiaDaVisualizzare,'it.cilea.osd.jdyna.model.ADecoratorPropertiesDefinition'))}">

                                                                        <%
                                                                        List<String> parameters = new ArrayList<String>();
                                                                                                        parameters.add(pageContext.getAttribute(
                                                                                                                        "simpleNameAnagraficaObject").toString());
                                                                                                        parameters
                                                                                                                        .add(((ADecoratorPropertiesDefinition) pageContext
                                                                                                                                        .getAttribute("tipologiaDaVisualizzare"))
                                                                                                                                        .getShortName());
                                                                                                        pageContext.setAttribute("parameters", parameters);
                                                                        %>
                                                                        <dyna:edit tipologia="${tipologiaDaVisualizzare.object}" disabled="${disabled}"
                                                                                   propertyPath="anagraficadto.anagraficaProperties[${tipologiaDaVisualizzare.shortName}]"
                                                                                   ajaxValidation="validateAnagraficaProperties" hideLabel="${hideLabel}"
                                                                                   validationParams="${parameters}" visibility="${visibility}" lock="true"/>								

                                                                    </c:if>

                                                                </c:forEach>
                                                            </div>	
                                                        </div>	

                                                        <% } %>
                                                    </c:forEach>
                                                    <div class="dynaClear">&nbsp;</div>
                                                    <div class="jdyna-form-button">
                                                        <input id="submit_save" class="btn btn-primary" type="submit"
                                                               value="<fmt:message key="jsp.layout.hku.researcher.button.save"/>" />
                                                        <input type="submit" class="btn btn-default" name="cancel"
                                                               value="<fmt:message key="jsp.layout.hku.researcher.button.cancel"/>" />
                                                    </div>



                                                </div>
                                            </c:when>
                                            <c:otherwise>
                                                <div id="tabs-text-${area.id}" role="tabpanel" aria-labelledby="tabs-text-${area.id}-tab" class="tab-pane fade">
                                                    Saving data... tab data will be shown soon 
                                                </div> 
                                            </c:otherwise>
                                        </c:choose>

                                    </c:forEach>

                                </div>
                            </div>
                        </div>

                    </div>

                </form:form>

                <div id="alert_eperson_dialog"></div>
                <div id="nested_edit_dialog">&nbsp;</div>
                <div id="classificationtree_modal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title"></h4>
                            </div>
                            <div class="modal-body">
                                <div id="jstree_div"></div>         
                            </div>
                            <div class="modal-footer">

                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->


                </div><!-- /.modal -->
        </dspace:layout>

        <style>
            a#delete {
                display: inline-block;
                font-weight: 600;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                border: 1px solid transparent;
                padding: .625rem 1rem;
                font-size: 1rem;
                line-height: 1.5;
                border-radius: 50%;
                -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
                background-color: #f5365c;
                border-color: #f5365c;
                color: #fff;
                position: fixed;
                right: 6%;
            }

            .dynaLabel, .dynaLabelRequired {
                width: 100% !important;
                padding: 0 !important;
            }
            .argon_input input {
                display: block;
                width: 100%;
                height: 32px;
                padding: .625rem .75rem;
                font-size: 1rem;
                line-height: 1.2;
                color: #8898aa;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #cad1d7;
                border-radius: .25rem;
                -webkit-box-shadow: none;
                box-shadow: none;
                -webkit-transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
                transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
            }
            .custom-radio .custom-control-input~.custom-control-label {
                min-width: 100px;
            }
            body .box.expanded .dynaClear {
                   display: none;
            }
            body .box.expanded .dynaFieldValue table tr {
                    display: grid;
            }
            body .box.expanded .dynaFieldValue table tr input[type="checkbox"] {
                    margin-left: 0;
            }
            body .box.expanded .dynaFieldValue table tr input[type="file"]{
                       padding-bottom: 26px;
    font-size: 12px;
            }
            body .box.expanded .dynaFieldValue table tr input {
                width: 265px;
                display: block;
                height: 32px;
                padding: .625rem .75rem;
                font-size: 1rem;
                line-height: 1.2;
                color: #8898aa;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #cad1d7;
                border-radius: .25rem;
                -webkit-box-shadow: none;
                box-shadow: none;
                -webkit-transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
                transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
                margin-top: 5px;
            }
                    body img.calendar {
    display: inline;
    margin: 12px 0px 5px 12px;
    padding: 1px;
    clear: none;
    float: none;
    cursor: pointer;
    width: 18px;
    height: 18px;
}
span.fieldError, .errorMessage {
                    width: 100%;
            }
            span.fieldError img, .errorMessage img {
                    width: 12px;
            }
        </style>
        <script type="text/javascript"><!--

		var j = jQuery.noConflict();
    	    	
    // Setup the ajax indicator
    
    j('#ajaxBusy').css({
	    display:"none",
	    margin:"0px",
	    paddingLeft:"0px",
	    paddingRight:"0px",
	    paddingTop:"0px",
	    paddingBottom:"0px",
	    position:"absolute",
	    right:"3px",
	    top:"3px",
	    width:"auto"
    });

    j.ajaxSetup({
        beforeSend:function(){
            // show gif here, eg:
        	j('#ajaxBusy').show();
        },
        complete:function(){
            // hide gif here, eg:
            j("#ajaxBusy").hide();
        }
    });
    	    	
    	var activeTab = function(){
    		j(".box:not(.expanded)").accordion({
    			autoHeight: false,
    			navigation: true,
    			collapsible: true,
    			active: 0,
    			heightStyle: "content"
    		});
    		j(".box.expanded").accordion({
    			autoHeight: false,
    			navigation: true,
    			collapsible: true,
    			active: 0,
    			heightStyle: "content"
    		});
    		
    		var ajaxurlrelations = "<%=request.getContextPath()%>/cris/${specificPartPath}/viewNested.htm";
			j('.nestedinfo').each(function(){
				var id = j(this).html();
				j.ajax( {
					url : ajaxurlrelations,
					data : {																			
						"parentID" : ${anagraficadto.objectId},
						"typeNestedID" : id,
						"pageCurrent": j('#nested_'+id+"_pageCurrent").html(),
						"limit": j('#nested_'+id+"_limit").html(),
						"editmode": true,
						"totalHit": j('#nested_'+id+"_totalHit").html(),
						"admin": ${admin}
					},
					success : function(data) {																										
						j('#viewnested_'+id).html(data);
						var ajaxFunction = function(page){
							j.ajax( {
								url : ajaxurlrelations,
								data : {																			
									"parentID" : ${anagraficadto.objectId},
									"typeNestedID" : id,													
									"pageCurrent": page,
									"limit": j('#nested_'+id+"_limit").html(),
									"editmode": true,
									"totalHit": j('#nested_'+id+"_totalHit").html(),
									"admin": ${admin}
								},
								success : function(data) {									
									j('#viewnested_'+id).html(data);
									jQuery( "#ui-accordion" ).accordion( "resize" );
									postfunction();
								},
								error : function(data) {
								}
							});		
						};
						var postfunction = function(){
							j('#viewnested_'+id+' .nested_edit_button').parent().parent().mouseover(function(){
								j(this).toggleClass('ui-state-hover');
							});
							j('#viewnested_'+id+' .nested_edit_button').parent().parent().mouseout(function(){
								j(this).toggleClass('ui-state-hover');
							});
							j('#viewnested_'+id+' .nested_edit_button').click(function(){
								var ajaxurleditnested = 
									"<%= request.getContextPath() %>/cris/tools/${specificPartPath}/editNested.htm";
									j.ajax( {
										url : ajaxurleditnested,
										data : {
											"elementID": j(this).attr('id').substr(('nested_'+id+'_edit_').length),
											"parentID" : ${anagraficadto.objectId},
											"typeNestedID" : id,
											"editmode" : true,
											"admin": ${admin}
										},
										success : function(data) {
											j('#nested_edit_dialog').html(data);
											j('#nested_edit_dialog input:submit').button();
											var options = { 
											        target: '#viewnested_'+id,   // target element(s) to be updated with server response 
											        success: function(){ // post-submit callback
											        	j('#nested_edit_dialog').dialog("close");        
											        	postfunction();
										        	}
											};
											j('#nested_edit_form').ajaxForm(options); 
											j('#nested_edit_dialog').dialog("option",{title: 'Edit: '+j('#viewnested_'+id+' span.dynaLabel').html()});
											j('#nested_edit_dialog').dialog("open");
										},
										error : function(data) {
										}
									});	
							});
							j('#viewnested_'+id+' .nested_delete_button').click(function(){
								var ajaxurldeletenested = 
									"<%= request.getContextPath() %>/cris/tools/${specificPartPath}/deleteNested.htm";
									j.ajax( {
										url : ajaxurldeletenested,
										data : {
											"elementID": j(this).attr('id').substr(('nested_'+id+'_delete_').length),
											"parentID" : ${anagraficadto.objectId},
											"typeNestedID" : id,
											"editmode" : true,
											"admin": ${admin}
										},
										success : function(data) {
											j('#viewnested_'+id).html(data);
											postfunction();
										},
										error : function(data) {
										}
									});	
							});
							j('#viewnested_'+id+' .nested_preferred_button').click(function(){
								var ajaxurlpreferrednested = 
									"<%= request.getContextPath() %>/cris/tools/${specificPartPath}/preferredNested.htm";
									j.ajax( {
										url : ajaxurlpreferrednested,
										data : {
											"elementID": j(this).attr('id').substr(('nested_'+id+'_preferred_').length),
											"parentID" : ${anagraficadto.objectId},
											"typeNestedID" : id,
											"editmode" : true,
											"preferred" : true,
											"admin": ${admin}
										},
										success : function(data) {
											j('#viewnested_'+id).html(data);
											postfunction();
										},
										error : function(data) {
										}
									});	
							});
							j('#viewnested_'+id+' .nested_notpreferred_button').click(function(){
								var ajaxurlnotpreferrednested = 
									"<%= request.getContextPath() %>/cris/tools/${specificPartPath}/notPreferredNested.htm";
									j.ajax( {
										url : ajaxurlnotpreferrednested,
										data : {
											"elementID": j(this).attr('id').substr(('nested_'+id+'_notpreferred_').length),
											"parentID" : ${anagraficadto.objectId},
											"typeNestedID" : id,
											"editmode" : true,
											"preferred" : false,
											"admin": ${admin}
										},
										success : function(data) {
											j('#viewnested_'+id).html(data);
											postfunction();
										},
										error : function(data) {
										}
									});	
							});
							j('#nested_'+id+'_addbutton').click(function(){
								var ajaxurladdnested = 
									"<%= request.getContextPath() %>/cris/tools/${specificPartPath}/addNested.htm";
									j.ajax( {
										url : ajaxurladdnested,
										data : {			
											"parentID" : ${anagraficadto.objectId},
											"typeNestedID" : id,
											"admin": ${admin}
										},
										success : function(data) {
											j('#nested_edit_dialog').html(data);
											j('#nested_edit_dialog input:submit').button();
											var options = { 
											        target: '#viewnested_'+id,   // target element(s) to be updated with server response 
											        success: function(){ // post-submit callback
											        	j('#nested_edit_dialog').dialog("close");        
											        	postfunction();
										        	}
											};
											j('#nested_edit_form').ajaxForm(options); 
											j('#nested_edit_dialog').dialog("option",{title: 'Add new: '+j('#viewnested_'+id+' span.dynaLabel').html()});
											j('#nested_edit_dialog').dialog("open");
										},
										error : function(data) {
										}
									});	
							});
							j('#nested_'+id+'_next').click(
									function() {
								    	ajaxFunction(parseInt(j('#nested_'+id+"_pageCurrent").html())+1);
										
							});
							j('#nested_'+id+'_prev').click(
									function() {
										ajaxFunction(parseInt(j('#nested_'+id+"_pageCurrent").html())-1);
							});
							j('.nested_'+id+'_nextprev').click(
									function(){
										ajaxFunction(j(this).attr('id').substr(('nested_'+id+'_nextprev_').length));
							});
						};
						postfunction();
					},
					error : function(data) {
					}
				});
			});
    	};
    	
		j(document).ready(function()
		{
			j(".jdynadropdown").select2();
			
			j("#alert_eperson_dialog").dialog({ autoOpen: false });
				
			 j("#eperson").autocomplete({
					delay: 500,
		            source: function( request, response ) {	
		                j.ajax({
		                    url: "epersons.json",
		                    dataType: "json", 
		                    data : {												
								"query":  request.term						
							},                  
		                    success: function( data ) {
		                        response( j.map( data.epersons, function( item ) {
		                            return {
		                                label: item.lastName+", "+ item.firstName +" (" + item.email + ")",
		                                value: item.id,
		                                owneredRP: item.rpID,
		                                fullNameRP: item.fullNameRPOwnered
		                            }
		                        }));
		                    }
		                });
		            },		            
		            minLength: 2,
		            select: function( event, ui ) {
		            	if (ui == null || ui.item == null) return false;
		            	
		            	var valueCurrentEperson = j("#epersonID").val();
		            	
		            	if(ui.item.owneredRP!=0 && (ui.item.owneredRP!=${researcher.id} && ui.item.owneredRP!=valueCurrentEperson) ) {
		            		j("#alert_eperson_dialog").dialog("open");
		            		j("#alert_eperson_dialog").html(" ");
		            		j("#alert_eperson_dialog").append("${messagealerteperson}");
		            		j("#alert_eperson_dialog").append("<a target=\"_blank\" href=\"${root}/cris/rp/details.htm?id=" + ui.item.owneredRP + "\">"+ ui.item.fullNameRP +"</a>");
		            	}
		            	else {
			            	var div = j('#epersonDIV');
			            	div.html(' ');
							var _input = j( "<input type='hidden' id='epersonID' name='epersonID'>" ).val(ui.item.value);
			            	var display = j("<span>").text(ui.item.label);
			            	var img = j('<img class="jdyna-icon jdyna-action-icon jdyna-delete-button" src="<%=request.getContextPath()%>/image/jdyna/delete_icon.gif">');
		                     img.click(function(){                     	
		                      	div.html(' ');
		                      	var _input = j( "<input type='hidden' id='epersonID' name='epersonID'>" ).val("");                     	
		                      	div.append(_input);                     	
		                  	 });
			            	 div.append(_input);
			            	 div.append(display);	                     
			            	 display.append("&nbsp;")
		                     display.append(img);
		                     div.effect('highlight');
			            	j('#eperson').val('');
		            	}
		            	return false;
		            },
		            open: function() {
		                j( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
		            },
		            close: function() {
		                j( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
		            }
		        });
			 
			j('#nested_edit_dialog').dialog({
				autoOpen: false,
				modal: true,
				width: 720
			});			
			j('input:submit').button();
			j('#delete').button();
			j("#tabs").tabs({
				active: ${currTabIdx-1},
				"activate": function( event, ui ) {
					j("li.ui-tabs-active").toggleClass("ui-tabs-active ui-state-active active");
					j('#newTabId').val(j(ui.newTab).attr('id').substr(8));
					j('#submit_save').click();
				},
				"beforeActivate": function( event, ui ) {
	   			 j("li.active").toggleClass("active");
				},
		   		"create": function( event, ui ) {
		               j("div.ui-tabs").toggleClass("ui-tabs ui-widget ui-widget-content ui-corner-all tabbable");
		               j("ul.ui-tabs-nav").toggleClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all nav nav-tabs");
		               j("li.ui-tabs-active").toggleClass("ui-state-default ui-corner-top ui-tabs-active ui-state-active active");
		               j("li.ui-state-default").toggleClass("ui-state-default ui-corner-top");
		               j("div.ui-tabs-panel").toggleClass("ui-tabs-panel ui-widget-content ui-corner-bottom tab-content with-padding");
		        }
			});
			
			j('.navigation-tabs:not(.expanded)').accordion({
				collapsible: true,
				active: 0,
				event: "click mouseover"
			});
			j('.navigation-tabs.expanded').accordion({
				collapsible: true,
				active: 0,
				event: "click mouseover"
			});
			
			activeTab();
			activePointer();
			activeCustomPointer();
			activeTree();
			
		});

		
		function updateSelectedPointer( id, count, repeatable, displayvalue, identifiervalue ) {
			if(identifiervalue!=null) {
            	if (!repeatable){
            		j("#pointer_"+id+"_selected").html(' ');
            		count = 0;
            	}
				var div = j('<div id="pointer_'+id+'_selected_'+count+'" class="jdyna-pointer-value">');
            	var img = j('<img class="jdyna-icon jdyna-action-icon jdyna-delete-button" src="<%= request.getContextPath() %>/image/jdyna/delete_icon.gif">');
				var path = j('#pointer_'+id+'_path').html();
				var input = j( "<input type='hidden' id='"+path+"["+count+"]"+"' name='"+path+"["+count+"]"+"'>" ).val(identifiervalue);
            	var display = j("<span>").text(displayvalue);
            	var selectedDiv = j("#pointer_"+id+"_selected");
            	selectedDiv.append(div);
            	div.append(input);
            	div.append(display);
            	div.append("&nbsp;")
            	div.append(img);
            	div.effect('highlight');
            	j('#pointer_'+id+'_tot').html(count+1);
            	img.click(function(){
                	if (!repeatable){
                		selectedDiv.html(' ');
                		var _input = j( "<input type='hidden' id='_"+path+"[0]"+"' name='_"+path+"[0]"+"'>" ).val('true');
                		selectedDiv.append(_input);
                	}
                	else
                	{
                		j('#pointer_'+id+'_selected_'+count).remove();
                	}
            	});
            	if (!repeatable){
            		var _input = j( "<input type='hidden' id='_"+path+"[0]"+"' name='_"+path+"[0]"+"'>" ).val('true');
            		selectedDiv.append(_input);
            	}            	
			}
        }
		
		var activePointer = function() {
					 			
			 j(".pointerinfo").each(function(){
				 var id = j(this).html();
				 j('#pointer_'+id+'_selected div img').click(
						 function(){
					j(this).parent().remove();		 
				 });
				 var repeatable = j('#pointer_'+id+'_repeatable').html() == 'true';
				 j("#searchboxpointer_"+id).autocomplete({
					delay: 500,
		            source: function( request, response ) {	
		                j.ajax({
		                    url: "searchPointer.htm",
		                    dataType: "json", 
		                    data : {																			
								"elementID" : id,								
								"query":  request.term						
							},                  
		                    success: function( data ) {
		                        response( j.map( data.pointers, function( item ) {
		                            return {
		                                label: item.display,
		                                value: item.id
		                            }
		                        }));
		                    }
		                });
		            },		            
		            minLength: 2,
		            select: function( event, ui ) {
		            	if (ui == null || ui.item == null) return false;
		            	updateSelectedPointer( id, j('#pointer_'+id+'_tot').html(), repeatable, 
		                		ui.item.label, ui.item.value);
		            	j('#searchboxpointer_'+id).val('');
		            	return false;
		            },
		            open: function() {
		                j( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
		            },
		            close: function() {
		                j( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
		            }
		        });
		});

		}
		
		var activeTree = function() {
			 j(".classificationtreeinfo").each(function(){
				 var id = j(this).html();
				 var treeObjectType = j('#classificationtree_'+id+'_treeObjectType').html();
				 var rootResearchObject = j('#classificationtree_'+id+'_rootResearchObject').html();
				 var metadataBuilderTree = j('#classificationtree_'+id+'_metadataBuilderTree').html();
				 var chooseOnlyLeaves = j('#classificationtree_'+id+'_chooseOnlyLeaves').html();
				 var repeatable = j('#classificationtree_'+id+'_repeatable').html();
				 var propertyPath = j('#classificationtree_'+id+'_propertyPath').html();
				
				 j('#classificationtree_'+id+'_selected div img').click(
						 function(){
							 j(this).parent().remove();
				 });
				 j('#classificationtree_'+id+'_btn').click(
				 function(event){
			     j('#classificationtree_modal').modal();	 
				 event.preventDefault()
				 j('#classificationtree_modal .modal-body').html('');
				 j('#classificationtree_modal .modal-footer').html('');
				 
				 j('#classificationtree_modal .modal-body').append("<div id=\"jstree_div\"></div>")
				 j('#classificationtree_modal .modal-footer').append("<button type=\"button\" id=\"btn-close-modal-classificationtree\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>")
				 j('#classificationtree_modal .modal-footer').append("<button type=\"button\" id=\"button-save-classificationtree_"+propertyPath+"\" class=\"btn btn-primary btn-classificationtree-save\">Done</button>")
				 				
				j('.btn-classificationtree-save').click(
						 function(event){
							  var propertyPath = j(this).attr("id");
							  var realPP = propertyPath.replace('button-save-classificationtree_anagraficadto.','');
							  var n = j('#classificationtree_modal .modal-body').find(".jstree-clicked");
							  if(n.length>0) {
								  if(n.length>1) {									  
									 j("#classificationtree_"+id+"_selected").html('');
									 j.each(n, function( index, value ) {
										 var idValue = j(this).parent().attr("id");
										 var labelValue = j(this).text();				
										 var div = j("<div id=\"classificationtree_"+ id +"_selected_"+index+"\">");
										 var input = j("<input type=\"hidden\" id=\""+realPP+"["+index+"]\" name=\""+realPP+"["+index+"]\">").val(idValue);										 
										 var label = j("<span>").text(labelValue);
										 div.append(input);										 
										 div.append(label);
										 j("#classificationtree_"+id+"_selected").append(div);
										 
							           	 var img = j("<img class=\"jdyna-icon jdyna-action-icon jdyna-delete-button\" src=\"<%=request.getContextPath()%>/image/jdyna/delete_icon.gif\">");
							             j("#classificationtree_"+id+"_selected_"+index).append(img);
						                 img.click(function(){                     	
						                 	j("#classificationtree_"+id+"_selected_"+index).html('');
						                 	var _input = j( "<input type='hidden' id='_"+realPP+"["+index+"]"+"' name='_"+realPP+"["+index+"]"+"'>" ).val('true');
						                 	j("#classificationtree_"+id+"_selected_"+index).append(_input);             
						                 });
									 });
								  }
								  else {
									var idValue = j(n).parent().attr("id");
									var labelValue = j(n).text();
									j("#classificationtree_"+id+"_selected").html('');
									var div = j("<div id=\"classificationtree_"+ id +"_selected_0\">");
									var input = j("<input type=\"hidden\" id=\""+realPP+"[0]\" name=\""+realPP+"[0]\">").val(idValue);
									
									var label = j("<span>").text(labelValue);
									div.append(input);									
									div.append(label);
									j("#classificationtree_"+id+"_selected").append(div);
					            	var img = j("<img class=\"jdyna-icon jdyna-action-icon jdyna-delete-button\" src=\"<%=request.getContextPath()%>/image/jdyna/delete_icon.gif\">");
					            	j("#classificationtree_"+id+"_selected").append(img);
				                     img.click(function(){                     	
				                        j("#classificationtree_"+id+"_selected").html('');
				                        var _input = j( "<input type='hidden' id='_"+realPP+"[0]"+"' name='_"+realPP+"[0]"+"'>" ).val('true');
				                      	j("#classificationtree_"+id+"_selected").append(_input);                     	
				                  	 });
								  }
							  }
							  
							  j("#classificationtree_modal").modal("hide");
						 }
						 
				);

				 j('#jstree_div').jstree({
					 'core' : {
					   'data' : {
					     'url': 'buildClassificationTree.htm?method=buildtree&id='+rootResearchObject+'&type='+treeObjectType+'&builder='+metadataBuilderTree,						 
					   	}
					  },
				 	  "checkbox" : {
				      	"keep_selected_style" : false
				 	  },
			    	  "types" : {
			    	 	"default" : {
			    	 		"icon" : "fa fa-flash"
			    	 	}
			    	  },			    	  
		    	 	  "plugins" : [ "checkbox", "types"]		    	 	 
				});

			 });
		 });
			 
		}

		
		var activeEperson = function(id) {
			j.ajax({
                url: "eperson.json",
                dataType: "json", 
                data : {									
					"id":  id						
				},                  
                success: function( data ) {      
                	
                	 var div = j('#epersonDIV');
                     var span = j("<span>").text(data.epersons[0].lastName +", "+ data.epersons[0].firstName +" ("+data.epersons[0].email+")");
                     
                     var img = j('<img class="jdyna-icon jdyna-action-icon jdyna-delete-button" src="<%= request.getContextPath() %>/image/jdyna/delete_icon.gif">');
                     img.click(function(){                     	
                     	div.html(' ');
                     	var _input = j( "<input type='hidden' id='epersonID' name='epersonID'>" ).val("");                     	
                     	div.append(_input);                     	
                 	 });
                     
                     div.append(span); 
                     span.append("&nbsp;")
                     span.append(img);
                     div.effect('highlight');
                }
            });			
		}
		
		function updateSelectedCustomPointer( id, count, repeatable, displayvalue, identifiervalue ) {
			if(identifiervalue!=null) {
            	if (!repeatable){
            		j("#custompointer_"+id+"_selected").html(' ');
            		count = 0;
            	}
				var div = j('<div id="custompointer_'+id+'_selected_'+count+'" class="jdyna-pointer-value">');
            	var img = j('<img class="jdyna-icon jdyna-action-icon jdyna-delete-button" src="<%= request.getContextPath() %>/image/jdyna/delete_icon.gif">');
				var path = j('#custompointer_'+id+'_path').html();
				var input = j( "<input type='hidden' id='"+path+"["+count+"]"+"' name='"+path+"["+count+"]"+"'>" ).val(identifiervalue);
            	var display = j("<span>").text(displayvalue);
            	var selectedDiv = j("#custompointer_"+id+"_selected");
            	selectedDiv.append(div);
            	div.append(input);
            	div.append(display);
            	div.append("&nbsp;")
            	div.append(img);
            	div.effect('highlight');
            	j('#custompointer_'+id+'_tot').html(count+1);
            	img.click(function(){
                	if (!repeatable){
                		selectedDiv.html(' ');
                		var _input = j( "<input type='hidden' id='_"+path+"[0]"+"' name='_"+path+"[0]"+"'>" ).val('true');
                		selectedDiv.append(_input);
                	}
                	else
                	{
                		j('#custompointer_'+id+'_selected_'+count).remove();
                	}
            	});
            	if (!repeatable){
            		var _input = j( "<input type='hidden' id='_"+path+"[0]"+"' name='_"+path+"[0]"+"'>" ).val('true');
            		selectedDiv.append(_input);
            	}            	
			}
        }
		
		var activeCustomPointer = function() {
 			
			 j(".custompointerinfo").each(function(){
				 var id = j(this).html();
				 j('#custompointer_'+id+'_selected div img').click(
						 function(){
					j(this).parent().remove();		 
				 });
				 var repeatable = j('#custompointer_'+id+'_repeatable').html() == 'true';
				 var type = j('#custompointer_'+id+'_type').html();
				 j("#searchboxcustompointer_"+id).autocomplete({
					delay: 500,
		            source: function( request, response ) {	
		                j.ajax({
		                    url: "searchCustomPointer.htm",
		                    dataType: "json", 
		                    data : {																			
								"elementID" : id,								
								"query":  request.term,
								"type": type
							},                  
		                    success: function( data ) {
		                        response( j.map( data.pointers, function( item ) {
		                            return {
		                                label: item.display,
		                                identifier: item.identifyingValue
		                            }
		                        }));
		                    }
		                });
		            },		            
		            minLength: 2,
		            select: function( event, ui ) {
		            	if (ui == null || ui.item == null) return false;
		            	updateSelectedCustomPointer( id, j('#custompointer_'+id+'_tot').html(), repeatable, 
		                		ui.item.label, ui.item.identifier);
		            	j('#searchboxcustompointer_'+id).val('');
		            	return false;
		            },
		            open: function() {
		                j( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
		            },
		            close: function() {
		                j( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
		            }
		        });
		});

		}

		-->
	</script>