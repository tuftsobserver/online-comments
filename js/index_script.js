var round = 1;

// show all comments in the stream for the given round and choice with
// various timed spacing between each one
function showCommentStream(round, choice) {
    root = '#c' + round + choice;
    $(root).show(400, function(){
        setTimeout(function() {
            $(root + 1).show(400, function() {
                setTimeout(function() {
                    $(root + 2).show(400, function() {
                        if (round == 1) {
                            startRound2();
                        } else { // (round == 2)
                            startRound3();
                        }
                    });
                }, 400);
            });
        }, 800);
    });
}

// Change choices for round 2
function startRound2() {
    $("#choice-a").html("*grabs bacon-flavored popcorn*");
    $("#choice-b").html(
        "Hi so I want to complicate this. Veganism is a vehicle for white supremacy, and posting about it is a performative attempt to obtain white social capital. It also is a classist ideology, as expecting people to sustain themselves on a plant-based diet is expensive. Before marginalizing these communities, think about your reasons for posting."
    );
    $("#choice-c").html(
        "While it is absolutely important to recognize the detrimental effects the meat production industry is having on our climate, we should also note that the mass consumption of fossil fuels and their derivatives has contributed vastly more to climate change than cattle in the United States. Also, we should be critical of the US's role in starting wars and destabilizing the Middle East in order to obtain oil."
    );
    $('#choice-c').show(400);
    $('.choice').removeClass('inactive');
    round = 2;
}

// Change choices for round 2
function startRound3() {
    $("#choice-a").html("Veganism. Is. Oppressive. And. Marginalizing. I can't say it enough.");
    $("#choice-b").html("Hi I would love to continue this conversation in person because I feel it's really important. Message me!");
    $("#choice-c").html("Honestly I'm done with all of you--go back to composting your kale, thanks.");
    $("#choice-d").html("Here's an article on intersectionality b/c veganism is classist and racist.");
    $('#choice-d').show(400);
    $('.choice').removeClass('inactive');
    round = 3;
}

$('#choice-a').click(function(){
    $('.choice').addClass('inactive');
    showCommentStream(round,'a');
});
$('#choice-b').click(function(){
    $('.choice').addClass('inactive');
    showCommentStream(round,'b');
});
$('#choice-c').click(function(){
    $('.choice').addClass('inactive');
    showCommentStream(round,'c');
});
$('#choice-d').click(function(){
    $('.choice').addClass('inactive');
    showCommentStream(round,'d');
});
