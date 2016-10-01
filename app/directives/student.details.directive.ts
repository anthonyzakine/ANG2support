// Import des composants nécessaire à la création de la directive : à propos des directives https://goo.gl/fGh7QS 
import {Component, Input, Output, EventEmitter} from "@angular/core";

import { Config } from '../config';
import {StudentItem} from "../models/student.item";

// Configuration de la directive
@Component({
    selector: 'student-item',
    templateUrl: 'app/partials/directives/student.details.component.html',
})

// Export de la class de la directive
export class StudentDirective {
    editBtn = Config.EDIT_BTN;
    state1 = Config.STATE1;
    state2 = Config.STATE2;
    state3 = Config.STATE3;
    
    // L’utilisation de la fonction de la class Input permet de recevoir dans la directive les données d’un autre composant.
    @Input() student: StudentItem;

    // L’utilisation de la fonction de la class Output permet d'envoyer dans la directive les données vers un autre composant.
    // La création d’un instance de EventEmitter() permet de créer un événement personnalisé.
    @Output() sendStudentDetail = new EventEmitter();

    onSelect(event: Event){
        // La fonction .emit(…) permet de capter un événement personnalisé.
        this.sendStudentDetail.emit(this.student);
    }
}