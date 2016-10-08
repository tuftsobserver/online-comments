function showC1a() {
    $('#c1a').show(400, function(){
        $('#c1a1').show(400, function() {
            $('#c1a2').show(400, function() {
                $('#c1a3').show(400, function() {
                    $('.choice').removeClass('inactive');
                });
            });
        });
    });
}

function showC1b() {
    $('#c1b').show(400, function(){
        $('#c1b1').show(400, function() {
            $('#c1b2').show(400, function() {
                $('.choice').removeClass('inactive');
            });
        });
    });
}

var showChoiceA = showC1a;
var showChoiceB = showC1b;

$('#choice-a').click(function(){
    $('.choice').addClass('inactive');
    showChoiceA();
});
$('#choice-b').click(function(){
    $('.choice').addClass('inactive');
    showChoiceB();
});
