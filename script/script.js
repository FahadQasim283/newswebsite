import { fetchNewsByCategory, fetchNewsByChannel, fetchGeneralNews } from "./fetch_news.js";

const newsChannelMap = {
  Time: "time",
  "USA Today": "usa-today",
  "Vice News": "vice-news",
  Wired: "wired"
};

const categories = ["General", "Fashion", "Technology", "Sports", "Health", "Science", "Politics", "Environment", "Education", "Lifestyle"];

let currentCategory = categories[0];
let currentChannel = Object.keys(newsChannelMap)[0];

// Function to display news articles in the grid
function displayNews(articles) {
  const newsGrid = document.getElementById("newsGrid");
  if (!newsGrid) return; // Check if newsGrid exists

  newsGrid.innerHTML = "";

  articles.forEach(article => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";
    newsItem.innerHTML = `
      <img src="${article.urlToImage}" alt="${article.title}">
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a href="news_details.html?news=${encodeURIComponent(JSON.stringify(article))}">Read More</a>
    `;
    newsGrid.appendChild(newsItem);
  });
}

// Function to handle category selection
function handleCategorySelection(category) {
  currentCategory = category;
  fetchNewsByCategory(category).then(displayNews);
}

// Function to handle channel selection
function handleChannelSelection(channel) {
  currentChannel = channel;
  fetchNewsByChannel(channel).then(displayNews);
}

// Initialize the page
function init() {
  // Set up category buttons
  const categoryButtons = document.getElementById("categoryButtons");
  categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", () => handleCategorySelection(category));
    categoryButtons.appendChild(button);
  });

  // Set up channel buttons
  const channelButtons = document.getElementById("channelButtons");
  Object.keys(newsChannelMap).forEach(channel => {
    const button = document.createElement("button");
    button.textContent = channel;
    button.addEventListener("click", () => handleChannelSelection(channel));
    channelButtons.appendChild(button);
  });

  // Fetch initial news
  fetchNewsByCategory(currentCategory).then(displayNews);
}

// Initialize the page when loaded
document.addEventListener("DOMContentLoaded", init);
