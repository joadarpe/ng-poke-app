import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { IMessage } from 'src/app/alerts/models/interfaces/message';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input() searchFilter: string

  constructor(private msgService: MessagesService) {
  }

  ngOnInit() {
    window.addEventListener('online', this.updateConnection.bind(this))
    window.addEventListener('offline', this.updateConnection.bind(this))
  }

  updateConnection(event) {
    let msg: IMessage
    if (event.type == 'online')
      msg = { msg: 'Back on the horse!', type: 'success' }
    else
      msg = { msg: 'Houston we have a problem!', type: 'error' }
    this.msgService.message(msg)
  }

}
