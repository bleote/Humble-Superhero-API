# Humble-Superhero-API
Repository created for the recruiting process I'm participating at eJam

## Overview
The Humble Superhero API allows users to add superheroes with their name, superpower, and a humility score from 1 to 10. Users can also fetch a list of superheroes sorted by their humility score.

## Endpoints
- **POST /superheroes**: Add a new superhero (it requires a name, a superpower, and a humility score).
- **GET /superheroes**: Fetch all superheroes sorted by humility score in descending order.

## Setup Instructions
1. Clone the repository.
2. Run `npm install`.
3. Start the server with `npm run start`.
4. API will be available at `http://localhost:3000`.

## Validation
- Humility score must be a number between 1 and 10.

## Testing
Run `npm run test` to execute the test cases.

## Collaboration
To collaborate with a teammate, I would:
- Discuss API requirements and potential features.
- We could distribute tasks to focus our efforts in different segments and move quickly.
- Promote cross-testing for quality control.
- Record the team decisions in an internal doc and share it with all the parties so everyone is aware and aligned.
- Use Git for version control and code reviews.
- Communicate frequently to guarantee that the frontend and backend are smoothly integrated.

## If I had more time
- Set CRUD functionality to the API.
- Implement a database for persistent storage.
- Include more details and information about the heroes.
- Add more extensive input validation.
- Create a frontend interface with React for real-time interaction.
- Work on the UI for an engaging UX.
