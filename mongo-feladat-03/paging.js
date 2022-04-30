async function pagingMovies() {

	const allOfMovies = await db.movies.find({}).count();

	for (let i = 0; i < allOfMovies; i += 3) {

		const firstMovie = db.movies.find({}, {
			title: 1,
			category: 1
		}).skip(i).limit(1);
		const secondMovie = db.movies.find({}, {
			title: 1,
			category: 1
		}).skip(i + 1).limit(1);
		const thirdMovie = db.movies.find({}, {
			title: 1,
			category: 1
		}).skip(i + 2).limit(1);

		print(firstMovie[0].title, ":", firstMovie[0].category.toLowerCase(), "movie");
		print(secondMovie[0].title, ":", secondMovie[0].category.toLowerCase(), "movie");
		print(thirdMovie[0].title, ":", thirdMovie[0].category.toLowerCase(), "movie");
		print("--page over--")
	}
}

pagingMovies();