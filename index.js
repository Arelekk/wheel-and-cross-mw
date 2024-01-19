const timer = document.getElementById("time")
const tds = document.querySelectorAll("td");
const reset = document.getElementById("reset-button");
const score = document.getElementById("score-input");

score.value = null;

let turn = null;
let seconds = 0;
let time = "00:00"
let winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

setInterval(() => {
    seconds++;
    time = new Date(seconds * 1000).toISOString().slice(14, 19);
    timer.textContent = time;
}, 1000);

const getAnswers = () => {
    let answers = []
    tds.forEach(td => {
        answers.push(td.textContent)
    });
    return answers
}

const playerWin = () => {
    const answers = getAnswers();
    let winReturn = null;
    winCombinations.forEach(combination => {
        if (winReturn == null) {
            if (answers[combination[0]] == "X" && answers[combination[1]] == "X" && answers[combination[2]] == "X") {
                winReturn = 2
            }
            if (answers[combination[0]] == "O" && answers[combination[1]] == "O" && answers[combination[2]] == "O") {
                winReturn = 1
            }
            if (!answers.includes("")) {
                winReturn = 0
            }
        }

    })
    return winReturn
}


const softReset = () => {
    tds.forEach(td => {
        td.textContent = ""
    });
}

const drawStarter = () => {
    let random = Math.floor(Math.random() * 10);
    if (random >= 5) {
        turn = "O"
    } else {
        turn = "X"
    }
}

const click = (event) => {
    if (!event.target.textContent) {
        event.target.textContent = turn;
        if (turn == "O") {
            turn = "X"
        } else {
            turn = "O"
        }
        let winner = playerWin();
        if (winner == 2) {
            score.value += "X | ";
            softReset()
        } else if (winner == 1) {
            score.value += "O | ";
            softReset()
        } else if (winner == 0) {
            softReset()
        }
    }

}

tds.forEach(td => {
    td.addEventListener("click", click)
});


reset.addEventListener("click", () => {
    tds.forEach(td => {
        td.textContent = ""
    });
    timer.textContent = "00:00"
    seconds = 0;
    score.value = null;
})

drawStarter()