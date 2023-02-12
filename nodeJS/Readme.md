Design and implement “Word of Wisdom” tcp server.
• TCP server should be protected from DDOS attacks with the Prof of Work (https://en.wikipedia.org/wiki/Proof_of_work), the challenge-response protocol should be used.
• The choice of the POW algorithm should be explained.
• After Prof Of Work verification, server should send one of the quotes from “word of wisdom” book or any other collection of the quotes.
• Docker file should be provided both for the server and for the client that solves the POW challenge.

 # docker build -t server-pow -f DockerfileServer .
 # docker build -t client-pow -f DockerfileClient .
 # docker run --rm -dp 3005:3005 server-pow
 # docker run --rm -it --network host --name client-pow client-pow
