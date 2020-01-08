import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatInputModule} from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './search/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  entryComponents: [
    PopUpComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
