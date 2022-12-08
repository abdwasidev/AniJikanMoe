import './anime-item.js';

class AnimeList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set animes(animes) {
        this._animes = animes;
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
            margin: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        anime-list > * {
            justify-content: stretch;
        }
        </style>
        `;
        this._animes.forEach(anime => {
            const AnimeElement = document.createElement('anime-item');
            AnimeElement.anime = anime;
            this.shadowDOM .appendChild(AnimeElement);
        });
    }
}

customElements.define('anime-list', AnimeList);