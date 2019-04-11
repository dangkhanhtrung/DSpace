<%--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

--%>

<%--
  - Display list of bitstream formats
  -
  - Attributes:
  -
  -   formats - the bitstream formats in the system (BitstreamFormat[])
  --%>

<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"
    prefix="fmt" %>


<%@ taglib uri="http://www.dspace.org/dspace-tags.tld" prefix="dspace" %>

<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport" %>

<%@ page import="org.dspace.content.BitstreamFormat" %>
<%@ page import="org.dspace.core.Context"%>
<%@ page import="org.dspace.app.webui.util.UIUtil"%>

<script>
function updateBitstream(btnClick) {
  var table = document.getElementById('bitstream_table__id');
   var rowCount = table.rows.length; 
   var data;
   for(var i=0; i<rowCount; i++) 
   {
		 var row = table.rows[i];
		 var clickCol = row.cells[7];
		 if (clickCol.childNodes.length >= 3 ) {
			 var btnClickCell = clickCol.childNodes[2];
			 if(btnClickCell == btnClick) {
				 console.log(table.rows[i].cells[1].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[1].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 
				 console.log(table.rows[i].cells[2].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[2].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 
				 console.log(table.rows[i].cells[3].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[3].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[4].childNodes[0].name);
				 console.log(table.rows[i].cells[4].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[5].childNodes[0].childNodes[0].name);
				 console.log(table.rows[i].cells[5].childNodes[0].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[6].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[6].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[7].childNodes[0].name);
				 console.log(table.rows[i].cells[7].childNodes[0].value);
				 
				 document.getElementById('mimetype__id__post').value = table.rows[i].cells[1].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('short_description__id__post').value = table.rows[i].cells[2].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('description__id__post').value = table.rows[i].cells[3].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('support_level__id__post').value = table.rows[i].cells[4].childNodes[0].value;
				 document.getElementById('internal__id__post').value = table.rows[i].cells[5].childNodes[0].childNodes[0].value;
				 document.getElementById('extensions__id__post').value = table.rows[i].cells[6].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('format_id__id__post').value = table.rows[i].cells[7].childNodes[0].value;
				 
				 
               break;
             }
		 }
   }
   $('#submit_update__btn').trigger('click');
}

function deleteBitstream(btnClick) {
  var table = document.getElementById('bitstream_table__id');
   var rowCount = table.rows.length; 
   var data;
   for(var i=0; i<rowCount; i++) 
   {
		 var row = table.rows[i];
		 var clickCol = row.cells[7];
		 if (clickCol.childNodes.length >= 3 ) {
			 var btnClickCell = clickCol.childNodes[4];
			 if(btnClickCell == btnClick) {
				 console.log(table.rows[i].cells[1].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[1].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 
				 console.log(table.rows[i].cells[2].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[2].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 
				 console.log(table.rows[i].cells[3].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[3].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[4].childNodes[0].name);
				 console.log(table.rows[i].cells[4].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[5].childNodes[0].childNodes[0].name);
				 console.log(table.rows[i].cells[5].childNodes[0].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[6].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].name);
				 console.log(table.rows[i].cells[6].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value);
				 
				 console.log(table.rows[i].cells[7].childNodes[0].name);
				 console.log(table.rows[i].cells[7].childNodes[0].value);
				 
				 document.getElementById('mimetype__id__post').value = table.rows[i].cells[1].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('short_description__id__post').value = table.rows[i].cells[2].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('description__id__post').value = table.rows[i].cells[3].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('support_level__id__post').value = table.rows[i].cells[4].childNodes[0].value;
				 document.getElementById('internal__id__post').value = table.rows[i].cells[5].childNodes[0].childNodes[0].value;
				 document.getElementById('extensions__id__post').value = table.rows[i].cells[6].childNodes[0].attributes[0].ownerElement.childNodes[2].childNodes[0].value;
				 document.getElementById('format_id__id__post').value = table.rows[i].cells[7].childNodes[0].value;
				 
				 
               break;
             }
		 }
   }
   $('#submit_delete__btn').trigger('click');
}
</script>

<%
    BitstreamFormat[] formats =
        (BitstreamFormat[]) request.getAttribute("formats");
%>

<dspace:layout style="submission" titlekey="jsp.dspace-admin.list-formats.title"
               navbar="admin"
               locbar="link"
               parenttitlekey="jsp.administer"
               parentlink="/dspace-admin">

    <h1><fmt:message key="jsp.dspace-admin.list-formats.title"/>
    <dspace:popup page="<%= LocaleSupport.getLocalizedMessage(pageContext, \"help.site-admin\") + \"#bitstream\"%>"><fmt:message key="jsp.help"/></dspace:popup>
    </h1>

    <p class="alert alert-info"><fmt:message key="jsp.dspace-admin.list-formats.text1"/></p>
    <p class="alert alert-info"><fmt:message key="jsp.dspace-admin.list-formats.text2"/></p>

<%
    Context context = UIUtil.obtainContext(request);

%>

<form method="post" action="">
    
    	<input class="btn btn-success col-md-offset-5 mb-3" type="submit" name="submit_add" value="<fmt:message key="jsp.dspace-admin.general.addnew"/>" />
    
  </form>
  
  
  <form class="form-inline" method="post" action="">
		<input type="hidden" name="mimetype" id="mimetype__id__post"/>
		<input type="hidden" name="short_description" id="short_description__id__post" />
		<input type="hidden" name="description" id="description__id__post" />
		<input type="hidden" name="support_level" id="support_level__id__post" />
		<input type="hidden" name="internal" id="internal__id__post" />
		<input type="hidden" name="extensions" id="extensions__id__post" />
		<input type="hidden" name="format_id" id="format_id__id__post" />
		
		<input id="submit_update__btn" class="btn btn-primary hidden" type="submit" name="submit_update" value="<fmt:message key="jsp.dspace-admin.general.update"/>"/>
		<input id="submit_delete__btn" class="btn btn-danger hidden" type="submit" name="submit_delete" value="<fmt:message key="jsp.dspace-admin.general.delete-w-confirm"/>" />
		
	</form>
	
	<table id="bitstream_table__id" align="center" summary="This table browses all dspace content" class="table table-hover">
	  <tbody>
	    <tr>
	      <th width="30"><fmt:message key="jsp.general.id" /></th>
	      <th><fmt:message key="jsp.dspace-admin.list-formats.mime"/></th>
	      <th><fmt:message key="jsp.dspace-admin.list-formats.name"/></th>
	      <th><fmt:message key="jsp.dspace-admin.list-formats.description"/></th>
	      <th><fmt:message key="jsp.dspace-admin.list-formats.support"/></th>
	      <th width="30"><fmt:message key="jsp.dspace-admin.list-formats.internal"/></th>
	      <th><fmt:message key="jsp.dspace-admin.list-formats.extensions"/></th>
	      <th></th>
	    </tr>
	    
	    <%

    String row = "even";
    for (int i = 0; i < formats.length; i++)
    {
        String[] extensions = formats[i].getExtensions();
        String extValue = "";

        for (int j = 0 ; j < extensions.length; j++)
        {
            if (j > 0)
            {
                extValue = extValue + ", ";
            }
            extValue = extValue + extensions[j];
        }
%>
	    <tr>
		    
		    <td width="30"><%= formats[i].getID() %></td>
	      <td>
	      	<div class="form-group">
			        <label class="sr-only" for="mimetype"><fmt:message key="jsp.dspace-admin.list-formats.mime"/></label>
			        <div class="input-group">
				        <input class="form-control" type="text" name="mimetype" value="<%= formats[i].getMIMEType()!=null?formats[i].getMIMEType():"" %>" size="14" placeholder="<fmt:message key="jsp.dspace-admin.list-formats.mime"/>"/>
				    </div>
			</div>
	      </td>
	      <td>
		      <div class="form-group">
			        <label class="sr-only" for="mimetype"><fmt:message key="jsp.dspace-admin.list-formats.name"/></label>
			        <div class="input-group">
				        <%
                      if (BitstreamFormat.findUnknown(context).getID() == formats[i].getID()) {
                    %>
                      		  <input class="form-control" type="text" name="short_description" value="<%= formats[i].getShortDescription()!=null?formats[i].getShortDescription():"" %>" size="10" placeholder="<fmt:message key="jsp.dspace-admin.list-formats.name"/>" disabled/>
                    <% } else { %>                    	
                              <input class="form-control" type="text" name="short_description" value="<%= formats[i].getShortDescription()!=null?formats[i].getShortDescription():"" %>" size="10" placeholder="<fmt:message key="jsp.dspace-admin.list-formats.name"/>"/>
                    <% } %>
				    </div>
			</div>
	      </td>
	      <td>
		      <div class="form-group">
			        <label class="sr-only" for="mimetype"><fmt:message key="jsp.dspace-admin.list-formats.description"/></label>
			        <div class="input-group">
				        <input class="form-control" type="text" name="description" value="<%= formats[i].getDescription()!=null?formats[i].getDescription():"" %>" size="20" placeholder="<fmt:message key="jsp.dspace-admin.list-formats.description"/>"/>
				    </div>
			</div>
	      </td>
	      <td>
		      <select name="support_level">
                                  <option value="0" <%= formats[i].getSupportLevel() == 0 ? "selected=\"selected\"" : "" %>><fmt:message key="jsp.dspace-admin.list-formats.unknown"/></option>
	    	                  <option value="1" <%= formats[i].getSupportLevel() == 1 ? "selected=\"selected\"" : "" %>><fmt:message key="jsp.dspace-admin.list-formats.known"/></option>
                                  <option value="2" <%= formats[i].getSupportLevel() == 2 ? "selected=\"selected\"" : "" %>><fmt:message key="jsp.dspace-admin.list-formats.supported"/></option>
                              </select>
	      </td>
	      <td width="30">
		      <div class="custom-control custom-checkbox">
                            <input class="form-control" type="checkbox" name="internal" value="true"<%= formats[i].isInternal() ? " checked=\"checked\"" : "" %>/>
                        </div>
	      </td>
	      <td>
		      <div class="form-group">
			        <label class="sr-only" for="mimetype"><fmt:message key="jsp.dspace-admin.list-formats.extensions"/></label>
			        <div class="input-group">
				        <input class="form-control" type="text" name="extensions" value="<%= extValue %>" size="10" placeholder="<fmt:message key="jsp.dspace-admin.list-formats.extensions"/>"/>
				    </div>
			</div>
	      </td>
	      <td>
		      <input type="hidden" name="format_id" value="<%= formats[i].getID() %>" />
		      <button class="btn btn-icon btn-2 btn-primary" type="button" onclick="updateBitstream(this);">
					<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
				</button>
                              <%
                      if (BitstreamFormat.findUnknown(context).getID() != formats[i].getID()) {
                    %>
                    <button class="btn btn-icon btn-2 btn-danger" type="button" onclick="deleteBitstream(this);">
					<i class="fa fa-minus" aria-hidden="true"></i>
				</button>
                     <% 
                      } 
                    %>
	      </td>
		    
		    
	    </tr>
	    
	    <% } %>
	    
	    
	    
	    
	    </tbody>
	</table>
  
  
  
  
  <form method="post" action="">
    
    	<input class="btn btn-success col-md-offset-5" type="submit" name="submit_add" value="<fmt:message key="jsp.dspace-admin.general.addnew"/>" />
    
  </form>
</dspace:layout>
