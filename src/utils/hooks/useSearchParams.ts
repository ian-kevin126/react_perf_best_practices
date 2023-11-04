/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { getParams } from "..";

const useSearchParams = () => {
  const [params, setParams]: [UrlSearchParamState, Function] = React.useState(
    {}
  );
  const [url, setUrl]: [string, Function] = React.useState("");

  const onGetParams = () => {
    setParams(getParams());
  };

  const onChangeParams = (
    callback: (obj: UrlSearchParamState) => UrlSearchParamState
  ) => {
    let newParams: string[] = Object.entries(callback(getParams())).map(
      ([key, value]) => {
        if (value === null || value === undefined) {
          return "";
        }

        return `${key}=${value}`;
      }
    );

    let searchParams = "?" + newParams.filter((p) => p !== "").join("&");
    let protocol = window.location.protocol;
    let host = window.location.host;
    let pathname = window.location.pathname;
    let newUrl = protocol + "//" + host + pathname + searchParams;
    if (newUrl !== url) {
      window.history.replaceState({ path: newUrl }, "", newUrl);
      onGetParams();
      setUrl(newUrl);
    }
  };

  React.useEffect(() => {
    let searchParams = window.location.search;
    let protocol = window.location.protocol;
    let host = window.location.host;
    let pathname = window.location.pathname;
    let newUrl = protocol + "//" + host + pathname + searchParams;
    setUrl(newUrl);
    onGetParams();
  }, [window.location]);

  return { searchParams: params, setSearchParams: onChangeParams };
};

export default useSearchParams;

export interface UrlSearchParamState {
  [k: string]: string | null;
}
