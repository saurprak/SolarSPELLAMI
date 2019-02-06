Echo "Switching Container"

docker ps

cd moduleOne

docker build -t moduleone .

cd ..

cd moduleOne

docker build -t moduletwo .

cd ..

docker run --name one -d -p 3001:3000 moduleone:latest 
docker run --name two -d -p 3002:3000 moduletwo:latest 

docker ps



docker stop two

docker stop one


docker start one



TIMEOUT 10

docker stop one


docker start one

TIMEOUT 10

docker stop two




