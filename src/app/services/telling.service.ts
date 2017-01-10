import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Telling, Waarneming } from '../models';
import { Config } from './config';
@Injectable()
export class TellingService {

  waarnemingen; //buffer om niet iedere keer een request te doen

  constructor(private http: Http) {
    var a: TellingService;
  }

  public getTellingen(cb: (t: Telling[]) => any) {
    this.http.get(Config.urlTellingen).subscribe(res => {
      let json = res.json();
      var results = new Array<Telling>();
      for (let telling of json) {
        results.push(new Telling(telling['Telling ID'], telling.waarnemer, telling.Datum));
      }
      cb(results);
    });
  }

  public getWaarnemingen(id, cb: (t: Waarneming[]) => any) {
    let convertWaarnemignen = () => {
      var results = new Array<Waarneming>();
      for (let waarneming of this.waarnemingen) {
        let amount = waarneming['Telling ID ' + id];
        if (amount === '') amount = 0;
        results.push(new Waarneming(waarneming.Vogelsoort, amount));
      }
      cb(results);
    }

    if (!this.waarnemingen) {
      this.http.get(Config.urlWaarnemingen).subscribe(res => {
        this.waarnemingen = res.json();
        convertWaarnemignen();
      })
    }
    else convertWaarnemignen();
  }
}
