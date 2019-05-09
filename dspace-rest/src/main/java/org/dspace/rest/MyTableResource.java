/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.rest;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.dspace.utils.ElasticQueryWrapUtil;
import org.json.JSONObject;

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
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllCrisDoTp(@QueryParam("q") String q, @Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        
        JSONObject results = new JSONObject();
        org.dspace.core.Context context = null;

        context = createContext(getUser(headers));

        results = ElasticQueryWrapUtil.query(q);

        System.out.println("MyTableResource.getAllCrisDoTp()" + results.toString());
        
        return results.toString();
    }

}
