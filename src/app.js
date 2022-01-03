
    const API_URL = "https://bhuprmvnemqneqrwprpn.supabase.co/rest/v1/school_app"
    const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTMwNTgxMiwiZXhwIjoxOTU0ODgxODEyfQ.qju7skRPAGkGzrag_7KX25VBqwdFhCEs94dLFfGEJcw" 



        const btn = document.getElementById("ajouter")
        const afficheApprenant = document.querySelector(".affiche-apprenant")
        const sauvegarder = document.getElementById("ajouter")


        let donnees = []
       
        let donnee = donnees [donnees.length - 1]

        btn.addEventListener('click', (e) =>{
            e.preventDefault()
            let nom = document.getElementById("nom")
            let prenom = document.getElementById("prenom")
            let biographie = document.getElementById("bio")
            let niveau = document.getElementById("niveau")
            let competence1 = document.getElementById("competence1")
            let competence2 = document.getElementById("competence2")
            
           
            let newDonnees = {
                nom : nom.value,
                prenom : prenom.value,
                bio: biographie.value,
                niveau : niveau.value,
                competence1 : competence1.value,
                competence2 : competence2.value
            } 
             donnees.push(newDonnees)
             
            
            nom.value = ""
            prenom.value = " "
            biographie.value = " "
            niveau.value = " "
            competence1.value = " "
            competence2.value =" "
            
           
            apprenantAffiche(newDonnees.nom, newDonnees.prenom, newDonnees.bio, newDonnees.niveau)
            
            
        })
        

/**********************Affficher donnees dans les cartes **************************** */

    
       
        function apprenantAffiche(nom, prenom, bio, niveau, id){
           
            // donnees.forEach( (element,id) => {
               
            afficheApprenant.insertAdjacentHTML(
                "beforeend",
                `<div class="card" style="width: 18rem;" id = "${"carte" +""+id}" >
                <img src="/img/ex.png" class="card-img-top" alt="..." >
                <div class="card-body">
                <h5 class="card-title"><span>${nom}</span><span>${prenom}</span></h5>
                <p class="card-text">${bio}</p>
                <p class="niveau card-text">${niveau}</p>
                <div class="card-icone d-flex flex-row  justify-content-between">

                <button href="#" class="btn btn-outline-success modifier" id = "${id}" ><i class="bi bi-pen"></i></button>
                <button href="#" class="btn btn-outline-danger supprimmer" id = "${id}" ><i class="bi bi-x-circle"></i></button>
                </div>
                </div>
            </div>`
            )  
            modifierChamp()
            deletecarte()
        
        }    
       
/**************************Modifier Carte******************************/

function modifierChamp(){
    
    const modifier = document.querySelectorAll(".modifier")
    modifier.forEach((element) =>{

    element.addEventListener('click', ()=>{
        
        let nomModifier = document.createElement('input')
        nomModifier.setAttribute("placeholder", "modifier prenom & nom*")
        let baliseh5 = document.querySelector(".card-title")
        let balisep = document.querySelector(".card-text")
        let bioModifier = document.createElement('textarea')
    

        let carteModifier = document.querySelectorAll(".card-body")
        carteModifier.forEach((carte)=> {
            carte.replaceChild(nomModifier, baliseh5)
            carte.replaceChild(bioModifier, balisep)
        
            
                element.addEventListener('click', ()=>{
                    let nouveauNom = nomModifier.value
                    let nouveauBio = bioModifier.value  
                    carte.replaceChild(baliseh5,nomModifier)
                    carte.replaceChild(balisep, bioModifier) 
                    baliseh5.innerHTML = nouveauNom
                    balisep.innerHTML = nouveauBio
            
                })   

            })
        })
    })
}


/************************Supprimmer Carte********************************** */

function deletecarte(){
    const annule = document.querySelectorAll(".supprimmer")
    annule.forEach((elmt)=>{
        elmt.addEventListener('click', ()=>{
            let carte = document.querySelectorAll(".card")
            carte.forEach((card)=>{
                card.remove()
            })
            
        })
    })   
}

/********************************Sauvegarder dans supabase************************************ */

sauvegarder.addEventListener('click', ()=>{

    fetch(API_URL, {
            method: "POST",
            headers: {
                apiKey: API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donnees),
        })
         return donnees = []
})


/*******************************Afficher les cartes enregistrées********************************************************** */

fetch(API_URL, {
    headers: {
      apikey: API_KEY,
    },
})
    .then((response) => response.json(),)
    .then ((donnes) => {
      donnes.forEach((donnee) => showListe(donnee.id,donnee.nom, donnee.prenom, donnee.bio, donnee.niveau))
      
    })
    
      
    

function showListe(id,nom, prenom, bio, niveau){
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
          <a href="#" class="btn btn-outline-success" id="${id}" onclick = "trt(${id})" >Details<i class="bi bi-eye"></i></a>
          </div>
          </div>
      </div>`
      )   
  }  

  /***************************************************************** */
 
 
  function showdetails(nom, prenom, bio, niveau, competence1, competence2){
    let detail = document.getElementById("detail")
        detail.insertAdjacentHTML(
            "beforeend",
            `<div class="card" style="width: 18rem;">
            <img src="/img/ex.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><span>${nom}</span><span>${prenom}</span></h5>
            <p class="card-text">${bio}</p>
            <p class="niveau card-text">${niveau}</p>
            <p class="niveau card-text">${competence1}</p>
            <p class="niveau card-text">${competence2}</p>
            <div class="card-icone d-flex flex-row  justify-content-between">
            <a href="#" class="btn btn-outline-success" id="${id}">Details<i class="bi bi-eye"></i></a>
            </div>
            </div>
        </div>`
        )  

    }

    function trt(id){
      fetch(`${API_URL}?id=eq.${id}`, {
        headers: {
            "Content-Type": "application/json",
            apiKey: API_KEY,
            Prefer: "return=representation",
        },
    })
        .then((response) => response.json())
        // .then((donnee) => showdetails(donnee.id: donnee.nom, donnee.prenom, donnee.bio, donnee.niveau, donnee.competence1, donnee.competence2));


    }
   