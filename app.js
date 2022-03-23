const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})

const URL = "https://api.unsplash.com/photos/random?count=5&client_id=Z4VtZg5imv416TqNew-jUC7wGSEMVvWlWojNat291VQ"; // getting 5 images

fetch(URL)
    .then(function (response) {
        if (response.ok)
            return response.json()
        else
            return Promise.reject("Failed!")
    })

    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].urls.regular);
        }
        
        /* const imgSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector("body > img").src = imgSrc;
        return */
    })
    .catch(function (err) {
        console.log("Something went wrong: " + err)
    })


    //$("#image").attr("src", "https://source.unsplash.com/random?sig=" + Math.random())