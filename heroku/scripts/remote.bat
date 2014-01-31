psql -U postgres -h localhost -d gift -f gift.sql
heroku pg:reset DATABASE_URL --app fr405app --confirm fr405app
heroku pg:push gift DATABASE_URL --app fr405app