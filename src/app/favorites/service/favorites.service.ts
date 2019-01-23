import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MessagesService } from 'src/app/alerts/services/messages.service';
import * as firebase from 'firebase/app'
import { Pokemon } from 'src/app/core/models/classes/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favsRef: AngularFireList<any>
  user: firebase.User

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase, private alertService: MessagesService) {
    authFire.authState.subscribe(
      user => {
        if (user) {
          this.user = user
          this.favsRef = rdb.list(`favorites/${this.user.uid}`)
        }
      }
    )
  }

  addFavorite(pokemon: Pokemon) {
    this.favsRef.push({ name: pokemon.name })
      .then(_ => {
        this.alertService.message({
          msg: `${pokemon.name} ha sido agregado a tus favoritos!`,
          type: 'success'
        })
      })
  }

  getFavorites(): Observable<any[]> {
    this.favsRef = this.rdb.list(`favorites/${this.user.uid}`)
    return this.favsRef.valueChanges();
  }
}
