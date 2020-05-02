import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { MobxAngularModule } from 'mobx-angular';
import { ManageNoteComponent } from './components/manage-note/manage-note.component';
import { NotesFiltersPopoverComponent } from './components/notes-filters-popover/notes-filters-popover.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MobxAngularModule
  ],
  entryComponents: [
    ManageNoteComponent,
    NotesFiltersPopoverComponent
  ],
  declarations: [
    HomePage,
    ManageNoteComponent,
    NotesFiltersPopoverComponent
  ]
})
export class HomePageModule {}
