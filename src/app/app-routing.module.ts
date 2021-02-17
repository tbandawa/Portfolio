import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './home/about/about.component'
import { ContactComponent } from './home/contact/contact.component'
import { PortfolioComponent } from './home/portfolio/portfolio.component'

import { OpenradioComponent } from './openradio/openradio.component'
import { UolComponent } from './uol/uol.component'
import { TaxiComponent } from './taxi/taxi.component'
import { SnappyComponent } from './snappy/snappy.component'
import { SkyzComponent } from './skyz/skyz.component'
import { OneboxComponent } from './onebox/onebox.component'
import { CityoneComponent } from './cityone/cityone.component'

const routes: Routes = [
    
    { path: "", component: HomeComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "about" },
            { path: "about", component: AboutComponent },
            { path: "contact", component: ContactComponent },
            { path: 'portfolio', component: PortfolioComponent}
        ]
    },
    { path: 'openradio', component: OpenradioComponent },
    { path: 'uol', component: UolComponent },
    { path: 'taxi', component: TaxiComponent },
    { path: 'snappy', component: SnappyComponent },
    { path: 'skyz', component: SkyzComponent },
    { path: 'onebox', component: OneboxComponent },
    { path: 'cityone', component: CityoneComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }