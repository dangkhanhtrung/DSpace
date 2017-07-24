/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.app.webui.components.signposting;

import java.io.UnsupportedEncodingException;
import java.text.MessageFormat;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.dspace.app.webui.util.UIUtil;
import org.dspace.authorize.AuthorizeException;
import org.dspace.content.Item;
import org.dspace.core.Constants;
import org.dspace.core.Context;
import org.dspace.plugin.PluginException;
import org.dspace.plugin.signposting.ItemSignPostingProcessor;

/**
 * @author Pascarelli Luigi Andrea
 */
public class IdentifierItemHome implements ItemSignPostingProcessor
{

    /** log4j category */
    private static Logger log = Logger.getLogger(IdentifierItemHome.class);

    private String relation = "identifier";

    private String metadataField;

    private String pattern;

    @Override
    public void process(Context context, HttpServletRequest request,
            HttpServletResponse response, Item item)
            throws PluginException, AuthorizeException
    {

        try
        {
            if (item != null)
            {
                List<String> mm = item.getMetadataValue(getMetadataField());
                for (String metadata : mm)
                {
                    if (StringUtils.isNotBlank(metadata))
                    {
                        String value = UIUtil.encodeBitstreamName(metadata,
                                Constants.DEFAULT_ENCODING);
                        if (StringUtils.isNotBlank(pattern))
                        {
                            response.addHeader("Link",
                                    MessageFormat.format(getPattern(), value)
                                            + "; rel=\"" + getRelation()
                                            + "\"");
                        }
                        else
                        {
                            response.addHeader("Link",
                                    value + "; rel=\"" + getRelation() + "\"");
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            log.error("Problem to add signposting pattern", ex);
        }
    }

    public String getRelation()
    {
        return relation;
    }

    public void setRelation(String relation)
    {
        this.relation = relation;
    }

    public String getMetadataField()
    {
        return metadataField;
    }

    public void setMetadataField(String metadataField)
    {
        this.metadataField = metadataField;
    }

    public String getPattern()
    {
        return pattern;
    }

    public void setPattern(String pattern)
    {
        this.pattern = pattern;
    }
}
