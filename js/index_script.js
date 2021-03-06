var round = 1;

// fadeIn all comments in the stream for the given round and choice with
// various timed spacing between each one and autoscroll to bottom
function fadeInCommentStream(round, choice) {
    root = 'c' + round + choice;
    // fade in your comment
    $('#' + root).fadeIn(800, function(){
        setTimeout(function() {
            // if final round, break off here
            if (round == 3) {
                setTimeout(function() {
                    complete();
                }, 1000);
            }
            // otherwise fade in followup comment 1
            else {
                $('#' + root + 1).fadeIn(800, function() {
                    setTimeout(function() {
                        // fade in followup comment 2
                        $('#' + root + 2).fadeIn(800, function() {
                            // refill options for appropriate round
                            if (round == 1) {
                                startRound2();
                            } else { // (round == 2)
                                startRound3();
                            }
                        });
                        $('html, body').animate({
                            scrollTop: $("#anchor").offset().top - window.innerHeight
                        }, 800);
                    }, 800);
                });
            }
            $('html, body').animate({
                scrollTop: $("#anchor").offset().top - window.innerHeight
            }, 800);
        }, 800);
    });
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top - window.innerHeight
    }, 800);
}

// Change choices for round 2
function startRound2() {
    $("#choice-a > .choice-text").html("*grabs bacon-flavored popcorn*");
    $("#choice-b > .choice-text").html(
        "Hi so I want to complicate this. Veganism is a vehicle for white supremacy, and posting about it is a performative attempt to obtain white social capital. Before marginalizing individuals who many not fit into this picture, think about your reasons for posting."
    );
    $("#choice-c > .choice-text").html(
        "While it is absolutely important to recognize the detrimental effects the meat production industry is having on our climate, we should also note that the mass consumption of fossil fuels and their derivatives has contributed vastly more to climate change than cattle in the United States. Also, we should be critical of the US's role in starting wars and destabilizing the Middle East in order to obtain oil."
    );
    $("#choice-d > .choice-text").html(
        "Hey, I think it's important not to overlook veganism as a classist institution. Expecting people to susain themselves on a plant-based diet is expensive and impractical--deciding to become vegan isn't always such a simple choice."
    );
    $('#choice-c').attr('style', 'display: -webkit-flex; display: flex');
    $('#choice-d').attr('style', 'display: -webkit-flex; display: flex');
    $('#playable-area').fadeIn(800);
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top - window.innerHeight
    }, 800);

    round = 2;
}

// Change choices for round 3
function startRound3() {
    $("#choice-a > .choice-text").html("Veganism. Is. Oppressive. And. Marginalizing. I can't say it enough.");
    $("#choice-b > .choice-text").html("Hi I would love to continue this conversation in person because I feel it's really important. Message me!");
    $("#choice-c > .choice-text").html("Honestly I'm done with all of you--go back to composting your kale, thanks.");
    $("#choice-d > .choice-text").html("Go read an article on intersectionality about how veganism is classist and racist.");
    $('#playable-area').fadeIn(800);
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top - window.innerHeight
    }, 800);

    round = 3;
}

// When you click a choice, it fades in the appropriate stream and scrolls down
$('#choice-a').click(function(){
    $('#playable-area').fadeOut(800, function() {
        fadeInCommentStream(round,'a');
    });
    $('html, body').animate({
        scrollTop: $("#upper-anchor").offset().top - window.innerHeight
    }, 800);
});
$('#choice-b').click(function(){
    $('#playable-area').fadeOut(800, function() {
        fadeInCommentStream(round,'b');
    });
    $('html, body').animate({
        scrollTop: $("#upper-anchor").offset().top - window.innerHeight
    }, 800);
});
$('#choice-c').click(function(){
    $('#playable-area').fadeOut(800, function() {
        fadeInCommentStream(round,'c');
    });
    $('html, body').animate({
        scrollTop: $("#upper-anchor").offset().top - window.innerHeight
    }, 800);
});
$('#choice-d').click(function(){
    $('#playable-area').fadeOut(800, function() {
        fadeInCommentStream(round,'d');
    });
    $('html, body').animate({
        scrollTop: $("#upper-anchor").offset().top - window.innerHeight
    }, 800);
});

// flashing thing will stop flashing when you click it
$('.pulsing').click(function() {
    $('#playable-area').fadeIn(800);
    $(this).removeClass('pulsing');
});

// when you like something it turns blue, when you unlike it, it goes back
$('.post-like').click(function() {
    if ($(this).hasClass("blue")) {
        $(this).removeClass("blue");
        $(this).children("span").html("Like");
    }
    else {
        $(this).addClass("blue");
        $(this).children("span").html("Unlike");
    }

});

// when you like a comment, it adds a thumbs up. If you unlike it, that goes away
$('.comment-like').click(function() {
    if($(this).html() == "Like") {
        $(this).html("<i class='fa fa-thumbs-up' aria-hidden='true'></i> Unlike");
    } else {
        $(this).html("Like");
    }
});

// If you click "reply" to a comment, it scrolls you down to the choice area
$('.comment-reply').click(function() {
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top - window.innerHeight
    }, 800);
});

// Clicking the "read more" link scrolls you to the article
$('#read-more').click(function() {
    $('html, body').animate({
        scrollTop: $('#anchor').position().top
    }, 800);
});

// Clicking the skip button hides the skip button and scrolls you to the article
$('#skip').click(function() {
    $(this).hide();
    $('#article-wrapper').show(0);
    window.onscroll = function() {hideTopBar()};
    $('html, body').animate({
        scrollTop: $('#article-wrapper').position().top
    }, 800);
});

// Landing page disappears on click
$('#landing-wrapper').click(function() {
    $(this).fadeOut(800);
})

// When you're done with teh simulation, shows final comment, hides skip option
function complete() {
    $('#cfinal').fadeIn(2000, function() {
        $('#article-wrapper').show();
        $('#skip').fadeOut(400);
    });

    $('html, body').animate({
        scrollTop: $("#anchor").offset().top - window.innerHeight
    }, 2000, function() {
        window.onscroll = function() {hideTopBar()};
    });
}

// if scroll above article, change top bar to fixed. if scroll into article,
// change scroll bar to absolute.
function hideTopBar() {
    if (document.body.scrollTop > $('#article-wrapper').position().top - 42) {
        $('#header-bar').css("top", $('#article-wrapper').position().top - 42);
        $('#header-bar').css("position", "absolute");
    } else {
        $('#header-bar').css("top", "0");
        $('#header-bar').css("position", "fixed");
    }
}
