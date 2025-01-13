import { newsChannelMap } from "./script.js";

const API_KEY = "906664a289d446fd961d2beb72598c90";

export async function fetchNewsByCategory(category) {
  const url = `https://newsapi.org/v2/everything?q=${category.toLowerCase()}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
}

export async function fetchNewsByChannel(channel) {
  const channelId = newsChannelMap[channel];
  const url = `https://newsapi.org/v2/everything?sources=${channelId}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
}

export async function fetchGeneralNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
}
