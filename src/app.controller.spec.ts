import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('Superhero API', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('POST /superheroes should add a superhero', async () => {
        const superheroData = {
            name: 'Popcorn-Man',
            superpower: 'Generate Popcorn (Any Flavor)',
            humilityScore: 10,
        };

        await request(app.getHttpServer())
            .post('/superheroes')
            .send(superheroData)
            .expect(201)
            .expect({ message: 'Superhero added successfully!' });
    });

    it('GET /superheroes should return the added superhero', async () => {
        const response = await request(app.getHttpServer())
            .get('/superheroes')
            .expect(200);

        const superheroes = response.body;
        expect(superheroes).toEqual([
            {
                name: 'Popcorn-Man',
                superpower: 'Generate Popcorn (Any Flavor)',
                humilityScore: 10,
            },
        ]);
    });
});
