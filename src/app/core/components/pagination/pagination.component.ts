import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  pages: number[]

  @Input()
  actualPage: number

  @Output() pageEmitter: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  setPage(page: number) {
    if (page != this.actualPage)
      this.pageEmitter.emit(page)
  }

  setPreviousPage() {
    if (this.actualPage > 1)
      this.setPage(this.actualPage - 1)
  }

  setNextPage() {
    if (this.actualPage < this.pages.length)
      this.setPage(this.actualPage + 1)
  }

}
