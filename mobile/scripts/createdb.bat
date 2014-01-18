@echo OFF

@echo delete existing databases if any
curl -X DELETE http://admin:1234@localhost:5984/users

@echo create database "users"
curl -X PUT    http://admin:1234@localhost:5984/users

@echo set admin as sole authorized user
curl -X PUT    http://admin:1234@localhost:5984/users/_security -H "Content-type: application/json" ^
               -d @security.json

@echo create 2 users
curl -X POST   http://admin:1234@localhost:5984/users -H "Content-type: application/json"           ^
               -d "{\"_id\": \"a\", \"pw\": \"a\", \"balance\": 5, \"gems\": 0,\"score\": 0 }"

curl -X POST   http://admin:1234@localhost:5984/users -H "Content-type: application/json"           ^
               -d "{\"_id\": \"b\", \"pw\": \"b\", \"balance\": 0, \"gems\": 0,\"score\": 0 }"

@echo finished
