# SHLWatcher
Watch SHL game and report status

## Idea
Fetch games from SHL Open API for a given team.
Idle until a couple of hours before next game.
Idle with intervals before next game.
- Same day
- Hours before
- Minutes before
- Seconds before
- Game time
  - Loop every X seconds
- Get next game time

## Installation
Execute this with `docker-compose up --build` after putting the `Dockerfile` into the same folder as `docker-compose.yaml`.
