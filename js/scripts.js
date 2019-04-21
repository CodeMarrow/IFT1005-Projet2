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

  $('#form1').validate({ // initialize the plugin
    rules: {
        prenom: {
            required: true,
            
        },
        nom: {
            required: true,
        }
    },
    Messages: {
      prenom: "Veuillez entrer votre prénom",
      nom: "Veuillez entrer votre nom"
    }
    submitHandler: function (form) { // for demo
        alert('valid form submitted'); // for demo
        return false; // for demo
    }
  });
  

