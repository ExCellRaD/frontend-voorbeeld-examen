import { Component, OnInit } from '@angular/core';
import { Telling } from './models';
import { TellingService } from './services/telling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tellingen: Telling[];
  title = 'app works!';

  constructor(private service: TellingService) { }

  ngOnInit() {
    this.service.getTellingen(tellingen => console.log(this.tellingen = tellingen));
  }
}
