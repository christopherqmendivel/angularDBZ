import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../service/dbz.service';

@Component({
    selector: 'app-main-page-dbz',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    
    
    constructor( public dbzService: DbzService) {}
}