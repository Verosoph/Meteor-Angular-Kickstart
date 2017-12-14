import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes, ROUTES_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

import { NaviComponent } from './navi/navi.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LOGIN_DECLARATIONS } from './login/login.export';
import { AlertService } from './services/alert.service';

@NgModule({
    // Components, Pipes, Directive
    declarations: [
        AppComponent,
        NaviComponent,
        AlertComponent,
        HomeComponent,
        ...LOGIN_DECLARATIONS,
        RegisterComponent
    ],
    // Providers
    providers: [
        ...ROUTES_PROVIDERS,
        AlertService
    ],
    // Modules
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    // Main Component
    bootstrap: [ AppComponent ]
})

export class AppModule {
    constructor() {

    }
}