// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    updateArticles();
    // function4()...
    // etc.
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  document.title = data.documentTitle;
};

  /**
   * Updating the articles
   * ** Putting content from the JSON file
   */
  var updateArticles = function () {

    Array.from($("article h1")).forEach(function (titre, i) {
      titre.innerHTML = data.articles[i].title;
    });
    Array.from($("article h3")).forEach(function (sousTitre, i) {
      sousTitre.innerHTML = data.articles[i].subtitle;
    });
    Array.from($("article p")).forEach(function (texte, i) {
      texte.innerHTML = data.articles[i].content;
    });

  };
  
  /**
   * HTML creation based on the number of recipes present in the JSON file (data).
   */
  var createRecipes = function () {
    var cards = "";
    for (var i = 0; i < data.recipes.length; i++) {
      cards +=
        '<div><div class="card"><img><div><h5></h5><p></p></div></div></div>';
    }
    $("#recettes > div > div").append(cards);
  };
  
  /**
   * Updating the recipes
   * ** Adding classes
   * ** Putting content from the JSON file and the photos array in.
   */
  var updateRecipes = function () {
    $("#recettes > div > div > div").addClass("col-6 col-md-4 col-lg-3");
    $(".card img").addClass("card-img-top");
    $(".card div").addClass("card-body");
    $(".card h5").addClass("card-title");
    $(".card p").addClass("card-text");
  
    Array.from($("#recettes .card img")).forEach(function (image, i) {
      //if there's no photos in the JSON
      if (data.recipes[i].imgUrl == "") {
        image.src = recettesPhotos[i][0];
      } else {
        image.src = data.recipes[i].imgUrl;
      }
      image.alt = data.recipes[i].description;
      if (data.recipes[i].imgUrl == "") {
        image.title = recettesPhotos[i][1];
      }
    });
    Array.from($(".card-title")).forEach(function (description, i) {
      description.innerHTML = data.recipes[i].description;
    });
    Array.from($("#recettes .card p")).forEach(function (prix, i) {
      prix.innerHTML = data.recipes[i].price;
    });
  };
  
  /* Shake the incorrect input in form to attract attention to it */
  var shakeIncorrectInput = function () {
    $(".btn").on('click', function () {
      if ($("#name").val() == '') {
        $("#name").addClass("animated shake")
      }
      if ($("#tel").val() == '') {
        $("#tel").addClass("animated shake")
      }
      if ($("#ville").val() == '') {
        $("#ville").addClass("animated shake")
      }
      if ($("#codPos").val() == '') {
        $("#codPos").addClass("animated shake")
      }
      if ($("#adress").val() == '') {
        $("#adress").addClass("animated shake")
      }
      if ($("#message").val() == '') {
        $("#message").addClass("animated shake")
      }
      $("input[required]").on('animationend', handleAnimationEnd);
    });
  };
  
  var handleAnimationEnd = function () {
    $("input[required]").removeClass("animated shake");
    $("input[required]").off('animationend', handleAnimationEnd);
  };
  
  var showRequiredText = function () {
    $(".btn").on('click', function () {
      if ($("#name").val() == '') {
        $("#nameerror").html("S'il vous plait, entrez votre nom.");
      } else {
        $("#nameerror").html("");
      }
      if ($("#tel").val() == '') {
        $("#telerror").html("S'il vous plait, entrez votre numéro de téléphone.");
      } else {
        $("#telerror").html("");
      }
      if ($("#ville").val() == '') {
        $("#villeerror").html("S'il vous plait, entrez votre ville.");
      } else {
        $("#villeerror").html("");
      }
      if ($("#codPos").val() == '') {
        $("#codPoserror").html("S'il vous plait, entrez votre code postal.");
      } else {
        $("#codPoserror").html("");
      }
      if ($("#adress").val() == '') {
        $("#adresserror").html("S'il vous plait, entrez votre adresse.");
      } else {
        $("#adresserror").html("");
      }
      if ($("#message").val() == '') {
        $("#messerror").html("Dites moi pourquoi vous souhaitez me contacter.");
      } else {
        $("#messerror").html("");
      }
    });
  };
  
  /*Sortir les informations dans data pour
  les mettre dans les métadonnées de index.html
  (Non fonctionnel)
  var auteur = data.firstName + " " + data.lastName;*/
