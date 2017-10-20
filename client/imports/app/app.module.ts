import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { NaviComponent } from './navi/navi.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    // Components, Pipes, Directive
    declarations: [
        AppComponent,
        NaviComponent,
        HomeComponent
    ],
    // Providers
    providers: [
    ],
    // Modules
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    // Main Component
    bootstrap: [ AppComponent ]
})

export class AppModule {
    constructor() {

    }
}