import { Component, OnInit } from '@angular/core';
import { Paginator } from 'src/app/core/services/Paginator';
import { Collection } from 'src/app/core/models/classes/Collection';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  mockCollection: number[] = [1, 2, 3, 4, 5]
  collections: Collection[] = []
  paginator: Paginator = new Paginator(2);

  constructor() { }

  ngOnInit() {
    this.loadCollections(this.mockCollection);
  }

  loadCollections(items: number[]): any {
    this.collections = []
    let pageResults = this.paginator.loadActualPage(items)
    pageResults.forEach(n => this.collections.push(this.createCollection(n)))
  }

  createCollection(n: number): Collection {
    let col = new Collection()
    col.id = n
    col.name = `Collection ${n}`
    col.description = n % 2 == 0 
      ? `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
      : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    col.image = `http://s3.amazonaws.com/37assets/svn/765-default-avatar.png`
    return col
  }

  loadPage(page: number) {
    this.paginator.actualPage = page
    this.loadCollections(this.mockCollection)
  }

}
