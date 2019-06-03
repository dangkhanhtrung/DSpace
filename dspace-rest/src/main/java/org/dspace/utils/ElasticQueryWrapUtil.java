package org.dspace.utils;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

import javax.ws.rs.HttpMethod;

import org.json.JSONException;
import org.json.JSONObject;

public class ElasticQueryWrapUtil {

	private static final String ELASTIC_SERVER_API_URL = "http://localhost:8080/solr/search/query";
	
	public static JSONObject query(String q) {

		JSONObject result = null;
		try {
			
			byte[] postData       = q.getBytes( StandardCharsets.UTF_8 );
			int    postDataLength = postData.length;
			
//			if (!sort.equalsIgnoreCase("")) {
//				q = q + "&sort=" + sort;
//			}
			
//			if (!rows.equalsIgnoreCase("")) {
//				q = q + "&rows=" + rows;
//			}
			
			URL url = new URL(ELASTIC_SERVER_API_URL + "?q=" + q);

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setDoOutput( true );
			conn.setInstanceFollowRedirects( false );
			conn.setRequestMethod( "POST" );
			conn.setRequestProperty( "Content-Type", "application/x-www-form-urlencoded"); 
			conn.setRequestProperty( "charset", "utf-8");
			conn.setRequestProperty( "Content-Length", Integer.toString( postDataLength ));
			conn.setUseCaches( false );
			try( DataOutputStream wr = new DataOutputStream( conn.getOutputStream())) {
			   wr.write( postData );
			}
	        
			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

			String output;

			StringBuilder sb = new StringBuilder();

			while ((output = br.readLine()) != null) {
				sb.append(output);
			}
			
			result = new JSONObject(sb.toString());
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}
	
}
