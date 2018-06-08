import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent {
  @Input() childSectionList: Section[];
  @Output() clickSender = new EventEmitter();



  ngOnInit() {
  }

}
