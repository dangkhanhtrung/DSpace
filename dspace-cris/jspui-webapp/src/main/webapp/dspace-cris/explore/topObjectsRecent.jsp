<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    https://github.com/CILEA/dspace-cris/wiki/License

--%>
<%
if (submissions != null && submissions.count() > 0)
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
		for (IGlobalSearchResult obj : submissions.getRecentSubmissions()) {
		%>
		
				<dspace:discovery-artifact style="global" artifact="<%= obj %>" view="<%= submissions.getConfiguration() %>"/>
		
		<%
		     }
		%>
		</div>
		  </div>
     </div>
<%
}
%>