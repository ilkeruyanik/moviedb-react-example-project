# Moviedb React Example Project
## Description

It is an example project for Reactjs development.

## Installation

After then clone project, you have to create .env file on root of project. You can copy .env.example.
```bash
cp .env.example .env
```
You should add your The Movie Database API KEY
```
API_KEY='<<YOUR-API-KEY>>'
```

Use docker

```bash
docker build -t moviedb-react-example-project .
docker run -p 3000:3000 moviedb-react-example-project
```
After then these commands, project will run on [localhost:3000](http://localhost:3000)

or you can use

```bash
npm install
npm start
```