I. Mongo DB telepítése és inicializálása + videoStore adatbázis létrehozása

1. cd C:\Program Files\MongoDB\Server\5.0\bin
2. .\mongod.exe
3. cd C:\Program Files\MongoDB\Server\5.0\bin
4. .\mongo.exe
5. use videoStore

II. Movie lista létrehozása
db.createCollection("movies")

III. 10 új film beillesztése

1. db.movies.save([{
   ... "title": "Bleeder",
   ... "category": "fantasy",
   ... "director": "Steven Spielberg"
   ... }, {
   ... "title": "Just Visiting",
   ... "category": "action",
   ... "director": "Clint Eastwood"
   ... }, {
   ... "title": "Simpsons Movie, The",
   ... "category": "romantic",
   ... "director": "James Cameron"
   ... }, {
   ... "title": "Those Daring Young Men in Their Jaunty Jalopies",
   ... "category": "fantasy",
   ... "director": "Steven Spielberg"
   ... }, {
   ... "title": "Hansel & Gretel",
   ... "category": "action",
   ... "director": "Clint Eastwood"
   ... }, {
   ... "title": "Signs & Wonders",
   ... "category": "romantic",
   ... "director": "James Cameron"
   ... }, {
   ... "title": "And While We Were Here",
   ... "category": "fantasy",
   ... "director": "Steven Spielberg"
   ... }, {
   ... "title": "Either Way (Á annan veg)",
   ... "category": "action",
   ... "director": "Clint Eastwood"
   ... }, {
   ... "title": "Dark Prince: The True Story of Dracula",
   ... "category": "romantic",
   ... "director": "James Cameron"
   ... }, {
   ... "title": "Frequency",
   ... "category": "romantic",
   ... "director": "James Cameron"
   ... }])

IV. Ratings mező beillesztése

1. db.movies.updateMany({}, {$set: {ratings: []}})

V. 2 Szavazat beszúrása 2 filmbe

1.db.movies.updateMany({director: "Clint Eastwood"}, {$push: {ratings: 5} })
2. db.movies.updateMany({director: "James Cameron"}, {$push: {ratings: 4} })

3. db.movies.updateMany({director: "Steven Spielberg"}, {$push: {ratings: 1} })

4. db.movies.updateMany({category: "romantic"}, {$push: {ratings: 4} })
5. db.movies.updateMany({category: "action"}, {$push: {ratings: 5} })
6. db.movies.updateMany({category: "fantasy"}, {$push: {ratings: 2} })

VI. ReleaseYear mező hozzáadása

1. db.movies.updateMany({}, {$set: { releaseYear: 2003 }} )

VII. Nagybetűsítés

1. db.movies.updateMany( {}, [{$set: {category: {$toUpper: "$category"} }}] )
