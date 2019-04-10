<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>
<%--
  - UI page for start of a submission with lookup on external sources.
  -
  - Required attributes:
  -    collections - Array of collection objects to show in the drop-down.
           collectionID - the collection ID of preference for the user
           identifiers2providers
       searchProviders
--%>

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>

<%@ page import="org.dspace.content.Collection" %>
<%@ page import="org.dspace.app.util.CollectionUtils" %>
<%@ page import="org.dspace.app.util.CollectionsTree" %>
<%@ page import="java.lang.Boolean" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Map" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core"
           prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"
           prefix="fmt" %>

<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%
    String contextPath = "/dspace-jspui";
    request.setAttribute("LanguageSwitch", "hide");

    //get collections to choose from
    Collection[] collections
            = (Collection[]) request.getAttribute("collections");
    CollectionsTree tree = CollectionUtils.getCollectionsTree(collections, false);

    //get collection id from the collection home
    int collection_id = (Integer) request.getAttribute("collection_id");

    //check if we need to display the "no collection selected" error
    Boolean noCollection = (Boolean) request.getAttribute("no.collection");
    Boolean nosuuid = (Boolean) request.getAttribute("nouuid");
    Boolean expired = (Boolean) request.getAttribute("expired");

    Map<String, List<String>> identifiers2providers = (Map<String, List<String>>) request.getAttribute("identifiers2providers");
    List<String> searchProviders = (List<String>) request.getAttribute("searchProviders");
    List<String> fileLoaders = (List<String>) request.getAttribute("fileLoaders");
    List<String> identifiers = (List<String>) request.getAttribute("identifiers");
    String uuid = (String) request.getAttribute("s_uuid");
%>

<%!
    void generateCollectionTree(javax.servlet.jsp.JspWriter out, CollectionsTree tree)
            throws java.io.IOException {
        if (tree == null) {
            return;
        }
        if (tree.getCurrent() != null) {
            out.print("<optgroup label=\"" + tree.getCurrent().getName() + "\">");
        }
        if (tree.getCollections() != null) {
            for (Collection col : tree.getCollections()) {
                out.print("<option value=\"" + col.getID() + "\">" + col.getName() + "</option>");
            }
        }
        if (tree.getSubTree() != null) {
            for (CollectionsTree subTree : tree.getSubTree()) {
                generateCollectionTree(out, subTree);
            }
        }
        if (tree.getCurrent() != null) {
            out.print("</optgroup>");
        }
    }
%>

<c:set var="dspace.layout.head" scope="request">
    <style type="text/css">

        #link-ricerca-identificatore {cursor: pointer; font-weight: bold; color: #FF6600;}
        .sl-result {padding: 10px;}
        .sl-result:HOVER {background-color: #5C9CCC;}
        .sl-result-title, .sl-result-authors, .sl-result-date {display: block;}
        .sl-result-title {font-weight: bold;}
        .sl-result-authors {font-style: italic;}
        .sl-result-date {margin-bottom: 10px;}
        .invalid-value {border: 1px solid #FF6600;}
        .img-thumbnail {height: 35px !important;}
    </style>	
    <script type='text/javascript'>var dspaceContextPath = "<%=request.getContextPath()%>";</script>		
</c:set>
<c:set var="dspace.layout.head.last" scope="request">		
    <script type="text/javascript" src="<%= request.getContextPath()%>/static/js/submission-lookup.js"></script>
</c:set>

<dspace:layout style="submission" locbar="off"
               navbar="off"
               titlekey="jsp.submit.start-lookup-submission.title"
               nocache="true">

    <h1><fmt:message key="jsp.submit.start-lookup-submission.heading"/></h1>
    <div id="jserrormessage" style="display: none"><fmt:message key="jsp.submit.start-lookup-submission.js.errormessage"/></div>
    <div id="jsseedetailsbuttonmessage" style="display: none"><fmt:message key="jsp.submit.start-lookup-submission.js.detailsbuttonmessage"/></div>
    <div id="jsfilldatabuttonmessage" style="display: none"><fmt:message key="jsp.submit.start-lookup-submission.js.filldataandstartbuttonmessage"/></div>

    <%  if (collections.length > 0) {
            //if no collection was selected, display an error
            if ((noCollection != null) && (noCollection.booleanValue() == true)) {
    %>
    <div class="alert alert-warning">
        <p><fmt:message key="jsp.submit.start-lookup-submission.no-collection"/></p>
    </div>
    <%
        }
        //if no collection was selected, display an error
        if ((nosuuid != null) && (nosuuid.booleanValue() == true)) {
    %>
    <div class="alert alert-warning">
        <p><fmt:message key="jsp.submit.start-lookup-submission.nosuuid"/></p>
    </div>
    <%
        }
        //if no collection was selected, display an error
        if ((expired != null) && (expired.booleanValue() == true)) {
    %>
    <div class="alert alert-warning">
        <p><fmt:message key="jsp.submit.start-lookup-submission.expired"/></p>
    </div>
    <%
        }
    %>   
    <div class="my_tabs">
        <div class="nav-wrapper">
            <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text" role="tablist">
                <li class="nav-item">
                    <a class="nav-link mb-sm-3 mb-md-0 active" id="tabs-text-1-tab" data-toggle="tab" href="#tabs-text-1" role="tab" aria-controls="tabs-text-1" aria-selected="true">
                        <fmt:message key="jsp.submit.start-lookup-submission.tabs.search" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-toggle="tab" href="#tabs-text-2" role="tab" aria-controls="tabs-text-2" aria-selected="false">
                        <fmt:message key="jsp.submit.start-lookup-submission.tabs.result" />
                    </a>
                </li>
            </ul>
        </div>
        <div class="card shadow">
            <div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                        <div id="tabs-search">
                            <!-- da qui -->
                            <div class="panel-group" id="accordion">
                                <div class="panel panel-default">
                                    <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                        <h6 class="panel-title">
                                            <a>
                                                <i span class="fa fa-chevron-down"></i> <fmt:message key="jsp.submit.start-lookup-submission.manual-submission"/>
                                            </a>
                                        </h6>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse in">
                                        <div class="panel-body">
                                            <div id="manual-submission">
                                                <form class="form-horizontal" id="form-submission" action="" method="post">
                                                    <div class="form-group">
                                                        <label for="select-collection-manual" class="col-sm-2 control-label"><fmt:message key="jsp.submit.start-lookup-submission.select.collection.label"/></label>
                                                        <div class="col-sm-7">
                                                            <dspace:selectcollection klass="form-control" id="select-collection-manual" collection="<%= collection_id%>"/>
                                                        </div>
                                                        <button class="btn btn-success" id="manual-submission-button" type="button"><fmt:message key="jsp.submit.start-lookup-submission.button.manual-submission"/> </button>
                                                    </div>
                                                    <input type="hidden" id="iuuid" name="iuuid" value=""/>
                                                    <input type="hidden" id="fuuid" name="fuuid" value=""/>
                                                    <input type="hidden" id="suuid" name="suuid" value="<%= uuid%>"/>
                                                    <input type="hidden" id="collectionid" name="collectionid" value=""/>
                                                    <input type="hidden" id="iuuid_batch" name="iuuid_batch" value=""/>
                                                    <input type="hidden" id="colid_batch" name="colid_batch" value=""/>
                                                    <input type="hidden" id="filePath" name="filePath" value=""/>
                                                    <input type="hidden" id="filename" name="filename" value=""/>					
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                    
                                                    
                                       <%
                                if (searchProviders != null && searchProviders.size() > 0) {
                            %>
                            <div class="panel panel-default">	
                                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    <h6 class="panel-title">
                                        <a>
                                            <i span class="fa fa-chevron-right"></i> <fmt:message key="jsp.submit.start-lookup-submission.search"/>
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <form id="form-submission-search" action="" method="post">
                                            <input type="hidden" id="suuid-search" name="suuid" value="<%= uuid%>"/>
                                            <input type="hidden" id="iuuid-search" name="iuuid" value=""/>
                                            <input type="hidden" id="fuuid-search" name="fuuid" value=""/>
                                            <input type="hidden" id="collectionid-search" name="collectionid" value=""/>
                                            <%
                                                for (String provider : searchProviders) {
                                            %>
                                            <img class="img-thumbnail" src="<%= request.getContextPath()%>/image/submission-lookup-small-<%= provider%>.jpg" />
                                            <%
                                                }
                                            %>
                                            <p class="help-block"><fmt:message key="jsp.submit.start-lookup-submission.search.hints"/></p>
                                            <div class="form-group">
                                                <label for="search_title"><fmt:message key="jsp.submit.start-lookup-submission.search.title"/>:</label> 
                                                <textarea class="form-control submission-lookup-search" name="search_title" id="search_title" cols="50" row="4"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="search_year"><fmt:message key="jsp.submit.start-lookup-submission.search.year"/>:</label> 
                                                <input class="form-control submission-lookup-search" type="text" size="7" name="search_year" id="search_year" />
                                            </div>

                                            <div class="form-group">
                                                <label for="search_authors"><fmt:message key="jsp.submit.start-lookup-submission.search.authors"/>:</label> 
                                                <textarea class="form-control submission-lookup-search" name="search_authors" id="search_authors"cols="50" row="4"></textarea>
                                            </div>

                                            <div class="row">			
                                                <button type="button" class="btn btn-primary col-md-2 pull-right" id="search_go"><fmt:message key="jsp.submit.start-lookup-submission.search-go"/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <% } %>	






                            <% if (identifiers != null && identifiers.size() > 0) {
                            %>
                            <div class="panel panel-default">
                                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                    <h6 class="panel-title">
                                        <a>
                                            <i span class="fa fa-chevron-right"></i> <fmt:message key="jsp.submit.start-lookup-submission.identifiers"/>
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <form class="form-horizontal" id="form-submission-identifier" action="" method="post">
                                            <input type="hidden" id="suuid-identifier" name="suuid" value="<%= uuid%>"/>
                                            <input type="hidden" id="iuuid-identifier" name="iuuid" value=""/>
                                            <input type="hidden" id="fuuid-identifier" name="fuuid" value=""/>
                                            <input type="hidden" id="collectionid-identifier" name="collectionid" value=""/>
                                            <p class="help-block"><fmt:message key="jsp.submit.start-lookup-submission.identifiers.hints"/></p>
                                            <%
                                                for (String identifier : identifiers) {
                                            %>
                                            <c:set var="identifier"><%= identifier%></c:set>
                                                <div class="form-group">
                                                    <span class="col-md-3">
                                                        <label for="identifier_<%= identifier%>"><span class="submission-lookup-label"><fmt:message key="jsp.submit.start-lookup-submission.identifier-${identifier}"/>:</span>
                                                    </label>
                                                </span>
                                                <span class="col-md-9">		
                                                    <%
                                                        for (String provider : identifiers2providers.get(identifier)) {
                                                    %>
                                                    <img class="img-thumbnail" src="<%= request.getContextPath()%>/image/submission-lookup-small-<%= provider%>.jpg" />
                                                    <%
                                                        }
                                                    %>
                                                </span>	 
                                                <span class="clearfix"></span>
                                                <span class="col-md-3 help-block submission-lookup-hint"><fmt:message key="jsp.submit.start-lookup-submission.identifier-${identifier}.hint"/></span></label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control  submission-lookup-identifier" name="identifier_<%= identifier%>" id="identifier_<%= identifier%>" />
                                                </div>
                                            </div><%
                                                } %>				
                                            <button class="btn btn-primary col-md-2 pull-right" type="button" id="lookup_idenfifiers"><fmt:message key="jsp.submit.start-lookup-submission.identifier.lookup"/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <%

                                } %>







                            <% if (fileLoaders != null && fileLoaders.size() > 0) {
                            %>
                            <div class="panel panel-default">
                                <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                                    <h6 class="panel-title">
                                        <a>
                                            <i span class="fa fa-chevron-right"></i> <fmt:message key="jsp.submit.start-lookup-submission.byfile"/>
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapseFour" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <form class="form-horizontal" id="form-submission-loader" action="" method="post">
                                            <input type="hidden" id="suuid-loader" name="suuid" value="<%= uuid%>"/>
                                            <input type="hidden" id="iuuid-loader" name="iuuid" value=""/>
                                            <input type="hidden" id="fuuid-loader" name="fuuid" value=""/>
                                            <input type="hidden" id="collectionid-loader" name="collectionid" value=""/>

                                            <p class="help-block"><fmt:message key="jsp.submit.start-lookup-submission.byfile.hints"/></p>

                                            <div class="form-group">
                                                <label class="col-md-3" for="provider_loader"><fmt:message key="jsp.submit.start-lookup-submission.byfile.chooseprovider"/>:</label>
                                                <div class="col-md-6">
                                                    <select class="form-control submission-file-loader" name="provider_loader" id="provider_loader">
                                                        <option value="-1"><fmt:message key="jsp.submit.start-lookup-submission.select.fileformat.defaultoption"/></option>
                                                        <%
                                                            for (String dataLoader : fileLoaders) {
                                                                String fileLoaderKey = "jsp.submit.start-lookup-submission.select.fileformat." + dataLoader;
                                                        %>
                                                        <option value="<%= dataLoader%>"><fmt:message key="<%= fileLoaderKey%>"/></option>
                                                        <%
                                                            }
                                                        %>
                                                    </select> 
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3" for="file_upload"><fmt:message key="jsp.submit.start-lookup-submission.byfile.file"/>:</label>
                                                <div class="col-md-6"> 
                                                    <input class="submission-file-loader" type="file" name="file_upload" id="file_upload" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-md-offset-3 col-md-6">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input class="submission-file-loader submission-preview-loader" type="checkbox" name="preview_loader" id="preview_loader" value="<%= Boolean.TRUE%>"/><fmt:message key="jsp.submit.start-lookup-submission.byfile.filepreview"/>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group" id="select-collection-file-div">
                                                <label class="col-md-3" for="select-collection-file"><fmt:message key="jsp.submit.start-lookup-submission.byfile.filecollection"/>:</label>
                                                <div class="col-md-6">
                                                    <dspace:selectcollection klass="form-control submission-file-loader" name="select-collection-file" id="select-collection-file" collection="<%= collection_id%>"/>
                                                </div>
                                            </div>
                                            <button class="btn btn-primary col-md-2 pull-right" type="button" id="loadfile_go"><fmt:message key="jsp.submit.start-lookup-submission.byfile.process"/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <%

        } %>




        
        
                            </div>


                            
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
                        <%
                            if ((searchProviders != null && searchProviders.size() > 0) || (identifiers != null && identifiers.size() > 0)) {
                        %>
                        <div id="tabs-result">
                            <div id="empty-result">
                                <p class="alert alert-warning"><fmt:message key="jsp.submit.start-lookup-submission.noresult"/></p>
                                <div id="no_result_manual_submission"></div>
                            </div>
                            <div id="result-form">
                                <form class="form-horizontal" id="form-submission-identifiers" action="" method="post">
                                    <div class="form-group">
                                        <label for="select-collection-manual" class="col-sm-2 control-label"><fmt:message key="jsp.submit.start-lookup-submission.select.collection.label"/></label>
                                        <div class="col-sm-7">
                                            <dspace:selectcollection klass="form-control" id="select-collection-identifier" collection="<%= collection_id%>"/>
                                        </div>
                                        <button class="btn btn-success" id="identifier-submission-button" type="button"><fmt:message key="jsp.submit.general.submit"/> </button>
                                    </div>
                                    <input type="hidden" id="iuuid" name="iuuid" value=""/>
                                    <input type="hidden" id="fuuid" name="fuuid" value=""/>
                                    <input type="hidden" id="suuid" name="suuid" value="<%= uuid%>"/>
                                    <input type="hidden" id="collectionid" name="collectionid" value=""/>
                                    <input type="hidden" id="iuuid_batch" name="iuuid_batch" value=""/>
                                    <input type="hidden" id="filePath" name="filePath" value=""/>
                                </form>
                                <input type="checkbox" id="checkallresults" name="checkallresults"><fmt:message key="jsp.submit.start-lookup-submission.js.checkallresults"/>
                                <h4 id="no-record" style="display:none"><span class="label label-warning"></span><fmt:message key="jsp.submit.start-lookup-submission.norecordselected" /></span></h4>
                                <h4 id="no-collection" style="display:none"><span class="label label-warning"><fmt:message key="jsp.submit.start-lookup-submission.nocollectionselected" /></span></h4>
                            </div>
                            <div id="result-list"></div>
                        </div>
                        <%

                            }%>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="hidden-area" style="display: none;">
        <div id="select-collection-div">
            <dspace:selectcollection klass="form-control" id="select-collection" collection="<%= collection_id%>"/>
        </div>
    </div>


    <div id="no-collection-warn" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><fmt:message key="jsp.submit.start-lookup-submission.no-collection-warn.title" /></h4>
                </div>
                <div class="modal-body with-padding">
                    <p class="alert alert-warning"><fmt:message key="jsp.submit.start-lookup-submission.no-collection-warn.hint" /></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"><fmt:message key="jsp.submit.start-lookup-submission.no-collection.dialog.return" /></button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="no-record-warn" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><fmt:message key="jsp.submit.start-lookup-submission.no-record-warn.title" /></h4>
                </div>
                <div class="modal-body with-padding">
                    <p class="alert alert-warning"><fmt:message key="jsp.submit.start-lookup-submission.no-record-warn.hint" /></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"><fmt:message key="jsp.submit.start-lookup-submission.no-record.dialog.return" /></button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="loading-search-result" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><fmt:message key="jsp.submit.start-lookup-submission.search-loading.title" /></h4>
                </div>
                <div class="modal-body with-padding">
                    <p class="help-block"><fmt:message key="jsp.submit.start-lookup-submission.search-loading.hint" /></p>
                </div>
                <div class="modal-footer">
                    <img src="<%= request.getContextPath()%>/sherpa/image/ajax-loader-big.gif"/>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="loading-file-result" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><fmt:message key="jsp.submit.start-lookup-submission.search-loading.title" /></h4>
                </div>
                <div class="modal-body with-padding">
                    <p class="help-block"><fmt:message key="jsp.submit.start-lookup-submission.search-loading.hint" /></p>
                </div>
                <div class="modal-footer">
                    <img src="<%= request.getContextPath()%>/sherpa/image/ajax-loader-big.gif"/>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="loading-details" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><fmt:message key="jsp.submit.start-lookup-submission.js.titlepopupmessage" /></h4>
                </div>
                <div class="modal-body with-padding">

                </div>
                <div class="modal-footer">

                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="error-file-result" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><fmt:message key="jsp.submit.start-lookup-submission.error.title" /></h4>
                </div>
                <div class="modal-body with-padding">
                    <p class="help-block"><fmt:message key="jsp.submit.start-lookup-submission.error.hint" /></p>
                    <p id="error-file-exception" style="display:none;"></p>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <%  } else { %>
    <p class="submitFormWarn"><fmt:message key="jsp.submit.select-collection.none-authorized"/></p>
    <%  }%>

</dspace:layout>
