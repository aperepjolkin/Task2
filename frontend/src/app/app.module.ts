import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressBarService } from './progressbar/progressbar.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [WebService,ProgressBarService],
  bootstrap: [AppComponent],
})
export class AppModule { }
