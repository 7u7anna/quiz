let quizDatabase;

let worldQuizDatabase = [
    {
        question: 'How many countries there is?',
        answer: {
            1: '200',
            2: '125',
            3: '195',
            4: '100',
        },
        correctAnswer: '195'
    },
    {
        question: 'Which continent is the biggest one?',
        answer: {
            1: 'Asia',
            2: 'Europe',
            3: 'Australia',
            4: 'Africa',
        },
        correctAnswer: 'Asia'
    },
    {
        question: 'Which country have the largest teritory?',
        answer: {
            1: 'USA',
            2: 'Russia',
            3: 'Canada',
            4: 'Australia',
        },
        correctAnswer: 'Russia'
    },
    {
        question: 'Where is the EU goverment placed?',
        answer: {
            1: 'London',
            2: 'Brussels',
            3: 'Berlin',
            4: 'Rome',
        },
        correctAnswer: 'Brussels'
    },
    {
        question: 'What is the capital of Netherlands?',
        answer: {
            1: 'Rotterdam',
            2: 'Haga',
            3: 'Utrecht',
            4: 'Amsterdam',
        },
        correctAnswer: 'Amsterdam'
    },
    {
        question: 'Smallest country belonging to the EU?',
        answer: {
            1: 'Czech Republic',
            2: 'Slovakia',
            3: 'Malta',
            4: 'Estonia',
        },
        correctAnswer: 'Malta'
    },
]

let culinaryQuizDatabase = [
    {
        question: 'Where was pasta originated?',
        answer: {
            1: 'Italy',
            2: 'China',
            3: 'England',
            4: 'Japan',
        },
        correctAnswer: 'China'
    },
    {
        question: 'Which cusine is based on coconut milk dishes?',
        answer: {
            1: 'Mediterranean',
            2: 'Thai',
            3: 'American',
            4: 'Polish',
        },
        correctAnswer: 'Thai'
    },
    {
        question: 'Which country is considered to have the best cheeses?',
        answer: {
            1: 'France',
            2: 'Switzerland',
            3: 'Germany',
            4: 'Belgium',
        },
        correctAnswer: 'France'
    },
    {
        question: 'How many ways egg can be prepared?',
        answer: {
            1: '100',
            2: '50',
            3: '20',
            4: '7',
        },
        correctAnswer: '100'
    },
    {
        question: 'What is kombucha?',
        answer: {
            1: 'Spice',
            2: 'Pickle',
            3: 'Fermented tea',
            4: 'Type of yoghurt',
        },
        correctAnswer: 'Fermented tea',
    },
    {
        question: 'What is falafel made from?',
        answer: {
            1: 'meat',
            2: 'dairy',
            3: 'eggs',
            4: 'legumes',
        },
        correctAnswer: 'legumes',
    },
]

let basketballKnowledge = [
    {
        question: 'When was basketball invented?',
        answer: {
            1: '2000',
            2: '1951',
            3: '1789',
            4: '1891',
        },
        correctAnswer: '1891',
    },
    {
        question: 'How much did the longest game in history took?',
        answer: {
            1: '100 min',
            2: '78 min',
            3: '300 min',
            4: '82 min',
        },
        correctAnswer: '78 min',
    },
    {
        question: "How much is the women's basketball size?",
        answer: {
            1: '2',
            2: '6',
            3: '7',
            4: '10',
        },
        correctAnswer: '6'
    },
    {
        question: 'What are NBA floors made from?',
        answer: {
            1: 'hard maple',
            2: 'oakwood',
            3: 'pine',
            4: 'concrete',
        },
        correctAnswer: 'hard maple',
    },
    {
        question: 'What countries does NBA covers?',
        answer: {
            1: 'Australia',
            2: 'USA and Canada',
            3: 'European countries',
            4: 'Brazil and Argentina',
        },
        correctAnswer: 'USA and Canada',
    }
]

let animalsQuizDatabase = [
    {
        question: 'How much species of ants is there?',
        answer: {
            1: '1 milion',
            2: '3 milions',
            3: 'Trilion',
            4: '5 thousands',
        },
        correctAnswer: '1 milion',
    },
    {
        question: 'What snakes do? (only one answer)',
        answer: {
            1: 'snake can live without head',
            2: 'snakes travel in pairs',
            3: 'snakes are deaf',
            4: 'can sleep for 3 years',
        },
        correctAnswer: 'can sleep for 3 years',
    },
    {
        question: 'Which animal do not die?',
        answer: {
            1: 'dolphin',
            2: 'jellyfish',
            3: 'octopus',
            4: 'shrimp',
        },
        correctAnswer: 'jellyfish',
    },
    {
        question: 'How much per second is bee able to flip its wings?',
        answer: {
            1: '200 times',
            2: '10 times',
            3: '400 times',
            4: '1 time',
        }
    }
]

let historicalQuizDatabase = [
    {
        question: 'What is history?',
        answer: {
            1: 'philosophy',
            2: 'science',
            3: 'literature',
            4: 'humanistic science'
        },
        correctAnswer: 'humanistic science'
    },
    {
        question: 'Where did Cleopatra come from?',
        answer: {
            1: 'Egypt',
            2: 'ancient Rome',
            3: 'Greek',
            4: 'Persia',
        },
        correctAnswer: 'Greek',
    },
    {
        question: 'What talent did Richard Nixon had?(37th president of USA)',
        answer: {
            1: 'He was great dancer',
            2: 'He could speak many languages',
            3: 'He was a great singer',
            4: 'He was great scientist',
        },
        correctAnswer: 'He was a great singer',
    },
    {
        question: 'Which day is the real independence day in America',
        answer: {
            1: '4th July',
            2: '2nd July',
            3: '3rd January',
            4: '4th June',
        },
        correctAnswer: '2nd July',
    },
    {
        question: 'Who invented lightbulb?',
        answer: {
            1: 'Thomas Edison',
            2: 'Alexander Bell',
            3: 'Nikola Tesla',
            4: 'Warren de la Rue',
        },
        correctAnswer: 'Warren de la Rue',
    }
]

let userCollectedPoints;
let numberOfQuestions;
let buttonList;
// = document.querySelector('#answer-box').querySelectorAll('button');
const passedQuestions = [];
const playerAnswers = [];
let blockButton = false;
let CORRECTANSWERS = [];
let scoreInPoints = '0';
let scoreInPercentage = '0';
let blockPassedQuiz = false;
let completedQuiz;
let quizTitle;


function worldQuiz() {
    quizTitle = document.querySelector('#world').textContent;
    if (!completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = false;
        completedQuiz.push(quizTitle);
        window.localStorage.setItem('quizCompleteArray', JSON.stringify(completedQuiz));
        console.log(completedQuiz);
        document.querySelector('#quiz-hide-box').style = 'display:initial';
        quizDatabase = worldQuizDatabase;
        let wtitle = document.querySelector('#title-quiz-text').innerHTML = 'Knowledge about world';
        let worldImg = document.createElement('img');
        worldImg.src = "https://world-geography-games.com/img/home-asia1.png";
        worldImg.height = '250'
        worldImg.setAttribute('id', 'image');
        document.querySelector('#quiz-container').appendChild(worldImg);
        numberOfQuestions = worldQuizDatabase.length;
        document.querySelector('#submit').addEventListener('click', countToStart);
        prepareQuiz(wtitle);
        blockPassedQuiz = true;
    } else if (completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = true;
    }
}


function culinaryQuiz() {
    quizTitle = document.querySelector('#culinary').textContent;
    if (!completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = false;
        completedQuiz.push(quizTitle);
        window.localStorage.setItem('quizCompleteArray', JSON.stringify(completedQuiz));
        console.log(completedQuiz);
        document.querySelector('#quiz-hide-box').style = 'display:initial';
        quizDatabase = culinaryQuizDatabase;
        let ctitle = document.querySelector('#title-quiz-text').textContent = 'Culinaries';
        let foodImg = document.createElement('img');
        foodImg.src = "https://media.istockphoto.com/vectors/food-and-cooking-graphic-illustration-vector-id998964974?k=6&m=998964974&s=170667a&w=0&h=E1tG6jOkmqNjgQo67k-n-HsaMIVsqQauJUZDxbkSmGc=";
        foodImg.height = '250'
        foodImg.setAttribute('id', 'image');
        document.querySelector('#quiz-container').appendChild(foodImg);
        numberOfQuestions = culinaryQuizDatabase.length;
        prepareQuiz(ctitle);
        blockPassedQuiz = true;
    } else if (completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = true;
    }
}

function basketballQuiz() {
    quizTitle = document.querySelector('#basketball').textContent;
    if (!completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = false;
        completedQuiz.push(quizTitle);
        window.localStorage.setItem('quizCompleteArray', JSON.stringify(completedQuiz));
        console.log(completedQuiz);
        document.querySelector('#quiz-hide-box').style = 'display:initial';
        quizDatabase = basketballKnowledge;
        let btitle = document.querySelector('#title-quiz-text').textContent = 'Basketball knowledge';
        let basketballImg = document.createElement('img');
        basketballImg.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ed138e47658791.5880dae551a6a.jpg";
        basketballImg.height = '250'
        basketballImg.setAttribute('id', 'image');
        document.querySelector('#quiz-container').appendChild(basketballImg);
        numberOfQuestions = basketballKnowledge.length;
        prepareQuiz(btitle);
        blockPassedQuiz = true;
    } else if (completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = true;
    }
}

function animalQuiz() {
    quizTitle = document.querySelector('#animal').textContent;
    if (!completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = false;
        completedQuiz.push(quizTitle);
        window.localStorage.setItem('quizCompleteArray', JSON.stringify(completedQuiz));
        console.log(completedQuiz);
        document.querySelector('#quiz-hide-box').style = 'display:initial';
        quizDatabase = animalsQuizDatabase;
        let atitle = document.querySelector('#title-quiz-text').textContent = 'Animals all over the world';
        let animalImg = document.createElement('img');
        animalImg.src = "https://i.pinimg.com/originals/ca/8f/4f/ca8f4ff1ec05f3296d27fc3d670e16d5.jpg";
        animalImg.height = '250'
        animalImg.setAttribute('id', 'image');
        document.querySelector('#quiz-container').appendChild(animalImg);
        numberOfQuestions = animalsQuizDatabase.length;
        prepareQuiz(atitle);
        blockPassedQuiz = true;
    } else if (completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = true;
    }
}

function historyQuiz() {
    quizTitle = document.querySelector('#historical').textContent;
    if (!completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = false;
        completedQuiz.push(quizTitle);
        window.localStorage.setItem('quizCompleteArray', JSON.stringify(completedQuiz));
        console.log(completedQuiz);
        document.querySelector('#quiz-hide-box').style = 'display:initial';
        quizDatabase = historicalQuizDatabase;
        let htitle = document.querySelector('#title-quiz-text').textContent = 'History check';
        let historyImg = document.createElement('img');
        historyImg.src = "https://fivethirtyeight.com/wp-content/uploads/2021/01/WOMEN-CONGRESS-16x9-1.png";
        historyImg.height = '250'
        historyImg.setAttribute('id', 'image');
        document.querySelector('#quiz-container').appendChild(historyImg);
        numberOfQuestions = historicalQuizDatabase.length;
        prepareQuiz(htitle);
        blockPassedQuiz = true;
    } else if (completedQuiz.includes(quizTitle)) {
        blockPassedQuiz = true;
    }
}

function prepareQuiz(titleText) {
    document.querySelector('#submit').addEventListener('click', countToStart);
    document.querySelector('#choose-quiz-container').style = 'display: none';
    document.querySelector('#title-quiz-text').style = 'display: initial';
}


function countToStart() {
    document.querySelector('#quiz-container').style.height = '440px';
    document.querySelector('#image').style = 'display: none';
    document.querySelector('#submit').style = 'display: none;';
    document.querySelector('#counter').style = 'display: initial;';
    document.querySelector('#title-quiz-text').style = 'display:none;';
    let timeleft = 2;
    let counter = setInterval(function () {
        if (timeleft > 0) {
            document.querySelector('#counter').textContent = timeleft--
        } else if (timeleft === 0) {
            document.querySelector('#counter').textContent = 'START!';
        } else if (timeleft < 0) {
            clearInterval(countToStart);
        }
    }, 900);
    setTimeout(startGame, 3500);
}

function randomNumber() {
    let index = Math.floor(Math.random() * numberOfQuestions);
    return index
}

function startGame() {
    document.querySelector('#title-quiz-text').style = 'display: none;';
    document.querySelector('#submit').style = 'display: none;';
    document.querySelector('#counter').style = 'display: none';
    loadQuestion();
}

function loadQuestion() {
    document.querySelector('#next').addEventListener('click', startGame);
    if (passedQuestions.length === quizDatabase.length) {
        scorePage();
        countCorrectAnswers(playerAnswers, CORRECTANSWERS);
        document.querySelector('#retake').style = 'display: initial';
    } else {
        resetCounter();
        startTimer();
        questionNumberConsole();
        document.querySelector('#hide').style = 'display: initial';
        document.querySelector('#submit').textContent = 'submit';
        let questionIndex = randomNumber();
        let randomQuestion = quizDatabase[questionIndex]['question'];
        if (!passedQuestions.includes(randomQuestion)) {
            loadAnswers(randomQuestion, questionIndex);
        } else {
            loadQuestion();
        }
    }
    blockButton = false;
}

function loadAnswers(randomQuestion, questionIndex) {
    document.querySelector('#question-text').textContent = randomQuestion;
    let correctQuestionAnswer = quizDatabase[questionIndex]['correctAnswer'];
    CORRECTANSWERS.push(correctQuestionAnswer);
    const possibleAnswers = [];
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].innerText = quizDatabase[questionIndex]['answer'][i + 1];
        possibleAnswers.push(buttonList[i].innerText);
    }
    console.log(possibleAnswers);
    console.log(CORRECTANSWERS);
    passedQuestions.push(document.querySelector('#question-text').textContent);
    document.querySelector('#passed').textContent = passedQuestions.length;
    console.log(passedQuestions);
}

let countTool;

function startTimer() {
    let timeToEnd = 14;
    countTool = setInterval(function () {
        if (timeToEnd > 0) {
            document.querySelector('#time-to-change').textContent = timeToEnd--;
            document.querySelector('#time-to-change').style.color = 'black'
            if (timeToEnd < 10) {
                document.querySelector('#time-to-change').textContent = '0' + timeToEnd;
                if (timeToEnd < 4) {
                    document.querySelector('#time-to-change').textContent = '0' + timeToEnd
                    document.querySelector('#time-to-change').style.color = 'red';
                }
            }
        } else if (timeToEnd === 0) {
            document.querySelector('#time-to-change').textContent = '0' + timeToEnd;
            document.querySelector('#time-to-change').style.color = 'black'
            loadQuestion();
        } else if (timeToEnd < 0) {
            clearInterval(startTimer);
        }
    }, 1000)
}

function resetCounter() {
    countTool = clearInterval(countTool)
}

function questionNumberConsole() {
    document.querySelector('#total').textContent = numberOfQuestions;
}

function scorePage() {
    document.querySelector('#quiz-container').style.height = '65%';
    document.querySelector('#hide').style = 'display: none;';
    document.querySelector('#last-page').style = 'display: initial;';
    document.querySelector('#submit').style = 'display: none';
    document.querySelector('#all-questions').textContent = quizDatabase.length;
    document.querySelector('#retake').style.display = 'initial';
    document.querySelector('#retake').addEventListener('click', resetGame);
}

function copyPlayerAnswer() {
    if (blockButton === false) {
        let pickedAnswer = event.srcElement.innerHTML;
        playerAnswers.push(pickedAnswer);
        blockButton = true;
    }
}

function countCorrectAnswers(playerAnswers, CORRECTANSWERS) {
    for (i = 0; i < quizDatabase.length; i++) {
        if (playerAnswers[i] === CORRECTANSWERS[i]) {
            scoreInPoints++;
        }
        scoreInPercentage = Math.floor((scoreInPoints / quizDatabase.length) * 100) + ' %';
        document.querySelector('#score-in-percentage').textContent = scoreInPercentage;
        document.querySelector('#user-score').textContent = scoreInPoints;
        if (scoreInPoints > (quizDatabase.length / 2)) {
            document.querySelector('#score-in-percentage').style.color = 'green';
            document.querySelector('#user-passed').style = 'display: initial';
            document.querySelector('#user-not-passed').style = 'display: none';
            document.querySelector('#user-passed').style.color = 'green';
        } else if (scoreInPoints < (quizDatabase.length / 2)) {
            document.querySelector('#score-in-percentage').style.color = 'red';
            document.querySelector('#user-not-passed').style = 'display: initial';
            document.querySelector('#user-passed').style = 'display: none';
            document.querySelector('#user-not-passed').style.color = 'red';
        }
    }
    storeTotalPoints(scoreInPoints);
}

function storeTotalPoints(scoreInPoints) {
    let quizCollected = scoreInPoints;
    let pointAppend = JSON.parse(localStorage.getItem('userCollectedPoints')) || [];
    let count = 0;
    for (let i = 0; i < pointAppend.length; i++) {
        count += pointAppend[i];
    }
    if (count + quizCollected <= totalPossiblePoints) {
        pointAppend.push(quizCollected);
        localStorage.setItem('userCollectedPoints', JSON.stringify(pointAppend));
        console.log(pointAppend);
        let finalScore = 0;
        for (let i = 0; i < pointAppend.length; i++) {
            finalScore += pointAppend[i];
        }
        console.log(finalScore);
        window.localStorage.setItem('userTotalPointsWrite', finalScore.toString());
    }
}

function quizIsActive() {
    document.querySelector('#world').addEventListener('click', worldQuiz);
    document.querySelector('#culinary').addEventListener('click', culinaryQuiz);
    document.querySelector('#basketball').addEventListener('click', basketballQuiz);
    document.querySelector('#animal').addEventListener('click', animalQuiz);
    document.querySelector('#historical').addEventListener('click', historyQuiz);
    numberOfQuestions;
    buttonList = document.querySelector('#answer-box').querySelectorAll('button');
    completedQuiz = JSON.parse(localStorage.getItem('quizCompleteArray')) || [];
}


function writeTotalScore() {
    let isEmpty = window.localStorage.getItem('userCollectedPoints');
    document.querySelector('#total-possible').innerHTML = localStorage.getItem('totalPossible');
    if (isEmpty === null) {
        document.querySelector('#player-score').textContent = '0';
    } else if (isEmpty.length > 0) {
        document.querySelector('#player-score').innerHTML = localStorage.getItem('userCollectedPoints');
        document.querySelector('#player-score').innerHTML = window.localStorage.getItem('userTotalPointsWrite');
    }
}

function resetTotalScore() {
    document.querySelector('#player-score').textContent = '0';
    userCollectedPoints = '0';
    window.localStorage.clear();
    blockPassedQuiz = false;
}

let totalPossiblePoints = worldQuizDatabase.length + culinaryQuizDatabase.length + basketballKnowledge.length + animalsQuizDatabase.length + historicalQuizDatabase.length;
totalPossiblePoints.toString();
localStorage.setItem('totalPossible', totalPossiblePoints);

function resetGame() {
    window.location.reload();
}
