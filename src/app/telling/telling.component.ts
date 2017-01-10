import { Component } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { TellingService } from '../services/telling.service';
import { Waarneming } from '../models';

@Component({
  selector: 'app-telling',
  templateUrl: './telling.component.html',
  styleUrls: ['./telling.component.scss']
})
export class TellingComponent {

  waarnemingen: Waarneming[];

  constructor(route: ActivatedRoute, private service: TellingService) {
    route.params
      .subscribe((p: Params) => this.loadData(p['id']));
  }

  loadData(id) {
    this.service.getWaarnemingen(id, waarnemingen => this.waarnemingen = waarnemingen);
  }

}
