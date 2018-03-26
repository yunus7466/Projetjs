var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)


function ajouter_recherche()
{
    var saisie = document.getElementById("zone_saisie").value;
    var i = recherches.indexOf(saisie);

    //si la recherche existe deja on sort de la fonction
    if (i != -1) return;

    //sinon on reste ajoute la saisie dans le tableau
    recherches.push(saisie);

    //on cree le html necessaire pour ajouter la recherche dans les recherche stockes
    var y = '<p class="titre-recherche" ><label onclick="selectionner_recherche(this)">'
        + saisie +'</label><img src="croix30.jpg" class="icone-croix"onclick="supprimer_recherche(this)"/> </p>'

    //on ajoute le html
    $("#recherches-stockees").prepend(y);      
    
    //on ajoute les recherches dans un cookies qui expire dans 1000 jours
    $.cookie("recherches", JSON.stringify(recherches), {expires : 1000});
    

}

function supprimer_recherche(e)
{
    //on efface le html de la recherche
    $(e).parent().remove();
    var i = recherches.indexOf(e);

    //si la recherche n'existe pas on sort de la fonction 
    if (i != -1) return;

    //on efface la recherche du tableau de recherche
    recherches.splice(i,1);

    //on ajoute les recherches (sans la recherche qu'on a suupprimés) dans un cookies qui expires dans 1000 jours 
    $.cookie("recherches", JSON.stringify(recherches), {expires : 1000});
}


function selectionner_recherche(e)
{

    var x = e.innerHTML;
    
    //on ajoute dans le input la valeur e.innerHTML
    $("#zone_saisie").val(x);
    
    //la var globale recherche_courante prend la valeur de e.innerHTML
    recherche_courante = x;
}


function init()
{
   
   recherches = JSON.parse($.cookie("recherche"));

   if($.cookie("recherche")) {

        for (int i = 0; i < recherches.length() ; i++){

        }

   }

   
   

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
