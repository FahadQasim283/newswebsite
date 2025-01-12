<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-NEWS</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <nav>
        <div class="logo">E-NEWS</div>
        <div id="fav-news"><a href="fav_news_screen.php">Favourite News</a></div>
    </nav>
    <div class="banner-container">
        <div class="banner" id="newsBanner"></div>
        <button class="banner-btn prev-btn"><</button>
        <button class="banner-btn next-btn">></button>
    </div>

    <div id="categoryButtons" class="category-buttons"></div>

    <main>
        <div id="newsGrid" class="news-grid">
            <!-- News articles will be inserted here -->
        </div>
    </main>

    <!-- News Details Modal -->
    <div id="newsModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="newsDetails">
                <!-- News details will be inserted here -->
            </div>
        </div>
    </div>

    <script type="module" src="script/script.js"></script>
</body>

</html>
