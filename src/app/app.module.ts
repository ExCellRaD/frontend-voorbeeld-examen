import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { TellingComponent } from './telling/telling.component';
import { TellingService } from './services/telling.service';

@NgModule({
  declarations: [
    AppComponent,
    TellingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'telling/:id', component: TellingComponent }
    ])
  ],
  providers: [TellingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
