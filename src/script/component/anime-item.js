class AnimeItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    
    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = '';
        this.shadowDOM.innerHTML += `<h2>${message}</h2>`;
    }

    render() {
            this.shadowDOM.innerHTML = `
            <style>
            :host {
                flex: 1 1 25%;
            
                border: 3px solid black;
                border-radius: 10px;
                padding: 20px;
                background-color: white;
                text-align: center;
            }
            
            h1 {
                text-align: start;
                font-size: 28px;
                font-weight: bold;
            }
            
            img {
                max-width: 100%;
                border-radius: 20px;
            }
            
            p {
                text-align: justify;
            }
            
            table {
                text-align: start;
            }
            
            td:first-child {
                font-weight: bold;
            }

            </style>
                <h1>${this._anime.title}</h1>
                <img src="${this._anime.image_url}">
                <p>${this._anime.synopsis}</p>
                <table>
                    <tr>
                        <td>Airing</td>
                        <td><b>: </b>${this._anime.airing}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><b>: </b>${this._anime.type}</td>
                    </tr>
                    <tr>
                        <td>Episode</td>
                        <td><b>: </b>${this._anime.episode}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td><b>: </b>${this._anime.rated}</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td><b>: </b>${this._anime.score}</td>
                    </tr>
                    <tr>
                        <td>MAL</td>
                        <td><b>: </b><a href="${this._anime.url}">MyAnimeList</a></td>
                    </tr>
                </table>
            `;
    }
}

customElements.define('anime-item', AnimeItem);