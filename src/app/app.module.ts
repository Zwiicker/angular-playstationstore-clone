import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/cards/card-label/card-label.component';
import { CardPricingComponent } from './components/cards/card-pricing/card-pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
