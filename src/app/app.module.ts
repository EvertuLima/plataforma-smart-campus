import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

// MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ThemePalette} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

// SHARED-COMPONENTS
import { FilterComponent } from './components/shared/filter/filter.component';
import { RoomSummaryComponent } from './components/shared/room-summary/room-summary.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// PAGES-COMPONENTS
import { LoginComponent } from './components/pages/login/login.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { RoomIdComponent } from './components/pages/room-id/room-id.component';
import { AdvertsComponent } from './components/pages/adverts/adverts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    RoomsComponent,
    RoomSummaryComponent,
    RoomIdComponent,
    FilterComponent,
    NavbarComponent,
    AboutUsComponent,
    AdvertsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
    MatCheckboxModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
