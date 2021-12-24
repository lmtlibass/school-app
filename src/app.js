

    const API_URL = "https://bhuprmvnemqneqrwprpn.supabase.co/rest/v1/school_app"
    const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTMwNTgxMiwiZXhwIjoxOTU0ODgxODEyfQ.qju7skRPAGkGzrag_7KX25VBqwdFhCEs94dLFfGEJcw" 

var donnes = []

const form = document.getElementById("Myform")
const nom = document.querySelector("input#nom")
const prenom = document.querySelector("input#prenom")
const biographie = document.querySelector("textarea#bio")
const niveau = document.querySelector("select#niveau")
const sauvegarder = document.getElementById("sauvegarder")
const afficheApprenant = document.querySelector(".affiche-apprenant")

biographie.addEventListener('input', (e) => {
    let textBio = document.getElementById("PBio")
    document.querySelector('#longeurText').innerHTML = biographie.value.length
    biographie.maxLength = 130;
    if (biographie.value.length === 130) {
        biographie.style.border = "5px solid red"
        textBio.style.color = "red"
    } else {
        biographie.style.border = "solid black"
        textBio.style.color = "black"
    }
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nouveauapprenants = {
        prenom : prenom.value,
        nom : nom.value,
        bio : biographie.value,
        niveau : niveau.value
    }
    apprenantAffiche(nouveauapprenants.nom, nouveauapprenants.prenom, nouveauapprenants.bio, nouveauapprenants.niveau)
    donnes.push(nouveauapprenants)
   modifierChamp()
   deletecarte()
})


function apprenantAffiche(nom, prenom, bio, niveau){
    afficheApprenant.insertAdjacentHTML(
        "beforeend",
        `<div class="card" style="width: 18rem;">
        <img src="/img/ex.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title"><span>${nom}</span><span>${prenom}</span></h5>
        <p class="card-text">${bio}</p>
        <p class="niveau card-text">${niveau}</p>
        <div class="card-icone d-flex flex-row  justify-content-between">
        <a href="#" class="btn btn-outline-success" id="modifier"><i class="bi bi-pen"></i></a>
        <a href="#" class="btn btn-outline-danger" id="annuler"><i class="bi bi-x-circle"></i></a>
        </div>
        </div>
    </div>`
    )  
}    
function modifierChamp(){
    const modifier = document.getElementById("modifier")
    modifier.addEventListener('click', (e)=>{
        e.preventDefault()
    let nomModifier = document.createElement('input')
    nomModifier.setAttribute("placeholder", "modifier prenom & nom*")
    let baliseh5 = document.querySelector(".card-title")
    let balisep = document.querySelector(".card-text")
    let bioModifier = document.createElement('textarea')
    

    let carteModifier = document.querySelector(".card-body")

    carteModifier.replaceChild(nomModifier, baliseh5)
    carteModifier.replaceChild(bioModifier, balisep)
        let carte = document.querySelector(".card")
    
    modifier.addEventListener('click', ()=>{
        let nouveauNom = nomModifier.value
        let nouveauBio = bioModifier.value   
        apprenantAffiche(nouveauNom, "", nouveauBio)
        carte.remove()
    })   
})
    deletecarte()   
}
        //suppression carte
        function deletecarte(){
            const annule = document.getElementById("annuler")
            annule.addEventListener('click', ()=>{
                let carte = document.querySelector(".card")
                carte.remove()
            })
        }
        
    //modification et suppression de la nouvelle carte 
 

    sauvegarder.addEventListener('click', (e)=>{
        e.preventDefault()
        fetch(API_URL, {
                method: "POST",
                headers: {
                    apiKey: API_KEY,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(donnes),
            })
            return donnes = []
        })


   /*  (function showData(){
        let { data: school_app, error } = await supabase
            .from('school_app')
            .select('*')
            
    })() */


    fetch(API_URL, {
        headers: {
          apikey: API_KEY,
        },
      })
        .then((response) => response.json(),)
        .then ((donnes) => {
          donnes.forEach((donnee) => showListe(donnee.nom, donnee.prenom, donnee.bio, donnee.niveau))
        })
  
  function showListe(nom, prenom, bio, niveau){
      const listeApprenant = document.querySelector(".Liste")   
          listeApprenant.insertAdjacentHTML(
              "beforeend", 
              `<div class="card" style="width: 18rem;">
              <img src="/img/ex.png" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title"><span>${nom}</span><span>${prenom}</span></h5>
              <p class="card-text">${bio}</p>
              <p class="niveau card-text">${niveau}</p>
              <div class="card-icone d-flex flex-row  justify-content-between">
              <a href="#" class="btn btn-outline-success" id="modifier"><i class="bi bi-pen"></i></a>
              <a href="#" class="btn btn-outline-danger" id="annuler"><i class="bi bi-x-circle"></i></a>
              </div>
              </div>
          </div>`
          )   
      }  
  