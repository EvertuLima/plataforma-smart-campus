import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';

// MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

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
import { CreatComponent } from './components/pages/creat/creat.component';
import { CreateRoomComponent } from './components/shared/create-room/create-room.component';
import { CreateEmployeeComponent } from './components/shared/create-employee/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMaterialComponent } from './components/shared/create-material/create-material.component'; 

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
    FooterComponent,
    CreatComponent,
    CreateRoomComponent,
    CreateEmployeeComponent,
    CreateMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
