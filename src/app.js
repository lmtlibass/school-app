
var donness = [
    {
        prenom : "libs",
        nom : "thiam",
        photo : "/img/ex.png",
        bio : "ceci est mon histoire",
        niveau : "niveau5"

    },
    {
        prenom : "mouha",
        nom : "thiare",
        photo : "/img/ex.png",
        bio : "ceci est mon histoire en 2000",
        niveau : "niveau2"

    }
]

const form = document.getElementById("Myform")
const nom = document.querySelector("input#nom")
const prenom = document.querySelector("input#prenom")
const photo = document.querySelector("input#photo")
const biographie = document.querySelector("input#bio")
const afficheApprenant = document.querySelector("affiche-apprenant")

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(photo.value)
})

afficheApprenant.insertAdjacentElement(
    "afterend",
    `<div class="card" style="width: 18rem;">
    <img src="/img/ex.png" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="card-icone d-flex flex-row  justify-content-between">
    <a href="#" class="btn btn-outline-success"><i class="bi bi-pen"></i></a>
    <a href="#" class="btn btn-outline-success"><i class="bi bi-x-circle"></i></a>
    </div>
    </div>
</div>`
)
