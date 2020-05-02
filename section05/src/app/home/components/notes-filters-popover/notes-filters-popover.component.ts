import { Component, OnInit } from '@angular/core';
import { NotesFilters } from 'src/app/core/constants/notes-filters.enum';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-notes-filters-popover',
  templateUrl: './notes-filters-popover.component.html',
  styleUrls: ['./notes-filters-popover.component.scss'],
})
export class NotesFiltersPopoverComponent implements OnInit {
  selectedFilter: NotesFilters = NotesFilters.ACTIVE;
  filters = NotesFilters;
  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  setFilter(filter: NotesFilters) {
    this.popoverController.dismiss(filter);
  }

}
