docker build . -t nft-backend
docker run -d --rm nft-backend -p 8081:80