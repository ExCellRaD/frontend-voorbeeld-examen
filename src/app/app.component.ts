import { Component, OnInit } from '@angular/core';
import { Telling } from './models';
import { VogeltellingService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tellingen: Telling[];

  constructor(private service: VogeltellingService) { }

  ngOnInit() {
    this.service.getTellingen(tellingen => console.log(this.tellingen = tellingen));
  }
  
}
