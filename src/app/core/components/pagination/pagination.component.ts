import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paginator } from '../../services/Paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  paginator: Paginator

  @Output() pageEmitter: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  setPage(page: number) {
    if (page != this.paginator.actualPage)
      this.pageEmitter.emit(page)
  }

  setPreviousPage() {
    if (this.paginator.actualPage > 1)
      this.setPage(this.paginator.actualPage - 1)
  }

  setNextPage() {
    if (this.paginator.actualPage < this.paginator.pages.length)
      this.setPage(this.paginator.actualPage + 1)
  }

}
