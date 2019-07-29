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
                // Truyền id vào cris_id/source_id từ xml vào trả lại id của record
                int cris_do_id = cris_do_add(context, "patents", objectBody.getString("patent_ID"));
                int value_id;

                //field không có  <_source>
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_RegistrationNumber"));
                cris_do_prop_add(context, "patents", "patentsregistrationNumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_PatentNumber"));
                cris_do_prop_add(context, "patents", "patentsnumber", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "date", objectBody.getString("patent_ApprovalDate"));
                cris_do_prop_add(context, "patents", "patentsapprovaldate", value_id, cris_do_id, 0);
                value_id = jdyna_values_add(context, "text", objectBody.getString("patent_RegistrationDate"));
                cris_do_prop_add(context, "patents", "patentsregistrationdate", value_id, cris_do_id, 0);
                

                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Title","patentsname");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Subject","patentssubject");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Keyword","patentskeyword");
                // TODO: patentsholder có thể type = ou / rp tạm thời cho vào patentsholdervalue
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Holders","patentsholdervalue");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_References","patentsreferences");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_OriginatesFrom","patentsoriginatesFrom");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Inventors","patentsinventors");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Type","patentstype");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Status","patentsstatus");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_Issuer","patentsissuer");
                add_value_by_xmlname(context,objectBody, cris_do_id, "patents", "text","patent_CountryCode","patentscountrycode");



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
    private int cris_do_add(org.dspace.core.Context context, String crisType, String xml_ID){
        try{
            TableRow mappingRow;

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
        catch (SQLException e){
            return -1;
        }
    }


    // cris_do_prop_all(context, "crispatents", "patentsname", value_id lấy từ jdyna_values_add, cris_do_id, 0);
    private void cris_do_prop_add(org.dspace.core.Context context, String crisType, String fieldShortName, int value_id, int cris_do_id, int positiondef){
        try{
            TableRow mappingRow;
            mappingRow = DatabaseManager.row("cris_do_prop");
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
            else if (fieldShortName.equals("patentsapprovaldate")) return 57;//Ngày công bố
            else if (fieldShortName.equals("patentscountrycode")) return 65;//Quốc gia công nhận
            else if (fieldShortName.equals("patentsexpiredDate")) return 302;//Ngày hết hiệu lực
            else if (fieldShortName.equals("patentsholderOrgUnit")) return 321;//Chủ bằng tổ chức
            else if (fieldShortName.equals("patentsholderPerson")) return 320;//Chủ bằng cá nhân
            else if (fieldShortName.equals("patentsinventors")) return 282;//Tác giả
            else if (fieldShortName.equals("patentsissuer")) return 61;//Tổ chức đại diện
            else if (fieldShortName.equals("patentskeyword")) return 60;//Từ khoá
            else if (fieldShortName.equals("patentsname")) return 297;//Tên sáng chế
            else if (fieldShortName.equals("patentsnumber")) return 54;//Số sáng chế
            else if (fieldShortName.equals("patentsoriginatesFrom")) return 63;//Kết quả nhiệm vụ
            else if (fieldShortName.equals("patentspredecessor")) return 283;//Kế thừa từ sáng chế
            else if (fieldShortName.equals("patentsregistrationdate")) return 56;//Ngày nộp đơn
            else if (fieldShortName.equals("patentsregistrationNumber")) return 301;//Số đơn
            else if (fieldShortName.equals("patentsstatus")) return 234;//Tình trạng hiệu lực
            else if (fieldShortName.equals("patentssubject")) return 239;//Phân loại sáng chế quốc tế
            else if (fieldShortName.equals("patentstype")) return 64;//Loại sáng chế
            else if (fieldShortName.equals("patentsversioninfo")) return 55;//Thông tin phiên bản
            else if (fieldShortName.equals("patentsholdervalue")) return 339;//Giá trị chủ bằng
            else if (fieldShortName.equals("patentsreferences")) return 340;//Giá trị chủ bằng
        }
        else if (crisType.equals("standards")) {

            if (fieldShortName.equals("standardsdecisionnumber")) return 1;//Quyết định ban hành
            else if (fieldShortName.equals("standardseditorsOrg")) return 327;//Tổ chức biên soạn
            else if (fieldShortName.equals("standardseditorsPerson")) return 326;//Cá nhân biên soạn
            else if (fieldShortName.equals("standardsequivalentTo")) return 8;//Tiêu chuẩn tương đương
            else if (fieldShortName.equals("standardsidentifier")) return 4;//Số hiệu
            else if (fieldShortName.equals("standardskeyword")) return 7;//Từ khoá
            else if (fieldShortName.equals("standardsname")) return 299;//Tên tiêu chuẩn
            else if (fieldShortName.equals("standardsnormativeReferences")) return 10;//Tiêu chuẩn viện dẫn
            else if (fieldShortName.equals("standardspage")) return 6;//Số trang
            else if (fieldShortName.equals("standardspublicationDate")) return 13;//Năm ban hành
            else if (fieldShortName.equals("standardsreplacedBy")) return 9;//Tiêu chuẩn thay thế
            else if (fieldShortName.equals("standardsscope")) return 3;//Phạm vi áp dụng
            else if (fieldShortName.equals("standardsstatus")) return 11;//Tình trạng hiệu lực
            else if (fieldShortName.equals("standardssubject")) return 334;//Khung phân loại tiêu chuẩn
            else if (fieldShortName.equals("standardstype")) return 12;//Loại tiêu chuẩn 
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
                        cris_do_prop_add(context, crisType, fieldShortName, value_id, cris_do_id, positiondef);
                        positiondef++;
                    }
                    return "array";
                }
                else
                {
                    JSONObject object = (JSONObject) item;
                    int value_id = jdyna_values_add(context, valueType, object.getJSONObject("_source")
                                                    .getString("title"));
                    cris_do_prop_add(context, "patents", "patentsoriginatesFrom",
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
