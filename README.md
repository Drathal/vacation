# Vacation Manager

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## yarn

### dev

    yarn install
    yarn start

## docker

### dev

    docker-compose up
    docker-compose up --build (when package.json has changed)

### build production

    docker build -f Dockerfile.prod -t app .

### run production

    docker run -it --rm -p 80:80 --name vacation app
