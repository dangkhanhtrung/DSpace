/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.dspace.rest.controller;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import org.apache.log4j.Logger;
import org.dspace.rest.CrisDoTpView;

/**
 *
 * @author binhthgc
 */
@Path("/cris_do_tp")
public class CrisDoTpViewJpaController {
    
    private static Logger log = Logger.getLogger(CrisDoTpViewJpaController.class);
    
    @PersistenceContext(unitName = "org.dspace_dspace-rest_war_CRIS-5.10.0-SNAPSHOTPU")
    protected EntityManager em;

    @GET
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public List<CrisDoTpView> getCollection(@Context HttpHeaders headers, @Context HttpServletRequest request) throws WebApplicationException
    {
        
        System.out.println("emememem: " + em);
        try {
            System.out.println("em: start " + em);
            TypedQuery<CrisDoTpView> query =
            em.createNamedQuery("CrisDoTpView.findAll", CrisDoTpView.class);
            List<CrisDoTpView> results = query.getResultList();
            System.out.println("List<CrisDoTpView>: " + results);
            return results;
        } finally {
            em.close();
        }
        
    }
    
    @GET
    @Path("/test")
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public String gettest(
            @Context HttpHeaders headers, @Context HttpServletRequest request) throws WebApplicationException
    {
        System.out.print("dsdfsfdsffd");
        return "test";
    }
    
}
