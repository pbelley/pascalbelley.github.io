import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }

  interface Future {
    unstable_middleware: false
  }
}

type Params = {
  "/": {};
  "/cvlbgraph": {};
  "/education": {};
  "/workexperience": {};
  "/folio": {};
  "/folio/suiteaurora": {};
  "/folio/gidoc": {};
  "/folio/sfm": {};
  "/folio/meta-40": {};
  "/folio/oldproject": {};
};