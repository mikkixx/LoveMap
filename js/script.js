const LANG_NAMES = {
    words: 'Слова поддержки',
    gifts: 'Подарки',
    time: 'Время вместе',
    help: 'Помощь',
    touch: 'Прикосновения'
};

const LANG_ORDER = ['words', 'gifts', 'time', 'help', 'touch'];

const QUESTIONS = [
    {
        a: { lang: 'words', text: 'Мне приятно, когда партнёр говорит, как сильно меня ценит.' },
        b: { lang: 'gifts', text: 'Мне приятно получать неожиданные подарки без всякого повода.' }
    },
    {
        a: { lang: 'time', text: 'Я чувствую себя любимым, когда мы проводим вечер вместе без телефонов.' },
        b: { lang: 'help', text: 'Я чувствую себя любимым, когда партнёр берёт на себя часть моих дел.' }
    },
    {
        a: { lang: 'touch', text: 'Мне важно обнять партнёра при встрече и при расставании.' },
        b: { lang: 'words', text: 'Мне важно слышать «я тобой горжусь» и «у тебя всё получится».' }
    },
    {
        a: { lang: 'gifts', text: 'Я дорожу вещами, которые мне дарили: они напоминают о человеке.' },
        b: { lang: 'time', text: 'Я дорожу моментами, когда партнёр полностью занят только мной.' }
    },
    {
        a: { lang: 'help', text: 'Для меня забота — это дела, а не обещания: починили, приготовили, помогли.' },
        b: { lang: 'touch', text: 'Для меня забота — это объятия, прикосновение к руке и тепло рядом.' }
    },
    {
        a: { lang: 'words', text: 'Меня радует тёплое сообщение посреди рабочего дня.' },
        b: { lang: 'time', text: 'Меня радует, когда партнёр находит время на прогулку или разговор.' }
    },
    {
        a: { lang: 'gifts', text: 'Мне дорого, когда партнёр запоминает, что мне нравится, и дарит это.' },
        b: { lang: 'help', text: 'Мне дорого, когда партнёр замечает, что я устал, и сам помогает.' }
    },
    {
        a: { lang: 'time', text: 'Лучший вечер для меня — спокойный, вдвоём, с неспешным разговором.' },
        b: { lang: 'touch', text: 'Лучший вечер для меня — под одним пледом, рядом и в обнимку.' }
    },
    {
        a: { lang: 'words', text: 'После ссоры мне нужны добрые слова и признание, что я важен.' },
        b: { lang: 'help', text: 'После ссоры мне нужно, чтобы партнёр сделал шаг навстречу делом.' }
    },
    {
        a: { lang: 'gifts', text: 'Мне приятно получить маленький знак внимания: цветок, открытку, сладость.' },
        b: { lang: 'touch', text: 'Мне приятно, когда партнёр берёт меня за руку на ходу.' }
    }
];

const PERSONAL_TEXTS = {
    words: 'Любовь для вас звучит вслух. Искренние слова благодарности, поддержки и нежности дают вам ощущение, что вас ценят и понимают.',
    gifts: 'Любовь для вас выражается в знаках внимания. Даже самый маленький подарок говорит вам: обо мне думали и помнят, что мне нравится.',
    time: 'Любовь для вас — это внимание без остатка. Когда рядом нет телефона и спешки, вы чувствуете, что по-настоящему важны.',
    help: 'Любовь для вас звучит делами. Когда партнёр берёт на себя часть забот, вы чувствуете поддержку без лишних слов.',
    touch: 'Любовь для вас ощущается телом. Объятия, держание за руки и тепло рядом дают вам чувство безопасности и близости.'
};

const COMMON_TEXTS = {
    words: 'Вы оба слышите любовь в словах. Благодарность, комплименты и тёплые признания укрепляют вашу связь больше всего, поэтому говорите их друг другу почаще.',
    gifts: 'Вы оба чувствуете любовь через знаки внимания. Маленькие сюрпризы и подарки со смыслом показывают вам обоим, что о вас думают и помнят.',
    time: 'Вы оба цените безраздельное внимание. Вечера без телефонов, прогулки и неспешные разговоры для вас — лучшее признание в любви.',
    help: 'Вы оба понимаете любовь через заботу делом. Когда вы берёте на себя дела друг друга, вы без слов говорите: «я рядом, и мне не всё равно».',
    touch: 'Вы оба понимаете любовь через тепло рук и близость. Для вас обоих главные признания в любви — объятия, нежные касания и тихие моменты, когда вы просто рядом.'
};

const nameFirstInput = document.querySelector('.name-first');
const nameSecondInput = document.querySelector('.name-second');
const startButton = document.querySelector('.start-button');
const testStart = document.querySelector('.test-start');

const quiz = document.querySelector('.quiz');
const quizCount = document.querySelector('.quiz-count');
const quizPlayer = document.querySelector('.quiz-player');
const optionFirst = document.querySelector('.option-first');
const optionSecond = document.querySelector('.option-second');
const backButton = document.querySelector('.back-button');
const nextButton = document.querySelector('.next-button');

const handoff = document.querySelector('.handoff');
const handoffButton = document.querySelector('.handoff-button');

const results = document.querySelector('.results');
const resultNames = [
    document.querySelector('.result-name-first'),
    document.querySelector('.result-name-second')
];
const resultLanguages = [
    document.querySelector('.language-first'),
    document.querySelector('.language-second')
];
const resultTexts = document.querySelectorAll('.result-text');
const resultButtons = [
    document.querySelector('.result-button-first'),
    document.querySelector('.result-button-second')
];
const commonTitle = document.querySelector('.common-card > h2');
const commonText = document.querySelector('.common-card > p');
const commonLink = document.querySelector('.common-card > a');
const restartButton = document.querySelector('.restart-button');

let names = ['Партнёр 1', 'Партнёр 2'];
let player = 0;
let index = 0;
let answers = [[], []];

function cleanName(value, fallback) {
    const text = value.replace(/\s+/g, ' ').trim();
    return text || fallback;
}

function show(block) {
    block.classList.remove('hidden');
}
function hide(block) {
    block.classList.add('hidden');
}

function scrollToBlock(block) {
    block.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function joinNames(langs) {
    const list = langs.map((lang) => LANG_NAMES[lang]);
    if (list.length === 1) return list[0];
    return list.slice(0, -1).join(', ') + ' и ' + list[list.length - 1];
}

function fillTexts(block, langs, texts) {
    block.textContent = '';
    langs.forEach((lang) => {
        const part = document.createElement('span');
        part.className = 'text-part';
        part.textContent = texts[lang];
        block.appendChild(part);
    });
}

function startTest() {
    names = [
        cleanName(nameFirstInput.value, 'Партнёр 1'),
        cleanName(nameSecondInput.value, 'Партнёр 2')
    ];
    player = 0;
    index = 0;
    answers = [[], []];

    hide(testStart);
    hide(handoff);
    hide(results);
    show(quiz);

    renderQuestion();
    scrollToBlock(quiz);
}

function renderQuestion() {
    const question = QUESTIONS[index];
    const chosen = answers[player][index];
    const isLast = index === QUESTIONS.length - 1;

    quizCount.textContent = 'Вопрос ' + (index + 1) + ' из ' + QUESTIONS.length;
    quizPlayer.textContent = 'Отвечает ' + names[player];

    optionFirst.textContent = question.a.text;
    optionSecond.textContent = question.b.text;

    optionFirst.classList.toggle('chosen', chosen === 'a');
    optionSecond.classList.toggle('chosen', chosen === 'b');

    backButton.disabled = index === 0;
    nextButton.disabled = !chosen;

    if (!isLast) {
        nextButton.textContent = 'Далее';
    } else if (player === 0) {
        nextButton.textContent = 'Завершить';
    } else {
        nextButton.textContent = 'Показать результат';
    }
}

function chooseOption(letter) {
    answers[player][index] = letter;
    optionFirst.classList.toggle('chosen', letter === 'a');
    optionSecond.classList.toggle('chosen', letter === 'b');
    nextButton.disabled = false;
}

function goNext() {
    if (!answers[player][index]) return;

    if (index < QUESTIONS.length - 1) {
        index++;
        renderQuestion();
    } else if (player === 0) {
        showHandoff();
    } else {
        showResults();
    }
}

function goBack() {
    if (index === 0) return;
    index--;
    renderQuestion();
}

function showHandoff() {
    hide(quiz);
    show(handoff);
    scrollToBlock(handoff);
}

function startSecondPlayer() {
    player = 1;
    index = 0;
    hide(handoff);
    show(quiz);
    renderQuestion();
    scrollToBlock(quiz);
}

function getScores(playerNumber) {
    const scores = {};
    LANG_ORDER.forEach((lang) => {
        scores[lang] = 0;
    });

    QUESTIONS.forEach((question, i) => {
        const answer = answers[playerNumber][i];
        if (answer === 'a') scores[question.a.lang]++;
        if (answer === 'b') scores[question.b.lang]++;
    });

    return scores;
}

function getTopLangs(scores) {
    const max = Math.max(...LANG_ORDER.map((lang) => scores[lang]));
    return LANG_ORDER.filter((lang) => scores[lang] === max);
}

function showResults() {
    const scores = [getScores(0), getScores(1)];
    const tops = [getTopLangs(scores[0]), getTopLangs(scores[1])];

    for (let i = 0; i < 2; i++) {
        resultNames[i].textContent = names[i];
        resultLanguages[i].textContent = joinNames(tops[i]);
        fillTexts(resultTexts[i], tops[i], PERSONAL_TEXTS);
        resultButtons[i].href = 'ideas.html?lang=' + tops[i][0];
    }

    const sums = {};
    LANG_ORDER.forEach((lang) => {
        sums[lang] = scores[0][lang] + scores[1][lang];
    });
    const common = getTopLangs(sums);

    commonTitle.innerHTML = 'Ваш общий язык - <span></span>';
    commonTitle.querySelector('span').textContent = joinNames(common);
    fillTexts(commonText, common, COMMON_TEXTS);
    commonLink.href = 'ideas.html?lang=' + common[0];

    hide(quiz);
    hide(handoff);
    show(results);
    scrollToBlock(results);
}

function restart() {
    hide(results);
    hide(quiz);
    hide(handoff);
    show(testStart);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

startButton.addEventListener('click', startTest);

[nameFirstInput, nameSecondInput].forEach((input) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') startTest();
    });
});

optionFirst.addEventListener('click', () => chooseOption('a'));
optionSecond.addEventListener('click', () => chooseOption('b'));
nextButton.addEventListener('click', goNext);
backButton.addEventListener('click', goBack);
handoffButton.addEventListener('click', startSecondPlayer);
restartButton.addEventListener('click', restart);