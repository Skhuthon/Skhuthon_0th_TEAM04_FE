import { storageConstants } from "@/utils/constants";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

const { VITE_BASE_URL } = import.meta.env;

console.log("baseurl", VITE_BASE_URL);
export const instance = axios.create({
  baseURL: `${VITE_BASE_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  } as AxiosRequestHeaders,
});

// Request interceptor
const interceptorRequestFulfilled = (config: AxiosRequestConfig) => {
  const TOKEN =
    typeof window !== "undefined"
      ? localStorage.getItem(storageConstants.accessToken)
      : "";

  if (TOKEN) {
    return {
      ...config,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${TOKEN}`,
        // Cookie: `token=${TOKEN}`,
      } as AxiosRequestHeaders,
    };
  } else {
    return {
      ...config,
      headers: {
        "Content-Type": "application/json",
      } as AxiosRequestHeaders,
    };
  }
};

instance.interceptors.request.use(interceptorRequestFulfilled);

// Response interceptor
const responseInterceptorFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) return res;

  return Promise.reject(...res.data);
};

const responseInterceptorRejected = async (error: AxiosError | any) => {
  return Promise.reject(error);
};

instance.interceptors.response.use(
  responseInterceptorFulfilled,
  responseInterceptorRejected
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
