export default class EzQueryString {
  static __prepareParams(strParams) {
    const reg = new RegExp(/[&?]+([a-zA-Z0-9_\-]+\=[a-zA-Z0-9_\-=]+)/, 'g');
    const params = strParams.match(reg);
    return params;
  }

  static __getFromUrl() {
    return window.location.search || '';
  }

  static getAllParams() {
    return EzQueryString.parse(
      EzQueryString.__getFromUrl()
    )
  }

  static parse(params) {
    if (!params) {
      return;
    }

    const paramsMap = new Map();
    let cleanParam = null;

    params = params || EzQueryString.__getFromUrl();

    params = EzQueryString.__prepareParams(params);

    params.forEach((param) => {
      cleanParam = param.replace( /[?&]/, '');

      if (cleanParam.length) {
        const position = cleanParam.indexOf('=');
        const key = cleanParam.substr(0, position);
        const value = cleanParam.substr(position+1, cleanParam.length-1);

        paramsMap.set(key, value);
      }
    });

    return paramsMap;
  }

  static getSingleParam(paramName) {
    const  params = EzQueryString.getAllParams();

    if (!params) {
      return;
    }

    if (params.has(paramName)) {
      return params.get(paramName);
    }
  }
}
