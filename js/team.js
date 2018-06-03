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
