import { Injectable } from '@nestjs/common';

export interface Hero {
    name: string;
    superpower: string;
    humilityScore: number;
}

@Injectable()
export class AppService {
    private superheroes: Hero[] = [];

    addSuperhero(superhero: Hero) {
        if (superhero.humilityScore < 1 || superhero.humilityScore > 10) {
            throw new Error('Humility score must be between 1 and 10.');
        }
        this.superheroes.push(superhero);
    }

    getSuperheroes(): Hero[] {
        return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
    }
}
