import { Component, OnInit, Input } from '@angular/core';
import { books } from '../../data/books'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  _searchFilter: string;

  @Input()
  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value.toLowerCase()
    this.doSearch()
  }

  books: any[] = []

  constructor() {
  }

  ngOnInit() {
    this.books = books.items;
  }

  doSearch() {
    if (this._searchFilter)
      this.books = books.items.filter(s => s.volumeInfo.title.toLowerCase().includes(this._searchFilter))
    else
      this.books = books.items;
  }

}
