class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    
    get value() {
        return this.querySelector('#animeSearchInput').value;
    }

    render() {
        this.innerHTML = `
            <style>
            @import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

            search-bar {
                display: block;
                border: 3px solid black;
                border-radius: 10px;
                padding: 20px;
                margin: 20px;
                justify-content: space-around;
                background-color: white;
            }
            </style>
            <div class="card">
                <div class="form-outline">
                    <div class="input-group">
                        <input type="search" class="form-control" id="animeSearchInput" placeholder="Search anime...">
                        <button class="btn btn-outline-success" id="animeSearchButton" type="submit">Search</button>
                    </div>
                </div>
            </div>
            `;
        this.querySelector('#animeSearchButton').addEventListener('click', this._clickEvent);
    }
    }

customElements.define('search-bar', SearchBar);