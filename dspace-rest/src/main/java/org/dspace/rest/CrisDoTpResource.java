/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.rest;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.dspace.authorize.AuthorizeException;
import org.dspace.authorize.AuthorizeManager;
import org.dspace.browse.BrowseException;
import org.dspace.content.WorkspaceItem;
import org.dspace.content.service.ItemService;
import org.dspace.core.ConfigurationManager;
import org.dspace.core.LogManager;
import org.dspace.rest.common.Collection;
import org.dspace.rest.common.Item;
import org.dspace.rest.common.MetadataEntry;
import org.dspace.rest.exceptions.ContextException;
import org.dspace.storage.rdbms.DatabaseManager;
import org.dspace.storage.rdbms.TableRow;
import org.dspace.usage.UsageEvent;
import org.dspace.workflow.WorkflowManager;
import org.dspace.xmlworkflow.XmlWorkflowManager;

/**
 * This class provides all CRUD operation over collections.
 * 
 * @author Rostislav Novak (Computing and Information Centre, CTU in Prague)
 * @author Adán Román Ruiz (arvo.es)
 */
@Path("/cris_do_tp")
public class CrisDoTpResource extends Resource
{
    private static Logger log = Logger.getLogger(CrisDoTpResource.class);

    @GET
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public String getAllCrisDoTp(@Context HttpHeaders headers, @Context HttpServletRequest request)
            throws WebApplicationException, SQLException
    {

        TableRow row = DatabaseManager.row("cris_do_tp");
        
        System.out.println("getAllCrisDoTp: " + row);
        
        row = DatabaseManager.row("crisdotp");
        
        System.out.println("getAllCrisDoTp: " + row);
        
        row = DatabaseManager.row("CrisDoTp");
        
        System.out.println("getAllCrisDoTp: " + row);
        
        row = DatabaseManager.row("collection");
        
        System.out.println("collection: " + row);
        
        return "ok";
    }

}
