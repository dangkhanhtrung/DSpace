/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.rest;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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
import org.dspace.utils.DataUtils;
import org.json.JSONArray;
import org.dspace.utils.DSpace;
import org.dspace.app.cris.service.ApplicationService;

/**
 * This class provides all CRUD operation over collections.
 * 
 * @author Dang Khanh Trung (FDS)
 */
@Path("/excel")
public class OAIPMHHarvesterResource extends Resource
{
    private static Logger log = Logger.getLogger(OAIPMHHarvesterResource.class);

    @POST
    @Path("/import")
    @Produces(MediaType.APPLICATION_JSON)
    public String importDSpaceExcel(@Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        org.dspace.core.Context dspaceContext = new org.dspace.core.Context();
        dspaceContext.setIgnoreAuthorization(true);
		DSpace dspace = new DSpace();
		ApplicationService applicationService = dspace.getServiceManager().getServiceByName("applicationService",
				ApplicationService.class);

        return "{ 'ok': 'true' }";
    }

    @GET
    @Path("/test")
    @Produces(MediaType.APPLICATION_JSON)
    public String test(@Context HttpHeaders headers, @Context HttpServletRequest request)
            throws Exception
    {
        return "{ 'test': 'true' }";
    }
}