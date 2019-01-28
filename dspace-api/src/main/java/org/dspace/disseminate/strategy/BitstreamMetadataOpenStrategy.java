/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
package org.dspace.disseminate.strategy;

import org.dspace.content.Bitstream;
import org.dspace.core.Context;

/**
 *
 * @author Giuseppe Digilio (giuseppe dot digilio at 4science dot it)
 */
public class BitstreamMetadataOpenStrategy extends BitstreamMetadataStrategy {
	
	protected String getConfigByMetadata(Context context, Bitstream bitstream) {
		String configFile = null;

		Boolean isOpen = isBitstreamOpenAccess(context, bitstream);
		
		if (isOpen) {
			configFile = super.getConfigByMetadata(context, bitstream);
		}
		
		return configFile;
	}
}