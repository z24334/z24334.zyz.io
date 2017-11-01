/**
 * Created by lenovo on 2017/10/31.
 */
$(document).ready(function () {

    $.getJSON('/todos', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/todos',
            {name: $('#term').val(),
                info: $('#defined').val()},
            printTerms);
        this.reset();
    });
});

function printTerms(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.name).appendTo('body>dl');

        $('<dd>').text(this.info).appendTo('body>dl');
    });



    $('dt').off('dblclick').dblclick(
        function() {
            $.ajax({
                url: '/todos/'
                + $(this).text(),
                type: 'DELETE',
                success: printTerms
            });
        });
}
