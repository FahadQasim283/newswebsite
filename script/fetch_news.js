const API_KEY = "906664a289d446fd961d2beb72598c90";

export async function fetchNewsByCategory(category) {
  const url = `https://newsapi.org/v2/everything?q=${category.toLowerCase()}&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "ok") {
      return data.articles;
    } else {
      console.error("Error fetching news by category:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching news by category:", error);
    return [];
  }
}

export async function fetchNewsByChannel(channel) {
  const source = newsChannelMap[channel];
  const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "ok") {
      return data.articles;
    } else {
      console.error("Error fetching news by channel:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching news by channel:", error);
    return [];
  }
}

export async function fetchGeneralNews() {
  const url = `https://newsapi.org/v2/everything?q=general&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "ok") {
      return data.articles;
    } else {
      console.error("Error fetching general news:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching general news:", error);
    return [];
  }
}

