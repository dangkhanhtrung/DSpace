/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.dspace.rest.controller;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import net.sf.ehcache.hibernate.HibernateUtil;
import org.apache.log4j.Logger;
import org.dspace.rest.CrisDoTpView;
import org.eclipse.persistence.sessions.factories.SessionFactory;

/**
 *
 * @author binhthgc
 */
@Path("/cris_do_tp")
public class CrisDoTpViewJpaController {
    
    private static Logger log = Logger.getLogger(CrisDoTpViewJpaController.class);

    @PersistenceContext(unitName = "VDCNet-ejbPU")
    protected EntityManager emte;
    
    @PersistenceUnit(unitName = "VDCNet-ejbPU")
    private EntityManagerFactory entityManagerFactoryte;

    @GET
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public List<CrisDoTpView> getCollection(@Context Context context, @Context HttpHeaders headers, @Context HttpServletRequest request) throws WebApplicationException
    {
        EntityManager entityManager = Persistence.createEntityManagerFactory("PERSISTENCE_UNIT_NAME").createEntityManager();
//        SessionFactory sessionFactory = HibernateUti.getSessionFactory();
//        Session session = sessionFactory.getCurrentSession();
        System.out.println("entityManager: " + entityManager);
        try {
//            TypedQuery<CrisDoTpView> query =
////            emte.createNamedQuery("CrisDoTpView.findAll", CrisDoTpView.class);
//            List<CrisDoTpView> results = query.getResultList();
//            System.out.println("List<CrisDoTpView>: " + results);
            return null;
        } finally {
            emte.close();
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
