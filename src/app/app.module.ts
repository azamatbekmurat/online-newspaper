import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { SectionListComponent } from './section-list/section-list.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { NewSectionComponent } from './new-section/new-section.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionListComponent,
    EditSectionComponent,
    NewSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
