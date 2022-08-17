#/bin/bash

if [[ $1 == "dev" ]]; then  
  docker-compose --env-file ./docker/environments/mysql.env -f docker-compose.yml -f docker-compose.dev.yml up --no-deps  
else
  docker-compose --env-file ./docker/environments/mysql.env -f docker-compose.dev.yml up --no-deps
fi 



