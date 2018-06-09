import { Component } from '@angular/core';
import { Article } from './models/article.model';
import { Section } from './models/section.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentFocus: string = 'Epicodus Times';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedSection = null;

  masterSectionList: Section[] = [
    new Section('World',
          [
              new Article('Singapoure Summit', 'Donec at orci tincidunt dolor mattis rutrum sit amet eget lectus. Aliquam erat volutpat.', 2018),
              new Article('Meeting in France', 'Etiam et pretium magna. Sed in dui eu magna dapibus sollicitudin vel accumsan magna', 2017),
            ]),
    new Section('Business',
          [
              new Article('Google stocks', 'Donec at orci tincidunt dolor mattis rutrum sit amet eget lectus. Aliquam erat volutpat.', 2018),
              new Article('Github acquiring', 'Etiam et pretium magna. Sed in dui eu magna dapibus sollicitudin vel accumsan magna', 2017)
            ]),
    new Section('Politics',
          [
              new Article('Republicans', 'Donec at orci tincidunt dolor mattis rutrum sit amet eget lectus. Aliquam erat volutpat.', 2018),
              new Article('Democrats', 'Etiam et pretium magna. Sed in dui eu magna dapibus sollicitudin vel accumsan magna', 2017)
            ]),
    new Section('Sport',
          [
              new Article('Argentina', 'World Cup 2018 champions.', 2018),
              new Article('NBA', 'Champion of NBA finals 2018', 2018)
            ])
  ];

  editSection(clickedSection) {
    this.selectedSection = clickedSection;
  }

  finishedEditing() {
    this.selectedSection = null;
  }

  addSection(newSection: Section) {
    this.masterSectionList.push(newSection);
  }

}
