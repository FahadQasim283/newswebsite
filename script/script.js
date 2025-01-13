import { fetchNewsByCategory, fetchNewsByChannel, fetchGeneralNews } from "./fetch_news.js";

export const newsChannelMap = {
  Time: "time",
  "USA Today": "usa-today",
  "Vice News": "vice-news",
  Wired: "wired"
};

const categories = ["General", "Fashion", "Technology", "Sports", "Health", "Science", "Politics", "Environment", "Education", "Lifestyle"];

let currentCategory = categories[0];
let currentChannel = Object.keys(newsChannelMap)[0];
let currentHeadlineIndex = 0;
let headlines = [];

// Function to display news articles in the grid
function displayNews(articles) {
  const newsGrid = document.getElementById("newsGrid");
  if (!newsGrid) return;

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

// Function to display headlines in the banner
function displayHeadlines(articles) {
  const headlineContainer = document.getElementById("headlineContainer");
  if (!headlineContainer) return;

  headlines = articles;
  currentHeadlineIndex = 0;
  showCurrentHeadline();
}

function showCurrentHeadline() {
  const headlineContainer = document.getElementById("headlineContainer");
  if (!headlineContainer || !headlines.length) return;

  const article = headlines[currentHeadlineIndex];
  headlineContainer.innerHTML = `
    <h2>${article.title}</h2>
    <p>${article.description}</p>
  `;
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

  // Set up channel dropdown
  const channelSelect = document.getElementById("channelSelect");
  Object.keys(newsChannelMap).forEach(channel => {
    const option = document.createElement("option");
    option.value = channel;
    option.textContent = channel;
    channelSelect.appendChild(option);
  });
  channelSelect.addEventListener("change", (e) => {
    handleChannelSelection(e.target.value);
  });

  // Set up banner navigation
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  prevBtn.addEventListener("click", () => {
    currentHeadlineIndex = (currentHeadlineIndex - 1 + headlines.length) % headlines.length;
    showCurrentHeadline();
  });
  nextBtn.addEventListener("click", () => {
    currentHeadlineIndex = (currentHeadlineIndex + 1) % headlines.length;
    showCurrentHeadline();
  });

  // Fetch initial news and headlines
  fetchNewsByCategory(currentCategory).then(displayNews);
  fetchGeneralNews().then(displayHeadlines);
}

// Initialize the page when loaded
document.addEventListener("DOMContentLoaded", init);
