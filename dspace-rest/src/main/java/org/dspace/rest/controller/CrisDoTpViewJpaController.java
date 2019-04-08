/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.dspace.rest.controller;

import java.sql.SQLException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import org.apache.log4j.Logger;
import org.dspace.rest.CollectionsResource;
import org.dspace.rest.CrisDoTpView;
import org.dspace.rest.common.Collection;
import org.dspace.rest.exceptions.ContextException;
import org.dspace.usage.UsageEvent;

/**
 *
 * @author binhthgc
 */
@Path("/cris_do_tp")
public class CrisDoTpViewJpaController {
    
    private static Logger log = Logger.getLogger(CrisDoTpViewJpaController.class);
    
    protected EntityManager em;

    public CrisDoTpViewJpaController(EntityManager em) {
      this.em = em;
    }

    @GET
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public List<CrisDoTpView> getCollection(@Context HttpHeaders headers, @Context HttpServletRequest request) throws WebApplicationException
    {

        TypedQuery<CrisDoTpView> query =
        em.createNamedQuery("CrisDoTpView.findAll", CrisDoTpView.class);
        List<CrisDoTpView> results = query.getResultList();
        System.out.println("List<CrisDoTpView>: " + results);
        return results;
    }
    
    @GET
    @Path("/test")
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public List<CrisDoTpView> gettest(
            @Context HttpHeaders headers, @Context HttpServletRequest request) throws WebApplicationException
    {

        TypedQuery<CrisDoTpView> query =
        em.createNamedQuery("CrisDoTpView.findAll", CrisDoTpView.class);
        List<CrisDoTpView> results = query.getResultList();
        System.out.println("List<CrisDoTpView>: " + results);
        return results;
    }
    
}
