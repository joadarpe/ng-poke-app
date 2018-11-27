import { Component, OnInit, Input } from '@angular/core';
import { Collection } from 'src/app/core/models/classes/Collection';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {
  
  @Input() collection: Collection

  constructor() { }

  ngOnInit() {

  }

}
