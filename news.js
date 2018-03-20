var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{
    var x = document.getElementById("zone_saisie");
    var i = recherches.indexOf(x);
    if ( i == -1){
        recherches.push(x);
    } else {

    }
}

function supprimer_recherche(e)
{


}


function selectionner_recherche(e)
{

}


function init()
{

}


function rechercher_nouvelles()
{
  var result = document.getElementById('resultats');
  result  = "";

  var wai = document.getElementById('wait');
  wai.removeAttribute("display");
  wai.setAttribute("block","none");
  
  ajax_get_request(maj_resultats,"search.php?data=",true);
}


function maj_resultats(res)
{


}


function sauver_nouvelle(e)
{

}


function supprimer_nouvelle(e)
{

}
