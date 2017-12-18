import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.scss";

@Component({
    selector: "app",
    template,
    styles: [ style ]
})
export class AppComponent {
    constructor() {
    }
}
