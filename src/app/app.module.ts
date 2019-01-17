import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-api/pokemons-api';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig, environment.firebaseConfig.projectId),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    StoreModule.forRoot(reducers, { metaReducers: metaReducer }),
    StoreDevtoolsModule.instrument(
      {
        name: 'Ng Poke App', // Plugin App identifier
        logOnly: environment.production, // Only logs on production
        maxAge: 30 // State history
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
