$(document).ready(function () {
    $('form').on('submit', function(e) {
        e.preventDefault();
    }) 
    
    $('h3').click(function () {
        if ($(this).hasClass("hide"))
            {
                $('.listaHoje').slideUp(300);
                $(this).removeClass("hide")
                }
        else {
            $('.listaHoje').slideDown(300); 
            $(this).addClass("hide")
            }
    })

    $('.botaoAdd').click(function () {
        const inputItem = document.querySelector('.itemTxt');
        if (inputItem.value == '') {
            inputItem.focus();
            $('.itemTxt').css("outline", "2px solid red");
            alert('Preencha o campo!');
        }
        else {
            $('.itemTxt').css("outline", "");
            $('.botaoHoje').css("display", "inline");
            let addItem = 
                `<li id="itemLi">
                    ${inputItem.value}<input type="button" id="botaoDel">
                </li>`
            $('.listaHoje').prepend(addItem);
            $('.itemTxt').val('');
            $('#botaoHoje').removeClass("checked");
            $('h3').removeClass("checked");
            $('.listaHoje').slideDown(300); 
            $(this).addClass("hide");
            $('#botaoHoje').text("");
            
            $('#itemLi').click(function (event) {
                if ($(this).hasClass("checked")) {
                    $(this).removeClass("checked");
                    $(this).find('#botaoDel').removeClass("checked");
                } else {
                    $(this).addClass("checked");
                    $(this).find('#botaoDel').addClass("checked");
                }
                
                if ($("li").length == $("#itemLi.checked").length) {
                    $('#botaoHoje').addClass("checked");
                    $('h3').addClass("checked");
                    $('#botaoHoje').text("⭐").hide().show(300);
                } else {
                    $('#botaoHoje').removeClass("checked");
                    $('h3').removeClass("checked");
                    $('#botaoHoje').text("");
                }
            })
        }
        
    })
})