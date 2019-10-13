export default class URLSearchParams {
  constructor(mainUrl) {
    this.mainUrl = mainUrl;
  }

  get(paramName) {
    return this.getParameterByName(paramName, this.mainUrl);
  }

  has(paramName) {
    return this.getParameterByName(paramName, this.mainUrl) !== "";
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
