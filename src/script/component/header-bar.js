class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            :host {
                display: block;
                color: white;
                text-align: center;
                padding: 10px;
                background: #2d2327;
            }

            h1 > span {
                height: 40px;
                padding: 5px;
                background-color: #a9f999;
                color: #2d2327;
                border-radius: 5px;
            }

            </style>
            <h1>AniJikan<span>Moe</span></h1>
            `;
    }
    }

customElements.define('header-bar', HeaderBar);