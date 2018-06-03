const postQuestion = (e)=>{
    e.preventDefault();
    var inputQuestion = $("#question");
    $("#team-questions").append(`<a href="#!" class="collection-item"><span> Sophia Martínez </span> ${inputQuestion.val()}</a>`)
    inputQuestion.val("");

}
$("#question-form").on("submit",postQuestion);
$( "document" ).ready(()=>{
    M.textareaAutoResize($('#team-questions'));
});

  // Initialize Firebase
var config = {
apiKey: "AIzaSyAi2rmSnCZoSehOuJNenOMqip-rRFYBXFs",
authDomain: "poppower-8c0ef.firebaseapp.com",
databaseURL: "https://poppower-8c0ef.firebaseio.com",
projectId: "poppower-8c0ef",
storageBucket: "poppower-8c0ef.appspot.com",
messagingSenderId: "901998159862"
};
firebase.initializeApp(config);
const dbRefMembers = firebase.database().ref().child("Members");
dbRefMembers.on('child_added', (snap) => {
    console.log(snap.val());
});