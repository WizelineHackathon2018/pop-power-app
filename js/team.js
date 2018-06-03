const postQuestion = (e)=>{
    e.preventDefault();
    var inputQuestion = $("#question");
    $("#team-questions").append(`<a href="#!" class="collection-item">${inputQuestion.val()}</a>`)
    inputQuestion.val("");

}
$("#question-form").on("submit",postQuestion);