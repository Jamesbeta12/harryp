const URL = "https://hp-api.onrender.com/api/characters";
const generateApi = document.getElementById("btn-generate");
const imgcard = document.getElementById("img-card");

generateApi.addEventListener("click",getApi);


function getApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        Username.textContent = data [0].name;
        imgcard.src = data[0].image;
        Userage.textContent = ""+ (2022 - (data[0].yearOfBirth));
        Usergender.textContent = data[0].gender;
        Userspecies.textContent = data[0].species;
    })
}

