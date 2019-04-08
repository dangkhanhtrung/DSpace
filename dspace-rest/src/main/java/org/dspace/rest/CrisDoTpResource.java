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
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.dspace.authorize.AuthorizeException;
import org.dspace.authorize.AuthorizeManager;
import org.dspace.browse.BrowseException;
import org.dspace.content.Community;
import org.dspace.content.MetadataField;
import org.dspace.content.MetadataSchema;
import org.dspace.content.WorkspaceItem;
import org.dspace.content.service.ItemService;
import org.dspace.core.ConfigurationManager;
import org.dspace.core.Constants;
import org.dspace.core.Context;
import org.dspace.core.LogManager;
import static org.dspace.rest.Resource.createContext;
import org.dspace.rest.common.Collection;
import org.dspace.rest.common.Item;
import org.dspace.rest.common.MetadataEntry;
import org.dspace.rest.exceptions.ContextException;
import org.dspace.storage.rdbms.DatabaseManager;
import org.dspace.storage.rdbms.TableRow;
import org.dspace.storage.rdbms.TableRowIterator;
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
    public String getAllCrisDoTp(Context context)
            throws WebApplicationException, SQLException, ContextException
    {

        TableRowIterator tri = null;
        try {
            String query = "SELECT c.* FROM cris_do_tp c ";
         
            tri = DatabaseManager.query(context,
                    query,
                    null
            );
        } catch (SQLException e) {
            log.error("Find all cris_do_tp - ",e);
            throw e;
        }

        List<Community> communities = new ArrayList<Community>();

        try
        {
            while (tri.hasNext())
            {
                TableRow rowd = tri.next(context);

                System.out.println("row label: " + rowd.getStringColumn("label"));
                System.out.println("row shortname: " + rowd.getStringColumn("shortname"));
            }
        }
        finally
        {
            // close the TableRowIterator to free up resources
            if (tri != null)
            {
                tri.close();
            }
        }
        
        return "ok";
    }

}
