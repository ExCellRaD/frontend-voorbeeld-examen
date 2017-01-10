import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { WaarnemingComponent } from './waarneming/waarneming.component';
import { VogeltellingService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    WaarnemingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'telling/:id', component: WaarnemingComponent }
    ])
  ],
  providers: [VogeltellingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
