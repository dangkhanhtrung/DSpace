/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.disseminate.strategy;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map.Entry;

import org.apache.commons.lang.StringUtils;
import org.dspace.authorize.ResourcePolicy;
import org.dspace.authorize.factory.AuthorizeServiceFactory;
import org.dspace.content.Bitstream;
import org.dspace.core.Constants;
import org.dspace.core.Context;
import org.dspace.eperson.Group;

/**
 *
 * @author Giuseppe Digilio (giuseppe dot digilio at 4science dot it)
 */
public class BitstreamMetadataStrategy implements DissaminateStrategy {

	public final String REGEX_PREFIX = "regex.";

	private LinkedHashMap<String, HashMap<String, String>> metadataKeys;

	@Override
	public Boolean isStrategyEnabled(Context context, Bitstream bitstream) throws SQLException {
		return (getConfigByMetadata(context, bitstream) != null);
	}

	@Override
	public String getConfigFile(Context context, Bitstream bitstream) {
		return getConfigByMetadata(context, bitstream);
	}

	public LinkedHashMap<String, HashMap<String, String>> getMetadataKeys() {
		return metadataKeys;
	}

	public void setMetadataKeys(LinkedHashMap<String, HashMap<String, String>> metadataKeys) {
		this.metadataKeys = metadataKeys;
	}
	
	protected String getConfigByMetadata(Context context, Bitstream bitstream) {
		String configFile = null;

		for (Entry<String, HashMap<String, String>> metadataEntry : metadataKeys.entrySet()) {
			String metadataName = metadataEntry.getKey();
			String metadataValue = bitstream.getMetadata(metadataName);
			
			if (StringUtils.isNotBlank(metadataValue)) {
				
				for (Entry<String, String> entry : metadataEntry.getValue().entrySet()) {
				
					String key = entry.getKey();

		            if (key.startsWith(REGEX_PREFIX)) {
		                String regex = key.substring(REGEX_PREFIX.length());
		                
		                if (metadataValue.matches(regex)) {
		                	configFile = entry.getValue();
		                	break;
		                }
		                
		            } else if (metadataValue.equals(key)) {
		            	configFile = entry.getValue();
		            	break;
		            }
					
				}
				
				if (configFile != null) {
					break;
				}
			}
		    
		}
		
		return configFile;
	}
	
	protected Boolean isBitstreamOpenAccess(Context context, Bitstream bitstream) {
        List<ResourcePolicy> rps;
        boolean bOpened = false;

		try {
			rps = AuthorizeServiceFactory.getInstance().getAuthorizeService()
			        .getPoliciesActionFilter(context, bitstream, Constants.READ);

	        if (rps != null)
	        {
	            for (ResourcePolicy rp : rps)
	            {
	                if (Group.ANONYMOUS.equals(rp.getGroup().getName()))
	                {
	                    if (rp.isDateValid())
	                    {
	                    	bOpened = true;
	                        break;
	                    }
	                }
	            }
	        }
        
		} catch (SQLException e) {
			bOpened = false;
		}
        return bOpened;
	}
}