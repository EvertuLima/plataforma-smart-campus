import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-room-summary',
  templateUrl: './room-summary.component.html',
  styleUrls: ['./room-summary.component.css']
})
export class RoomSummaryComponent {
  @Input() name:string ="";
  @Input() description:string = "";
  @Input() id?:number;

}
