/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.rest;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.apache.solr.common.SolrInputDocument;
import org.aspectj.lang.annotation.Pointcut;

import static org.dspace.rest.Resource.createContext;

import org.dspace.app.cris.discovery.CrisSearchService;
import org.dspace.app.cris.model.ACrisObject;
import org.dspace.rest.common.Collection;
import org.dspace.rest.exceptions.ContextException;
import org.dspace.storage.rdbms.ColumnInfo;
import org.dspace.storage.rdbms.DatabaseManager;
import org.dspace.storage.rdbms.TableRow;
import org.dspace.utils.DataUtils;
import org.dspace.utils.ElasticQueryWrapUtil;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collections;

/**
 * This class provides all CRUD operation over collections.
 * 
 * @author Ta Huu Binh (FDS)
 */
@Path("/search")
public class MyTableResource extends Resource
{
	
    private static Logger log = Logger.getLogger(MyTableResource.class);

    @GET
    @Path("/{table_name}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllCrisDoTp(@PathParam("table_name") String table, @QueryParam("cols") String cols,
            @QueryParam("limit") @DefaultValue("100") Integer limit, @QueryParam("offset") @DefaultValue("0") Integer offset,
            @Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        
        JSONArray results = new JSONArray();
        org.dspace.core.Context context = null;
/*
        try
        {
            context = createContext(getUser(headers));

            if (!((limit != null) && (limit >= 0) && (offset != null) && (offset >= 0)))
            {
                log.warn("Paging was badly set.");
                limit = 100;
                offset = 0;
            }

            results = DataUtils.findAll(context, limit, offset, table, cols);
           
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
            System.out.println("finally");
            processFinally(context);
        }

        log.trace("All collections were successfully read.");
        */
        return results.toString();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllCrisDoTp(@QueryParam("query") String q, @Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        JSONObject results = new JSONObject();

        results = ElasticQueryWrapUtil.query(q);

        return results.toString();
    }
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public String getStatics(@RequestBody String body, @Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        JSONObject results = new JSONObject();

        results = ElasticQueryWrapUtil.postQuery(body);

        return results.toString();
    }

    @POST
    @Path("/reindex/{entity_object}")
    @Produces(MediaType.APPLICATION_JSON)
    public String reindex(@PathParam("entity_object") String entity_object, @RequestBody String body, @Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        
        JSONArray results = new JSONArray();
        org.dspace.core.Context context = null;
        DataUtils util = new DataUtils();
        
        try
        {
            context = createContext(getUser(headers));

            CrisSearchService crisSearchService = new CrisSearchService();
            
            JSONObject objectBody = new JSONObject(body);

            log.info("entity_objectentity_object" + entity_object);
            if (entity_object.equalsIgnoreCase("journals")) {

                log.info("entity_objectentity_object222" + entity_object);
                
                TableRow mappingRow;
    	        log.info("bodybodybodybodybodybodybodybodybody" + body);
        		try {

        	        log.info("bodybodybodybodybodybodybodybodybody" + body);
        	        log.info("bodybodybodybodybodybodybodybodybody ID: " + "journals" + objectBody.getString("id"));
        			Date currentTimestamp = new Date();
        			
        			mappingRow = DatabaseManager.row("cris_do");
        	        
        	        mappingRow.setColumn("crisid", "journals" + objectBody.getString("id"));
        	        mappingRow.setColumn("sourceid", objectBody.getString("SOURCEID"));
        	        mappingRow.setColumn("status", true);
        	        mappingRow.setColumn("uuid", UUID.randomUUID().toString());
        	        log.info("UUID.randomUUID().toString()" + UUID.randomUUID().toString());
        	        mappingRow.setColumn("timestampcreated", currentTimestamp);
        	        mappingRow.setColumn("timestampLastModified", currentTimestamp);
        	        mappingRow.setColumn("typo_id", 1);

        	        log.info("mappingRowmappingRow" + mappingRow);
        	        
        	        int xxoxoxo = DatabaseManager.doInsertPostgresPublic(context, mappingRow);

        	        log.info("insert DONE DONE DONE DONE DONE" + xxoxoxo);
        		} catch (SQLException e) {
        			// TODO Auto-generated catch block
        			e.printStackTrace();
        		}
        		
            	// util.processJournal(context, crisSearchService, objectBody );
            	
            } else if (entity_object.equalsIgnoreCase("events")) {
            	
            }
            
            // crisSearchService.updateCrisIndexPublic(context, entity_object + objectBody.getString("id"));
            
            log.info("crisSearchServicecrisSearchServicecrisSearchService" + crisSearchService);
            
            context.complete();
        }
        catch (Exception e)
        {
            processException("Exception: " + e, context);
        }
        finally
        {
            System.out.println("finally");
            processFinally(context);
        }

        return results.toString();
    }
    
    
    
    
}
