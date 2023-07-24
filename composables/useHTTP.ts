import { $fetch, FetchContext, FetchOptions, FetchResponse } from "ofetch";
import { useStore } from "~/store/index";

type Options = {
  loading?: boolean;
  errorPopup?: boolean;
}

export default function useHTTP<T>(url: string, options?: Options & FetchOptions<any>) {
  const runtimeConfig = useRuntimeConfig();
  const store = useStore();
  const showLoading = options?.loading ?? true;
  const showErrorPopup = options?.errorPopup ?? true;
  const instance = $fetch.create({
    baseURL: runtimeConfig.public.apiUrl,
    credentials: "include",
    onRequest(context: FetchContext): Promise<void> | void {
      if (showLoading) {
        console.log(store.showLoading)ß
        store.setShowLoading(true);
      }
    },
    onResponse(context: FetchContext & { response: FetchResponse<ResponseType> }): Promise<void> | void {
      if (showLoading) {
        console.log(store.showLoading);
        store.setShowLoading(false);
      }
    },
    onResponseError(context: FetchContext & { response: FetchResponse<ResponseType> }): Promise<void> | void {
      const { status, statusText } = context.response;
      console.error("onResponseError", status);
      if (showErrorPopup) {
        // TODO: show error popup
        console.log(statusText)
      }
    }
  });

  return instance<T>(url, options);
}