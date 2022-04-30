I. Directors lista elkészítése.

1. db.createCollection("directors")

II. 3 rendező elmentése

1. db.directors.insertOne({name: "Steven Spielberg", birthYear: 1954, movies: []})
2. db.directors.insertOne({name: "Clint Eastwood", birthYear: 1943, movies: []})
3. db.directors.insertOne({name: "James Cameron", birthYear: 1923, movies: []})

III. - IV. Rendezők dokumentumainak firssítése

1. db.directors.updateOne({\_id: "626cc5c8287453a9dafbcb31"}, {$set: {movies: [ObjectId("626cb6514f1f363bd89b38ee"), ObjectId("626cb6514f1f363bd89b38f1"), ObjectId("60db3fd060047516675deb39"), ObjectId("626cb6514f1f363bd89b38f4")]}})

2. db.directors.updateOne({\_id: "626cc5c8287453a9dafbcb32"}, {$set: {movies: [ObjectId("626cb6514f1f363bd89b38ef"), ObjectId("626cb6514f1f363bd89b38f2"), ObjectId("626cb6514f1f363bd89b38f5")]}})

3. db.directors.updateOne({\_id: "626cc5c8287453a9dafbcb33"}, {$set: {movies: [ObjectId("626cb6514f1f363bd89b38f0"), ObjectId("626cb6514f1f363bd89b38f3"), ObjectId("626cb6514f1f363bd89b38f6"), ObjectId("626cb6514f1f363bd89b38f7")]}})

V. Pretty paranccsal történő lekérdezés

1. db.directors.find().pretty()

VI. Director mező törlése

1. db.movies.updateMany({}, {$unset: {director: ""}})

VII. Bizonyos év előtt/után készült filmek lekérdezése

1. db.directors.find({releaseYear: {$lt: 2010}})
1. db.directors.find({releaseYear: {$gt: 2000}})
1. db.directors.find({releaseYear: {$lte: 2003}})
1. db.directors.find({releaseYear: {$gte: 2003}})

VIII. Filmek lekérdezése megadott időintervallumban

1.1 db.directors.find({releaseYear: {$lt: 2010}, releaseYear: { $gt: 2000}})

1.2 db.directors.find( { $and: [ { releaseYear: { $lt: 2010 } }, { releaseYear: { $gt: 2000 } } ] } )

IX. Adott kategóriájú filmek, időintervallum szerinti lekérdezése

1. db.directors.find({category: {$eq: "FANTASY"}, releaseYear: {$lt: 2010}, releaseYear: { $gt: 2000}})

X. NEM FANTASY kategóriájú filmek lekérdézése

1. db.directors.find({category: {$ne: "FANTASY"}})
