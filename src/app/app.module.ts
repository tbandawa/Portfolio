import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './home/contact/contact.component'
import { AboutComponent } from './home/about/about.component'
import { PortfolioComponent } from './home/portfolio/portfolio.component'

import { OpenradioComponent } from './openradio/openradio.component'
import { UolComponent } from './uol/uol.component'
import { TaxiComponent } from './taxi/taxi.component'
import { SnappyComponent } from './snappy/snappy.component'
import { SkyzComponent } from './skyz/skyz.component';
import { OneboxComponent } from './onebox/onebox.component';
import { CityoneComponent } from './cityone/cityone.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    HomeComponent,
    OpenradioComponent,
    UolComponent,
    TaxiComponent,
    SnappyComponent,
    SkyzComponent,
    OneboxComponent,
    CityoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
