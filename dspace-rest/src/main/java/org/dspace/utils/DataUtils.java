/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.utils;

import java.io.IOException;
import java.io.Serializable;
import java.io.StringReader;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.dspace.core.Context;
import org.dspace.storage.rdbms.DatabaseManager;
import org.dspace.storage.rdbms.TableRow;
import org.dspace.storage.rdbms.TableRowIterator;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author binhthgc
 */
public class DataUtils {
    
    private static Logger log = Logger.getLogger(DataUtils.class);
    
    public static JSONArray findAll(Context context, Integer limit, Integer offset, String table, String cols) throws Exception
    {
        JSONArray results = new JSONArray();
        TableRowIterator tri = null;
        List<Serializable> params = new ArrayList<Serializable>();
        StringBuffer query = new StringBuffer(
            "SELECT " + cols + " " +
            "FROM " + table + " "
        );
        
        DatabaseManager.applyOffsetAndLimit(query, params, offset, limit);
        System.out.println("SQL: " + query.toString());

        try
        {
            tri = DatabaseManager.query(
              context, query.toString(), params.toArray()
            );

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
}
