import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { HackerNewsService } from './services/hacker-news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      CounterComponent,
      FetchDataComponent,
      HackerNewsComponent,
      JwPaginationComponent
   ],
   imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      MatCardModule,
      MatInputModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'hacker-news', component: HackerNewsComponent},
      ]),
      BrowserAnimationsModule
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [HackerNewsService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
