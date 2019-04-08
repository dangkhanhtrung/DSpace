/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.rest;

import java.io.IOException;
import java.io.Serializable;
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
    public String getAllCrisDoTp(@QueryParam("expand") String expand,
            @QueryParam("limit") @DefaultValue("100") Integer limit, @QueryParam("offset") @DefaultValue("0") Integer offset,
            @QueryParam("userIP") String user_ip, @QueryParam("userAgent") String user_agent,
            @QueryParam("xforwardedfor") String xforwardedfor, @javax.ws.rs.core.Context HttpHeaders headers, @javax.ws.rs.core.Context HttpServletRequest request)
            throws WebApplicationException, SQLException, ContextException
    {

         log.info("Reading all collections.(offset=" + offset + ",limit=" + limit + ")");
        org.dspace.core.Context context = null;
        List<Collection> collections = new ArrayList<Collection>();

        try
        {
            context = createContext(getUser(headers));

            if (!((limit != null) && (limit >= 0) && (offset != null) && (offset >= 0)))
            {
                log.warn("Paging was badly set.");
                limit = 100;
                offset = 0;
            }

            org.dspace.content.Collection[] dspaceCollections = findAll(context, limit, offset);
           
            context.complete();
        }
        catch (SQLException e)
        {
            processException("Something went wrong while reading collections from database. Message: " + e, context);
        }
        catch (ContextException e)
        {
            processException("Something went wrong while reading collections, ContextError. Message: " + e.getMessage(), context);
        }
        finally
        {
            processFinally(context);
        }

        log.trace("All collections were successfully read.");
        
        return "ok";
    }
    
     public static org.dspace.content.Collection[] findAll(Context context, Integer limit, Integer offset) throws SQLException
    {
        TableRowIterator tri = null;
        List<org.dspace.content.Collection> collections = null;
        List<Serializable> params = new ArrayList<Serializable>();
        StringBuffer query = new StringBuffer(
            "SELECT c.*" +
            "FROM collection c "
        );

        DatabaseManager.applyOffsetAndLimit(query, params, offset, limit);

        try
        {
            tri = DatabaseManager.query(
              context, query.toString(), params.toArray()
            );

            collections = new ArrayList<org.dspace.content.Collection>();

            while (tri.hasNext())
            {
                TableRow row = tri.next();

                System.out.println("row:" + row.toString());
            }
        }
        catch (SQLException e)
        {
            log.error("Find all Collections offset/limit - ", e);
            throw e;
        }
        finally
        {
            // close the TableRowIterator to free up resources
            if (tri != null)
            {
                tri.close();
            }
        }

        org.dspace.content.Collection[] collectionArray = new org.dspace.content.Collection[collections.size()];
        collectionArray = (org.dspace.content.Collection[]) collections.toArray(collectionArray);

        return collectionArray;
    }

}
