<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    https://github.com/CILEA/dspace-cris/wiki/License

--%>
<%
if (download != null && download.count() > 0)
{
%>
        <div class="panel panel-info vertical-carousel" data-itemstoshow="1"> 
	   <div class="panel-body panel-border">        
        <div class="panel-heading">
          <h5 class="panel-title mb-0" style="padding: .5rem 1rem 0;">
              <i class="fa fa-file-text-o mr-2"></i>
          		<fmt:message key="jsp.collection-home.recentsub"/>
          </h5>
       </div>  
	<div class="list-groups">
	<%	
		for (IGlobalSearchResult obj : download.getRecentSubmissions()) {
		%>
		
				<dspace:discovery-artifact style="global" artifact="<%= obj %>" view="<%= download.getConfiguration() %>">
				<span class="badge" data-toggle="tooltip" data-placement="right" title="<fmt:message key="jsp.components.most-download.badge-tooltip"/>">
					<fmt:formatNumber value="<%= (obj==null || ((DSpaceObject) obj).getExtraInfo().get(\"crismetrics_download\")==null)?0.0:((DSpaceObject) obj).getExtraInfo().get(\"crismetrics_download\") %>" type="NUMBER" maxFractionDigits="0" />
					</span> ##artifact-item##
				</dspace:discovery-artifact>
		
		<%
		     }
		%>
		</div>
		  </div>
     </div>
<%
}
%>