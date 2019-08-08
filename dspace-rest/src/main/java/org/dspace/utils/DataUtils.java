/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.utils;

import java.io.Serializable;
import java.io.StringReader;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.dspace.app.cris.discovery.CrisSearchService;
import org.dspace.core.Context;
import org.dspace.storage.rdbms.DatabaseManager;
import org.dspace.storage.rdbms.TableRow;
import org.dspace.storage.rdbms.TableRowIterator;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.Collection;

/**
 *
 * @author binhthgc
 */
public class DataUtils {
    
    private static Logger log = Logger.getLogger(DataUtils.class);
    
    public static JSONArray findAll(Context context, Integer limit, Integer offset, String table, String cols, String entity, boolean view) throws Exception
    {
        JSONArray results = new JSONArray();
        TableRowIterator tri = null;
        List<Serializable> params = new ArrayList<Serializable>();
        String query = 
            "SELECT " + cols + " " +
            "FROM " + table + " " +
            "WHERE 1=1 " +
            "AND entity='" + entity + "' " +
            "AND view_detail=" + view +
            " LIMIT 200 "
        ;
        
        System.out.println("SQL: " + query.toString());
        System.out.println("params: " + params.toArray());

        try
        {
        	
            tri = DatabaseManager.query(context, table, query);
            while (tri.hasNext())
            {
                TableRow row = tri.next();
                
                JSONObject current = new JSONObject();
                
                String dataRaw = row.toString();
                
                List<String> lines;

                lines = IOUtils.readLines(new StringReader(dataRaw));
                int index = 0;
                for (String line : lines) {
                    if (index > 0) {
                        String[] lineData = line.trim().split(" = ");
                        current.put(lineData[0], lineData[1]);
                    }
                    index = index + 1;
                }
                
                results.put(current);
                
            }
        }
        catch (Exception e)
        {
            log.error("Find all findAll offset/limit - ", e);
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

        return results;
    }

	public void processJournal(Context context, CrisSearchService crisSearchService, JSONObject body) {
		// TODO Auto-generated method stub
        log.info("processJournalprocessJournalprocessJournal" + body);

        TableRow mappingRow;
        log.info("bodybodybodybodybodybodybodybodybody" + body);
		try {

	        log.info("bodybodybodybodybodybodybodybodybody" + body);
			Date currentTimestamp = new Date();
			
			mappingRow = DatabaseManager.row("cris_do");
	        
	        mappingRow.setColumn("crisid", body.getString("journal_ID"));
	        mappingRow.setColumn("sourceid", body.getString("journal_ID"));
	        mappingRow.setColumn("status", true);
	        mappingRow.setColumn("uuid", UUID.randomUUID().toString());
	        log.info("UUID.randomUUID().toString()" + UUID.randomUUID().toString());
	        mappingRow.setColumn("timestampcreated", currentTimestamp);
	        mappingRow.setColumn("timestampLastModified", currentTimestamp);
	        mappingRow.setColumn("typo_id", 1);

	        log.info("mappingRowmappingRow" + mappingRow);
	        
	        DatabaseManager.insert(context, mappingRow);

	        log.info("insert DONE DONE DONE DONE DONE");
	        
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
