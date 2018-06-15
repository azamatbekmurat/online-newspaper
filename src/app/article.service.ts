import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './mock-articles';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
      this.articles = database.list('articles');
  }

  getArticles() {
    return this.articles;
  }

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
  }

  getArtircleById(articleId: string){
    return this.database.object('articles/' + articleId);
  }

  updateArticle(localUpdatedArticle){
    var articleEntryInFirebase = this.getArtircleById(localUpdatedArticle.$key);
    articleEntryInFirebase.update({title: localUpdatedArticle.title,
                                author: localUpdatedArticle.author,
                                text: localUpdatedArticle.text,
                                date: localUpdatedArticle.date});
  }

  deleteArticle(localArticleToDelete){
    var articleEntryInFirebase = this.getArtircleById(localArticleToDelete.$key);
    articleEntryInFirebase.remove();
  }
}
