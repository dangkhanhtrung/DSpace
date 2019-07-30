/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.rest;

import java.sql.SQLException;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import org.dspace.app.cris.discovery.CrisSearchService;
import org.dspace.storage.rdbms.DatabaseManager;
import org.dspace.storage.rdbms.TableRow;
import org.dspace.utils.DataUtils;
import org.dspace.utils.ElasticQueryWrapUtil;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;

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
                String crisType = "patents";
                //FIXME: chưa đi sâu vào nhánh xml                
                // Truyền id vào cris_id/source_id từ xml vào trả lại id của record
                int cris_do_id = cris_entity_add(context, crisType, objectBody.getString("patent_ID"));
                int value_id;

                //field không có  <_source>
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_RegistrationNumber"));
                cris_prop_add(context, crisType, "patentsregistrationNumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_PatentNumber"));
                cris_prop_add(context, crisType, "patentsnumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "date", objectBody.getString("patent_ApprovalDate"));
                cris_prop_add(context, crisType, "patentsapprovaldate", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "date", objectBody.getString("patent_RegistrationDate"));
                cris_prop_add(context, crisType, "patentsregistrationdate", value_id, cris_do_id, 0);

                //add_value_by_xmlname(context,objectBody, cris_do_id, crisType, valueType, xmlfieldname, fieldShortName);
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Title", "patentsname");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Subject", "patentssubject");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Keyword", "patentskeyword");
                // TODO: patentsholder có thể type = ou / rp tạm thời cho vào patentsholdervalue
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Holders", "patentsholdervalue");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_References", "patentsreferences");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_OriginatesFrom", "patentsoriginatesFrom");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Inventors", "patentsinventors");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Type", "patentstype");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Status", "patentsstatus");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Issuer", "patentsissuer");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_CountryCode", "patentscountrycode");

            } else if (entity_object.equalsIgnoreCase("standards")) {
                String crisType = "standards";
                //FIXME: chưa đi sâu vào nhánh xml                
                // Truyền id vào cris_id/source_id từ xml vào trả lại id của record
                int cris_do_id = cris_entity_add(context, "standards", objectBody.getString("patent_ID"));
                int value_id;

                //field không có  <_source>
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_RegistrationNumber"));
                cris_prop_add(context, crisType, "patentsregistrationNumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_PatentNumber"));
                cris_prop_add(context, crisType, "patentsnumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "date", objectBody.getString("patent_ApprovalDate"));
                cris_prop_add(context, crisType, "patentsapprovaldate", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "date", objectBody.getString("patent_RegistrationDate"));
                cris_prop_add(context, crisType, "patentsregistrationdate", value_id, cris_do_id, 0);

                //add_value_by_xmlname(context,objectBody, cris_do_id, crisType, valueType, xmlfieldname, fieldShortName);
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Title", "patentsname");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Subject", "patentssubject");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Keyword", "patentskeyword");
                // TODO: patentsholder có thể type = ou / rp tạm thời cho vào patentsholdervalue
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Holders", "patentsholdervalue");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_References", "patentsreferences");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_OriginatesFrom", "patentsoriginatesFrom");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Inventors", "patentsinventors");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Type", "patentstype");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Status", "patentsstatus");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_Issuer", "patentsissuer");
                add_value_by_xmlname(context,objectBody, cris_do_id, crisType, "text", "patent_CountryCode", "patentscountrycode");            

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
    
    //cris_entity_add(context, "patents", "patent_ID");
    private int cris_entity_add(org.dspace.core.Context context, String crisType, String xml_ID){
        try{
            TableRow mappingRow;
            if (crisType.equals("ou")){
                mappingRow = DatabaseManager.row("cris_orgunits");
            }
            else if (crisType.equals("rp")) {
                mappingRow = DatabaseManager.row("cris_rpage");
            }
            else if (crisType.equals("pj")) {
                mappingRow = DatabaseManager.row("cris_project");
            }
            else if (crisType.equals("patents") | crisType.equals("standards") | crisType.equals("techs")){
                mappingRow = DatabaseManager.row("cris_do_prop");
                mappingRow.setColumn("typo_id", get_entity_id(crisType));
            }
            else{
                mappingRow = null;
            }
            mappingRow = DatabaseManager.row("cris_do");

            //mappingRow.setColumn("id", objectBody.getString("nth_id")); Không set
            mappingRow.setColumn("crisid", xml_ID); //get_id từ xml?
            mappingRow.setColumn("sourceid", xml_ID);
            mappingRow.setColumn("status", "true"); //true/false = public/hidden
            mappingRow.setColumn("uuid", UUID.randomUUID().toString());
            //mappingRow.setColumn("timestampcreated", objectBody.getString("nth_timestampcreated"));
            //mappingRow.setColumn("timestamplastmodified", objectBody.getString("nth_timestamplastmodified"));            
            //mappingRow.setColumn("sourceref", objectBody.getString("nth_sourceref")); null
            DatabaseManager.insert(context, mappingRow);//try catch?
            return mappingRow.getIntColumn("id");
        }
        catch (SQLException e){
            return -1;
        }
    }


    // cris_prop_add(context, "patents", "patentsname", value_id lấy từ jdyna_values_add, cris_do_id, 0);
    private void cris_prop_add(org.dspace.core.Context context, String crisType, String fieldShortName, int value_id, int cris_do_id, int positiondef){
        try{
            TableRow mappingRow;
            if (crisType.equals("ou")){
                mappingRow = DatabaseManager.row("cris_ou_prop");
            }
            else if (crisType.equals("rp")) {
                mappingRow = DatabaseManager.row("cris_rp_prop");
            }
            else if (crisType.equals("pj")) {
                mappingRow = DatabaseManager.row("cris_pj_prop");
            }
            else if (crisType.equals("patents") | crisType.equals("standards") | crisType.equals("techs")){
                mappingRow = DatabaseManager.row("cris_do_prop");
            }
            else{
                mappingRow = null;
            }
            mappingRow.setColumn("id", value_id); //id bảng jdyna_values
            //mappingRow.setColumn("enddate", null); null
            //mappingRow.setColumn("startdate", null); null
            //mappingRow.setColumn("lockdef", null); null
            mappingRow.setColumn("positiondef", positiondef);// FIXME: thuộc tính nhiều giá trị xếp thứ tự 0 -> 1 -> 2
            mappingRow.setColumn("visibility", "1"); // hiển thị trường hay không (tick lúc nhập dữ liệu) mặc định 1
            //mappingRow.setColumn("scopedef_id", null); null
            mappingRow.setColumn("value_id", value_id); // id bảng jdyna_values
            mappingRow.setColumn("parent_id", cris_do_id); // id bảng cris_do
            //need mapping
            mappingRow.setColumn("typo_id", get_field_typo_id(crisType, fieldShortName));
            DatabaseManager.insert(context, mappingRow);//try catch?
        }
        catch (SQLException e){
        }
    }

    // jdyna_values_add(context, "text", "patentsname123");
    private int jdyna_values_add(org.dspace.core.Context context, String valueType, String value){
        try{
            TableRow mappingRow;
            mappingRow = DatabaseManager.row("jdyna_values");

            mappingRow.setColumn("dtype", valueType);//text or date or ...
            //mappingRow.setColumn("id", value);//id do db đánh tự tăng
            mappingRow.setColumn("sortvalue", value);// thường giống text value, date thì 1 loạt số chưa biết pattern
            if (valueType.equals("date")) {
                mappingRow.setColumn("datevalue", value);
            }
            else if (valueType.equals("text")) {
                mappingRow.setColumn("textvalue", value);
            }
            else if (valueType.equals("rp")) {
                mappingRow.setColumn("textvalue", value);
                mappingRow.setColumn("rpvalue", value);//cris-id của đối tượng
            }
            else if (valueType.equals("ou")) {
                mappingRow.setColumn("textvalue", value);
                mappingRow.setColumn("ouvalue", value);//cris-id của đối tượng
            }
            else if (valueType.equals("project")) {
                mappingRow.setColumn("textvalue", value);
                mappingRow.setColumn("projectvalue", value);
            }
            else if ((valueType.equals("patent")) | (valueType.equals("tech"))) { //Các kiểu của cris ...
                mappingRow.setColumn("textvalue", value);
                mappingRow.setColumn("dovalue", value);//cris-id
            }

            // Mặc định null ???
            // mappingRow.setColumn("linkdescription", value);
            // mappingRow.setColumn("linkvalue", value);
            // mappingRow.setColumn("fileextension", value);
            // mappingRow.setColumn("filefolder", value);
            // mappingRow.setColumn("filemime", value);
            // mappingRow.setColumn("filename", value);
            // mappingRow.setColumn("doublevalue", value);

            // mappingRow.setColumn("booleanvalue", value);
            // mappingRow.setColumn("classificationvalue", value);
            // mappingRow.setColumn("custompointer", value);

            DatabaseManager.insert(context, mappingRow);//try catch?
            return mappingRow.getIntColumn("id");
        }
        catch (SQLException e){
            return -1;
        }
    }

    private int get_field_typo_id(String crisType, String fieldShortName){
        // FIXME: mã fix cứng cần sửa khi sang sv mới
        if (crisType.equals("patents")) {        
            if (fieldShortName.equals("patentsabstract")) return 58;//Mô tả tóm tắt
            if (fieldShortName.equals("patentsapprovaldate")) return 57;//Ngày công bố
            if (fieldShortName.equals("patentscountrycode")) return 65;//Quốc gia công nhận
            if (fieldShortName.equals("patentsexpiredDate")) return 302;//Ngày hết hiệu lực
            if (fieldShortName.equals("patentsholderOrgUnit")) return 321;//Chủ bằng tổ chức
            if (fieldShortName.equals("patentsholderPerson")) return 320;//Chủ bằng cá nhân
            if (fieldShortName.equals("patentsinventors")) return 282;//Tác giả
            if (fieldShortName.equals("patentsissuer")) return 61;//Tổ chức đại diện
            if (fieldShortName.equals("patentskeyword")) return 60;//Từ khoá
            if (fieldShortName.equals("patentsname")) return 297;//Tên sáng chế
            if (fieldShortName.equals("patentsnumber")) return 54;//Số sáng chế
            if (fieldShortName.equals("patentsoriginatesFrom")) return 63;//Kết quả nhiệm vụ
            if (fieldShortName.equals("patentspredecessor")) return 283;//Kế thừa từ sáng chế
            if (fieldShortName.equals("patentsregistrationdate")) return 56;//Ngày nộp đơn
            if (fieldShortName.equals("patentsregistrationNumber")) return 301;//Số đơn
            if (fieldShortName.equals("patentsstatus")) return 234;//Tình trạng hiệu lực
            if (fieldShortName.equals("patentssubject")) return 239;//Phân loại sáng chế quốc tế
            if (fieldShortName.equals("patentstype")) return 64;//Loại sáng chế
            if (fieldShortName.equals("patentsversioninfo")) return 55;//Thông tin phiên bản
            if (fieldShortName.equals("patentsholdervalue")) return 339;//Giá trị chủ bằng
            if (fieldShortName.equals("patentsreferences")) return 340;//Giá trị chủ bằng
        }
        else if (crisType.equals("standards")) {
            if (fieldShortName.equals("standardsdecisionnumber")) return 1;//Quyết định ban hành
            if (fieldShortName.equals("standardseditorsOrg")) return 327;//Tổ chức biên soạn
            if (fieldShortName.equals("standardseditorsPerson")) return 326;//Cá nhân biên soạn
            if (fieldShortName.equals("standardsequivalentTo")) return 8;//Tiêu chuẩn tương đương
            if (fieldShortName.equals("standardsidentifier")) return 4;//Số hiệu
            if (fieldShortName.equals("standardskeyword")) return 7;//Từ khoá
            if (fieldShortName.equals("standardsname")) return 299;//Tên tiêu chuẩn
            if (fieldShortName.equals("standardsnormativeReferences")) return 10;//Tiêu chuẩn viện dẫn
            if (fieldShortName.equals("standardspage")) return 6;//Số trang
            if (fieldShortName.equals("standardspublicationDate")) return 13;//Năm ban hành
            if (fieldShortName.equals("standardsreplacedBy")) return 9;//Tiêu chuẩn thay thế
            if (fieldShortName.equals("standardsscope")) return 3;//Phạm vi áp dụng
            if (fieldShortName.equals("standardsstatus")) return 11;//Tình trạng hiệu lực
            if (fieldShortName.equals("standardssubject")) return 334;//Khung phân loại tiêu chuẩn
            if (fieldShortName.equals("standardstype")) return 12;//Loại tiêu chuẩn 
        }
        else if (crisType.equals("techs")) {
            if (fieldShortName.equals("techsacronym")) return 200;//Tên viết tắt
            if (fieldShortName.equals("techsARK")) return 207;//ARK
            if (fieldShortName.equals("techscollection")) return 237;//Nguồn công nghệ
            if (fieldShortName.equals("techscountry")) return 213;//Quốc gia phát triển
            if (fieldShortName.equals("techscreators")) return 284;//Tác giả
            if (fieldShortName.equals("techsdescription")) return 201;//Mô tả
            if (fieldShortName.equals("techsdoi")) return 208;//DOI
            if (fieldShortName.equals("techskeyword")) return 203;//Từ khoá
            if (fieldShortName.equals("techslicense")) return 206;//Bản quyền
            if (fieldShortName.equals("techsname")) return 298;//Tên công nghệ
            if (fieldShortName.equals("techsoriginatesFrom")) return 210;//Kết quả nhiệm vụ
            if (fieldShortName.equals("techspresentedAt")) return 211;//Trình diễn tại
            if (fieldShortName.equals("techsprovidersOrg")) return 325;//Nhà cung cấp tổ chức
            if (fieldShortName.equals("techsprovidersPerson")) return 324;//Nhà cung cấp cá nhân
            if (fieldShortName.equals("techspublicationDate")) return 335;//Năm phát triển
            if (fieldShortName.equals("techsscope")) return 214;//Phạm vi ứng dụng
            if (fieldShortName.equals("techsstatus")) return 205;//Tình trạng phát triển
            if (fieldShortName.equals("techssubject")) return 242;//Lĩnh vực KHCN
            if (fieldShortName.equals("techstype")) return 212;//Loại công nghệ
            if (fieldShortName.equals("techsURL")) return 209;//Tham chiếu trang web
            if (fieldShortName.equals("techsversioninfo")) return 323;//Phiên bản
        }
        else if (crisType.equals("ou")) {
            if (fieldShortName.equals("boards")) return 19;//Scientifics Board
            if (fieldShortName.equals("crossrefid")) return 21;//Crossref Identifier
            if (fieldShortName.equals("logo")) return 26;//Hình ảnh
            if (fieldShortName.equals("acronym")) return 29;//Tên viết tắt
            if (fieldShortName.equals("identifier")) return 36;//Mã định danh tổ chức
            if (fieldShortName.equals("scopusAffiliationID")) return 37;//Mã định danh Scopus
            if (fieldShortName.equals("date")) return 22;//Ngày thành lập
            if (fieldShortName.equals("name")) return 27;//Tên tổ chức
            if (fieldShortName.equals("partof")) return 28;//Cơ quan cấp trên
            if (fieldShortName.equals("director")) return 24;//Người đứng đầu
            if (fieldShortName.equals("address")) return 31;//Địa chỉ tổ chức
            if (fieldShortName.equals("email")) return 34;//Thư điện tử
            if (fieldShortName.equals("phone")) return 32;//Điện thoại tổ chức
            if (fieldShortName.equals("fax")) return 33;//Số FAX
            if (fieldShortName.equals("website")) return 35;//Địa chỉ website
            if (fieldShortName.equals("activity")) return 220;//Phân loại dạng hoạt động
            if (fieldShortName.equals("province")) return 263;//Tỉnh thành
            if (fieldShortName.equals("orgDecided")) return 308;//Cơ quan QĐ thành lập
            if (fieldShortName.equals("outype")) return 231;//Loại tổ chức
            if (fieldShortName.equals("ousubject")) return 248;//Lĩnh vực KHCN
            if (fieldShortName.equals("oucountry")) return 25;//Quốc gia
        }
        else if (crisType.equals("rp")) {
            if (fieldShortName.equals("authorid")) return 112;//Researcher ID
            if (fieldShortName.equals("biography")) return 113;//Biography
            if (fieldShortName.equals("interests")) return 117;//Interests
            if (fieldShortName.equals("orcid-profile-pref-affiliation")) return 120;//affiliations-employment
            if (fieldShortName.equals("orcid-profile-pref-authorid")) return 121;//external-identifier-Researcher ID
            if (fieldShortName.equals("orcid-profile-pref-education")) return 122;//affiliations-education
            if (fieldShortName.equals("orcid-profile-pref-iso-country")) return 123;//iso-3166-country
            if (fieldShortName.equals("orcid-profile-pref-keywords")) return 124;//keywords
            if (fieldShortName.equals("orcid-profile-pref-personalsite")) return 125;//researcher-urls
            if (fieldShortName.equals("orcid-profile-pref-scopusid")) return 126;//external-identifier-Scopus Author ID
            if (fieldShortName.equals("orcid-profile-pref-variants")) return 127;//other-names
            if (fieldShortName.equals("orcid-projects-prefs")) return 128;//
            if (fieldShortName.equals("orcid-publications-prefs")) return 129;//
            if (fieldShortName.equals("orcid-push-crispj-activate-put")) return 130;//PUT mode enable for projects
            if (fieldShortName.equals("orcid-push-crisrp-activate-put")) return 131;//PUT mode enable for profile
            if (fieldShortName.equals("orcid-push-item-activate-put")) return 132;//PUT mode enable for publications
            if (fieldShortName.equals("orcid-push-manual")) return 133;//Synchronization mode
            if (fieldShortName.equals("otheremails")) return 134;//Other emails
            if (fieldShortName.equals("personalsite")) return 136;//Personal Site
            if (fieldShortName.equals("policy")) return 137;//Policy
            if (fieldShortName.equals("preferredName")) return 138;//Credit Name
            if (fieldShortName.equals("scopusid")) return 139;//Scopus Author ID
            if (fieldShortName.equals("system-orcid-profile-pref-biography")) return 140;//biography
            if (fieldShortName.equals("system-orcid-profile-pref-email")) return 141;//primary-email
            if (fieldShortName.equals("system-orcid-profile-pref-fullName")) return 142;//name
            if (fieldShortName.equals("system-orcid-profile-pref-otheremails")) return 143;//other-emails
            if (fieldShortName.equals("system-orcid-profile-pref-preferredName")) return 144;//credit-name
            if (fieldShortName.equals("system-orcid-token-activities-update")) return 145;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("system-orcid-token-authenticate")) return 146;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("system-orcid-token-person-update")) return 147;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("system-orcid-token-read-limited")) return 148;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("translatedName")) return 149;//Vernacular Name
            if (fieldShortName.equals("workgroups")) return 151;//Working groups
            if (fieldShortName.equals("variants")) return 150;//Variants
            if (fieldShortName.equals("birthDay")) return 152;//Ngày sinh
            if (fieldShortName.equals("identifiervalue")) return 266;//Mã định danh
            if (fieldShortName.equals("identifiertype")) return 265;//Loại mã định danh
            if (fieldShortName.equals("rpsubject")) return 246;//Lĩnh vực chuyên môn
            if (fieldShortName.equals("fullName")) return 116;//Tên chuyên gia
            if (fieldShortName.equals("orcid")) return 119;//ORCID
            if (fieldShortName.equals("firstName")) return 318;//Tên
            if (fieldShortName.equals("position")) return 154;//Chức danh, học hàm
            if (fieldShortName.equals("degree")) return 153;//Học vị
            if (fieldShortName.equals("familyName")) return 317;//Họ
            if (fieldShortName.equals("email")) return 115;//Thư điện tử
            if (fieldShortName.equals("otherNames")) return 291;//Bí danh
            if (fieldShortName.equals("phone")) return 288;//Số điện thoại
            if (fieldShortName.equals("rpcountry")) return 118;//Quốc tịch
            if (fieldShortName.equals("gender")) return 262;//Giới tính
            if (fieldShortName.equals("fax")) return 319;//Fax
            if (fieldShortName.equals("personalpicture")) return 135;//Ảnh đại diện
            if (fieldShortName.equals("dept")) return 333;//Nơi công tác hiện tại
        }
        else if (crisType.equals("pj")) {
            if (fieldShortName.equals("awardURL")) return 72;//Award URL
            if (fieldShortName.equals("code")) return 73;//Code
            if (fieldShortName.equals("coinvestigators")) return 74;//Co-Investigator(s)
            if (fieldShortName.equals("expdate")) return 75;//Expected Completion
            if (fieldShortName.equals("grantamount")) return 78;//Amount
            if (fieldShortName.equals("grantduration")) return 79;//Duration
            if (fieldShortName.equals("granttype")) return 80;//Grant type
            if (fieldShortName.equals("logo")) return 82;//Hình ảnh
            if (fieldShortName.equals("openaireid")) return 83;//OpenAIRE
            if (fieldShortName.equals("organization")) return 84;//Participant Organization(s)
            if (fieldShortName.equals("projectURL")) return 86;//Project URL
            if (fieldShortName.equals("acronym")) return 89;//Tên viết tắt
            if (fieldShortName.equals("contact")) return 101;//Thư ký
            if (fieldShortName.equals("member")) return 102;//Thành viên
            if (fieldShortName.equals("openaccess")) return 267;//Truy cập
            if (fieldShortName.equals("memberValue")) return 312;//Thành Viên text
            if (fieldShortName.equals("partner")) return 97;//Đối tác thực hiện
            if (fieldShortName.equals("inKindContributor")) return 99;//Tổ chức phối hợp
            if (fieldShortName.equals("principalInvestigator")) return 100;//Chủ nhiệm
            if (fieldShortName.equals("fundedByPerson")) return 286;//Cá nhân tài trợ
            if (fieldShortName.equals("fundedByOrg")) return 287;//Tổ chức tài trợ
            if (fieldShortName.equals("principalInvestigatorValue")) return 311;//Chủ nhiệm text
            if (fieldShortName.equals("identifier")) return 94;//Mã số
            if (fieldShortName.equals("level")) return 92;//Cấp quản lý
            if (fieldShortName.equals("authority")) return 252;//Đơn vị chủ quản
            if (fieldShortName.equals("startdate")) return 87;//Thời gian bắt đầu
            if (fieldShortName.equals("enddate")) return 90;//Thời gian kết thúc
            if (fieldShortName.equals("abstract")) return 71;//Mô tả tóm tắt
            if (fieldShortName.equals("keywords")) return 81;//Từ khoá
            if (fieldShortName.equals("partOf")) return 103;//Thuộc nhiệm vụ
            if (fieldShortName.equals("title")) return 88;//Tên nhiệm vụ
            if (fieldShortName.equals("status")) return 95;//Tình trạng thực hiện
            if (fieldShortName.equals("pjtype")) return 93;//Loại nhiệm vụ
            if (fieldShortName.equals("pjsubject")) return 247;//Lĩnh vực nghiên cứu
            if (fieldShortName.equals("coordinator")) return 96;//Tổ chức cấp trên của tổ chức chủ trì
            if (fieldShortName.equals("contractor")) return 98;//Tổ chức chủ trì
            if (fieldShortName.equals("contactValue")) return 313;//Thư ký text
            if (fieldShortName.equals("contractorValue")) return 310;//Tổ chức chủ trì text
            if (fieldShortName.equals("coordinatorValue")) return 309;//Tổ chức cấp trên của tổ chức chủ trì text
            
        }
        return -1;
    }

    //get_entity_id("patents");
    private int get_entity_id(String crisType){
        // FIXME: mã fix cứng cần sửa khi sang sv mới
        if (crisType.equals("journals")) return 1; //Tạp chí
        if (crisType.equals("events")) return 2; //Sự kiện
        if (crisType.equals("standards")) return 3; //Tiêu chuẩn
        if (crisType.equals("techs")) return 4; //Công nghệ
        if (crisType.equals("patents")) return 5; //Sáng chế
        if (crisType.equals("awards")) return 6; //Giải thưởng
        if (crisType.equals("certificate")) return 9; //Chứng nhận
        if (crisType.equals("project")) return 11; //Nhiệm vụ
        if (crisType.equals("rp")) return 10; //Nhân lực
        if (crisType.equals("ou")) return 12; //Tổ chức
        return -1;
    }

    private String add_value_by_xmlname(org.dspace.core.Context context, JSONObject objectBody, int cris_do_id, String crisType, String valueType,
                                        String xmlFieldName, String fieldShortName){
        try{
            if (!objectBody.isNull(xmlFieldName))//xmlFieldName = "patent_Subject"
            {
                Object item = objectBody.get(xmlFieldName);
                if (item instanceof JSONArray)
                {
                    JSONArray objArray = (JSONArray) item;
                    int positiondef = 0;
                    for ( Object obj : objArray) {
                        JSONObject object = (JSONObject) obj;
                        int value_id = jdyna_values_add(context, valueType, object.getJSONObject("_source")
                                                        .getString("title")); //lấy dữ liệu thêm vào bảng jdyna_values
                        cris_prop_add(context, crisType, fieldShortName, value_id, cris_do_id, positiondef);
                        positiondef++;
                    }
                    return "array";
                }
                else
                {
                    JSONObject object = (JSONObject) item;
                    int value_id = jdyna_values_add(context, valueType, object.getJSONObject("_source")
                                                    .getString("title"));
                    cris_prop_add(context, "patents", "patentsoriginatesFrom",
                                    value_id, cris_do_id, 0);
                    return "object";
                }
            }
            else
            {
                return "Null objectBody";
            }
        }
        catch (Exception e){
            return "Error";
        }
    }
    
}
