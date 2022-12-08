const baseUrl = 'https://api.jikan.moe/v3/';

class AnimeSource {

    static searchAnime(keyword) {
        return fetch(`${baseUrl}search/anime?q=${keyword}&page=1&limit=3`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    console.log(responseJson.results);
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`<h2 style="margin: 20px;">${keyword} is not found<h2>`);
                }
            }
        );
}
}

export default AnimeSource;