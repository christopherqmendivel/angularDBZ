import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    public title = 'DBZ Personajes';

    
    public characters: Character[] = [
    {
        name: 'Gohan',
        power: 1200
    },
    {
        name: 'Videl',
        power: 800
    },
    {
        name: 'Goku',
        power: 9500
    },
    {
        name: 'Vegeta',
        power: 9500
    },
    {
        name: 'Broly',
        power: 12000
    }
];


    onNewCharacter( character: Character ): void {
        this.characters.push( character );
    }
    onDeleteCharacter( index: number): void {
        this.characters.splice(index, 1);
    }
    
}