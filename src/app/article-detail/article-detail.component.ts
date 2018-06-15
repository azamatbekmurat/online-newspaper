import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {
  articleId: string;
  articleToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) =>{
      this.articleId = urlParametersArray['id'];
    });
    this.articleService.getArtircleById(this.articleId).subscribe(dataLastEmittedFromObserver => {
      this.articleToDisplay = new Article(dataLastEmittedFromObserver.title,
                                          dataLastEmittedFromObserver.author,
                                          dataLastEmittedFromObserver.text,
                                          dataLastEmittedFromObserver.date);
      console.log(this.articleToDisplay);
    });
  }
}
