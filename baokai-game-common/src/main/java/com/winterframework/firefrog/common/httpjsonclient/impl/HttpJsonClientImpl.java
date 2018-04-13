package com.winterframework.firefrog.common.httpjsonclient.impl;

import java.io.IOException;
import java.lang.reflect.ParameterizedType;
import java.util.Map;

import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.CoreProtocolPNames;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.winterframework.firefrog.common.httpjsonclient.IHttpJsonClient;
import com.winterframework.modules.web.jsonresult.Pager;
import com.winterframework.modules.web.jsonresult.Request;
import com.winterframework.modules.web.jsonresult.RequestBody;
import com.winterframework.modules.web.jsonresult.RequestHeader;
import com.winterframework.modules.web.jsonresult.Response;
import com.winterframework.modules.web.util.HttpJsonClient;
import com.winterframework.modules.web.util.JsonMapper;

/** 
* @ClassName: HttpJsonClient 
* @Description: 用get方式发起一个http请求，结果为json格式，方法返回java对象。 
* @author 你的名字 
* @date 2013-7-9 上午10:10:18 
*  
*/
@Service("httpJsonClientImpl")
public class HttpJsonClientImpl implements IHttpJsonClient {
	
	private static ObjectMapper mapper = new ObjectMapper();
	static {
		mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_EMPTY);
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
	}

	private static JsonMapper jmapper = JsonMapper.nonEmptyMapper();
	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, Class... dataClass) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, dataClass);
		return t;
	}

	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, Class... dataClass) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		request.setBody(body);
		Response<T> t = this.invokeHttp(url, request, dataClass);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param r
	* @param pager
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, com.winterframework.modules.web.jsonresult.Pager) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, Pager pager, Class... dataClass) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		body.setPager(pager);
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, dataClass);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param userId
	* @param userAccount
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, long, java.lang.String) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, long userId, String userAccount, Class... dataClass)
			throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader(userId, userAccount));
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, dataClass);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param pager
	* @param userId
	* @param userAccount
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, com.winterframework.modules.web.jsonresult.Pager, long, java.lang.String) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, Pager pager, long userId, String userAccount,
			Class... dataClass) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader(userId, userAccount));
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		body.setPager(pager);
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, dataClass);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param params
	* @return 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, com.winterframework.modules.web.jsonresult.Request) 
	*/
	private <T, R> Response<T> invokeHttp(String url, Request<R> request, Class... classType) throws Exception {
		return HttpJsonClientExt.postJsonObject(url, request, classType);
	}

	private <T, R> Response<T> invokeHttp(String url, Request<R> request, TypeReference typeReference) throws Exception {
		return HttpJsonClientExt.postJsonObject(url, request, typeReference);
	}

	private <R> Response invokeHttp(String url, Request<R> request) throws Exception {
		return HttpJsonClientExt.postJsonObject(url, request);
	}

	private RequestHeader createHeader(long userId, String userAccount) {
		RequestHeader header = new RequestHeader();
		header.setUserId(userId);
		header.setUserAccount(userAccount);

		//TODO
		//header.setMsn(100);
		//header.setMsnsn(0);

		return header;
	}

	private RequestHeader createHeader() {
		RequestHeader header = new RequestHeader();

		//TODO
		//header.setMsn(100);
		//header.setMsnsn(0);

		return header;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param typeReference
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, com.fasterxml.jackson.core.type.TypeReference) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, TypeReference typeReference) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, typeReference);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param typeReference
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, com.fasterxml.jackson.core.type.TypeReference) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, TypeReference typeReference) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		request.setBody(body);
		Response<T> t = this.invokeHttp(url, request, typeReference);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param userId
	* @param userAccount
	* @param typeReference
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, long, java.lang.String, com.fasterxml.jackson.core.type.TypeReference) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, long userId, String userAccount,
			TypeReference typeReference) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader(userId,userAccount));
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, typeReference);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param pager
	* @param typeReference
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, com.winterframework.modules.web.jsonresult.Pager, com.fasterxml.jackson.core.type.TypeReference) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, Pager pager, TypeReference typeReference)
			throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		body.setPager(pager);
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, typeReference);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param pager
	* @param userId
	* @param userAccount
	* @param typeReference
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, com.winterframework.modules.web.jsonresult.Pager, long, java.lang.String, com.fasterxml.jackson.core.type.TypeReference) 
	*/
	@Override
	public <T, R> Response<T> invokeHttp(String url, R requestData, Pager pager, long userId, String userAccount,
			TypeReference typeReference) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader(userId, userAccount));
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		body.setPager(pager);
		request.setBody(body);
		Response<T> t = (Response<T>) this.invokeHttp(url, request, typeReference);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String) 
	*/
	@Override
	public Response invokeHttpWithoutResultType(String url) throws Exception {
		Request request = new Request();
		request.setHead(createHeader());
		RequestBody body = new RequestBody();
		request.setBody(body);
		Response t = (Response) this.invokeHttp(url, request);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object) 
	*/
	@Override
	public <R> Response invokeHttpWithoutResultType(String url, R requestData) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		request.setBody(body);
		Response t = this.invokeHttp(url, request);
		return t;
	}

	@Override
	public String invokeHttpWithoutResultTypeForEC(String url, String params) throws Exception {
		String result = invokeHttpWithoutResultTypeForEC(url, params, "");
		return result;
	}

	@Override
	public String invokeHttpWithoutResultTypeForEC(String url, String params, String referer) throws Exception {
		String result = HttpJsonClientExt.postStrReturnStr(url, params, referer);
		return result;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param userId
	* @param userAccount
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, long, java.lang.String) 
	*/
	@Override
	public <R> Response invokeHttpWithoutResultType(String url, R requestData, long userId, String userAccount)
			throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader(userId, userAccount));
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		request.setBody(body);
		Response t = (Response) this.invokeHttp(url, request);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param pager
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, com.winterframework.modules.web.jsonresult.Pager) 
	*/
	@Override
	public <R> Response invokeHttpWithoutResultType(String url, R requestData, Pager pager) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader());
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		body.setPager(pager);
		request.setBody(body);
		Response t = (Response) this.invokeHttp(url, request);
		return t;
	}

	/**
	* Title: invokeHttp
	* Description:
	* @param url
	* @param requestData
	* @param pager
	* @param userId
	* @param userAccount
	* @return
	* @throws Exception 
	* @see com.winterframework.firefrog.common.http.IHttpJsonClient#invokeHttp(java.lang.String, java.lang.Object, com.winterframework.modules.web.jsonresult.Pager, long, java.lang.String) 
	*/
	@Override
	public <R> Response invokeHttpWithoutResultType(String url, R requestData, Pager pager, long userId,
			String userAccount) throws Exception {
		Request<R> request = new Request<R>();
		request.setHead(createHeader(userId, userAccount));
		RequestBody<R> body = new RequestBody<R>();
		body.setParam(requestData);
		body.setPager(pager);
		request.setBody(body);
		Response t = (Response) this.invokeHttp(url, request);
		return t;
	}

	@Override
	public String invokeHttpXml(String url, Map<String, Object> params) {
		try {
			String result = HttpJsonClient.getJsonData(url, params);//McwClientMock.postMowDataByJson(url, abc, 2);
				return result;
		} catch (Exception e) {
			return null;
		}
	}
	
	@Override
	public String invokeHttpPost(String url, Map<String, Object> params) {
		try {
			String result = HttpJsonClient.postJsonData(url, params);
				return result;
		} catch (Exception e) {
			return null;
		}
	}
	
	public <T, R> T invokeHttpGet(String url, Map<String, Object> params, TypeReference<T> typeReference) {
		try {
			String abc = "";
			for (Map.Entry<String, Object> entry : params.entrySet()) {
				String key = entry.getKey();
				if (key.equals("class")) {
					continue;
				}
				Object value = entry.getValue();
				abc += ("&" + key + "=" + value);
			}
			String result = HttpJsonClient.getJsonData(url, params);//McwClientMock.postMowDataByJson(url, abc, 2);
			ParameterizedType pt = (ParameterizedType) HttpJsonClientExt.class.getDeclaredMethod("postJsonObject",
					String.class, Request.class, TypeReference.class).getGenericReturnType();
			if (typeReference != null) {
				return mapper.readValue(result, typeReference);
			} else {
				return (T) jmapper.fromJson(result, (Class) pt.getRawType());
			}
		} catch (Exception e) {
			return null;
		}
	}
	
	@Override
	public String postHttpJson(String url, String jsonData) throws IOException, Exception {
		int second = 10;
		HttpClient httpclient = new DefaultHttpClient();
		if (second > 0) {
			HttpParams httpParams = httpclient.getParams();
			HttpConnectionParams.setConnectionTimeout(httpParams, second * 1000);
			HttpConnectionParams.setSoTimeout(httpParams, second * 1000);
		} else {
			HttpParams httpParams = httpclient.getParams();
			HttpConnectionParams.setConnectionTimeout(httpParams, 20000);
			HttpConnectionParams.setSoTimeout(httpParams, 20000);
		}
		try {
			HttpPost httpPost = new HttpPost(url);
			httpPost.getParams().setBooleanParameter(CoreProtocolPNames.USE_EXPECT_CONTINUE, false);
			if (jsonData != null) {
				
				StringEntity params = new StringEntity(jsonData);
				httpPost.addHeader("content-type", "application/x-www-form-urlencoded");
				httpPost.setEntity(params);
			}

			ResponseHandler<String> responseHandler = new BasicResponseHandler();
			
			String result = httpclient.execute(httpPost, responseHandler);
			return result;
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

	}
}