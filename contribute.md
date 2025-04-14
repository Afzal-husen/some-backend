## Manual installation

- Install nodejs locally
- clone the repo
- install deps
- start db locally
  - docker run -e POSTGRES_PASSWORD=yourpgpassword -d -p 5432:5432 postgres
- update .env file with your creds
- npx prisma migrate dev
- npx prisma generate
- npm run build
- npm run start

## Docker installation

- install docker
- Create a network `docker network create my_network`
- Start postgres
  - docker run --network my_network -e POSTGRES_PASSWORD=yourpassword -d -p
    5432:5432 postgres
- Build image - `docker build --network=host -t node-project`
- Start docker image -
  `docker run -e DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/docker-compose-db --network my_network -p 3000:3000 node-project`

## Docker Compose installation steps

- Install docker
- Run `docker-compose up or docker-compose -d`
