import { Controller, Post, Get, Body } from '@nestjs/common';
import { AppService, Hero } from './app.service';

interface Superhero {
    name: string;
    superpower: string;
    humilityScore: number;
}

@Controller('superheroes')
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Post()
    addSuperhero(@Body() superhero: Hero) {
        this.appService.addSuperhero(superhero);
        return { message: 'Superhero added successfully!' };
    }

    @Get()
    getSuperheroes(): Hero[] {
        return this.appService.getSuperheroes();
    }
}