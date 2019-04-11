<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>

<%--
  - Display list of DC schemas
  -
  - Attributes:
  -
  -   formats - the DC formats in the system (MetadataValue[])
  --%>

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"
    prefix="fmt" %>


<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>

<%@ page import="org.dspace.content.MetadataSchema" %>


<%
    MetadataSchema[] schemas =
        (MetadataSchema[]) request.getAttribute("schemas");
%>

<dspace:layout style="submission" titlekey="jsp.dspace-admin.list-metadata-schemas.title"
               navbar="admin"
               locbar="link"
               parenttitlekey="jsp.administer"
               parentlink="/dspace-admin">


        <h1><fmt:message key="jsp.dspace-admin.list-metadata-schemas.title"/>
        <dspace:popup page="<%= LocaleSupport.getLocalizedMessage(pageContext, \"help.site-admin\") + \"#dublincore\"%>"><fmt:message key="jsp.help"/></dspace:popup>
		</h1>
  
<%
String error = (String)request.getAttribute("error");
if (error!=null) { 
%>
    <p class="alert alert-danger">
    	<%=error%>
    </p>
<% } %>
  

    <table class="table" width="500">
        <tr>
            <th class="oddRowOddCol"><strong><fmt:message key="jsp.general.id" /></strong></th>
            <th class="oddRowEvenCol"><strong><fmt:message key="jsp.dspace-admin.list-metadata-schemas.namespace"/></strong></th> 
            <th class="oddRowOddCol"><strong><fmt:message key="jsp.dspace-admin.list-metadata-schemas.name"/></strong></th> 
            <th class="oddRowOddCol">&nbsp;</th>
        </tr>

<%
    String row = "even";
    for (int i = 0; i < schemas.length; i++)
    {
%>
        <tr>
            <td class="<%= row %>RowOddCol"><%= schemas[i].getSchemaID() %></td>
            <td class="<%= row %>RowEvenCol">
                <a href="<%=request.getContextPath()%>/dspace-admin/metadata-field-registry?dc_schema_id=<%= schemas[i].getSchemaID() %>"><%= schemas[i].getNamespace() %></a>
            </td>
            <td class="<%= row %>RowOddCol">
                <%= schemas[i].getName() %>
            </td>
            <td class="<%= row %>RowOddCol">
		<% if ( schemas[i].getSchemaID() != 1 ) { %>
                <form method="post" action="">
                    <input type="hidden" name="dc_schema_id" value="<%= schemas[i].getSchemaID() %>"/>
                    <input class="btn btn-primary" type="button" name="submit_update" value="<fmt:message key="jsp.dspace-admin.general.update"/>" onclick="javascript:document.schema.namespace.value='<%= schemas[i].getNamespace() %>';document.schema.short_name.value='<%= schemas[i].getName() %>';document.schema.dc_schema_id.value='<%= schemas[i].getSchemaID() %>';return null;"/>
                    <input class="btn btn-danger" type="submit" name="submit_delete" value="<fmt:message key="jsp.dspace-admin.general.delete-w-confirm"/>"/>
                </form>
		    <% } %>
                </td>
            </tr>
<%
        row = (row.equals("odd") ? "even" : "odd");
    }
%>
    </table>
        
  <form method="post" name="schema" action="">
  <input type="hidden" name="dc_schema_id" value=""/>
  	
         <p class="alert alert-info">
             <fmt:message key="jsp.dspace-admin.list-metadata-schemas.instruction"/>
         </p>
        <div class="row">
	         <div class="col-sm-6 col-12">
		        <div class="form-group">
			        <label for="namespace"><fmt:message key="jsp.dspace-admin.list-metadata-schemas.namespace"/>:</label>
			        <div class="input-group">
				        <input type="text" class="form-control" id="namespace" name="namespace" value="" />
				    </div>
				</div>
		</div>
       <div class="col-sm-6 col-12">
	       <div class="form-group">
			        <label for="namespace"><fmt:message key="jsp.dspace-admin.list-metadata-schemas.name"/>:</label>
			        <div class="input-group">
				        <input type="text" class="form-control" id="short_name" name="short_name" value="" />
				    </div>
				</div>
	    </div>
	    <div class="col-12 text-right">
	       <input class="btn btn-success col-md-3" type="submit" name="submit_add" value="<fmt:message key="jsp.dspace-admin.general.save"/>"/>
	    </div>
        </div>
	
  </form>
</dspace:layout>
