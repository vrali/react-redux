import { appConfig } from "../appConfig";

export class BaseService {
  protected fetch(url: RequestInfo, options: RequestInit): Promise<Response> {
    let baseOptions: RequestInit = {};
    let token = localStorage.getItem("token");
    if (token) {
      baseOptions.headers = {
        Authorize: `Bearer ${token}`
      };
    }
    return fetch(
      appConfig.apiBaseUrl + url,
      Object.assign({}, baseOptions, options, {
        headers: Object.assign({}, baseOptions.headers, options.headers)
      })
    );
  }
}
