import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AlertModel } from '../../../../both/models/service.model';

@Injectable()
export class AlertService {
    private messageSource = new BehaviorSubject<AlertModel>({msg: "test", type: "info", show: false});
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    createAlert(alert: AlertModel) {
        this.messageSource.next(alert)
    }
}