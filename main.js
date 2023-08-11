$(document).ready(function() {
    $("form").on("submit", function(e) {
        var taskDone = false
        const novaTarefa = $("#new-task").val();
        const novoItem = $(`<li style="display: none; cursor: pointer;">`);
        $(`
            <p> ${novaTarefa} </p>
        `).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        e.preventDefault();
        $("#new-task").val("");
        $(novoItem).fadeIn(500);
        $("li").click(function() {
            if (!taskDone) {
                $(novoItem).css("text-decoration", "line-through");
                taskDone = true
            } else {
                $(novoItem).css("text-decoration", "none");
                taskDone = false
            }
            
        })
    })
    
})