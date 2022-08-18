#/bin/bash
if [[ $1 == "dev" ]]; then  
  docker-compose --env-file ./docker/environments/mysql.env -f docker-compose.yml -f docker-compose.dev.yml stop --no-deps  
else
  docker-compose --env-file ./docker/environments/mysql.env -f docker-compose.yml -f docker-compose.prod.yml stop --no-deps
fi 
