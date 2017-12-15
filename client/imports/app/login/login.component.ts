import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import template from "./login.component.html";
import style from "./login.scss";

import { AlertService } from '../services/alert.service';
import { AlertModel } from "../../../../both/models/service.model";

@Component({
    selector: 'login',
    template,
    styles: [style]
})

export class LoginComponent implements OnInit {

    userId: string;
    loginForm: FormGroup;
    alertObj: AlertModel;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private alert: AlertService
    ){}

    ngOnInit() {

        this.userId = Meteor.userId();

        this.loginForm = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(3),
                Validators.pattern('[A-Za-z]{3}')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(6),
                Validators.required
            ]))
        })
    }

    login() {
            let username = this.loginForm.value.username.toLowerCase();
            let password = this.loginForm.value.password;

            if(this.loginForm.valid){
                Meteor.loginWithPassword(username, password, (error) => {
                    if( error ) {
                        console.log("1 log");
                        this.alertObj = {msg: "Username or Password are wrong!", type: "danger", show: true};
                        this.alert.createAlert(this.alertObj);
                    }
                    else {
                        this.alertObj = {msg: "Logged In", type: "success", show: true};
                        this.alert.createAlert(this.alertObj);
                    }
                })
            }
            else {
                this.alertObj = {msg: "Login invalid", type: "danger", show: true};
                this.alert.createAlert(this.alertObj);
            }
    }

    toRegister(): void {
            this.router.navigate(['register']);
    }
}