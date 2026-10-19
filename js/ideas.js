const IDEAS = {
    words: [
        'Напишите друг другу письма от руки: что вы цените в партнёре и за что благодарны. Обменяйтесь ими за ужином и прочитайте вслух.',
        'Устройте вечер комплиментов: по очереди говорите друг другу по три тёплых слова о том, что заметили на этой неделе.',
        'Запишите голосовое послание на будущее: что вы чувствуете сейчас. Включите его в годовщину или в трудный день.',
        'Сходите на прогулку и расскажите, в какой момент вы поняли, что влюбились. Слушайте без шуток и перебиваний.',
        'Оставьте записки с признанием в местах, где партнёр найдёт их сам: в куртке, в книге, в кружке.',
        'Придумайте друг другу «звания» и торжественно вручите их за ужином: «Самый тёплый человек года».',
        'Составьте вместе список из 20 причин, почему вы вместе, и повесьте его на видное место.',
        'Устройте вечер вопросов: «Что я делаю такого, за что ты меня любишь?» Отвечайте честно и подробно.'
    ],
    gifts: [
        'Соберите коробочку воспоминаний: билеты, фото, открытка с первого свидания и записка о том, что каждая вещь для вас значит.',
        'Приготовьте подарок-квест: оставьте подсказки по дому, а в конце ждёт маленький сюрприз.',
        'Подарите любимый десерт партнёра и украсьте его свечой. Повода не нужно.',
        'Сделайте мини-альбом из ваших фотографий с короткими подписями к каждой.',
        'Купите билеты на концерт или спектакль и вручите их в красивом конверте с запиской.',
        'Выберите растение и дайте ему имя. Ухаживайте за ним вдвоём, и пусть оно напоминает о вас.',
        'Найдите в магазине мелочь, которая напомнила о партнёре, и подарите её в тот же день.',
        'Подарите «сертификат на желание»: массаж, завтрак в постель или вечер любимого фильма по выбору.'
    ],
    time: [
        'Устройте вечер без телефонов: ужин при свечах, настольная игра и разговоры до поздней ночи.',
        'Отправляйтесь на рассвет или закат в красивое место с термосом чая и тёплым пледом.',
        'Приготовьте новое блюдо вместе: выберите рецепт, купите продукты и не торопитесь.',
        'Устройте свидание-экспромт: сядьте на первый автобус и выйдите там, где вам захочется погулять.',
        'Сходите в музей или на выставку, а потом обсудите за кофе, что понравилось больше всего.',
        'Пройдите по маршруту вашего первого свидания и вспомните каждую деталь.',
        'Разложите на полу подушки, поставьте любимую музыку и просто проведите вечер за разговором.',
        'Устройте пикник в парке: корзина с закусками, плед и никаких дел на этот день.'
    ],
    help: [
        'Возьмите на себя все домашние дела партнёра на один вечер. Пусть он отдохнёт, а вы всё сделаете.',
        'Приготовьте завтрак и принесите его в постель, пока партнёр ещё спит.',
        'Выясните, что давно откладывается у партнёра, и сделайте это вместе или за него.',
        'Подготовьте партнёру всё к трудному дню: соберите сумку, заправьте машину, налейте термос с чаем.',
        'Устройте вечер заботы: ванна, приятная музыка, ужин и никаких обязанностей.',
        'Прибирайтесь вместе под любимый плейлист и превратите уборку в маленькую вечеринку.',
        'Запишите партнёра к врачу или мастеру, на которого давно не хватало времени, и сходите вместе.',
        'Приготовьте ужин и сервируйте стол так, как будто вы в ресторане. Мойте посуду тоже вы.'
    ],
    touch: [
        'Устройте кинопоказ дома под одним пледом: фильм, попкорн и обнимашки.',
        'Включите песню, которая напоминает о вас двоих, и танцуйте, прижавшись друг к другу. Музыка может быть любая.',
        'Сделайте друг другу неспешный массаж рук или плеч с ароматным маслом и тихой музыкой.',
        'Идите на прогулку, держась за руки, и не отпускайте всю дорогу.',
        'Устройте вечер на балконе или крыше: тёплый плед, горячий чай и объятия под звёздами.',
        'Потанцуйте медленный танец на кухне, пока готовится ужин.',
        'Утром полежите вдвоём лишних 15 минут, не доставая телефон. Просто будьте рядом.',
        'Поиграйте в «молчаливые признания»: пишите пальцем слова на спине друг у друга и угадывайте их.'
    ]
};

const STORAGE_KEY = 'lovemap-saved-ideas';

const languageOptions = document.querySelectorAll('.language-option');
const hint = document.querySelector('.hint');
const generateButton = document.querySelector('.generate-button');
const ideaBlock = document.querySelector('.idea');
const ideaCard = document.querySelector('.idea-card');
const ideaText = document.querySelector('.idea-text');
const saveButton = document.querySelector('.save-button');
const savedCards = document.querySelector('.saved-cards');

let currentLang = null;
let currentIdea = '';
let savedIdeas = loadSaved();

function loadSaved() {
    try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}

function writeSaved() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIdeas));
    } catch (error) {
    }
}

function show(block) {
    block.classList.remove('hidden');
}
function hide(block) {
    block.classList.add('hidden');
}

function isSaved(text) {
    return savedIdeas.some((idea) => idea.text === text);
}

function selectLanguage(lang) {
    if (!IDEAS[lang]) return;
    currentLang = lang;
    languageOptions.forEach((option) => {
        const active = option.dataset.lang === lang;
        option.classList.toggle('chosen', active);
        option.setAttribute('aria-pressed', active);
    });
    hide(hint);
}

function pickIdea() {
    const list = IDEAS[currentLang];
    let idea;
    do {
        idea = list[Math.floor(Math.random() * list.length)];
    } while (list.length > 1 && idea === currentIdea);
    return idea;
}

function generateIdea() {
    if (!currentLang) {
        show(hint);
        return;
    }
    currentIdea = pickIdea();
    ideaText.textContent = currentIdea;
    updateHeart();

    show(ideaBlock);
    ideaCard.classList.remove('fresh');
    void ideaCard.offsetWidth;
    ideaCard.classList.add('fresh');
}

function updateHeart() {
    const saved = isSaved(currentIdea);
    saveButton.classList.toggle('is-saved', saved);
    saveButton.setAttribute('aria-pressed', saved);
    saveButton.setAttribute('aria-label', saved ? 'Убрать из сохранённых' : 'Сохранить идею');
}

function toggleSave() {
    if (!currentIdea) return;

    if (isSaved(currentIdea)) {
        savedIdeas = savedIdeas.filter((idea) => idea.text !== currentIdea);
    } else {
        savedIdeas.unshift({ text: currentIdea, lang: currentLang });
    }
    writeSaved();
    updateHeart();
    renderSaved(currentIdea);
}

function deleteIdea(text, card) {
    savedIdeas = savedIdeas.filter((idea) => idea.text !== text);
    writeSaved();
    if (text === currentIdea) updateHeart();

    card.classList.add('removing');
    setTimeout(() => renderSaved(), 300);
}

function renderSaved(newText) {
    savedCards.textContent = '';

    if (savedIdeas.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'saved-empty';
        empty.textContent = 'Сохраняйте сюда понравившиеся идеи: нажмите на сердечко в карточке, и они появятся здесь.';
        savedCards.appendChild(empty);
        return;
    }

    savedIdeas.forEach((idea) => {
        const card = document.createElement('div');
        card.className = 'saved-card';
        if (idea.text === newText) card.classList.add('new');

        const text = document.createElement('p');
        text.className = 'saved-text';
        text.textContent = idea.text;

        const button = document.createElement('button');
        button.className = 'delete-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Удалить идею');
        const icon = document.createElement('img');
        icon.src = 'image/delete.png';
        icon.alt = '';
        button.appendChild(icon);
        button.addEventListener('click', () => deleteIdea(idea.text, card));

        card.appendChild(text);
        card.appendChild(button);
        savedCards.appendChild(card);
    });
}

languageOptions.forEach((option) => {
    option.setAttribute('aria-pressed', 'false');
    option.addEventListener('click', () => selectLanguage(option.dataset.lang));
});
generateButton.addEventListener('click', generateIdea);
saveButton.addEventListener('click', toggleSave);

const startLang = new URLSearchParams(window.location.search).get('lang');
if (startLang) selectLanguage(startLang);

renderSaved();