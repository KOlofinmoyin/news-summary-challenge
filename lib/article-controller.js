(function(exports) {
  function ArticleController(articleList) {
    this.articleList = articleList
    this.articleListView = new ArticleListView(articleList)
  }

  ArticleController.prototype.insertHtml = function() {
    var elem = document.getElementById('app');
    elem.innerHTML = this.articleListView.returnHTML();
  }

  ArticleController.prototype.getArticles = function() {
    var getHttp = new APIData();
    var APIRawData = getHttp.makeRequest('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&from-date=2020-03-08&show-fields=thumbnail,body%27');
    var rawArticles = APIRawData.response.results
    // console.log(typeof APIRawData.response.results)
    // console.log(rawArticles.length)
    for(let i = 0; i < rawArticles.length; i++) {
      var articleTitle = new Article(rawArticles[i].webTitle)
      this.articleList.addArticle(articleTitle)
    }
    console.log(this.articleList)
  }

  exports.ArticleController = ArticleController
})(this)

var articleList = new ArticleList()


// articleList.addArticle(new Article("News today about Big Britain - Article 1"))
// articleList.addArticle(new Article("Too many people are burning food left in ovens - Article 2"))
var articleController = new ArticleController(articleList)
articleController.getArticles()
articleController.insertHtml()