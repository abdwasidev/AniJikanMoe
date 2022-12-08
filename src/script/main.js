import './component/anime-list.js';
import './component/search-bar.js';
import AnimeSource from './anime-source.js';

const main = () => {
	const searchInputElement = document.querySelector('search-bar');
	const animeListElement = document.querySelector('anime-list');

	const onButtonSearchClicked = async () => {
        try {
            const result = await AnimeSource.searchAnime(searchInputElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        animeListElement.animes = results;
    };

    const fallbackResult = message => {
        animeListElement.renderError(message);
    };
    searchInputElement.clickEvent = onButtonSearchClicked;
};

export default main;