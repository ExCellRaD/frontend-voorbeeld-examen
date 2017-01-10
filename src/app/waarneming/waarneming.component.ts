import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { VogeltellingService } from '../services';
import { Waarneming } from '../models';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './waarneming.component.html',
  styleUrls: ['./waarneming.component.scss']
})
export class WaarnemingComponent implements OnInit, OnDestroy {

  waarnemingen: Waarneming[];
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private service: VogeltellingService) { }

  ngOnInit() {
    this.sub = this.route.params
      .subscribe((params: Params) => this.loadData(+params['id']));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadData(id) {
    this.service.getWaarnemingen(id, waarnemingen => this.waarnemingen = waarnemingen);
  }

}
