import { newsData } from "./fetch_news.js";

let favorites = [];

// Load favorite news
function loadFavorites() {
  fetch("get_fav_news.php")
    .then((response) => response.json())
    .then((favoritesData) => {
      favorites = favoritesData;
      displayFavorites();
    });
}

// Display favorite news articles
function displayFavorites() {
  const favNewsGrid = document.getElementById("favNewsGrid");
  favNewsGrid.innerHTML = "";

  favorites.forEach(news => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";
    newsItem.innerHTML = `
      <img src="${news.urlToImage}" alt="${news.title}">
      <h3>${news.title}</h3>
      <p>${news.description}</p>
      <a href="news_details.html?news=${encodeURIComponent(JSON.stringify(news))}">Read More</a>
      <a href="remove_fav_news.php?id=${news.id}">Remove From Favorites</a>
    `;
    favNewsGrid.appendChild(newsItem);
  });
}

// Call the function to load favorites
loadFavorites();
