docker build . -t nft-backend
docker run -it --rm  -p 8081:80 nft-backend