import { Component, OnInit } from '@angular/core';
import { MapService } from "../../services/map.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:any = [];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.getTaskItems();
  }

  getTaskItems() {
    this.mapService
      .getTask()
      .subscribe(
        res => {
          console.log(res);
          this.list = res;
        },
        err => {
          console.log(err);
        }
      );
  }


 
}
