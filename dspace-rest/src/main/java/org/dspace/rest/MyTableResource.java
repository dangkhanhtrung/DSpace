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
            	
            } else if (entity_object.equalsIgnoreCase("patents")) {
                //FIXME: chưa đi sâu vào nhánh xml
                Int count=-1;
                Int value_id=-1;
                // Truyền id vào cris_id/source_id từ xml vào trả lại id của record
                Int cris_do_id = cris_do_add(context, "patents", context.getString("patent_ID"));

                // 1 metadata
                value_id = jdyna_values_add(context, "text", context.getString("patent_Title"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentsname", value_id, cris_do_id, 0);

                // 1 multiple value metadata
                count = 0; // nhiều giá trị cần biến đếm để sắp xếp
                for (String subject : context.getArrayObject("patent_Subject")) {
                    value_id = jdyna_values_add(context, "text", subject);
                    cris_do_prop_add(context, get_entity_id("patents"), "patentssubject", value_id, cris_do_id, count);
                    count++;
                }

                // 1 metadata
                value_id = jdyna_values_add(context, "text", context.getString("patent_Keyword"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentskeyword", value_id, cris_do_id, 0);

                // 1 multiple value metadata
                count = 0;
                for (String subject : context.getArrayObject("patent_Holders")) {
                    value_id = jdyna_values_add(context, "text", subject) // FIXME: tạm thời type text => rp, ou vào patentsholderperson /patentsholderorgunit
                    cris_do_prop_add(context, get_entity_id("patents"), "patentsholdervalue", value_id, cris_do_id, count);
                    count++;
                }

                // 1 multiple value metadata
                count = 0;
                for (String subject : context.getArrayObject("patent_References")) {
                    value_id = jdyna_values_add(context, "patents", subject);
                    cris_do_prop_add(context, get_entity_id("patents"), "patentspredecessor", value_id, cris_do_id, count);
                    count++;
                }

                // 1 multiple value metadata
                count = 0;
                for (String subject : context.getArrayObject("patent_OriginatesFrom")) {
                    value_id = jdyna_values_add(context, "project", subject);
                    cris_do_prop_add(context, get_entity_id("patents"), "patentsoriginatesFrom", value_id, cris_do_id, count);
                    count++;
                }

                // 1 multiple value metadata
                count = 0;
                for (String subject : context.getArrayObject("patent_Inventors")) {
                    value_id = jdyna_values_add(context, "project", subject);
                    cris_do_prop_add(context, get_entity_id("patents"), "patentsinventorsvalue", value_id, cris_do_id, count);
                    count++;
                }

                // 1 metadata
                value_id = jdyna_values_add(context, "text", context.getString("patent_Type"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentstype", value_id, cris_do_id, 0);

                // 1 metadata
                value_id = jdyna_values_add(context, "text", context.getString("patent_Status"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentsstatus", value_id, cris_do_id, 0);

                // 1 metadata
                value_id = jdyna_values_add(context, "text", context.getString("patent_Issuer")) //FIXME: text => ou
                cris_do_prop_add(context, get_entity_id("patents"), "patentsstatus", value_id, cris_do_id, 0);

                // 1 metadata
                value_id = jdyna_values_add(context, "text", context.getString("patent_CountryCode")) //FIXME: text => ou
                cris_do_prop_add(context, get_entity_id("patents"), "patentscountrycode", value_id, cris_do_id, 0);

                // 1 metadata
                value_id = jdyna_values_add(context, "text", context.getString("patent_Abstract")) //FIXME: text => ou
                cris_do_prop_add(context, get_entity_id("patents"), "patentsabstract", value_id, cris_do_id, 0);

                value_id = jdyna_values_add(context, "text", context.getString("patent_RegistrationDate"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentsregistrationdate", value_id, cris_do_id, 0);

                value_id = jdyna_values_add(context, "text", context.getString("patent_RegistrationNumber"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentsregistrationNumber", value_id, cris_do_id, 0);

                value_id = jdyna_values_add(context, "text", context.getString("patent_PatentNumber"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentsnumber", value_id, cris_do_id, 0);

                value_id = jdyna_values_add(context, "text", context.getString("patent_ApprovalDate"));
                cris_do_prop_add(context, get_entity_id("patents"), "patentsapprovaldate", value_id, cris_do_id, 0);

                
                
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
    
    //cris_do_add(context, "patents", "patent_ID");
    private Int cris_do_add(org.dspace.core.Context context, String crisType, String xml_ID){
        // cris_do
        mappingRow = DatabaseManager.row("cris_do");

        //mappingRow.setColumn("id", objectBody.getString("nth_id")); Không set
        mappingRow.setColumn("crisid", xml_ID); //get_id từ xml?
        mappingRow.setColumn("sourceid", xml_ID);
        mappingRow.setColumn("status", "true"); //true/false = public/hidden
        mappingRow.setColumn("uuid", UUID.randomUUID().toString());
        //mappingRow.setColumn("timestampcreated", objectBody.getString("nth_timestampcreated"));
        //mappingRow.setColumn("timestamplastmodified", objectBody.getString("nth_timestamplastmodified"));
        //need mapping
        mappingRow.setColumn("typo_id", get_entity_id(crisType));
        //mappingRow.setColumn("sourceref", objectBody.getString("nth_sourceref")); null
        DatabaseManager.insert(context, mappingRow);//try catch?
        return mappingRow.getIntColumn("id");
    }


    // cris_do_prop_all(context, "crispatents", "patentsname", value_id lấy từ jdyna_value_add, cris_do_id, 0);
    private void cris_do_prop_add(org.dspace.core.Context context, String crisType, String fieldShortName, String value_id, String cris_do_id, Int positiondef){
        mappingRow = DatabaseManager.row("cris_do_prop");
        mappingRow.setColumn("id", value_id); //id bảng jdyna_values
        //mappingRow.setColumn("enddate", objectBody.getString("nth_enddate")); null
        //mappingRow.setColumn("startdate", objectBody.getString("nth_startdate")); null
        //mappingRow.setColumn("lockdef", objectBody.getString("nth_lockdef")); null
        mappingRow.setColumn("positiondef", positiondef);// FIXME: thuộc tính nhiều giá trị xếp thứ tự 0 -> 1 -> 2 
        mappingRow.setColumn("visibility", "1"); // hiển thị trường hay không (tick lúc nhập dữ liệu) mặc định 1
        //mappingRow.setColumn("scopedef_id", objectBody.getString("nth_scopedef_id")); null
        mappingRow.setColumn("value_id", value_id); // id bảng jdyna_values
        mappingRow.setColumn("parent_id", cris_do_id); // id bảng cris_do
        //need mapping
        mappingRow.setColumn("typo_id", get_field_typo_id(crisType, fieldShortName));
        DatabaseManager.insert(context, mappingRow);//try catch?
    }

    // jdyna_values_add(context, "text", "patentsname123");
    private String jdyna_values_add(org.dspace.core.Context context, String valueType, String value){
        mappingRow = DatabaseManager.row("jdyna_values");

        mappingRow.setColumn("dtype", objectBody.getString(valueType));//text or date or ...
        //mappingRow.setColumn("id", objectBody.getString("nth_id"));//id do db đánh tự tăng
        mappingRow.setColumn("sortvalue", objectBody.getString("nth_sortvalue"));// thường giống text value, date thì 1 loạt số chưa biết pattern
        if (valueType == "date") {
            mappingRow.setColumn("datevalue", objectBody.getString(value));
        }
        else if (valueType == "text") {
            mappingRow.setColumn("textvalue", objectBody.getString(value));
        }
        else if (valueType == "rp") {
            mappingRow.setColumn("textvalue", objectBody.getString(value));
            mappingRow.setColumn("rpvalue", objectBody.getString("nth_rpvalue"));//cris-id của đối tượng
        }
        else if (valueType == "ou") {
            mappingRow.setColumn("textvalue", objectBody.getString(value));
            mappingRow.setColumn("ouvalue", objectBody.getString("nth_ouvalue"));//cris-id của đối tượng
        }
        else if (valueType == "project") {
            mappingRow.setColumn("textvalue", objectBody.getString(value));
            mappingRow.setColumn("projectvalue", objectBody.getString("nth_projectvalue"));
        }
        else if (valueType == "patent") or (valueType =="tech") { //Các kiểu của cris ...
            mappingRow.setColumn("textvalue", objectBody.getString(value));
            mappingRow.setColumn("dovalue", objectBody.getString("nth_dovalue"));//cris-id
        }

        // Mặc định null ???
        // mappingRow.setColumn("linkdescription", objectBody.getString("nth_linkdescription"));
        // mappingRow.setColumn("linkvalue", objectBody.getString("nth_linkvalue"));
        // mappingRow.setColumn("fileextension", objectBody.getString("nth_fileextension"));
        // mappingRow.setColumn("filefolder", objectBody.getString("nth_filefolder"));
        // mappingRow.setColumn("filemime", objectBody.getString("nth_filemime"));
        // mappingRow.setColumn("filename", objectBody.getString("nth_filename"));
        // mappingRow.setColumn("doublevalue", objectBody.getString("nth_doublevalue"));
        
        // mappingRow.setColumn("booleanvalue", objectBody.getString("nth_booleanvalue"));
        // mappingRow.setColumn("classificationvalue", objectBody.getString("nth_classificationvalue"));
        // mappingRow.setColumn("custompointer", objectBody.getString("nth_custompointer"));

        DatabaseManager.insert(context, mappingRow);//try catch?
        return mappingRow.getIntColumn("id");
    }

    private Int get_field_typo_id(String crisType, String fieldShortName){
        // FIXME: mã fix cứng cần sửa khi sang sv mới
        if (crisType == "patents") {        
            if (fieldShortName == "patentsabstract") return 58 //Mô tả tóm tắt
            else if (fieldShortName == "patentsapprovaldate") return 57 //Ngày công bố
            else if (fieldShortName == "patentscountrycode") return 65 //Quốc gia công nhận
            else if (fieldShortName == "patentsexpiredDate") return 302 //Ngày hết hiệu lực
            else if (fieldShortName == "patentsholderOrgUnit") return 321 //Chủ bằng tổ chức
            else if (fieldShortName == "patentsholderPerson") return 320 //Chủ bằng cá nhân
            else if (fieldShortName == "patentsinventors") return 282 //Tác giả
            else if (fieldShortName == "patentsinventorsvalue") return 307 //Tác giả
            else if (fieldShortName == "patentsissuer") return 61 //Tổ chức đại diện
            else if (fieldShortName == "patentskeyword") return 60 //Từ khoá
            else if (fieldShortName == "patentsname") return 297 //Tên sáng chế
            else if (fieldShortName == "patentsnumber") return 54 //Số sáng chế
            else if (fieldShortName == "patentsoriginatesFrom") return 63 //Kết quả nhiệm vụ
            else if (fieldShortName == "patentspredecessor") return 283 //Kế thừa từ sáng chế
            else if (fieldShortName == "patentsregistrationdate") return 56 //Ngày nộp đơn
            else if (fieldShortName == "patentsregistrationNumber") return 301 //Số đơn
            else if (fieldShortName == "patentsstatus") return 234 //Tình trạng hiệu lực
            else if (fieldShortName == "patentssubject") return 239 //Phân loại sáng chế quốc tế
            else if (fieldShortName == "patentstype") return 64 //Loại sáng chế
            else if (fieldShortName == "patentsversioninfo") return 55 //Thông tin phiên bản
            else if (fieldShortName == "patentsholdervalue") return 339 //Thông tin phiên bản
        }
        else if (crisType == "standards") {

            if (fieldShortName == "standardsdecisionnumber") return 1 //Quyết định ban hành
            else if (fieldShortName == "standardseditorsOrg") return 327 //Tổ chức biên soạn
            else if (fieldShortName == "standardseditorsPerson") return 326 //Cá nhân biên soạn
            else if (fieldShortName == "standardsequivalentTo") return 8 //Tiêu chuẩn tương đương
            else if (fieldShortName == "standardsidentifier") return 4 //Số hiệu
            else if (fieldShortName == "standardskeyword") return 7 //Từ khoá
            else if (fieldShortName == "standardsname") return 299 //Tên tiêu chuẩn
            else if (fieldShortName == "standardsnormativeReferences") return 10 //Tiêu chuẩn viện dẫn
            else if (fieldShortName == "standardspage") return 6 //Số trang
            else if (fieldShortName == "standardspublicationDate") return 13 //Năm ban hành
            else if (fieldShortName == "standardsreplacedBy") return 9 //Tiêu chuẩn thay thế
            else if (fieldShortName == "standardsscope") return 3 //Phạm vi áp dụng
            else if (fieldShortName == "standardsstatus") return 11 //Tình trạng hiệu lực
            else if (fieldShortName == "standardssubject") return 334 //Khung phân loại tiêu chuẩn
            else if (fieldShortName == "standardstype") return 12 //Loại tiêu chuẩn 
        }
        else if (crisType == "techs") {
            if (fieldShortName == "techsacronym") return 200 //Tên viết tắt
            if (fieldShortName == "techsARK") return 207 //ARK
            if (fieldShortName == "techscollection") return 237 //Nguồn công nghệ
            if (fieldShortName == "techscountry") return 213 //Quốc gia phát triển
            if (fieldShortName == "techscreators") return 284 //Tác giả
            if (fieldShortName == "techsdescription") return 201 //Mô tả
            if (fieldShortName == "techsdoi") return 208 //DOI
            if (fieldShortName == "techskeyword") return 203 //Từ khoá
            if (fieldShortName == "techslicense") return 206 //Bản quyền
            if (fieldShortName == "techsname") return 298 //Tên công nghệ
            if (fieldShortName == "techsoriginatesFrom") return 210 //Kết quả nhiệm vụ
            if (fieldShortName == "techspresentedAt") return 211 //Trình diễn tại
            if (fieldShortName == "techsprovidersOrg") return 325 //Nhà cung cấp tổ chức
            if (fieldShortName == "techsprovidersPerson") return 324 //Nhà cung cấp cá nhân
            if (fieldShortName == "techspublicationDate") return 335 //Năm phát triển
            if (fieldShortName == "techsscope") return 214 //Phạm vi ứng dụng
            if (fieldShortName == "techsstatus") return 205 //Tình trạng phát triển
            if (fieldShortName == "techssubject") return 242 //Lĩnh vực KHCN
            if (fieldShortName == "techstype") return 212 //Loại công nghệ
            if (fieldShortName == "techsURL") return 209 //Tham chiếu trang web
            if (fieldShortName == "techsversioninfo") return 323 //Phiên bản
        }
    }

    //get_entity_id("patents");
    private Int get_entity_id(String crisType){
        // FIXME: mã fix cứng cần sửa khi sang sv mới
        if (crisType == "journals") return 1 //Tạp chí
        if (crisType == "events") return 2 //Sự kiện
        if (crisType == "standards") return 3 //Tiêu chuẩn
        if (crisType == "techs") return 4 //Công nghệ
        if (crisType == "patents") return 5 //Sáng chế
        if (crisType == "awards") return 6 //Giải thưởng
        if (crisType == "certificate") return 9 //Chứng nhận
        if (crisType == "project") return 11 //Nhiệm vụ
        if (crisType == "rp") return 10 //Nhân lực     
        if (crisType == "ou") return 12 //Tổ chức
    }    
    
    
}
