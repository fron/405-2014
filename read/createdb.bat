@echo OFF

@echo "Deleting database READ"
curl -X DELETE http://admin:1234@localhost:5984/read

@echo "Creating database READ"
curl -X PUT http://admin:1234@localhost:5984/read

@echo "Adding security to READ"
curl -X PUT http://admin:1234@localhost:5984/read/_security  ^
     -H "Content-type: application/json"                     ^
     -d "{\"members\":{\"names\":[\"admin\"]}}"

@echo "Creating documents"
curl -X POST http://admin:1234@localhost:5984/read  ^
     -H "Content-type: application/json"            ^
     -d "{\"_id\":\"message\",\"text\":\"the read assignment\"}"

@echo "Finished"