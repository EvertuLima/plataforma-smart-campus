import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PAGES-COMPONENTS
import { LoginComponent } from './components/pages/login/login.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RoomIdComponent } from './components/pages/room-id/room-id.component';

// SHARED-COMPONENTS
import { FilterComponent } from './components/shared/filter/filter.component';
import { RoomSummaryComponent } from './components/shared/room-summary/room-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    RoomsComponent,
    RoomSummaryComponent,
    RoomIdComponent,
    FilterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
