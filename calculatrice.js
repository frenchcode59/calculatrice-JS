//Dom 
//je recupere les Elements du DOM
const touches = [...document.querySelectorAll(".bouton")];
const listeKeycode = touches.map(touche =>touche.dataset.key);
const ecran = document.querySelector(".ecran");
//il faut que je cree le premier evenement
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
});
//je cree le deuxieme evenement au click 
document.addEventListener("click" ,(e)=>{
    const valeur = e.target.dataset.key;
    calculer (valeur)
    });
    //je cree la fonction calculer 
    const calculer = (valeur)=>{
  if (listeKeycode.includes(valeur)){
    switch(valeur){
      case "8":                                        //dans le cas ou la touche C est presser il est censer effacer 
            ecran.textContent ="";
            break;
            case "13":                                  //dans le cas ou l'on appuie sur = il est censer afficher le resultat 
                const calcul = eval (ecran.textContent);
                ecran.textContent = calcul;
                break;
                default:
                    const indexKeycode = listeKeycode.indexOf(valeur);
                    const touche = touches[indexKeycode];
                    ecran.textContent += touche.innerHTML;


    }
  }    
    }