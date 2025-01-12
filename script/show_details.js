const urlParams = new URLSearchParams(window.location.search);
const newsData = urlParams.get("news");
const news = JSON.parse(newsData);

if (news) {
    const body = document.body;
    body.style.backgroundImage = `url(${news.urlToImage})`;
    body.style.backgroundOpacity = .5;

    document.getElementById("news-title-heading").textContent = news.title;
    document.getElementById("news-poster").src = news.urlToImage;
    document.getElementById("news-title").textContent = news.title;
    document.getElementById("news-rating").textContent = news.rating || "N/A"; // Assuming rating is not provided
    document.getElementById("news-category").textContent = news.source.name;
    document.getElementById("news-published-date").textContent = new Date(news.publishedAt).toLocaleDateString();
    document.getElementById("news-author").textContent = news.author || "Unknown";
    document.getElementById("news-summary").textContent = news.content;

    document.getElementById("rem-fav-btn").href = `remove_fav_news.php?id=${news.id}`; // Assuming news.id is available for favorites
} else {
    console.log("News ID is missing from the URL.");
}
