import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchData = async <T = unknown>(
  endpoint: string,
  payload: unknown,
  headers: Record<string, string> = {}
): Promise<T> => {
  // build axios config with headers
  const config: AxiosRequestConfig = {
    headers: {
      ...headers,
    },
  };

  const configHeaders = config.headers as Record<string, string>;

  // set content-type based on payload type
  if (payload instanceof FormData) {
    configHeaders["Content-Type"] = "multipart/form-data";
  } else if (payload && typeof payload === "object") {
    configHeaders["Content-Type"] = "application/json";
  }

  // handle optional headers
  if (headers.Authorization)
    configHeaders["Authorization"] = headers.Authorization;
  if (headers["User-Agent"])
    configHeaders["User-Agent"] = headers["User-Agent"];
  if (headers["Accept-Encoding"])
    configHeaders["Accept-Encoding"] = headers["Accept-Encoding"];
  if (headers["X-Request-ID"])
    configHeaders["X-Request-ID"] = headers["X-Request-ID"];

  // build the full url
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  try {
    // make post request
    const response: AxiosResponse<T> = await axios.post(url, payload, config);
    return response.data;
  } catch (error: unknown) {
    // log and rethrow meaningful error
    console.error("error making api call:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || "backend error");
    }
    throw error;
  }
};

export default fetchData;
