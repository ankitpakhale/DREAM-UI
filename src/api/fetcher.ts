import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface FetchDataResult<T = any> {
  response: T | null;
  error: unknown;
}

const fetchData = async <T = any>(
  endpoint: string,
  payload: any,
  headers: Record<string, string> = {}
): Promise<FetchDataResult<T>> => {
  const config: AxiosRequestConfig = {
    headers: {
      ...headers,
    },
  };

  // Ensure headers is defined before using it
  const configHeaders = config.headers as Record<string, string>;

  if (payload instanceof FormData) {
    configHeaders["Content-Type"] = "multipart/form-data";
  } else if (payload && typeof payload === "object") {
    configHeaders["Content-Type"] = "application/json";
  }

  // Optional headers
  if (headers.Authorization) {
    configHeaders["Authorization"] = headers.Authorization;
  }

  if (headers["User-Agent"]) {
    configHeaders["User-Agent"] = headers["User-Agent"];
  }

  if (headers["Accept-Encoding"]) {
    configHeaders["Accept-Encoding"] = headers["Accept-Encoding"];
  }

  if (headers["X-Request-ID"]) {
    configHeaders["X-Request-ID"] = headers["X-Request-ID"];
  }

  const responseData: FetchDataResult<T> = {
    response: null,
    error: null,
  };

  try {
    const response: AxiosResponse<T> = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/${endpoint}`,
      payload,
      config
    );
    responseData.response = response.data;
  } catch (error: unknown) {
    console.error("Error making API call:", error);
    responseData.error = error;
  }

  return responseData;
};

export default fetchData;
