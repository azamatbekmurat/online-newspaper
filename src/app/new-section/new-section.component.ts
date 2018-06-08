import { Component, Output, EventEmitter } from '@angular/core';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.css']
})
export class NewSectionComponent {

  @Output() sendSection = new EventEmitter();

  submitForm(description: string, priority: string) {
    let newSection: Section = new Section(name, article);
    this.sendSection.emit(newSection);
  }

}
