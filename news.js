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
  document.getElementById('resultats').innerHTML ="";

  document.getElementById('wait').setAttribute("display", "block");
  
  ajax_get_request(maj_resultats,"search.php?data=",true);

        $.ajax({
            method: "GET",
            url: "/search.php",
            processData: false,
            contentType: false,
            data: $('#zone_saisie').value
        }).maj_resultats(res);
}


function maj_resultats(res)
{
           document.getElementById('wait').setAttribute("display", "none");
            res.forEach(function(results, index) {
                console.log(results);
                // tu regardes ce que ça t'affiche dans la console et tu crées tes paragraphes <p> en fonction :)))
                // blablabla url date titre
            });
}


function sauver_nouvelle(e)
{

}


function supprimer_nouvelle(e)
{

}
