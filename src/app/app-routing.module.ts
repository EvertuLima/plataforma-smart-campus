import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AdvertsComponent } from './components/pages/adverts/adverts.component';
import { RoomSummaryComponent } from './components/shared/room-summary/room-summary.component';
import { CreatComponent } from './components/pages/creat/creat.component';
import { RoomIdComponent } from './components/pages/room-id/room-id.component';


const routes: Routes = [
  {path: "", component: RoomsComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "adverts", component: AdvertsComponent},
  {path: "resumo", component: RoomSummaryComponent},
  {path: "create", component: CreatComponent},
  {path: "room/:id", component: RoomIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
