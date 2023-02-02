const form = document.querySelector("#link-form");
const linkInput = document.querySelector("#link");

const cardBody = document.querySelectorAll(".card-body")[1];




addEventListener("submit", getUrl);

function showAlert(type, message) {

    while (cardBody.firstChild) {
        cardBody.removeChild(cardBody.firstChild);
    }

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    cardBody.appendChild(alert);

}

function getUrl(e) {
    const newUrl = linkInput.value.trim();
    if (newUrl === "") {
        showAlert("warning", "PLEASE ENTER INPUT");
    }
    else if (/^(https?:\/\/[\d\D]{0,})$/.test(newUrl)) {
        console.log(newUrl);
        shortenerFunc(newUrl);
        showAlert("success", newUrl);
    }
    else {
        showAlert("danger", "!!! PLEASE ENTER HTTP OR HTTPS URL !!!");
    }

    e.preventDefault(); //sayfayi refresh etmenin onune gecer
}

function shortenerFunc(url) {
    fetch("https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url))
        .then(response => response.text())
        .then(shortUrl => {
            console.log(shortUrl)
            showAlert("success", " Short Link ----> " + shortUrl);
        })
        .catch(error => console.error(error));
}

function letsgoVisibiltyfalse() {
    document.getElementById("letsgogif").style.visibility = "hidden";
    document.getElementById("letsgogif2").style.visibility = "hidden";
}
function letsgoVisibiltytrue() {
    document.getElementById("letsgogif").style.visibility = "visible";
    document.getElementById("letsgogif2").style.visibility = "visible";
}