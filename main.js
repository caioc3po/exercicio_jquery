$(document).ready(function() {
    $("form").on("submit", function(e) {
        const novaTarefa = $("#new-task").val();
        const novoItem = $(`<li style="display: none; cursor: pointer;">`);
        $(`
            <p> ${novaTarefa} </p> <i class="fa-solid fa-trash fa-xl"></i>
        `).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        e.preventDefault();
        $("#new-task").val("");
        $(novoItem).fadeIn(500);
        
        $("li").click(function() {
            $(this).addClass("checked");
        })

        $("ul").on("click", ".fa-trash", function() {
            $(this).parent("li").fadeOut(200);
        })
    })
    
})