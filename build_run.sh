#!/usr/bin/env bash
# to build images
docker build -t tony_api:dev ./tony_makes_backend_apis && \
docker build -t tony_react:dev .//tony_makes_react
# to run container from the images
(cd tony_makes_backend_apis/;docker run \
    -it \
    --rm \
    -v ${PWD}/app:/app \
    -p 8010:8010 \
    --name tony_backend \
    -d \
    tony_api:dev sh -c "python manage.py runserver 0.0.0.0:8010"
)
(cd tony_makes_react/; docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    --name tony_web \
    -d \
    tony_react:dev
)

# to stop the runing containers
# uncomment the last two commands to remove containers 
#docker stop tony_web && \
#docker stop tony_backend
