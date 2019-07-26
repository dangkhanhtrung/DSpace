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

            Date currentTimestamp = new Date();
            log.info("entity_objectentity_object" + entity_object);
        	TableRow mappingRow;
            if (entity_object.equalsIgnoreCase("journal")) {

        		try {

        			mappingRow = DatabaseManager.row("cris_do");
        	        
        	        mappingRow.setColumn("crisid", objectBody.getString("journal_ID"));
        	        mappingRow.setColumn("sourceid", objectBody.getString("journal_ID"));
        	        mappingRow.setColumn("status", true);
        	        mappingRow.setColumn("uuid", UUID.randomUUID().toString());
        	        mappingRow.setColumn("timestampcreated", currentTimestamp);
        	        mappingRow.setColumn("timestampLastModified", currentTimestamp);
        	        mappingRow.setColumn("typo_id", 1);

        	        log.info("adddddadddddadddddadddddadddddaddddd mappingRow" + mappingRow);
        	        
        	        DatabaseManager.insert(context, mappingRow);

        	        log.info("insert DONE DONE DONE DONE DONE");
        	        
        		} catch (SQLException e) {
        			// TODO Auto-generated catch block
        			mappingRow = DatabaseManager.row("cris_do");
        	        
        	        mappingRow.setColumn("crisid", objectBody.getString("journal_ID"));
        	        mappingRow.setColumn("sourceid", objectBody.getString("journal_ID"));
        	        mappingRow.setColumn("status", true);
        	        mappingRow.setColumn("uuid", UUID.randomUUID().toString());
        	        mappingRow.setColumn("timestampcreated", currentTimestamp);
        	        mappingRow.setColumn("timestampLastModified", currentTimestamp);
        	        mappingRow.setColumn("typo_id", 1);

        	        log.info("updateupdateupdateupdateupdateupdate mappingRow" + mappingRow);
        	        
        	        DatabaseManager.update(context, mappingRow);

        	        log.info("insert DONE DONE DONE DONE DONE");
        		}
        		
            	// util.processJournal(context, crisSearchService, objectBody );
            	
            } else if (entity_object.equalsIgnoreCase("events")) {
            	
            } else if (entity_object.equalsIgnoreCase("publication")) {
            	
            	mappingRow = DatabaseManager.row("item");
    	        
    	        mappingRow.setColumn("summiter_id", 1);
    	        mappingRow.setColumn("in_archive", false);
    	        mappingRow.setColumn("widthdrawn", false);
    	        mappingRow.setColumn("owning_collection", 33);
    	        mappingRow.setColumn("last_modified", currentTimestamp);
    	        mappingRow.setColumn("discoverable", true);

    	        log.info("adddddadddddadddddadddddadddddaddddd mappingRow" + mappingRow);
    	        
    	        DatabaseManager.insert(context, mappingRow);

    	        int idItem = mappingRow.getIntColumn("item_id");
    	        log.info("insert DONE DONE DONE DONE DONE" + idItem);
    	        
    	        mappingRow = DatabaseManager.row("item");
    	        
    	        mappingRow.setColumn("handle", "123456789/" + objectBody.getString("publication_ID"));
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("handle_id", idItem);

    	        log.info("adddddadddddadddddadddddadddddaddddd mappingRow" + mappingRow);
    	        
    	        mappingRow = DatabaseManager.row("metadatavalue");
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 14);
    	        mappingRow.setColumn("text_value", new Date(objectBody.getLong("createdAt")));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow = DatabaseManager.row("metadatavalue");
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 13);
    	        mappingRow.setColumn("text_value", new Date(objectBody.getLong("modifiedAt")));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow = DatabaseManager.row("metadatavalue");
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 27);
    	        mappingRow.setColumn("text_value", "http://hdl.handle.net/123456789/" + objectBody.getString("publication_ID"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 30);
    	        mappingRow.setColumn("text_value", "admin");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 29);
    	        mappingRow.setColumn("text_value", objectBody.getJSONObject("publication_Abstract").getJSONObject("_source").getString("title"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        // keyword 59
    	        // URL 80
    	        // 20
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 84);
    	        mappingRow.setColumn("text_value", objectBody.getJSONObject("publication_Subject").getJSONObject("_source").getString("title"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 40);
    	        mappingRow.setColumn("text_value", objectBody.getJSONObject("publication_Language").getJSONObject("_source").getString("shortName"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 159);
    	        mappingRow.setColumn("text_value", objectBody.getString("publication_StartPage"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 160);
    	        mappingRow.setColumn("text_value", objectBody.getString("publication_EndPage"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 68);
    	        mappingRow.setColumn("text_value", objectBody.getJSONObject("publication_Type").getJSONObject("_source").getString("title"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 68);
    	        mappingRow.setColumn("text_value", objectBody.getJSONObject("publication_Type").getJSONObject("_source").getString("title"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 41);
    	        mappingRow.setColumn("text_value", objectBody.getJSONObject("publication_Publisher").getJSONObject("_source").getString("title"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 17);
    	        mappingRow.setColumn("text_value", objectBody.getInt("publication_PublicationDate"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 66);
    	        mappingRow.setColumn("text_value", objectBody.getString("title"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 5);
    	        mappingRow.setColumn("text_value", objectBody.getString("author"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        
    	        
    	        
            }


            crisSearchService.updateCrisIndexPublic(context, objectBody.getString("journal_ID"));
            
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
