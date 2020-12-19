docker run --name db -d -p 27017:27017 mongo:latest
docker exec -it db /bin/sh
mongo
