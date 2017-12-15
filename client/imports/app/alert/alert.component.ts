import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { AlertService } from '../services/alert.service';
import { AlertModel } from '../../../../both/models/service.model';

import style from './alert.scss';
import template  from './alert.component.html';


@Component({
    selector: 'alert',
    template,
    styles: [style]
})

export class AlertComponent implements OnInit {

    showAlert: boolean;
    alertObj: AlertModel;

    constructor(
        private zone: NgZone,
        private alert: AlertService
    ) {}

    ngOnInit() {
        this.showAlert = false;
        this.alert.currentMessage.subscribe(alert => {
            this.zone.run(() => {
                this.alertObj = alert;
                if(this.alertObj.show === true) {
                    this.toggleAlert();
                }
            })
        })
    }

    getClass() {
        return "alert alert-"+this.alertObj.type
    }

    toggleAlert(){
        this.showAlert = !this.showAlert;
    }
}