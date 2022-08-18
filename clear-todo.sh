#/bin/bash

docker-compose --env-file ./docker/environments/mysql.env -f docker-compose.yml -f docker-compose.dev.yml down
docker-compose --env-file ./docker/environments/mysql.env -f docker-compose.yml -f docker-compose.prod.yml down 
docker rmi mysql:5.7.37@sha256:66d52e6baa8093820c09fec56992a5ee734f17e9fad8ef5ffc31597b231bd048 nodejs-todo react-todo phpmyadmin/phpmyadmin
