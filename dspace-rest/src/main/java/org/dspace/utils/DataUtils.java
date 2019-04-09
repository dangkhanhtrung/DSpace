/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.dspace.utils;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
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
    
    public static JSONArray findAll(Context context, Integer limit, Integer offset, String table, String cols) throws SQLException
    {
        JSONArray results = new JSONArray();
        TableRowIterator tri = null;
        List<Serializable> params = new ArrayList<Serializable>();
        System.out.println("limit" + limit);
        System.out.println("limit" + limit != null);
        System.out.println("limit" + limit.equals(null));
        System.out.println("limit" + limit.equals("0"));
        System.out.println("limit" + limit.equals(0));
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
                
                String[] col = cols.split(",");
                
                JSONObject current = new JSONObject();
                
                for (String key : col) {
                    
                    System.out.println("value: " + key + ": " + row.getStringColumn(key));
                    current.put(key, row.getStringColumn(key));
                            
                }
                
                results.put(current);
            }
                
            System.out.println("results:" + results);
        }
        catch (SQLException e)
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
