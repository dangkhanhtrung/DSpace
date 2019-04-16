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

        <%@page import="it.cilea.osd.jdyna.model.AccessLevelConstants"%>
        <%@ page import="java.net.URL"%>
        <%@ page import="org.dspace.eperson.EPerson" %>

        <%
            // Is anyone logged in?
            EPerson user = (EPerson) request.getAttribute("dspace.current.user");
            // Is the logged in user an admin
            Boolean admin = (Boolean)request.getAttribute("isAdmin");
            boolean isAdmin = (admin == null ? false : admin.booleanValue());
            Locale sessionLocale = UIUtil.getSessionLocale(request);
                String currLocale = null;
                if (sessionLocale != null) {
                        currLocale = sessionLocale.toString();
                }
        %>
        <c:set var="root"><%=request.getContextPath()%></c:set>
        <c:set var="admin"><%=isAdmin%></c:set>
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

        <c:set var="disabledfield" value=" readonly='readonly'"></c:set>

        <c:set var="dspace.layout.head.last" scope="request">	
            <style type="text/css">@import url(<%=request.getContextPath()%>/js/jscalendar/calendar-blue.css );</style>
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
        <dspace:layout title="${entity.typo.label}" style="submission" navbar="off">

            <h1>${entity.name} <c:if test="${admin}"> <a id="delete" href="delete.htm?id=${entity.id}"><span class="fa fa-trash"></span></a></c:if></h1>


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
                                        </span>
                                    </spring:bind>

                                    <span class="cris-record-info-status"><b><fmt:message
                                                key="jsp.layout.hku.label.status" /></b></span>

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="custom-control custom-radio my-3">
                                                <input class="custom-control-input" id="${inputName} + '_1'" name="${inputName}" type="radio" value="false" <c:if test="${inputValue==false}">checked="checked"</c:if> />
                                                <label for="${inputName} + '_1'" class="custom-control-label">
                                                    <fmt:message key="jsp.layout.hku.label.status.0" />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="custom-control custom-radio my-3">
                                                <input class="custom-control-input" id="${inputName} + '_2'" name="${inputName}" type="radio" value="true" <c:if test="${inputValue==true}">checked="checked"</c:if> >
                                                <label for="${inputName} + '_2'" class="custom-control-label">
                                                    <fmt:message key="jsp.layout.hku.label.status.1" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                <p style="color: red; text-decoration: underline; font-weight: bold; text-align: center;"><fmt:message key='jsp.rp.edit-tips'/></p>

                                </div>

                            </div>

                            <div class="col-md-6">

                                <div class="cris-edit-record-info" style="width: 100%;">
                                    <c:set var="disabled" value=" readonly='readonly'"/>
                                    <c:choose>
                                        <c:when test="${admin}">
                                            <div class="form-group argon_input">
                                                <dyna:text labelKey="jsp.cris.detail.info.sourceid" propertyPath="anagraficadto.sourceID" visibility="false"/>
                                            </div>
                                            <div class="dynaClear">&nbsp;</div>
                                            <div class="form-group argon_input">
                                                <dyna:text labelKey="jsp.cris.detail.info.sourceref" propertyPath="anagraficadto.sourceRef" visibility="false"/>
                                            </div>

                                            <div class="dynaClear">&nbsp;</div>
                                        </c:when>
                                        <c:otherwise>
                                            <span class="cris-record-info-sourceid"><b><fmt:message key="jsp.cris.detail.info.sourceid" /></b> ${!empty anagraficadto.sourceID?anagraficadto.sourceID:i18nnone}</span>
                                            <span class="cris-record-info-sourceref"><b><fmt:message key="jsp.cris.detail.info.sourceref" /></b> ${!empty anagraficadto.sourceRef?anagraficadto.sourceRef:i18nnone}</span>
                                                </c:otherwise>
                                            </c:choose>
                                    <span class="cris-record-info-created"><b><fmt:message key="jsp.cris.detail.info.created" /></b> ${anagraficadto.timeStampCreated}</span>
                                    <span class="cris-record-info-updated"><b><fmt:message key="jsp.cris.detail.info.updated" /></b> ${anagraficadto.timeStampModified}</span>
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
                                                                                       validationParams="${parameters}" visibility="${visibility}"/>

                                                                        </c:if>

                                                                    </c:forEach>
                                                                </div>	
                                                            </div>	

                                                            <% } %>
                                                        </c:forEach>
                                                        <br/>
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
            </div>
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