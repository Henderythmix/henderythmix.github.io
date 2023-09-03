const urlParams = new URLSearchParams(window.location.search);
const portal = document.getElementById("portal");

function loadpage(page) {
    if (page == "article") {
        pageToLoad = new Request(`articles/${urlParams.get("date")}.html`);
    } else {
        pageToLoad = new Request(`${page}.html`);
    }

    fetch(pageToLoad).then((res) => {
        if (res.status === 200) {
            return res.text();
        }
    }).then((text) => {
        portal.innerHTML = text;
    });
}

window.onload = function() {
    if (urlParams.get("page") == null) {
        loadpage("home");
        return;
    }
    loadpage(urlParams.get("page"));
}

document.getElementById("quick-search-button").addEventListener("click", () => {
    document.getElementById("quick-search").showModal();
})