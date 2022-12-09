const baseUrl = 'https://api.jikan.moe/v4/';

class AnimeSource {

    static searchAnime(keyword) {
        return fetch(`${baseUrl}anime?q=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.data) {
                    console.log(responseJson.data);
                    return Promise.resolve(responseJson.data);
                } else {
                    return Promise.reject(`<h2 style="margin: 20px;">${keyword} is not found<h2>`);
                }
            }
        );
}
}

export default AnimeSource;