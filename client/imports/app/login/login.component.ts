import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import template from "./login.component.html";
import style from "./login.scss";

@Component({
    selector: 'login',
    template,
    styles: [style]
})

export class LoginComponent implements OnInit {

    userId: string;
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit() {
        this.userId = Meteor.userId();
        if(this.userId) {
            console.log("Logged In");
        }
        else {
            console.log("not logged");
        }

        this.loginForm = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(3),
                Validators.pattern('[A-Za-z]{3}')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required
            ]))
        })
    }

    login(): void {
            let username = this.loginForm.value.username.toLowerCase();
            let password = this.loginForm.value.password;
            if(this.loginForm.valid){
                Meteor.loginWithPassword(username, password, function(error) {
                    if( error ) {
                        console.log("login error");
                    }
                })
            }
    }
}