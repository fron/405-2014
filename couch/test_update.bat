@echo off

@echo Update document a.
@curl -X PUT http://admin:1234@localhost:5984/test/a                       ^
     -H "Content-type: application/json"                                   ^
     -d "{\"_id\":\"a\",\"x\":100,\"_rev\":\"1-0785e9eb543380151003dc452c3a001a\"}"
 
@echo Display document a.
curl -X GET http://admin:1234@localhost:5984/test/a
 
@echo Try an update with an old revision number.  Note a conflict.
curl -X PUT http://admin:1234@localhost:5984/test/a                       ^
     -H "Content-type: application/json"                                   ^
     -d "{\"_id\":\"a\",\"x\":999,\"_rev\":\"1-0785e9eb543380151003dc452c3a001a\"}"
 
@echo Display document a.  Note that x is still 100.
curl -X GET http://admin:1234@localhost:5984/test/a