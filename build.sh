#!/bin/bash
#!/bin/bash
rustc ./src/server.rs 
rustc ./src/client.rs
./server
./client
