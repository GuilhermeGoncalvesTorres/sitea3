document.addEventListener("DOMContentLoaded", () => {
    const newsItems = document.querySelectorAll(".news-item");
    
    newsItems.forEach(item => {
        item.addEventListener("click", () => {
            alert("Você clicou em uma notícia! Detalhes virão em breve.");
        });
    });
});
