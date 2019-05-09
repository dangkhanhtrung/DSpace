package org.dspace.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.ws.rs.HttpMethod;

import org.json.JSONException;
import org.json.JSONObject;

public class ElasticQueryWrapUtil {

	private static final String ELASTIC_SERVER_API_URL = "http://localhost:8080/solr/search/query";
	
	public static JSONObject query(String q) {

		JSONObject result = null;
		try {
			URL url = new URL(ELASTIC_SERVER_API_URL + q);

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod(HttpMethod.GET);
			conn.setRequestProperty("Accept", "Content-Type: application/json");
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setDoInput(true);
			conn.setDoOutput(true);
	        OutputStreamWriter osw = new OutputStreamWriter(conn.getOutputStream());
	        osw.flush();
	        osw.close();
	        
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
