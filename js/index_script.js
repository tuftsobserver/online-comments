var round = 1;

// fadeIn all comments in the stream for the given round and choice with
// various timed spacing between each one and autoscrolls to bottom
function fadeInCommentStream(round, choice) {
    root = 'c' + round + choice;
    // fade in your comment
    $('#' + root).fadeIn(800, function(){
        setTimeout(function() {
            // if final round, fade in closing comment
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
        "Hi so I want to complicate this. Veganism is a vehicle for white supremacy, and posting about it is a performative attempt to obtain white social capital. It also is a classist ideology, as expecting people to sustain themselves on a plant-based diet is expensive. Before marginalizing these communities, think about your reasons for posting."
    );
    $("#choice-c > .choice-text").html(
        "While it is absolutely important to recognize the detrimental effects the meat production industry is having on our climate, we should also note that the mass consumption of fossil fuels and their derivatives has contributed vastly more to climate change than cattle in the United States. Also, we should be critical of the US's role in starting wars and destabilizing the Middle East in order to obtain oil."
    );

    $('#choice-c').css('display', 'flex');
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
    $("#choice-d > .choice-text").html("Here's an article on intersectionality b/c veganism is classist and racist.");

    $('#choice-d').css('display', 'flex');
    $('#playable-area').fadeIn(800);
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top - window.innerHeight
    }, 800);

    round = 3;
}

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


$('.pulsing').click(function() {
    $('#playable-area').fadeIn(800);
    $(this).removeClass('pulsing');
});

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

$('.comment-like').click(function() {
    if($(this).html() == "Like") {
        $(this).html("<i class='fa fa-thumbs-up' aria-hidden='true'></i> Unlike");
    } else {
        $(this).html("Like");
    }
});

$('.comment-reply').click(function() {
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top - window.innerHeight
    }, 800);
});

$('#read-more').click(function() {
    $('html, body').animate({
        scrollTop: $('#anchor').position().top
    }, 800);
});

$('#skip').click(function() {
    $(this).hide();
    $('#article-wrapper').show(0);
    window.onscroll = function() {hideTopBar()};
    $('html, body').animate({
        scrollTop: $('#article-wrapper').position().top
    }, 800);
});

$('#landing-wrapper').click(function() {
    $(this).fadeOut(800);
})

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

// if scroll above anchor, change top bar to fixed. if scroll below anchor,
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
