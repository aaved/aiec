var currentEnergy = 3;
var previousEnergy = 3;
var energyUsed = 0;
var energyGained = 0;
var energyDestroyed = 0;
var energyNextRound = 0;
var runningEnergy = 3;
var round = 1;

var win_score = 0;
var lose_score = 0;
var draw_score = 0;
var isUndoActive = false;

var previousCard = 6;
var currentCard = 6;
var card = 0;
var cardUsed = 0;
var cardDraw = 0;
var cardDiscard = 0;



/************************** SIMPLE CALCULATOR **********************************************/
function simpleAdd() {

    energyUsed = energyUsed + 1;
    runningEnergy = runningEnergy - 1;

    if (runningEnergy <= 0)
        runningEnergy = 0;

    $("#current-energy").text(runningEnergy);

    if (energyUsed > currentEnergy)
        energyUsed = currentEnergy;
    $("#energy-used-text").text(energyUsed);
}

function simpleMinus() {
    energyUsed = energyUsed - 1;
    runningEnergy = runningEnergy + 1;

    $("#current-energy").text(runningEnergy);
    $("#energy-used-text").text(energyUsed);
}

function simpleEndTurn() {
    round = round + 1;
    previousEnergy = currentEnergy;
    previousCard = currentCard;

    currentEnergy = runningEnergy + 2;

    if (currentEnergy >= 10)
        currentEnergy = 10;

    if (currentEnergy < 2)
        currentEnergy = 2;

    runningEnergy = currentEnergy;

    if (round >= 10)
        $(".bg-overlay").css("background", "#b52930ad");
    else
        $(".bg-overlay").css("background", "#c07f5aad");


    $("#current-energy").text(currentEnergy);
    $("#round-text span").text(round);
    energyUsed = 0;
    energyGained = 0;
    energyDestroyed = 0;
    $("#energy-used-text").text(energyDestroyed);
    $("#energy-gained-text").text(energyDestroyed);
    $("#energy-destroyed-text").text(energyDestroyed);
    $("#undo-btn").attr("disabled", false);
    isUndoActive = true;
    $("#undo-btn").removeClass("inactive");

    calculateCard();

}



$("#simple-add").click(function () {
    simpleAdd();
});

$("#simple-minus").click(function () {
    simpleMinus();
});


$("#simple-end-turn").click(function () {
    simpleEndTurn();
});


/************************** END SIMPLE CALCULATOR **********************************************/













function addEnergyUsed() {

    energyUsed = energyUsed + 1;
    runningEnergy = runningEnergy - 1;

    if (runningEnergy <= 0)
        runningEnergy = 0;

    $("#current-energy").text(runningEnergy);

    if (energyUsed > currentEnergy)
        energyUsed = currentEnergy;
    $("#energy-used-text").text(energyUsed);
}

function minusEnergyUsed() {
    energyUsed = energyUsed - 1;
    runningEnergy = runningEnergy + 1;
    if (runningEnergy > currentEnergy)
        runningEnergy = currentEnergy;

    $("#current-energy").text(runningEnergy);

    if (energyUsed <= 0)
        energyUsed = 0;
    $("#energy-used-text").text(energyUsed);
}

function addEnergyGained() {

    if (runningEnergy < 10) {
        energyGained = energyGained + 1;
        runningEnergy = runningEnergy + 1;
    }

    $("#current-energy").text(runningEnergy);
    $("#energy-gained-text").text(energyGained);
}

function minusEnergyGained() {
    if (energyGained > 0) {
        energyGained = energyGained - 1;
        runningEnergy = runningEnergy - 1;
        if (runningEnergy <= 0)
            runningEnergy = 0;

        $("#current-energy").text(runningEnergy);


        if (energyGained <= 0)
            energyGained = 0;
        $("#energy-gained-text").text(energyGained);
    }

}

function addEnergyDestroyed() {
    if (!runningEnergy == 0) {
        energyDestroyed = energyDestroyed + 1;
        runningEnergy = runningEnergy - 1;
    }


    if (runningEnergy <= 0)
        runningEnergy = 0;



    $("#current-energy").text(runningEnergy);

    $("#energy-destroyed-text").text(energyDestroyed);

}

function minusEnergyDestroyed() {

    if (!energyDestroyed <= 0) {
        energyDestroyed = energyDestroyed - 1;
        runningEnergy = runningEnergy + 1;
        if (runningEnergy <= 0)
            runningEnergy = 0;

        $("#current-energy").text(runningEnergy);

        if (energyDestroyed <= 0)
            energyDestroyed = 0;

        $("#energy-destroyed-text").text(energyDestroyed);
    }


}

function undo() {

    if (isUndoActive == true) {
        currentEnergy = previousEnergy;
        runningEnergy = currentEnergy;
        currentCard = previousCard;

        round = round - 1;

        $("#current-energy").text(currentEnergy);
        $("#current-card").text(currentCard);
        $("#round-text span").text(round);
        energyUsed = 0;
        energyGained = 0;
        energyDestroyed = 0;
        $("#energy-used-text").text(energyDestroyed);
        $("#energy-gained-text").text(energyDestroyed);
        $("#energy-destroyed-text").text(energyDestroyed);

        initializeCard();

        $("#undo-btn").attr("disabled", true);
        $("#undo-btn").addClass("inactive");
        isUndoActive = false;
    }

}

function endTurn() {
    round = round + 1;
    previousEnergy = currentEnergy;
    previousCard = currentCard;

    currentEnergy = runningEnergy + 2;

    if (currentEnergy >= 10)
        currentEnergy = 10;

    if (currentEnergy < 2)
        currentEnergy = 2;

    runningEnergy = currentEnergy;

    if (round >= 10)
        $(".bg-overlay").css("background", "#b52930ad");
    else
        $(".bg-overlay").css("background", "#c07f5aad");


    $("#current-energy").text(currentEnergy);
    $("#round-text span").text(round);
    energyUsed = 0;
    energyGained = 0;
    energyDestroyed = 0;
    $("#energy-used-text").text(energyDestroyed);
    $("#energy-gained-text").text(energyDestroyed);
    $("#energy-destroyed-text").text(energyDestroyed);
    $("#undo-btn").attr("disabled", false);
    isUndoActive = true;
    $("#undo-btn").removeClass("inactive");

    calculateCard();

}


function reset() {
    currentEnergy = 3;
    runningEnergy = 3;
    energyUsed = 0;
    energyGained = 0;
    energyDestroyed = 0;
    energyNextRound = 0;
    round = 1;
    isUndoActive = false;


    currentCard = 6
    card = 0;
    $("#current-card").text(currentCard);
    $("#card-txt").text(card);
    initializeCard();


    $("#current-energy").text(currentEnergy);
    $("#round-text span").text(round);
    $("#energy-used-text").text(energyDestroyed);
    $("#energy-gained-text").text(energyDestroyed);
    $("#energy-destroyed-text").text(energyDestroyed);
    $(".bg-overlay").css("background", "#c07f5aad");

}

// SHORTCUT KEYS
$(document).keypress(function (e) {
    //q
    if (e.which == 113) {

        minusEnergyUsed();
    }

    //w
    if (e.which == 119) {
        addEnergyUsed();
    }

    //a
    if (e.which == 97) {
        minusEnergyGained();
    }

    //s
    if (e.which == 115) {
        addEnergyGained();
    }

    //z
    if (e.which == 122) {
        minusEnergyDestroyed();
    }

    //x
    if (e.which == 120) {
        addEnergyDestroyed();

    }

    //e
    if (e.which == 101) {
        endTurn();
    }

    //r
    if (e.which == 114) {
        reset();
    }

    //j
    if (e.which == 106) {
        alert("j is pressed");
    }

    //u
    if (e.which == 117) {
        undo();
    }


    //k
    if (e.which == 107) {
        alert("sk is pressed");
    }

    //l
    if (e.which == 108) {
        alert("l is pressed");
    }

    //;
    if (e.which == 59) {
        alert("; is pressed");
    }



});


function showSLPCalc() {
    $(".slp-calc-wrap").show();
}

function hideSLPCalc() {
    $(".slp-calc-wrap").hide();
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        reset();
    }
});


$("button#slp-icon").click(function () {
    return (this.tog = !this.tog) ? showSLPCalc() : hideSLPCalc();
});


$("#slp-calculator-close").click(function () {
    hideSLPCalc();
});



$("#help-footer-close").click(function () {
    $("#help-text-wrapper").hide();
});

$("#help-icon").click(function () {
    $("#help-text-wrapper").show();
});


$("#end-turn").click(function () {
    endTurn();
});



// Energy Used
$("#energy-used-add").click(function () {
    addEnergyUsed();
});

$("#energy-used-minus").click(function () {
    minusEnergyUsed();
});

//Energy Gained
$("#energy-gained-add").click(function () {
    addEnergyGained();
});

$("#energy-gained-minus").click(function () {
    minusEnergyGained();
});


//Energy Destroyed
$("#energy-destroyed-add").click(function () {
    addEnergyDestroyed();
});

$("#energy-destroyed-minus").click(function () {
    minusEnergyDestroyed();
});

//Reset Button
$("#reset-btn").click(function () {
    reset();


});



// LEFT WIDGET FUNCTIONS

$("#win-btn").click(function () {
    win_score = win_score + 1;
    $("#win-txt").text(win_score);
});

$("#win-txt").click(function () {
    win_score = win_score - 1;
    if (win_score <= 0)
        win_score = 0;

    $("#win-txt").text(win_score);
});


$("#lose-btn").click(function () {
    lose_score = lose_score + 1;
    $("#lose-txt").text(lose_score);
});

$("#lose-txt").click(function () {
    lose_score = lose_score - 1;
    if (lose_score <= 0)
        lose_score = 0;
    $("#lose-txt").text(lose_score);
});

$("#draw-txt").click(function () {
    draw_score = draw_score - 1;
    if (draw_score <= 0)
        draw_score = 0;
    $("#draw-txt").text(draw_score);
});

$("#draw-btn").click(function () {
    draw_score = draw_score + 1;
    $("#draw-txt").text(draw_score);
});

$("#clear-btn").click(function () {
    win_score = 0;
    lose_score = 0;
    draw_score = 0;

    $("#win-txt").text(0);
    $("#lose-txt").text(0);
    $("#draw-txt").text(0);
});

// UNDO BUTTON
$("#undo-btn").click(function () {
    undo();
});