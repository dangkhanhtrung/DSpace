/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.app.webui.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.dspace.app.webui.util.JSPManager;
import org.dspace.authorize.AuthorizeException;
import org.dspace.content.DSpaceObject;
import org.dspace.core.Context;

/**
 * Simple username and password authentication servlet. Displays the login form
 * <code>/login/password.jsp</code> on a GET, otherwise process the parameters
 * as an email and password.
 * 
 * Calls stackable authentication to give credentials to all
 * authentication methods that can make use of them, not just DSpace-internal.
 *
 * @author Robert Tansley
 * @version $Revision$
 */
public class PageView extends DSpaceServlet
{
    /** log4j logger */
    private static Logger log = Logger.getLogger(PageView.class);

    protected void doDSGet(Context context, HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException,
            SQLException, AuthorizeException
    {
        // Simply forward to the plain form
    	 String handle = null;
         String extraPathInfo = null;
         DSpaceObject dso = null;

         // Original path info, of the form "1721.x/1234"
         // or "1721.x/1234/extra/stuff"
         String path = request.getPathInfo();

         if (path != null)
         {
             // substring(1) is to remove initial '/'
             path = path.substring(1);

             try
             {
                 // Extract the Handle
                 int firstSlash = path.indexOf('/');
                 int secondSlash = path.indexOf('/', firstSlash + 1);

                 if (secondSlash != -1)
                 {
                     // We have extra path info
                     handle = path.substring(0, secondSlash);
                     extraPathInfo = path.substring(secondSlash);
                 }
                 else
                 {
                     // The path is just the Handle
                     handle = path;
                 }
             }
             catch (NumberFormatException nfe)
             {
                 // Leave handle as null
             }
         }
        JSPManager.showJSP(request, response, "/page/gioi-thieu.jsp");
    }

}
