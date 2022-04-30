I. Használd a videoStore adatbázist (az első gyakorló feladatokból)

1. use videoStore

II. Számold meg, hány akció- és romantikus filmed van összesen!

1. db.movies.find({ $or: [ { category: "ACTION" }, { category: "ROMANTIC" }] }).count()

III. Kérdezd le a „FANTASY” filmek nevét és a kategóriáját. Mentsd le a listát (Cursor-t) egy változóba!

1. fantasies = db.movies.find( { category: "FANTASY" }, {title: 1, category: 1})

IV. Írj egy ciklust, amely végigiterál a listán, és kiírja filmek a nevét és kategóriáját => példa: Végtelen történet: FANTASY (tipp: print() függvénnyel lehet kiíratni az értékeket Mongo shell-ben)!

1. db.movies.find({}).forEach(function(movie) { result = movie.title + ": " + movie.category; print(result);})

V. Készíts egy lekérdezést, amely fordított sorrendben (\_id) adja vissza csak a filmcímeket!

1. db.movies.aggregate([{$match: {}}, {$sort: {id: -1}}])

VI.Készíts egy lekérdezést, amely első lépésként a kategóriák szerint rakja sorba az elemeket, majd utána a megjelenés éve szerint fordítva sorolja fel! A lekérdezés csak a film címét, kategóriáját és megjelenési évét adja vissza.

1. db.movies.find( {} , { title: 1, category: 1, releaseYear: 1 }).sort( { category: 1, releaseYear: -1 } )

VII. Kérdezd le az ACTION kategóriából a legutóbb készült filmet (szigorúan a query-nek kell megkeresnie, manuálisan kinézni a DB-ből nem ér)!

1. db.movies.find( { category: "ACTION" }).sort( { releaseYear: -1 } ).limit(1)

VIII. Kérdezd le az adatbázisból a két legrégebben készült film címét és gyártási évét!

1. db.movies.find( {}, { title: 1, releaseYear: 1 } ).sort( {releaseYear: 1} ).limit(2)

IX. Kérdezd le a ROMANTIC kategóriából a második legfrissebben megjelent film nevét és megjelenési évét!

1. db.movies.find( {category: "ROMANTIC"}, { title: 1, releaseYear: -1 } ).skip(1).limit(1)

load('E:\\Google Drive\\Junior Fullstack API fejlesztő - Training360\\Feladatok\\04. hét\\str2-fullstack-sajat-munka\\mongo-feladat-03\\paging.js')
