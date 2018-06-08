import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent {

  @Input() childSelectedSection: Section;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

}
