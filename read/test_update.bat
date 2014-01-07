@echo off

@echo Update document message.
@curl -X PUT http://admin:1234@localhost:5984/read/message                      ^
     -H "Content-type: application/json"                                   ^
     -d "{\"_id\":\"message\",\"text\":\"the new message\",\"_rev\":\"1-46efe3000869300c3df0006158abebed\"}"
 
@echo Display document message.
curl -X GET http://admin:1234@localhost:5984/read/message
 
@echo Try an update with an old revision number.  Note a conflict.
curl -X PUT http://admin:1234@localhost:5984/read/message                       ^
     -H "Content-type: application/json"                                   ^
     -d "{\"_id\":\"message\",\"text\":999,\"_rev\":\"1-46efe3000869300c3df0006158abebed\"}"
 
@echo Display document message.  Note that x is still the new message.
curl -X GET http://admin:1234@localhost:5984/read/message