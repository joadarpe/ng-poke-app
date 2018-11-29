import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/models/classes/Pokemon';

@Component({
  selector: 'app-similar-content',
  templateUrl: './similar-content.component.html',
  styleUrls: ['./similar-content.component.css']
})
export class SimilarContentComponent implements OnInit {

  @Input() similars: Pokemon[]

  constructor() { }

  ngOnInit() {
  }

}
