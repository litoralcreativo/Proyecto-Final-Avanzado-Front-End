import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Proyecto-Final-Avanzado-Front-End';

  constructor(private globals: GlobalService) {}

  ngOnInit() {
    this.globals.grabToken();
  }
}
