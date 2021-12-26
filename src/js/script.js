let currentEnergy = 3;
let previousEnergy = 3;
let energyUsed = 0;
let energyGained = 0;
let energyDestroyed = 0;
let runningEnergy = 3;
let round = 1;

let winScore = 0;
let loseScore = 0;
let drawScore = 0;
let isUndoActive = false;

function addEnergyUsed() {
    energyUsed = energyUsed + 1;
    runningEnergy = runningEnergy - 1;

    if (runningEnergy <= 0) { runningEnergy = 0; }

    $('#current-energy').text(runningEnergy);

    if (energyUsed > currentEnergy) { energyUsed = currentEnergy; }
    $('#energy-used-text').text(energyUsed);
}

function minusEnergyUsed() {
    energyUsed = energyUsed - 1;
    runningEnergy = runningEnergy + 1;
    if (runningEnergy > currentEnergy) { runningEnergy = currentEnergy; }

    $('#current-energy').text(runningEnergy);

    if (energyUsed <= 0) { energyUsed = 0; }
    $('#energy-used-text').text(energyUsed);
}

function addEnergyGained() {
    if (runningEnergy < 10) {
        energyGained = energyGained + 1;
        runningEnergy = runningEnergy + 1;
    }

    $('#current-energy').text(runningEnergy);
    $('#energy-gained-text').text(energyGained);
}

function minusEnergyGained() {
    if (energyGained > 0) {
        energyGained = energyGained - 1;
        runningEnergy = runningEnergy - 1;
        if (runningEnergy <= 0) { runningEnergy = 0; }

        $('#current-energy').text(runningEnergy);

        if (energyGained <= 0) { energyGained = 0; }
        $('#energy-gained-text').text(energyGained);
    }
}

function addEnergyDestroyed() {
    if (!runningEnergy == 0) {
        energyDestroyed = energyDestroyed + 1;
        runningEnergy = runningEnergy - 1;
    }

    if (runningEnergy <= 0) { runningEnergy = 0; }

    $('#current-energy').text(runningEnergy);

    $('#energy-destroyed-text').text(energyDestroyed);
}

function minusEnergyDestroyed() {
    if (!energyDestroyed <= 0) {
        energyDestroyed = energyDestroyed - 1;
        runningEnergy = runningEnergy + 1;
        if (runningEnergy <= 0) { runningEnergy = 0; }

        $('#current-energy').text(runningEnergy);

        if (energyDestroyed <= 0) { energyDestroyed = 0; }

        $('#energy-destroyed-text').text(energyDestroyed);
    }
}

function undo() {
    if (isUndoActive == true) {
        currentEnergy = previousEnergy;
        runningEnergy = currentEnergy;

        round = round - 1;

        $('#current-energy').text(currentEnergy);
        $('#round-text span').text(round);
        energyUsed = 0;
        energyGained = 0;
        energyDestroyed = 0;
        $('#energy-used-text').text(energyDestroyed);
        $('#energy-gained-text').text(energyDestroyed);
        $('#energy-destroyed-text').text(energyDestroyed);

        $('#undo-btn').attr('disabled', true);
        $('#undo-btn').addClass('inactive');
        isUndoActive = false;
    }
}

function endTurn() {
    round = round + 1;
    previousEnergy = currentEnergy;

    currentEnergy = runningEnergy + 2;

    if (currentEnergy >= 10) { currentEnergy = 10; }

    if (currentEnergy < 2) { currentEnergy = 2; }

    runningEnergy = currentEnergy;

    if (round >= 10) { $('.background-overlay').css('background', 'rgb(247, 82, 82, 0.25)'); } else { $('.background-overlay').css('background', '#00000000'); }

    $('#current-energy').text(currentEnergy);
    $('#round-text span').text(round);
    energyUsed = 0;
    energyGained = 0;
    energyDestroyed = 0;
    $('#energy-used-text').text(energyDestroyed);
    $('#energy-gained-text').text(energyDestroyed);
    $('#energy-destroyed-text').text(energyDestroyed);
    $('#undo-btn').attr('disabled', false);
    isUndoActive = true;
    $('#undo-btn').removeClass('inactive');
}

function reset() {
    currentEnergy = 3;
    runningEnergy = 3;
    energyUsed = 0;
    energyGained = 0;
    energyDestroyed = 0;
    round = 1;
    isUndoActive = false;

    $('#current-energy').text(currentEnergy);
    $('#round-text span').text(round);
    $('#energy-used-text').text(energyDestroyed);
    $('#energy-gained-text').text(energyDestroyed);
    $('#energy-destroyed-text').text(energyDestroyed);
    $('.background-overlay').css('background', '#00000000');
}

$('#end-turn').click(function () {
    endTurn();
});

$('#energy-used-add').click(function () {
    addEnergyUsed();
});

$('#energy-used-minus').click(function () {
    minusEnergyUsed();
});

$('#energy-gained-add').click(function () {
    addEnergyGained();
});

$('#energy-gained-minus').click(function () {
    minusEnergyGained();
});

$('#energy-destroyed-add').click(function () {
    addEnergyDestroyed();
});

$('#energy-destroyed-minus').click(function () {
    minusEnergyDestroyed();
});

$('#reset-btn').click(function () {
    reset();
});

$('#win-btn').click(function () {
    winScore = winScore + 1;
    $('#win-txt').text(winScore);
});

$('#win-txt').click(function () {
    winScore = winScore - 1;
    if (winScore <= 0) { winScore = 0; }

    $('#win-txt').text(winScore);
});

$('#lose-btn').click(function () {
    loseScore = loseScore + 1;
    $('#lose-txt').text(loseScore);
});

$('#lose-txt').click(function () {
    loseScore = loseScore - 1;
    if (loseScore <= 0) { loseScore = 0; }
    $('#lose-txt').text(loseScore);
});

$('#draw-txt').click(function () {
    drawScore = drawScore - 1;
    if (drawScore <= 0) { drawScore = 0; }
    $('#draw-txt').text(drawScore);
});

$('#draw-btn').click(function () {
    drawScore = drawScore + 1;
    $('#draw-txt').text(drawScore);
});

$('#clear-btn').click(function () {
    winScore = 0;
    loseScore = 0;
    drawScore = 0;

    $('#win-txt').text(0);
    $('#lose-txt').text(0);
    $('#draw-txt').text(0);
});

$('#undo-btn').click(function () {
    undo();
});
