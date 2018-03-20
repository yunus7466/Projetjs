var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{
    var saisie = document.getElementById("zone_saisie").value;
    var i = recherches.indexOf(saisie);

    if (i != -1) return;

    recherches.push(saisie);

    var y = '<p class="titre-recherche" ><label onclick="selectionner_recherche(this)">'
        + saisie +'</label><img src="croix30.jpg" class="icone-croix"onclick="supprimer_recherche(this)"/> </p>'

    $("#recherches-stockees").prepend(y);        
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
