const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})

const URL = "https://api.unsplash.com/photos/random?count=6&client_id=Z4VtZg5imv416TqNew-jUC7wGSEMVvWlWojNat291VQ"; // getting 5 images

fetch(URL)
    .then(function (response) {
        if (response.ok)
            return response.json()
        else
            return Promise.reject("Failed!")
    })

    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            document.getElementsByClassName("grid-item")[i].src = data[i].urls.regular;;
        }
     })
    .catch(function (err) {
        console.log("Something went wrong: " + err)
    })


    //$("#image").attr("src", "https://source.unsplash.com/random?sig=" + Math.random())