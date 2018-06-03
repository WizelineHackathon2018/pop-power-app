const postQuestion = (e) => {
    e.preventDefault();
    var inputQuestion = $("#question");
    $("#team-questions").append(`<a href="#!" class="collection-item"><span> Sophia Martínez </span> ${inputQuestion.val()}</a>`)
    inputQuestion.val("");

}
$("#question-form").on("submit", postQuestion);
$("document").ready(() => {
    M.textareaAutoResize($('#team-questions'));
});

// guardado de preguntas en firebase
var config = {
    apiKey: "AIzaSyD0ivCYKevDU_XWwn804Xl_yvBE1CRDhek",
    authDomain: "popdb-77637.firebaseapp.com",
    databaseURL: "https://popdb-77637.firebaseio.com",
    projectId: "popdb-77637",
    storageBucket: "popdb-77637.appspot.com",
    messagingSenderId: "747557759049"
};
firebase.initializeApp(config);
var firebaseIdeasRef = firebase.database().ref().child('ideas'); //sirve para snapshot
// se ejecuta primero la API de farebase poniendo en este orden
// las bibliotecas externas pueden ir mas arriba en el HTML

var btnAdd = document.getElementById('submit-button');

btnAdd.addEventListener('click', function() {
    var inputIdeas = document.getElementById('question');
    var idea = inputIdeas.value;
    // addIdea(idea); ya no quiero que se agregue manualmente
    document.getElementById('question').value = '';
    // push es para agregar al div de ideas
    // set reescribiendo el valor que deberia de estan en input
    firebaseIdeasRef.push().set(idea);
});


// Retrieve new posts as they are added to our database
firebaseIdeasRef.on("child_added", function(snapshot) {
    var idea = snapshot.val();
    addIdea(idea, snapshot.key);
});

firebaseIdeasRef.on("child_removed", function(snapshot) {
    document.getElementById(snapshot.key).remove();
});

// Sirve para generar un id automatico con la funcion firebaseIdeasRef
function addIdea(idea, id) {
    var newIdeaElement = document.createElement('p');
    newIdeaElement.textContent = idea;
    newIdeaElement.id = id;
    document.getElementById('team-questions').appendChild(newIdeaElement);

    newIdeaElement.addEventListener('click', function() {
        let ideaRef = firebaseIdeasRef.child(this.id);
        ideaRef.remove();
        // this.remove();
    })

}
