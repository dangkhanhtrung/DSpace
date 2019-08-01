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
            log.info("finally");
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
            TableRow mappingRowXXX;
            if (entity_object.equalsIgnoreCase("journal")) {
            	/*
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
            	*/
            } else if (entity_object.equalsIgnoreCase("patent")) {
          
                String crisType = "patent";
                //FIXME: chưa đi sâu vào nhánh xml                
                // Truyền id vào cris_id/source_id từ xml vào trả lại id của record
                int cris_do_id = cris_entity_add(context, crisType, objectBody.getString("patent_ID"));
                log.info("cris_do_idcris_do_idcris_do_idcris_do_id" + cris_do_id);
                int value_id;
                
                //field không có  <_source>
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_RegistrationNumber"));
                //cris_prop_add(context, crisType, "patentsregistrationNumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_PatentNumber"));
                //cris_prop_add(context, crisType, "patentsnumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "date", objectBody.getString("patent_ApprovalDate"));
                //cris_prop_add(context, crisType, "patentsapprovaldate", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "date", objectBody.getString("patent_RegistrationDate"));
                //cris_prop_add(context, crisType, "patentsregistrationdate", value_id, cris_do_id, 0);

                /*
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
                */
                crisSearchService.updateCrisIndexPublic(context, true);
                //crisSearchService.updateCrisIndexPublic(context, objectBody.getString("patent_ID"));
                
            } else if (entity_object.equalsIgnoreCase("publication")) {
            	
            	mappingRowXXX = DatabaseManager.row("item");
    	        
            	mappingRowXXX.setColumn("submitter_id", 1);
            	mappingRowXXX.setColumn("in_archive", true);
            	mappingRowXXX.setColumn("withdrawn", false);
            	mappingRowXXX.setColumn("owning_collection", 1);
            	mappingRowXXX.setColumn("last_modified", currentTimestamp);
            	mappingRowXXX.setColumn("discoverable", true);

    	        log.info("adddddadddddadddddadddddadddddaddddd mappingRow" + mappingRowXXX);
    	        
    	        DatabaseManager.insert(context, mappingRowXXX);

    	        int idItem = mappingRowXXX.getIntColumn("item_id");
    	        log.info("insert DONE DONE DONE DONE DONE" + idItem);
    	        /*
    	        mappingRow = DatabaseManager.row("handle");
    	        
    	        mappingRow.setColumn("handle", "123456789/" + objectBody.getString("publication_ID"));
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("handle_id", idItem);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow = DatabaseManager.row("metadatavalue");
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 14);
    	        mappingRow.setColumn("text_value", new Date(objectBody.getLong("createdAt")) + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow = DatabaseManager.row("metadatavalue");
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", 13);
    	        mappingRow.setColumn("text_value", new Date(objectBody.getLong("modifiedAt")) + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow = DatabaseManager.row("metadatavalue");
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "identifier.uri"));
    	        mappingRow.setColumn("text_value", "http://hdl.handle.net/123456789/" + objectBody.getString("publication_ID"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "contributor.author"));
    	        mappingRow.setColumn("text_value", "admin");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "description.abstract"));
    	        //mappingRow.setColumn("text_value", "publication_Abstract" objectBody.getJSONObject("publication_Abstract").getJSONObject("_source").getString("title"));
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        // keyword 59
    	        // URL 80
    	        // 20
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "subject"));
    	        //mappingRow.setColumn("text_value", "publication_Subject"objectBody.getJSONObject("publication_Subject").getJSONObject("_source").getString("title") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "language.iso"));
    	        //mappingRow.setColumn("text_value", "publication_Language"objectBody.getJSONObject("publication_Language").getJSONObject("_source").getString("shortName") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "relation.firstpage"));
    	        mappingRow.setColumn("text_value", objectBody.getString("publication_StartPage") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "relation.lastpage"));
    	        mappingRow.setColumn("text_value", objectBody.getString("publication_EndPage") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "type"));
    	        //mappingRow.setColumn("text_value", "publication_Type"objectBody.getJSONObject("publication_Type").getJSONObject("_source").getString("title") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "publisher"));
    	        mappingRow.setColumn("text_value", "publication_Publisher"objectBody.getJSONObject("publication_Publisher").getJSONObject("_source").getString("title") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "date.issued"));
    	        mappingRow.setColumn("text_value", objectBody.getInt("publication_PublicationDate") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "title"));
    	        mappingRow.setColumn("text_value", objectBody.getString("title") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);

    	        
    	        mappingRow.setColumn("resource_type_id", 2);
    	        mappingRow.setColumn("resource_id", idItem);
    	        mappingRow.setColumn("metadata_field_id", get_field_typo_id("publications", "contributor.author"));
    	        mappingRow.setColumn("text_value", objectBody.getString("author") + " ");
    	        mappingRow.setColumn("text_lang", "vi_VN");
    	        mappingRow.setColumn("place", 1);
    	        mappingRow.setColumn("confidence", -1);

    	        DatabaseManager.insert(context, mappingRow);
    	        */
                crisSearchService.updatePublicIndexPublic(context, "123456789/" + objectBody.getString("publication_ID"), String.valueOf(idItem));
    	        
            }


            
            log.info("crisSearchServicecrisSearchServicecrisSearchService" + crisSearchService);
            
            context.complete();
        }
        catch (Exception e)
        {
            processException("Exception: " + e, context);
        }
        finally
        {
            log.info("finally");
            processFinally(context);
        }

        return results.toString();
    }
    
    //cris_entity_add(context, "patents", "patent_ID");
    private int cris_entity_add(org.dspace.core.Context context, String crisType, String xml_ID){
        try{
            log.info("cris_entity_addcris_entity_addcris_entity_add");
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
            else{
            	mappingRow = DatabaseManager.row("cris_do");
                log.info("crisType" + crisType);
                log.info("crisTypexxxx" + crisType.equalsIgnoreCase("patent"));
            	if (crisType.equalsIgnoreCase("patent")) {
            		mappingRow.setColumn("typo_id", 5);
                    log.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + crisType);
            	}
                log.info("mappingRow2" + mappingRow);
            }

            Date currentTimestamp = new Date();
            
            /*
            //mappingRow.setColumn("id", objectBody.getString("nth_id")); Không set
            mappingRow.setColumn("crisid", xml_ID); //get_id từ xml?
            mappingRow.setColumn("sourceid", xml_ID);
            mappingRow.setColumn("status", true); //true/false = public/hidden
            mappingRow.setColumn("uuid", UUID.randomUUID().toString());
            mappingRow.setColumn("timestampcreated", new Date());
            mappingRow.setColumn("timestamplastmodified", new Date());            
            //mappingRow.setColumn("sourceref", objectBody.getString("nth_sourceref")); null
            */
            mappingRow.setColumn("crisid", xml_ID);
	        mappingRow.setColumn("sourceid", xml_ID);
	        mappingRow.setColumn("status", true);
	        mappingRow.setColumn("uuid", UUID.randomUUID().toString());
	        mappingRow.setColumn("timestampcreated", currentTimestamp);
	        mappingRow.setColumn("timestamplastmodified", currentTimestamp);
	        
            DatabaseManager.insert(context, mappingRow);//try catch?
            log.info("mappingRowmappingRowmappingRow" + mappingRow);
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
            else{
            	mappingRow = DatabaseManager.row("cris_do_prop");
            }
            mappingRow.setColumn("id", value_id); //id bảng jdyna_values
            //mappingRow.setColumn("enddate", null); null
            //mappingRow.setColumn("startdate", null); null
            //mappingRow.setColumn("lockdef", null); null
            mappingRow.setColumn("positiondef", positiondef);// FIXME: thuộc tính nhiều giá trị xếp thứ tự 0 -> 1 -> 2
            mappingRow.setColumn("visibility", 1); // hiển thị trường hay không (tick lúc nhập dữ liệu) mặc định 1
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
                mappingRow.setColumn("datevalue", new Date());
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
                //mappingRow.setColumn("dovalue", value);//cris-id
            }

            log.info("jdyna_values_addjdyna_values_addjdyna_values_add" + mappingRow);
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
            log.info("jdyna_values_addjdyna_values_addjdyna_values_add DONEEE DONEEE DONEEE DONEEE" + mappingRow);
            return mappingRow.getIntColumn("id");
        }
        catch (SQLException e){
            return -1;
        }
    }

    private int get_field_typo_id(String crisType, String fieldShortName){
        // FIXME: mã fix cứng cần sửa khi sang sv mới
        if (crisType.equals("patents")) {        
            if (fieldShortName.equals("patentsversioninfo")) return 65;//Thông tin phiên bản
            if (fieldShortName.equals("patentsissuer")) return 66;//Tổ chức đại diện
            if (fieldShortName.equals("patentsapprovaldate")) return 67;//Ngày công bố
            if (fieldShortName.equals("patentscountrycode")) return 68;//Quốc gia công nhận
            if (fieldShortName.equals("patentsregistrationdate")) return 69;//Ngày nộp đơn
            if (fieldShortName.equals("patentskeyword")) return 70;//Từ khoá
            if (fieldShortName.equals("patentsoriginatesFrom")) return 71;//Kết quả nhiệm vụ
            if (fieldShortName.equals("patentsabstract")) return 72;//Mô tả tóm tắt
            if (fieldShortName.equals("patentsnumber")) return 73;//Số sáng chế
            if (fieldShortName.equals("patentstype")) return 74;//Loại sáng chế
            if (fieldShortName.equals("patentsstatus")) return 75;//Tình trạng hiệu lực
            if (fieldShortName.equals("patentsregistrationNumber")) return 76;//Số đơn
            if (fieldShortName.equals("patentspredecessor")) return 77;//Kế thừa từ sáng chế
            if (fieldShortName.equals("patentsholderOrgUnit")) return 78;//Chủ bằng tổ chức
            if (fieldShortName.equals("patentsexpiredDate")) return 79;//Ngày hết hiệu lực
            if (fieldShortName.equals("patentsholderPerson")) return 80;//Chủ bằng cá nhân
            if (fieldShortName.equals("patentsname")) return 81;//Tên sáng chế
            if (fieldShortName.equals("patentsinventors")) return 82;//Tác giả
            if (fieldShortName.equals("patentsholdervalue")) return 83;//Chủ bằng
            if (fieldShortName.equals("patentsreferences")) return 84;//Tài liệu tham chiếu
            if (fieldShortName.equals("patentssubject")) return 85;//Phân loại sáng chế quốc tế
            if (fieldShortName.equals("patentsinventorsvalue")) return 86;//Tác giả
        }
        else if (crisType.equals("standards")) {
            if (fieldShortName.equals("standardstype")) return 1;//Loại tiêu chuẩn
            if (fieldShortName.equals("standardsidentifier")) return 2;//Số hiệu
            if (fieldShortName.equals("standardspublicationDate")) return 3;//Năm ban hành
            if (fieldShortName.equals("standardsscope")) return 4;//Phạm vi áp dụng
            if (fieldShortName.equals("standardskeyword")) return 5;//Từ khoá
            if (fieldShortName.equals("standardspage")) return 6;//Số trang
            if (fieldShortName.equals("standardsstatus")) return 7;//Tình trạng hiệu lực
            if (fieldShortName.equals("standardsequivalentTo")) return 8;//Tiêu chuẩn tương đương
            if (fieldShortName.equals("standardsnormativeReferences")) return 9;//Tiêu chuẩn viện dẫn
            if (fieldShortName.equals("standardsreplacedBy")) return 10;//Tiêu chuẩn thay thế
            if (fieldShortName.equals("standardsdecisionnumber")) return 11;//Quyết định ban hành
            if (fieldShortName.equals("standardseditorsPerson")) return 12;//Cá nhân biên soạn
            if (fieldShortName.equals("standardseditorsOrg")) return 13;//Tổ chức biên soạn
            if (fieldShortName.equals("standardsname")) return 14;//Tên tiêu chuẩn
            if (fieldShortName.equals("standardssubject")) return 15;//Khung phân loại tiêu chuẩn
        }
        else if (crisType.equals("techs")) {
            if (fieldShortName.equals("techsacronym")) return 215;//Tên viết tắt
            if (fieldShortName.equals("techsdescription")) return 216;//Mô tả
            if (fieldShortName.equals("techskeyword")) return 217;//Từ khoá
            if (fieldShortName.equals("techsARK")) return 218;//ARK
            if (fieldShortName.equals("techsdoi")) return 219;//DOI
            if (fieldShortName.equals("techsURL")) return 220;//Tham chiếu trang web
            if (fieldShortName.equals("techscollection")) return 221;//Nguồn công nghệ
            if (fieldShortName.equals("techscountry")) return 222;//Quốc gia phát triển
            if (fieldShortName.equals("techsscope")) return 223;//Phạm vi ứng dụng
            if (fieldShortName.equals("techsstatus")) return 224;//Tình trạng phát triển
            if (fieldShortName.equals("techscreators")) return 225;//Tác giả
            if (fieldShortName.equals("techsoriginatesFrom")) return 226;//Kết quả nhiệm vụ
            if (fieldShortName.equals("techspresentedAt")) return 227;//Trình diễn tại
            if (fieldShortName.equals("techstype")) return 228;//Loại công nghệ
            if (fieldShortName.equals("techslicense")) return 229;//Bản quyền
            if (fieldShortName.equals("techsprovidersPerson")) return 230;//Nhà cung cấp cá nhân
            if (fieldShortName.equals("techsprovidersOrg")) return 231;//Nhà cung cấp tổ chức
            if (fieldShortName.equals("techsversioninfo")) return 232;//Phiên bản
            if (fieldShortName.equals("techspublicationDate")) return 233;//Năm phát triển
            if (fieldShortName.equals("techsname")) return 234;//Tên công nghệ
            if (fieldShortName.equals("techssubject")) return 235;//Lĩnh vực KHCN
        }
        else if (crisType.equals("ou")) {
            if (fieldShortName.equals("boards")) return 16;//Scientifics Board
            if (fieldShortName.equals("crossrefid")) return 17;//Crossref Identifier
            if (fieldShortName.equals("date")) return 18;//Ngày thành lập
            if (fieldShortName.equals("director")) return 19;//Người đứng đầu
            if (fieldShortName.equals("oucountry")) return 20;//Quốc gia
            if (fieldShortName.equals("logo")) return 21;//Hình ảnh
            if (fieldShortName.equals("name")) return 22;//Tên tổ chức
            if (fieldShortName.equals("partof")) return 23;//Cơ quan cấp trên
            if (fieldShortName.equals("acronym")) return 24;//Tên viết tắt
            if (fieldShortName.equals("address")) return 25;//Địa chỉ tổ chức
            if (fieldShortName.equals("phone")) return 26;//Điện thoại tổ chức
            if (fieldShortName.equals("fax")) return 27;//Số FAX
            if (fieldShortName.equals("email")) return 28;//Thư điện tử
            if (fieldShortName.equals("website")) return 29;//Địa chỉ website
            if (fieldShortName.equals("identifier")) return 30;//Mã định danh tổ chức
            if (fieldShortName.equals("scopusAffiliationID")) return 31;//Mã định danh Scopus
            if (fieldShortName.equals("activity")) return 32;//Phân loại dạng hoạt động
            if (fieldShortName.equals("outype")) return 33;//Loại tổ chức
            if (fieldShortName.equals("province")) return 34;//Tỉnh thành
            if (fieldShortName.equals("orgDecided")) return 35;//Cơ quan QĐ thành lập
            if (fieldShortName.equals("ousubject")) return 36;//Lĩnh vực KHCN
        }
        else if (crisType.equals("rp")) {
            if (fieldShortName.equals("authorid")) return 133;//Researcher ID
            if (fieldShortName.equals("biography")) return 134;//Biography
            if (fieldShortName.equals("email")) return 135;//Thư điện tử
            if (fieldShortName.equals("fullName")) return 136;//Tên chuyên gia
            if (fieldShortName.equals("interests")) return 137;//Interests
            if (fieldShortName.equals("rpcountry")) return 138;//Quốc tịch
            if (fieldShortName.equals("orcid")) return 139;//ORCID
            if (fieldShortName.equals("orcid-profile-pref-affiliation")) return 140;//affiliations-employment
            if (fieldShortName.equals("orcid-profile-pref-authorid")) return 141;//external-identifier-Researcher ID
            if (fieldShortName.equals("orcid-profile-pref-education")) return 142;//affiliations-education
            if (fieldShortName.equals("orcid-profile-pref-iso-country")) return 143;//iso-3166-country
            if (fieldShortName.equals("orcid-profile-pref-keywords")) return 144;//keywords
            if (fieldShortName.equals("orcid-profile-pref-personalsite")) return 145;//researcher-urls
            if (fieldShortName.equals("orcid-profile-pref-scopusid")) return 146;//external-identifier-Scopus Author ID
            if (fieldShortName.equals("orcid-profile-pref-variants")) return 147;//other-names
            if (fieldShortName.equals("orcid-projects-prefs")) return 148;
            if (fieldShortName.equals("orcid-publications-prefs")) return 149;
            if (fieldShortName.equals("orcid-push-crispj-activate-put")) return 150;//PUT mode enable for projects
            if (fieldShortName.equals("orcid-push-crisrp-activate-put")) return 151;//PUT mode enable for profile
            if (fieldShortName.equals("orcid-push-item-activate-put")) return 152;//PUT mode enable for publications
            if (fieldShortName.equals("orcid-push-manual")) return 153;//Synchronization mode
            if (fieldShortName.equals("otheremails")) return 154;//Other emails
            if (fieldShortName.equals("personalpicture")) return 155;//Ảnh đại diện
            if (fieldShortName.equals("personalsite")) return 156;//Personal Site
            if (fieldShortName.equals("policy")) return 157;//Policy
            if (fieldShortName.equals("preferredName")) return 158;//Credit Name
            if (fieldShortName.equals("scopusid")) return 159;//Scopus Author ID
            if (fieldShortName.equals("system-orcid-profile-pref-biography")) return 160;//biography
            if (fieldShortName.equals("system-orcid-profile-pref-email")) return 161;//primary-email
            if (fieldShortName.equals("system-orcid-profile-pref-fullName")) return 162;//name
            if (fieldShortName.equals("system-orcid-profile-pref-otheremails")) return 163;//other-emails
            if (fieldShortName.equals("system-orcid-profile-pref-preferredName")) return 164;//credit-name
            if (fieldShortName.equals("system-orcid-token-activities-update")) return 165;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("system-orcid-token-authenticate")) return 166;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("system-orcid-token-person-update")) return 167;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("system-orcid-token-read-limited")) return 168;//ORCID authorization scope (internally used)
            if (fieldShortName.equals("translatedName")) return 169;//Vernacular Name
            if (fieldShortName.equals("variants")) return 170;//Variants
            if (fieldShortName.equals("workgroups")) return 171;//Working groups
            if (fieldShortName.equals("birthDay")) return 172;//Ngày sinh
            if (fieldShortName.equals("degree")) return 173;//Học vị
            if (fieldShortName.equals("position")) return 174;//Chức danh, học hàm
            if (fieldShortName.equals("gender")) return 175;//Giới tính
            if (fieldShortName.equals("identifiertype")) return 176;//Loại mã định danh
            if (fieldShortName.equals("identifiervalue")) return 177;//Mã định danh
            if (fieldShortName.equals("phone")) return 178;//Số điện thoại
            if (fieldShortName.equals("otherNames")) return 179;//Bí danh
            if (fieldShortName.equals("familyName")) return 180;//Họ
            if (fieldShortName.equals("firstName")) return 181;//Tên
            if (fieldShortName.equals("fax")) return 182;//Fax
            if (fieldShortName.equals("dept")) return 183;//Nơi công tác hiện tại
            if (fieldShortName.equals("rpsubject")) return 184;//Lĩnh vực chuyên môn
        }
        else if (crisType.equals("pj")) {
            if (fieldShortName.equals("abstract")) return 87;//Mô tả tóm tắt
            if (fieldShortName.equals("awardURL")) return 88;//Award URL
            if (fieldShortName.equals("code")) return 89;//Code
            if (fieldShortName.equals("coinvestigators")) return 90;//Co-Investigator(s)
            if (fieldShortName.equals("expdate")) return 91;//Expected Completion
            if (fieldShortName.equals("grantamount")) return 92;//Amount
            if (fieldShortName.equals("grantduration")) return 93;//Duration
            if (fieldShortName.equals("granttype")) return 94;//Grant type
            if (fieldShortName.equals("keywords")) return 95;//Từ khoá
            if (fieldShortName.equals("logo")) return 96;//Hình ảnh
            if (fieldShortName.equals("openaireid")) return 97;//OpenAIRE
            if (fieldShortName.equals("organization")) return 98;//Participant Organization(s)
            if (fieldShortName.equals("projectURL")) return 99;//Project URL
            if (fieldShortName.equals("startdate")) return 100;//Thời gian bắt đầu
            if (fieldShortName.equals("title")) return 101;//Tên nhiệm vụ
            if (fieldShortName.equals("acronym")) return 102;//Tên viết tắt
            if (fieldShortName.equals("enddate")) return 103;//Thời gian kết thúc
            if (fieldShortName.equals("level")) return 104;//Cấp quản lý
            if (fieldShortName.equals("pjtype")) return 105;//Loại nhiệm vụ
            if (fieldShortName.equals("identifier")) return 106;//Mã số
            if (fieldShortName.equals("status")) return 107;//Tình trạng thực hiện
            if (fieldShortName.equals("coordinator")) return 108;//Tổ chức cấp trên của tổ chức chủ trì
            if (fieldShortName.equals("partner")) return 109;//Đối tác thực hiện
            if (fieldShortName.equals("contractor")) return 110;//Tổ chức chủ trì
            if (fieldShortName.equals("inKindContributor")) return 111;//Tổ chức phối hợp
            if (fieldShortName.equals("principalInvestigator")) return 112;//Chủ nhiệm
            if (fieldShortName.equals("contact")) return 113;//Thư ký
            if (fieldShortName.equals("member")) return 114;//Thành viên
            if (fieldShortName.equals("partOf")) return 115;//Thuộc nhiệm vụ
            if (fieldShortName.equals("authority")) return 116;//Đơn vị chủ quản
            if (fieldShortName.equals("openaccess")) return 117;//Truy cập
            if (fieldShortName.equals("fundedByPerson")) return 118;//Cá nhân tài trợ
            if (fieldShortName.equals("fundedByOrg")) return 119;//Tổ chức tài trợ
            if (fieldShortName.equals("pjsubject")) return 120;//Lĩnh vực nghiên cứu            
        }
        else if (crisType.equals("publications")) {
            if (fieldShortName.equals("utils.nodoi")) return 1;
            if (fieldShortName.equals("utils.processdoi")) return 2;
            if (fieldShortName.equals("contributor")) return 3; 
            if (fieldShortName.equals("contributor.advisor")) return 4;
            if (fieldShortName.equals("contributor.author")) return 5;
            if (fieldShortName.equals("contributor.editor")) return 6;
            if (fieldShortName.equals("contributor.illustrator")) return 7;
            if (fieldShortName.equals("contributor.other")) return 8;
            if (fieldShortName.equals("coverage.spatial")) return 9;
            if (fieldShortName.equals("coverage.temporal")) return 10;
            if (fieldShortName.equals("creator")) return 11;    
            if (fieldShortName.equals("date")) return 12;   
            if (fieldShortName.equals("date.accessioned")) return 13;
            if (fieldShortName.equals("date.available")) return 14;
            if (fieldShortName.equals("date.copyright")) return 15;
            if (fieldShortName.equals("date.created")) return 16;
            if (fieldShortName.equals("date.issued")) return 17;
            if (fieldShortName.equals("date.submitted")) return 18;
            if (fieldShortName.equals("identifier")) return 19; 
            if (fieldShortName.equals("identifier.citation")) return 20;
            if (fieldShortName.equals("identifier.govdoc")) return 21;
            if (fieldShortName.equals("identifier.isbn")) return 22;
            if (fieldShortName.equals("identifier.issn")) return 23;
            if (fieldShortName.equals("identifier.sici")) return 24;
            if (fieldShortName.equals("identifier.ismn")) return 25;
            if (fieldShortName.equals("identifier.other")) return 26;
            if (fieldShortName.equals("identifier.uri")) return 27;
            if (fieldShortName.equals("description")) return 28;    
            if (fieldShortName.equals("description.abstract")) return 29;
            if (fieldShortName.equals("description.provenance")) return 30;
            if (fieldShortName.equals("description.sponsorship")) return 31;
            if (fieldShortName.equals("description.statementofresponsibility")) return 32;
            if (fieldShortName.equals("description.tableofcontents")) return 33;
            if (fieldShortName.equals("description.uri")) return 34;
            if (fieldShortName.equals("format")) return 35; 
            if (fieldShortName.equals("format.extent")) return 36;
            if (fieldShortName.equals("format.medium")) return 37;
            if (fieldShortName.equals("format.mimetype")) return 38;
            if (fieldShortName.equals("language")) return 39;   
            if (fieldShortName.equals("language.iso")) return 40;
            if (fieldShortName.equals("publisher")) return 41;  
            if (fieldShortName.equals("relation")) return 42;   
            if (fieldShortName.equals("relation.isformatof")) return 43;
            if (fieldShortName.equals("relation.ispartof")) return 44;
            if (fieldShortName.equals("relation.ispartofseries")) return 45;
            if (fieldShortName.equals("relation.haspart")) return 46;
            if (fieldShortName.equals("relation.isversionof")) return 47;
            if (fieldShortName.equals("relation.hasversion")) return 48;
            if (fieldShortName.equals("relation.isbasedon")) return 49;
            if (fieldShortName.equals("relation.isreferencedby")) return 50;
            if (fieldShortName.equals("relation.requires")) return 51;
            if (fieldShortName.equals("relation.replaces")) return 52;
            if (fieldShortName.equals("relation.isreplacedby")) return 53;
            if (fieldShortName.equals("relation.uri")) return 54;
            if (fieldShortName.equals("rights")) return 55; 
            if (fieldShortName.equals("rights.uri")) return 56;
            if (fieldShortName.equals("source")) return 57; 
            if (fieldShortName.equals("source.uri")) return 58;
            if (fieldShortName.equals("subject")) return 59;    
            if (fieldShortName.equals("subject.classification")) return 60;
            if (fieldShortName.equals("subject.ddc")) return 61;
            if (fieldShortName.equals("subject.lcc")) return 62;
            if (fieldShortName.equals("subject.lcsh")) return 63;
            if (fieldShortName.equals("subject.mesh")) return 64;
            if (fieldShortName.equals("subject.other")) return 65;
            if (fieldShortName.equals("title")) return 66;  
            if (fieldShortName.equals("title.alternative")) return 67;
            if (fieldShortName.equals("type")) return 68;   
            if (fieldShortName.equals("provenance")) return 69; 
            if (fieldShortName.equals("rights.license")) return 70;
            if (fieldShortName.equals("relation.conference")) return 71;
            if (fieldShortName.equals("relation.dataset")) return 72;
            if (fieldShortName.equals("relation.publication")) return 73;
            if (fieldShortName.equals("identifier.doi")) return 74;
            if (fieldShortName.equals("identifier.pmid")) return 75;
            if (fieldShortName.equals("identifier.arxiv")) return 76;
            if (fieldShortName.equals("identifier.scopus")) return 77;
            if (fieldShortName.equals("identifier.isi")) return 78;
            if (fieldShortName.equals("identifier.ark")) return 79;
            if (fieldShortName.equals("identifier.url")) return 80;
            if (fieldShortName.equals("contributor.orcid")) return 81;
            if (fieldShortName.equals("identifier.bibcode")) return 82;
            if (fieldShortName.equals("identifier.external")) return 83;
            if (fieldShortName.equals("domain")) return 84; 
            if (fieldShortName.equals("relation.firstpage")) return 85;
            if (fieldShortName.equals("relation.lastpage")) return 86;
            if (fieldShortName.equals("identifier.eissn")) return 87;
            if (fieldShortName.equals("volume")) return 88; 
            if (fieldShortName.equals("number")) return 89; 
            if (fieldShortName.equals("collection")) return 90; 
            if (fieldShortName.equals("date.updated")) return 152;
            if (fieldShortName.equals("description.version")) return 153;
            if (fieldShortName.equals("identifier.slug")) return 154;
            if (fieldShortName.equals("language.rfc3066")) return 155;
            if (fieldShortName.equals("rights.holder")) return 156;
            
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
        if (crisType.equals("certificate")) return 7; //Chứng nhận
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
