0. Használjuk a videoStore adatbázist!
   use videoStore

1. Hozzunk létre benne egy új „cinemas” listát!

db.createCollection("cinemas", {validator: {$jsonSchema: { properties: {name: { bsonType: "string", pattern: "[A-Za-z0-9 ]"},movies: { bsonType: "array"}, address: {bsonType: "object",
properties: { city: { bsonType: "string"}}} },
required: [ "name", "movies", "address"]}}})

I. Ha még nem tettük meg, a cinema listánk rendelkezzen 3 cinema dokumentummal, és minden cinema dokumentum „játsszon” legalább 3 különböző filmet => adjunk hozzá legalább 3 cinema dokumentum egyes movies listájához 3 db "\_id" értéket a movies listából!

db.cinemas.insertMany([
{id: NumberInt(1),
name: "Tarara",
movies: [
ObjectId("626cb6514f1f363bd89b38f1"),
ObjectId("626cb6514f1f363bd89b38f2"),
ObjectId("626cb6514f1f363bd89b38f3")
],
address: {city: "Kuruttya"}},
{\_id: NumberInt(2),
name: "Terere",
movies: [
ObjectId("626cb6514f1f363bd89b38ee"),
ObjectId("626cb6514f1f363bd89b38ef"),
ObjectId("626cb6514f1f363bd89b38f0")
],
address: {city: "Pornóapáti"}},
{\_id: NumberInt(3),
name: "Tirir",
movies: [
ObjectId("626cb6514f1f363bd89b38f4"),
ObjectId("626cb6514f1f363bd89b38f5"),
ObjectId("626cb6514f1f363bd89b38f6"),
ObjectId("626cb6514f1f363bd89b38f7")
],
address: {city: "Szentkirályszabadja"}}
])

II. Kérdezzük le, hogy az első helyen lévő mozink milyen filmeket játszik, jelenjen meg minden film tulajdonsága!

db.cinemas.aggregate([
{
$lookup: {
from: "movies",
localField: "movies",
foreignField: "_id",
as: "moviesShowingNow"
}
},
{ $limit: 1 }
])

III. Ismételjük meg a fenti lekérdezést úgy, hogy csak a játszott film listája, adatai jelenjenek meg (tipp: „project” operator)!

db.cinemas.aggregate([
{
$lookup: {
from: "movies",
localField: "movies",
foreignField: "_id",
as: "moviesShowingNow"
}
},
{ $project: { "_id": 0, "Titles": "$moviesShowingNow.title", "Years of Release": "$moviesShowingNow.releaseYear", "Categories": "$moviesShowingNow.category" }}
])

IV. Ha még nem tettük meg, készítsünk el a videoStore-ban egy directors listát (a 2. feladat leírása alapján), és minden rendezőhöz rendeljünk 2-3 db filmet a „movies” mezőjükhöz.

db.cinemas.aggregate([
{
$lookup: {
from: "movies",
localField: "movies",
foreignField: "_id",
as: "movies"
}
},
{$project: { _id: 0, movies: 1 }}
])

V. Kérdezzük le az egyik rendező által rendezett filmek adatait!

db.directors.aggregate([
{
$lookup: {
from: "movies",
localField: "movies",
foreignField: "_id",
as: "moviesDirected"
}
},
{ $match: { name: "Steven Spielberg" }},
{ $project: { _id: 0, moviesDirected: 1 }}
])

VI. Kérdezzük le egy másik rendező filmjeit úgy, hogy csak a rendező neve és a filmek „title”-jei, vagyis címei jelennek meg (tipp: $project operátor)!

db.directors.aggregate([
{
$lookup: {
from: "movies",
localField: "movies",
foreignField: "_id",
as: "moviesTitles"
}
},
{ $match: { name: "James Cameron" }},
{$project: { _id: 0, name: 1, "moviesTitles.title": 1}}
])

VII. Adj pár szavazatot egy-egy filmre ("ratings"), ha még nem tetted meg. Írj egy lekérdezést az aggregáció segítségével, amely visszaadja annak a filmnek a címét, amely a legjobb átlagszavazattal rendelkezik! Két mezőt adjon vissza: "title" és egy új mező: "rateAvg" => pl.: { "title" : "E.T.", "rateAvg" : 4.5 }. Csak aggregációt használj, Cursor metódusok használata nélkül!

db.movies.aggregate([
{ $project: { _id: 0, title: 1, rateAvg: { $avg: "$ratings" } }},
{ $sort: { rateAvg: -1 } },
{ $limit: 1 }
])
