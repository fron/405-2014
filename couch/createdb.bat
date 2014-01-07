@echo OFF

@echo "Deleting database TEST"
curl -X DELETE http://admin:1234@localhost:5984/test

@echo "Creating database TEST"
curl -X PUT http://admin:1234@localhost:5984/test

@echo "Adding security to TEST"
curl -X PUT http://admin:1234@localhost:5984/test/_security  ^
     -H "Content-type: application/json"                     ^
     -d "{\"members\":{\"names\":[\"admin\"]}}"

@echo "Creating documents"
curl -X POST http://admin:1234@localhost:5984/test  ^
     -H "Content-type: application/json"            ^
     -d "{\"_id\":\"a\",\"x\":1}"

curl -X POST http://admin:1234@localhost:5984/test  ^
     -H "Content-type: application/json"            ^
     -d "{\"_id\":\"b\",\"x\":2}"

curl -X POST http://admin:1234@localhost:5984/test  ^
     -H "Content-type: application/json"            ^
     -d "{\"_id\":\"c\",\"y\":1}"

curl -X POST http://admin:1234@localhost:5984/test  ^
     -H "Content-type: application/json"            ^
     -d @d.json

@echo "Finished"