(function(exports) {
  function  APIData(){
  }

  APIData.prototype.makeRequest = function (url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",url, false); //false for synchronuous request.
    xmlHttp.send();
    return JSON.parse(xmlHttp.responseText);
  };

  exports.APIData = APIData;
})(this);

var getHttp = new APIData()
var info = getHttp.makeRequest('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&from-date=2020-03-08&show-fields=thumbnail,body%27')
console.log(getHttp);
console.log(typeof getHttp); 
