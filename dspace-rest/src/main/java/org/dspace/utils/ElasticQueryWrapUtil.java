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
			
			if (q.startsWith("(")) {
				q = q.substring(1);
			}
			if (q.endsWith(")")) {
				q = q.substring(0, q.length() - 1);
			}
			
			System.out.println("ElasticQueryWrapUtil.query()" + q);
			
			URL url = new URL(ELASTIC_SERVER_API_URL + "?" + q);

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			// optional default is GET
			conn.setRequestMethod("GET");
			
			int responseCode = conn.getResponseCode();
			System.out.println("\nSending 'GET' request to URL : " + url);
			System.out.println("Response Code : " + responseCode);

			BufferedReader in = new BufferedReader(
			        new InputStreamReader(conn.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
			

			System.out.println("response.toString() Code : " + response.toString());
			
			result = new JSONObject(response.toString());
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}
	
	public static JSONObject postQuery(String body) {

		JSONObject result = null;
		try {
			
			byte[] postData       = body.getBytes( StandardCharsets.UTF_8 );
			int    postDataLength = postData.length;
			
			URL url = new URL(ELASTIC_SERVER_API_URL);

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
