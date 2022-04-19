const DEFAULT_VALUE = 30;
const GRID_WIDTH = 5;
const GRID_HEIGHT = 6;
const PROPERTIES = {
    isMoved: false,
    isTurned: false,
    isActive: false,
    isTarget: false,
    isDead: false,
    x: null,
    y: null,
    hp: null
};
let DECK = {
    currentValue: DEFAULT_VALUE,
    cards: new ObservableArray([])
};
let AI = {
    cards: new ObservableArray([])
};
let LOGS = new ObservableArray([]);
let GAME = new Observe({
    turn: 0,
    activePlayer: null,
    phase: null,
    activeCard: null,
    currentAction: null
});
let matrix = [];

window.onload = () => {
    let scene = document.getElementById('scene');
    Parallax.initialise(scene);

    renderPhaseZero();

    DECK.cards.addEventListener('itemadded', changeDeck);
    DECK.cards.addEventListener('itemremoved', changeDeck);

    LOGS.addEventListener('itemadded', () => {
        let logs = document.getElementById('logs');
        logs.classList.add('visible');
        logs.innerHTML += LOGS[LOGS.length - 1] + '<br />';
        logs.scrollTop = logs.scrollHeight;
    });

    window.addEventListener('click', (event) => {
        if (!event.target.closest('.card') && !event.target.closest('#actions')) {
            GAME.activeCard = null;
            DECK.cards.forEach((card) => {
                card.isActive = false;
                card.isTarget = false;
            });
        }
    });

    GAME.observe('activeCard', () => {
        DECK.cards.forEach((card) => {
            if (card.index !== GAME.activeCard) {
                card.isActive = false;
                card.isTarget = false;
            }
        });
        AI.cards.forEach((card) => {
            if (card.index !== GAME.activeCard) {
                card.isActive = false;
                card.isTarget = false;
            }
        });
        let actions = document.getElementById('actions');
        if (GAME.activeCard === null) {
            actions && actions.classList.remove('visible');
        } else {
            actions && actions.classList.add('visible');
        }
    });
    GAME.observe('turn', () => {
        let currentPlayer = GAME.activePlayer;
        let currentStatus = currentPlayer === 1 ? 'Ваш ход' : 'Ход соперника';
        document.getElementById('status').textContent = 'Ход: ' + GAME.turn + '. ' + currentStatus + '.';
    });
    GAME.observe('activePlayer', () => {
        let currentPlayer = GAME.activePlayer;
        let currentStatus = currentPlayer === 1 ? 'Ваш ход' : 'Ход соперника';
        document.getElementById('status').textContent = 'Ход: ' + GAME.turn + '. ' + currentStatus + '.';
        if (currentPlayer === 1) {
            DECK.cards.forEach((card) => {
                card.isMoved = false;
                card.isTurned = false;
                card.isActive = false;
            });
        } else {
            AI.cards.forEach((card) => {
                card.isMoved = false;
                card.isTurned = false;
                card.isActive = false;
            });

            setTimeout(() => {
                _.each(AI.cards, (activeCard, index) => {
                    setTimeout(function () {
                        activeCard.isActive = true;
                        let trace;
                        let traceTargetCard;
                        let targetCard;
                        let targetAttackCard;
                        let closeDistance = 10;

                        function neighbourAttackCheck() {
                            let xDistance = 10;
                            let yDistance = 10;
                            let distance = 10;
                            let attackCard;
                            _.each(DECK.cards, (card) => {
                                if ((Math.abs(activeCard.x - card.x) + Math.abs(activeCard.y - card.y)) < distance) {
                                    attackCard = card;
                                    xDistance = Math.abs(activeCard.x - card.x);
                                    yDistance = Math.abs(activeCard.y - card.y);
                                    distance = xDistance + yDistance;
                                }
                            });
                            return ((xDistance < 2 && !(yDistance >= 2)) || (yDistance < 2) && !(xDistance >= 2)) ? attackCard : null;
                        }

                        _.each(DECK.cards, (card) => {
                            let newMatrix = createPathMatrix(activeCard, card);
                            let checkPath = pathfinder(newMatrix, activeCard.y, activeCard.x, card.y, card.x);
                            if (checkPath[1]) {
                                trace = backtrace(newMatrix, activeCard.y, activeCard.x, card.y, card.x);
                                if (closeDistance > trace.length) {
                                    closeDistance = trace.length;
                                    targetCard = card;
                                    traceTargetCard = trace;
                                    traceTargetCard.pop();
                                    traceTargetCard.shift();
                                }
                            }
                        });

                        if (targetCard && traceTargetCard) {
                            targetAttackCard = neighbourAttackCheck();
                            if (targetAttackCard) {
                                attacking(activeCard, targetAttackCard);
                            } else if (traceTargetCard.length) {
                                let newY,
                                    newX;
                                if (traceTargetCard[activeCard.move-1]) {
                                    newY = traceTargetCard[activeCard.move-1][0];
                                    newX = traceTargetCard[activeCard.move-1][1];
                                } else {
                                    newY = traceTargetCard[traceTargetCard.length-1][0];
                                    newX = traceTargetCard[traceTargetCard.length-1][1];
                                }

                                let targetNode = document.querySelectorAll('[data-colrow~="' + newX + newY + '"]')[0];
                                if (targetNode.childNodes.length === 0) {
                                    // delete old node
                                    activeCard.cardNode.parentNode.removeChild(activeCard.cardNode);

                                    renderCard(activeCard, targetNode);
                                    if (targetNode.colrow) {
                                        activeCardcard.x = container.dataset.col - 0;
                                        activeCardcard.y = container.dataset.row - 0;
                                    }

                                    if (GAME.phase === 3) {
                                        activeCard.isMoved = true;
                                    }

                                    targetAttackCard = neighbourAttackCheck();
                                    if (targetAttackCard) {
                                        attacking(activeCard, targetAttackCard);
                                    } else {
                                    }
                                }
                            } else {
                                targetAttackCard = neighbourAttackCheck();
                                if (targetAttackCard) {
                                    attacking(activeCard, targetAttackCard);
                                }
                            }
                        } else {
                            targetAttackCard = neighbourAttackCheck();
                            if (targetAttackCard) {
                                attacking(activeCard, targetAttackCard);
                            }
                        }

                        activeCard.isActive = false;
                        GAME.activeCard = null;

                        // смена хода
                        if (AI.cards.length - 1 === index) {
                            GAME.turn = GAME.turn + 1;
                            GAME.activePlayer = 1;
                        }
                    }, index * 1000)
                });
            }, 500);

        }
    });
    GAME.observe('currentAction', () => {
        if (GAME.currentAction === 'attack') {
            disableMoveCells();
        }
    });
    GAME.observe('phase', () => {
        document.body.className = 'phase' + GAME.phase;
        if (GAME.phase === 3) {
            let AICells = ['02', '12', '22', '32', '42'];
            for (let iai = 0; iai < AICells.length; iai++) {
                let AICard = _.findWhere(ALL_CARDS, {'id': _.random(1, Object.keys(ALL_CARDS).length)});
                let properties = PROPERTIES;
                properties.hp = AICard.hp;
                properties.index = iai;
                properties.enemy = true;
                AI.cards.push(new Observe(_.create(AICard, properties)));
            }
            AI.cards.forEach((card, i) => {
                let AICell;
                _.each(document.getElementsByClassName('cell'), (cell) => {
                    if (cell.dataset.colrow === AICells[i]) {
                        AICell = cell;
                    }
                });
                renderCard(AI.cards[i], AICell);
                observeCard(card);
            });

            DECK.cards.forEach((card) => {
                renderCard(card);
                observeCard(card);
            });

            changeMatrix();

            function observeCard(card) {
                card.observe('isMoved', () => {
                    if (card.isMoved) {
                        disableMoveCells();
                        LOGS.push('Карта ' + card.name + ' переместилась');
                    }
                });
                card.observe('isActive', () => {
                    if (!card.isActive) {
                        card.cardNode.classList.remove('active');
                    } else {
                        card.cardNode.classList.add('active');
                        if (!card.isMoved) {
                            findMoveCells(card);
                        }
                    }
                });
                card.observe('isTarget', () => {
                    if (card.isTarget) {
                        card.cardNode.classList.add('target');
                    } else {
                        card.cardNode.classList.remove('target');
                    }
                });
                card.observe('isTurned', () => {
                    if (card.isTurned) {
                        card.isActive = false;
                        GAME.activeCard = null;
                        card.cardNode.classList.add('turned');
                        LOGS.push('Карта ' + card.name + ' походила');
                    } else {
                        card.cardNode.classList.remove('turned');
                    }
                });
                card.observe('isDead', () => {
                    if (card.isDead) {
                        card.cardNode.parentNode.removeChild(card.cardNode);
                        let deckArray = (card.enemy) ? AI.cards : DECK.cards;
                        deckArray.splice(card.index, 1);
                        LOGS.push('Карта ' + card.name + ' умерла');
                    }
                });
                card.observe('hp', () => {
                    if (card.hp > 0) {
                        card.cardNode.getElementsByClassName('hp')[0].innerHTML = '<div class="img"></div><div class="number">' + card.hp + '</div>';
                        LOGS.push('Карта ' + card.name + ' получила урон');
                    } else {
                        card.isDead = true;
                    }
                });
                card.observe('x', () => {
                    changeMatrix();
                });
                card.observe('y', () => {
                    changeMatrix();
                });
            }
        }
    });
};

function changeDeck() {
    if (GAME.phase === 1) {
        let gistagramContainer = document.getElementById('gistagram');
        DECK.cards.forEach((card, index)=>{
            _.filter(DECK.cards, function (colorCard) {
                if (_.contains([colorCard.color], card.color)) {
                   if (document.querySelectorAll('[data-color~="' + card.color + '"]')[0] === undefined) {
                       let gistagramElement = document.createElement('div');
                       gistagramElement.classList.add('gistagram-element');
                       let gistagramPercent = document.createElement('div');
                       gistagramPercent.classList.add('gistagram-percent');
                       gistagramPercent.dataset.color = card.color;
                       gistagramPercent.classList.add('color' + card.color);
                       gistagramElement.appendChild(gistagramPercent);
                       gistagramContainer.appendChild(gistagramElement);
                   }
                   return colorCard;
                }
            });
            card.index = index;
            card.cardNode.dataset.index = index;
        });

        _.each(document.getElementsByClassName('gistagram-percent'), (gistagram) => {
            let color = gistagram.dataset.color - 0;
            let colorCards = _.filter(DECK.cards, function (colorCard) {
                if (_.contains([colorCard.color], color)) {
                    return colorCard;
                }
            });
            if (colorCards.length > 0) {
                gistagram.style.height = ((colorCards.length / DECK.cards.length) * 100) + '%';
            } else {
                gistagram.style.height = '0';
            }
        });

        document.getElementsByClassName('value-left')[0].getElementsByTagName('h3')[0].innerHTML = 'Осталось монет: ' + DECK.currentValue;
        // document.getElementsByClassName('value-cost')[0].getElementsByTagName('h3')[0].innerHTML = (DEFAULT_VALUE - DECK.currentValue);
        document.getElementById('your-deck').style.marginTop = 20 + (60 * DECK.cards.length) + 'px';
        document.getElementById('your-deck').style.height = 50 - (DECK.cards.length * 2) + '%';
    }
}

function removeDeckedCard(yPosition) {
    if (GAME.phase === 1) {
        _.each(document.getElementsByClassName('decked'), (card) => {
            let newY = card.dataset.y - 0;
            let cuurentYPosition = card.getBoundingClientRect().y;
            if (cuurentYPosition > yPosition) {
                newY = newY - 60;
                animate({
                    duration: 100,
                    timing: function (timeFraction) {
                        return Math.pow(timeFraction, 2);
                    },
                    draw: function (progress) {
                        card.style.transform = 'translate(' + card.dataset.x + 'px,' + ((card.dataset.y - 0) - (progress*60))  + 'px)';
                    },
                    callback: function () {
                        card.style.transform = 'translate(' + card.dataset.x + 'px,' + newY  + 'px)';
                        card.dataset.y = newY;
                    }
                });
            }
        })
    }
}

function renderSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.add('box');
    DECK.currentValue = DEFAULT_VALUE;
    sidebar.innerHTML = '<h3 id="sidebar-title">Ваша дека</h3>';
    deckContainer = document.createElement('div');
    deckContainer.id = 'your-deck';
    let actions = document.createElement('div');
    actions.id = 'actions';
    let valueContainer = document.createElement('div');
    valueContainer.id = 'value';
    let gistagramСontainer = document.createElement('div');
    gistagramСontainer.id = 'gistagram';
    valueContainer.appendChild(gistagramСontainer);
    valueContainer.innerHTML += '<div class="value-left">' + '<h3>Осталось монет: ' + DECK.currentValue + '</h3>' + '</div>';
    // valueContainer.innerHTML += '<div class="value-cost">Стоимость: <br />' + '<h3>' + (DEFAULT_VALUE - DECK.currentValue) + '</h3>' + '</div>';
    let button = renderButton('button', 'Далее');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (DECK.cards.length === 0) {
            if (GAME.phase === 1) {
                alertBox.show('Выберете хотя бы одну карту');
            }
        } else {
            if (GAME.phase === 1) {
                renderPhaseTwo();
            } else if (GAME.phase === 2) {
                if (_.findWhere(DECK.cards, {x: null, y: null})) {
                    alertBox.show('Расставьте все карты');
                } else {
                    renderPhaseThree();
                }
            }
        }
    });
    sidebar.appendChild(valueContainer);
    sidebar.appendChild(deckContainer);
    actions.appendChild(button);
    sidebar.appendChild(actions);
}

function renderButton(id, text) {
    let button = document.createElement('button');
    button.id = id;
    let p = document.createElement('p');
    let bg = document.createElement('span');
    bg.className = 'bg';
    p.appendChild(bg);
    let base = document.createElement('span');
    base.className = 'base';
    p.appendChild(base);
    let textSpan = document.createElement('span');
    textSpan.className = 'text';
    textSpan.id = 'text-button';
    textSpan.innerText = text;
    p.appendChild(textSpan);
    button.appendChild(p);
    return button;
}

function renderPhaseZero() {
    GAME.phase = 0;
    let menu = document.getElementById('menu');
    let list = document.getElementById('list');
    if (list.childNodes.length === 0) {
        let play = document.createElement('a');
        play.classList.add('link');
        play.textContent = 'Играть';
        play.addEventListener('click', (e)=>{
            e.preventDefault();
            renderPhaseOne();
            renderSidebar();
            menu.style.display = 'none';
        });
        list.appendChild(play);
        let deck = document.createElement('a');
        deck.classList.add('link');
        deck.classList.add('disabled');
        deck.textContent = 'Колода';
        list.appendChild(deck);
        let settings = document.createElement('a');
        settings.classList.add('link');
        settings.classList.add('disabled');
        settings.textContent = 'Настройки';
        list.appendChild(settings);
    }
}

function renderPhaseOne() {
    GAME.phase = 1;
    Parallax.disable();
    let board = document.getElementById('board'),
        cardsContainer = document.createElement('div');
    cardsContainer.id = 'cards';
    let titleFirstStage = document.createElement('div');
    titleFirstStage.className = 'title';
    titleFirstStage.innerHTML = '<h3>Стадия Набора</h3>';
    board.classList.add('box');
    board.appendChild(titleFirstStage);
    let inputSearch = document.createElement('input');
    inputSearch.type = 'text';
    inputSearch.id = 'search';
    let select = document.createElement('select');
    select.id = 'select';
    select.size = 5;
    let optionName = document.createElement('option');
    optionName.value = 'name';
    optionName.innerText = 'Имя';
    select.appendChild(optionName);
    let optionColor = document.createElement('option');
    optionColor.value = 'color';
    optionColor.innerText = 'Цвет';
    select.appendChild(optionColor);
    let optionAttack = document.createElement('option');
    optionAttack.value = 'attack';
    optionAttack.innerText = 'Атака';
    select.appendChild(optionAttack);
    let optionHp = document.createElement('option');
    optionHp.value = 'hp';
    optionHp.innerText = 'Количество жизней';
    select.appendChild(optionHp);
    let optionRarity = document.createElement('option');
    optionRarity.value = 'rarity';
    optionRarity.innerText = 'Редкость';
    select.appendChild(optionRarity);
    let optionPrice = document.createElement('option');
    optionPrice.value = 'value';
    optionPrice.innerText = 'Стоимость';
    select.addEventListener('change', (event) => {
        ALL_CARDS = _.sortBy(ALL_CARDS, event.target.value);
        if (_.contains(['attack', 'hp', 'value'], event.target.value)){
            ALL_CARDS = ALL_CARDS.reverse();
        }
        renderCardList(cardsContainer);
    });
    let selectCacheValue;
    select.addEventListener('click', () => {
        if (selectCacheValue === select.value) {
            ALL_CARDS = ALL_CARDS.reverse();
            renderCardList(cardsContainer);
        }
        selectCacheValue = select.value;
    });
    inputSearch.oninput = function () {
        let valueName = this.value.trim();
        let valueNameReg = RegExp(valueName, 'i');
        let arrayItems = document.querySelectorAll('.name');
        if (valueNameReg != '') {
            arrayItems.forEach(function (elem) {
                if (elem.innerText.search(valueNameReg) == -1 ) {
                    let parentNode1 = elem.parentNode;
                    let parentNode2 = parentNode1.parentNode;
                    let parentNode3 = parentNode2.parentNode;
                    parentNode3.classList.add('hide');
                }
                else {
                    let parentNode1 = elem.parentNode;
                    let parentNode2 = parentNode1.parentNode;
                    let parentNode3 = parentNode2.parentNode;
                    parentNode3.classList.remove('hide');
                }
            })
        }
        else {
            arrayItems.forEach(function (elem) {
                let parentNode1 = elem.parentNode;
                let parentNode2 = parentNode1.parentNode;
                let parentNode3 = parentNode2.parentNode;
                parentNode3.classList.remove('hide');
            })
        }
    };
    select.appendChild(optionPrice);
    board.appendChild(inputSearch);
    board.appendChild(select);
    renderCardList(cardsContainer);
    board.appendChild(cardsContainer);
}

function renderCardList(cardsContainer) {
    cardsContainer.innerHTML = '';
    ALL_CARDS.forEach((card) => {
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        if (card.unique) {
            renderCard(card, cardContainer);
        } else {
            renderCard(card, cardContainer);
            renderCard(card, cardContainer);
            renderCard(card, cardContainer);
        }
        cardsContainer.appendChild(cardContainer);
    });
}

function renderPhaseTwo() {
    GAME.phase = 2;
    let board = document.getElementById('board');
    board.innerHTML = '';
    let valueContainer = document.getElementById('value');
    valueContainer.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.id = 'title';
    h3.innerHTML = 'Стадия Расстановки';
    let grid = document.createElement('div');
    grid.id = 'grid';
    let gridBody = document.createElement('div');
    gridBody.id = 'grid-body';
    for (let jt = 0; jt < GRID_HEIGHT; jt++) { // высота грида
        let row = document.createElement('div');
        row.classList.add('row');
        for (let it = 0; it < GRID_WIDTH; it++) { // длина грида
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = jt;
            cell.dataset.col = it;
            cell.dataset.colrow = it + '' + jt;
            cell.addEventListener('drop', (event) => {
                drop(event);
            });
            cell.addEventListener('dragover', (event) => {
                allowDrop(event);
            });
            cell.addEventListener('click', (event) => {
                event.preventDefault();
                movement(event, GAME.activeCard);
            });
            row.appendChild(cell);
        }
        gridBody.appendChild(row);
    }
    grid.appendChild(gridBody);
    board.appendChild(h3);
    board.appendChild(grid);
    let deckContainer = document.getElementById('your-deck');
    deckContainer.style.marginTop = '';
    deckContainer.style.height = '';
    DECK.cards.forEach((card) => {
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        renderCard(card, cardContainer);
        deckContainer.appendChild(cardContainer);
    });
}

function renderPhaseThree() {
    GAME.phase = 3;
    document.getElementById('your-deck').innerHTML = '';
    let title = document.getElementById('title');
    title.innerHTML = 'Игра';
    let sidebarTitle = document.getElementById('sidebar-title');
    sidebarTitle.innerHTML = 'Инфо <br /> &nbsp';
    let button = document.getElementById('button');
    document.getElementById('text-button').textContent = 'Передать ход';
    button.addEventListener('click', (event) => {
        event.preventDefault();
        GAME.activePlayer = 2;
    });
    let sidebar = document.getElementById('sidebar');
    let status = document.createElement('div');
    status.id = 'status';
    sidebar.appendChild(status);
    GAME.turn = 1;
    let actions = document.getElementById('actions');

    let attackButton = renderButton('attack', 'Атаковать');
    attackButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (GAME.activeCard !== null) {
            let card = _.findWhere(DECK.cards, {'index': GAME.activeCard});
            neighbourAttackCheck(matrix, card.x, card.y, function (xEnemyCard, yEnemyCard) {
                let targetCard = _.findWhere(AI.cards, {'x': xEnemyCard, 'y': yEnemyCard});
                targetCard.isTarget = true;
                GAME.currentAction = 'attack';
            });
        }
    });
    actions.appendChild(attackButton);
    sidebar.appendChild(actions);
    let logs = document.createElement('div');
    logs.id = 'logs';
    sidebar.appendChild(logs);
    GAME.activePlayer = 1;
}

function renderCard(card, container) {
    if (!container && card.x && card.y) {
        container = document.querySelectorAll('[data-colrow~="' + card.x + card.y + '"]')[0];
    }
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    cardContainer.style.backgroundImage = 'url("' + card.img; +'")';
    cardContainer.style.backgroundRepeat = "no-repeat";
    cardContainer.style.backgroundSize = '110%';
    cardContainer.style.backgroundPositionX = '0%';
    cardContainer.style.backgroundPositionY = '0%';
    if (card.isActive && GAME.phase === 3) {
        cardContainer.classList.add('active');
    }
    if (card.enemy) {
        cardContainer.classList.add('enemy');
    } else {
        cardContainer.classList.add('your');
    }

    function findCardDeck(deck, findValue) {
        return _.filter(deck, function (card) {
            if (_.contains(card.name, findValue)) {
                return card;
            }
        });
    }
    let attack = document.createElement('div');
    let hp = document.createElement('div');
    let value = document.createElement('div');
    let name = document.createElement('div');
    let move = document.createElement('div');
    let description = document.createElement('div');
    let attributesCard = document.createElement('div');
    let gradient = document.createElement('div');
    let rarity = document.createElement('div');
    let klass = document.createElement('div');
    name.classList.add('name');
    name.textContent = card.name;
    value.classList.add('value');
    value.innerHTML = '<div class="rhombus"></div>' + '<div class="price">' + card.value + '</div>' + '<div class="idcard">' + '#' + card.id + '</div>';
    if (card.color === 1) {
        value.classList.add('green');
    }
    if (card.color === 2) {
        value.classList.add('red');
    }
    if (card.color === 3) {
        value.classList.add('blue');
    }
    if (card.color === 4) {
        value.classList.add('gray');
    }
    if (card.color === 5) {
        value.classList.add('violet');
    }
    if (card.color === 6) {
        value.classList.add('black');
    }
    // if (card.color === 7) {
    //     value.classList.add('white');
    // }
    attack.classList.add('attack', 'border');
    attack.innerHTML = '<div class="img"></div><div class="number">' + card.attack +'</div>';
    hp.classList.add('hp', 'border');
    hp.innerHTML = '<div class="img"></div><div class="number">' + card.hp +'</div>';
    move.classList.add('move', 'border');
    move.innerHTML = '<div class="img"></div><div class="number">' + card.move +'</div>';
    if (card.description !== undefined) {
        description.classList.add('description');
        description.innerHTML = card.description;
    }
    klass.classList.add('klass');
    if (card.klass !== undefined) {
        klass.innerHTML = card.klass;
    }
    if (card.klass === undefined) {
        klass.innerText = '';
    }
    attributesCard.classList.add('attributes');
    gradient.classList.add('gradient');
    rarity.classList.add('rarity');
    if (card.rarity === 1) {
        rarity.innerHTML = '<img src="static/rarity.svg">' + '<img src="static/star.svg">' + '<img src="static/star.svg">' + '<img src="static/star.svg">' + '<img src="static/star.svg">';
    }
    if (card.rarity === 2) {
        rarity.innerHTML = '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/star.svg">' + '<img src="static/star.svg">' + '<img src="static/star.svg">';
    }
    if (card.rarity === 3) {
        rarity.innerHTML = '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/star.svg">' + '<img src="static/star.svg">';
    }
    if (card.rarity === 4) {
        rarity.innerHTML = '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/star.svg">';
    }
    if (card.rarity === 5) {
        rarity.innerHTML = '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">' + '<img src="static/rarity.svg">';
    }
    cardContainer.dataset.id = card.id;
    if (card.index !== undefined) cardContainer.dataset.index = card.index;
    cardContainer.addEventListener('click', (event) => {
        event.preventDefault();
        if (GAME.phase === 3) {
            if (card.isTarget) {
                if (GAME.currentAction === 'attack') {
                    let activeCard = _.findWhere(DECK.cards, {'isActive': true});
                    AI.cards.forEach((card) => {
                        card.isTarget = false;
                    });
                    attacking(activeCard, card);
                }
            } else if (card.isTurned === false && !card.enemy) {
                card.isActive = true;
                GAME.activeCard = card.index;
            }
        }
    });
    let close = document.createElement('div');
    close.classList.add('close');
    close.addEventListener('click', () => {
        cardContainer.classList.remove('decked');
        let x = cardContainer.dataset.x;
        let y = cardContainer.dataset.y;
        let beforeAnimationYPosition = cardContainer.getBoundingClientRect().y;
        animate({
            duration: 100,
            timing: function (timeFraction) {
                return Math.pow(timeFraction, 2);
            },
            draw: function (progress) {
                cardContainer.style.transform = 'translate(' + ((1-progress)*x) + 'px,' + ((1-progress)*y) + 'px)';
            },
            callback: function () {
                cardContainer.style.zIndex = '0';
                cardContainer.style.zIndex = '0';
                xPosition = 0;
                yPosition = 0;
                cardContainer.dataset.x = 0;
                cardContainer.dataset.y = 0;
                DECK.currentValue = DECK.currentValue + card.value;
                DECK.cards.splice(_.findLastIndex(DECK.cards, {index: card.cardNode.dataset.index-0}), 1);
                removeDeckedCard(beforeAnimationYPosition);
            }
        });
    });
    cardContainer.appendChild(close);
    cardContainer.appendChild(value);
    gradient.appendChild(name);
    gradient.appendChild(klass);
    attributesCard.appendChild(attack);
    attributesCard.appendChild(hp);
    attributesCard.appendChild(move);

    gradient.appendChild(attributesCard);
    cardContainer.appendChild(gradient);
    card.description && gradient.appendChild(description);
    gradient.appendChild(rarity);
    // cardContainer.draggable = true;
    // cardContainer.addEventListener('dragstart', (event) => {
    //     if (GAME.phase !== 1 && !card.isMoved) {
    //         card.isActive = true;
    //         drag(event);
    //     }
    // });
    // cardContainer.addEventListener('dragend', (event) => {
    //     if (GAME.phase !== 1) {
    //         card.isActive = false;
    //         dragEnd(event);
    //     }
    // });

    cardContainer.addEventListener('mousedown', (event) => {
        if ((GAME.phase === 1 && !cardContainer.classList.contains('decked')) ||
            (GAME.phase === 2) ||
            (GAME.phase === 3 && !card.isMoved && !card.enemy && !card.isTurned)) {
            dragInit(event, cardContainer);
        }
    });
    container.appendChild(cardContainer);
    if (container.dataset.colrow) {
        card.x = container.dataset.col - 0;
        card.y = container.dataset.row - 0;
    }
    if (GAME.phase === 1) {
        if (cardContainer.parentNode.childNodes && cardContainer.parentNode.childNodes.length === 2) {
            cardContainer.style.left = '2px';
            cardContainer.style.top = '2px';
            cardContainer.style.zIndex = '999991';
        } else if (cardContainer.parentNode.childNodes && cardContainer.parentNode.childNodes.length === 3) {
            cardContainer.style.left = '4px';
            cardContainer.style.top = '4px';
            cardContainer.style.zIndex = '999992';
        }
    } else if (GAME.phase === 2) {
        cardContainer.classList.add('decked');
    } else if (GAME.phase === 3) {
        cardContainer.classList.add('celled');
    }
    card.cardNode = cardContainer;
    return cardContainer;
}

// error
let alertBox = {
    show: function (msg) {
        let option = {
            closeTime: 5000,
            persistent: false,
            hideCloseButton: false
        };
        let alertArea = document.querySelector('#alert-area'),
            alertBox = document.createElement('div'),
            alertContent = document.createElement('div'),
            alertClose = document.createElement('a'),
            alertClass = this;
        alertContent.classList.add('alert-content');
        alertContent.innerText = msg;
        alertClose.classList.add('alert-close');
        alertClose.setAttribute('href', '#');
        alertBox.classList.add('alert-box');
        alertBox.appendChild(alertContent);
        if (!option.hideCloseButton || typeof option.hideCloseButton === 'undefined') {
            alertBox.appendChild(alertClose);
        }
        alertArea.appendChild(alertBox);
        alertClose.addEventListener('click', (event) => {
            event.preventDefault();
            alertClass.hide(alertBox);
        });
        if (!option.persistent) {
            let alertTimeout = setTimeout(() => {
                alertClass.hide(alertBox);
                clearTimeout(alertTimeout);
            }, option.closeTime);
        }
    },
    hide: function (alertBox) {
        alertBox.classList.add('hide');
        let disperseTimeout = setTimeout(() => {
            alertBox.parentNode && alertBox.parentNode.removeChild(alertBox);
            clearTimeout(disperseTimeout);
        }, 500);
    }
};

function neighbourAttackCheck(matrix, x, y, successCallback) {
    for (let my = 0; my < matrix.length; my++) {
        for (let mx = 0; mx < matrix[mx].length; mx++) {
            let xDistance = Math.abs(mx - x);
            let yDistance = Math.abs(my - y);
            if (((xDistance < 2 && !(yDistance >= 2)) || (yDistance < 2) && !(xDistance >= 2)) && matrix[y][x] * -1 === matrix[my][mx]) {
                successCallback && successCallback(mx, my);
            }
        }
    }
}

function changeMatrix() {
    matrix = [];
    for (let jt = 0; jt < GRID_HEIGHT; jt++) { // высота грида
        matrix.push([]);
        for (let it = 0; it < GRID_WIDTH; it++) { // длина грида
            let cellNode = document.querySelectorAll('[data-colrow~="' + it + jt + '"]')[0];
            if (cellNode.childNodes.length === 0) {
                matrix[jt].push(0);
            } else {
                if (cellNode.childNodes[0].classList.contains('enemy')) {
                    matrix[jt].push(-1);
                } else {
                    matrix[jt].push(1);
                }
            }
        }
    }
}

function createNewMatrix(card) {
    let newMatrix = [];
    for (let jt = 0; jt < GRID_HEIGHT; jt++) { // высота грида
        newMatrix.push([]);
        for (let it = 0; it < GRID_WIDTH; it++) { // длина грида
            let cellNode = document.querySelectorAll('[data-colrow~="' + it + jt + '"]')[0];
            if (cellNode.childNodes.length === 0 || ((it === card.x) && (jt === card.y))) {
                newMatrix[jt].push(0);
            } else {
                newMatrix[jt].push(-1);
            }
        }
    }
    return newMatrix;
}

function createPathMatrix(startCard, finishCard) {
    let newMatrix = [];
    for (let jt = 0; jt < GRID_HEIGHT; jt++) { // высота грида
        newMatrix.push([]);
        for (let it = 0; it < GRID_WIDTH; it++) { // длина грида
            let cellNode = document.querySelectorAll('[data-colrow~="' + it + jt + '"]')[0];
            if (cellNode.childNodes.length === 0 || ((it === startCard.x) && (jt === startCard.y)) || ((it === finishCard.x) && (jt === finishCard.y))) {
                newMatrix[jt].push(0);
            } else {
                newMatrix[jt].push(-1);
            }
        }
    }
    return newMatrix;
}

function findMoveCells(card) {
    disableMoveCells();
    let possibleMoveCells = [],
        neighbourMoveCheck = pathfinder(createNewMatrix(card), card.y, card.x, card.y, card.x)[0];

    for (let pj = 0; pj < neighbourMoveCheck.length; pj++) {
        for (let pi = 0; pi < neighbourMoveCheck[pj].length; pi++) {
            if ((card.move >= neighbourMoveCheck[pj][pi]) && neighbourMoveCheck[pj][pi] !== 0) {
                possibleMoveCells.push([pi] + '' + [pj]);
            }
        }
    }
    enableMoveCells(possibleMoveCells);
}

function movement(event, index) {
    let target = event.target;
    if (target.classList.contains('move-enable') && index !== null) {
        let card = _.findWhere(DECK.cards, {'index': index - 0});

        // delete old node
        card.cardNode.parentNode.removeChild(card.cardNode);

        renderCard(card, target);
        if (target.dataset.colrow) {
            card.x = target.dataset.col - 0;
            card.y = target.dataset.row - 0;
        }

        if (GAME.phase === 3) {
            card.isMoved = true;
        }
    }
}

function attacking(activeCard, targetCard) {
    let activeCardNode = activeCard.cardNode;
    let enemyCardNode = targetCard.cardNode;
    let top = enemyCardNode.getBoundingClientRect().left - activeCardNode.getBoundingClientRect().left;
    let left = enemyCardNode.getBoundingClientRect().top - activeCardNode.getBoundingClientRect().top;

    targetCard.hp = targetCard.hp - activeCard.attack;
    activeCardNode.style.zIndex = '999999';
    activeCard.isActive = false;
    GAME.activeCard = null;
    animate({
        duration: 100,
        timing: function (timeFraction) {
            return Math.pow(timeFraction, 2);
        },
        draw: function (progress) {
            activeCardNode.style.transform = 'translate(' + ((1 - progress) * top) + 'px,' + ((1 - progress) * left) + 'px)';
        },
        callback: function () {
            setTimeout(() => {
                activeCardNode.style.zIndex = '';
                activeCardNode.style.transform = '';
                activeCard.isTurned = true;
                GAME.currentAction = null;
            }, 500);
        }
    });
}

function disableMoveCells() {
    _.each(document.getElementsByClassName('cell'), (cell) => {
        cell.classList.remove('move-enable');
    });
}

function enableMoveCells(requireCells) {
    _.each(document.getElementsByClassName('cell'), (cell) => {
        if (_.contains(requireCells, cell.dataset.colrow)) {
            cell.classList.add('move-enable');
        }
    });
}

// drag n drop
function allowDrop(event) {
    event.preventDefault();
}

let dragParentNode;
const phaseTwoRequireCells = ['03', '13', '23', '33', '43', '14', '24', '34', '15', '25', '35'];

function drag(event) {
    dragParentNode = event.target.parentNode;
    if (GAME.phase === 2) {
        event.dataTransfer.setData('index', event.target.dataset.index);
        enableMoveCells(phaseTwoRequireCells);
    } else if (GAME.phase === 3) {
        let card = _.findWhere(DECK.cards, {'index': event.target.dataset.index - 0});
        if (card.isMoved === false) {
            event.dataTransfer.setData('index', event.target.dataset.index);
            findMoveCells(card);
        }
    }
}

function dragEnd() {
    if (GAME.phase === 2 || GAME.phase === 3) {
        disableMoveCells();
    }
}

function drop(event) {
    event.preventDefault();
    movement(event, event.dataTransfer.getData('index'));
}

let selected = null,
    zIndex = null,
    xPosition = 0, yPosition = 0,
    xCurrentPosition = 0, yCurrentPosition = 0;


function dragInit(event, elem) {
    selected = elem;

    xPosition = selected.dataset.x ? event.clientX - (selected.dataset.x) : event.clientX;
    yPosition = selected.dataset.y ? event.clientY - (selected.dataset.y) : event.clientY;

    zIndex = selected.style.zIndex;

    if (GAME.phase === 1) {
        let finalSelector = document.getElementById('your-deck');
        finalSelector.classList.add('mouse-moving');
    } else if (GAME.phase === 2) {
        enableMoveCells(phaseTwoRequireCells);
    } else if (GAME.phase === 3) {
        let card = _.findWhere(DECK.cards, {'index': elem.dataset.index - 0});
        if (card.isMoved === false) {
            findMoveCells(card);
        }
    }

    document.addEventListener('mousemove', moveElem, false);
    document.addEventListener('mouseup', destroy, false);
}

function moveElem(event) {
    let x = event.clientX - xPosition;
    let y = event.clientY - yPosition;
    selected.classList.add('moving');
    xCurrentPosition = selected.getBoundingClientRect().x;
    yCurrentPosition = selected.getBoundingClientRect().y;
    selected.style.zIndex = '9999999';
    selected.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    selected.dataset.x = x;
    selected.dataset.y = y;
}

function destroy(event) {
    let finalSelector = document.getElementById('your-deck'),
        finalSelectorRect;

    selected.classList.remove('moving');

    if (GAME.phase === 2 || GAME.phase === 3) {
        _.each(document.getElementsByClassName('move-enable'), (cell) => {
            let selectorRect = cell.getBoundingClientRect();
            if ((event.clientX > selectorRect.left && event.clientX < selectorRect.right &&
                    event.clientY > selectorRect.top && event.clientY < selectorRect.bottom)) {
                finalSelector = cell
            }
        });
        disableMoveCells();
    }

    finalSelectorRect = finalSelector.getBoundingClientRect();

    let card;
    if (GAME.phase === 1) {
        card = _.findWhere(ALL_CARDS, {'id': selected.dataset.id-0});
    } else if (GAME.phase === 2 || GAME.phase === 3) {
        card = _.findWhere(DECK.cards, {'index': selected.dataset.index-0});
    }

    if ((event.clientX > finalSelectorRect.left && event.clientX < finalSelectorRect.right &&
        event.clientY > finalSelectorRect.top && event.clientY < finalSelectorRect.bottom) &&
        ((GAME.phase === 1 && DECK.currentValue >= card.value) || GAME.phase > 1)) {
        let x = xCurrentPosition - finalSelectorRect.left;
        let y = yCurrentPosition - finalSelectorRect.top;

        animate({
            duration: 100,
            timing: function (timeFraction) {
                return Math.pow(timeFraction, 2);
            },
            draw: function (progress) {
                selected.style.transform = 'translate(' + ((selected.dataset.x - 0) - (progress)*x) + 'px,' + ((selected.dataset.y - 0) - (progress*y))  + 'px)';
            },
            callback: function () {
                selected.style.zIndex = zIndex;
                xPosition = selected.dataset.x - x;
                yPosition = selected.dataset.y - y;
                selected.dataset.x = xPosition;
                selected.dataset.y = yPosition;
                selected.style.transform = 'translate(' + xPosition + 'px,' + yPosition  + 'px)';
                finalSelector.classList.remove('mouse-moving');

                if (GAME.phase === 1) {
                    DECK.currentValue = DECK.currentValue - card.value;
                    let properties = PROPERTIES;
                    properties.hp = card.hp;
                    DECK.cards.push(new Observe(_.create(card, properties)));
                } else if (GAME.phase === 2) {
                    card.x = finalSelector.dataset.col-0;
                    card.y = finalSelector.dataset.row-0;
                } else if (GAME.phase === 3) {
                    card.x = finalSelector.dataset.col-0;
                    card.y = finalSelector.dataset.row-0;
                    card.isMoved = true;
                }

                setTimeout(function () {
                    if (GAME.phase === 1) {
                        selected.classList.add('decked');
                    } else if (GAME.phase === 2) {
                        selected.classList.remove('decked');
                        selected.classList.add('celled');
                    } else if (GAME.phase === 3) {
                        disableMoveCells();
                    }
                }, 0);
            }
        });

    } else {
        let x = selected.dataset.x-0;
        let y = selected.dataset.y-0;

        animate({
            duration: 100,
            timing: function (timeFraction) {
                return Math.pow(timeFraction, 2);
            },
            draw: function (progress) {
                selected.style.transform = 'translate(' + ((1-progress)*x) + 'px,' + ((1-progress)*y) + 'px)';
            },
            callback: function () {
                selected.style.zIndex = zIndex;
                xPosition = 0;
                yPosition = 0;
                selected.dataset.x = 0;
                selected.dataset.y = 0;
                finalSelector.classList.remove('mouse-moving');

                if (GAME.phase === 1 && DECK.currentValue < card.value) {
                    alertBox.show('Недостаточно денег');
                } else if (GAME.phase === 2 && finalSelector.id === 'your-deck') {
                    setTimeout(function () {
                            card.x = null;
                            card.y = null;
                            selected.classList.remove('celled');
                            selected.classList.add('decked');
                    }, 0);
                }
            }
        });
    }

    document.removeEventListener('mousemove', moveElem);
    document.removeEventListener('mouseup', destroy);
}

// js анимация
function animate({duration, draw, timing, callback}) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            callback();
        }

    });
}


// to-do поменять x & y местами
let pathfinder = function (matrix, x1, y1, x2, y2) {

    let toVisit = [[x1, y1]];

    while (toVisit.length) {

        x = toVisit[0][0];
        y = toVisit[0][1];

        for (let i = x - 1; i < x + 2; i++) {
            for (let j = y - 1; j < y + 2; j++) {
                if (neighbourCheck(matrix, i, j, x1, y1, 0)) {
                    matrix[i][j] = matrix[x][y] + 1;
                    toVisit.push([i, j]);
                }
            }
        }

        let shift = toVisit.shift();

    }

    let distance = matrix[x2][y2];
    return [matrix, distance];

};

let backtrace = function (matrix, x1, y1, x2, y2, distance) {
    let previousValue = matrix[x2][y2];
    let successfulRoute = [];

    let x = x2;
    let y = y2;
    let iterator = 0;

    while (!(x === x1 && y === y1) && iterator < 1000) {
        for (let i = x - 1; i < x + 2; i++) {
            for (let j = y - 1; j < y + 2; j++) {

                if (matrix[i] && (matrix[i][j] === previousValue - 1) &&
                    !(i === x && j === y)) {

                    previousValue = matrix[i][j];
                    successfulRoute.push([i, j]);
                    x = i;
                    y = j;

                } else if (successfulRoute.length === matrix[x2][y2] - 1) {
                    x = x1;
                    y = y1;
                }
            }
        }
        iterator++;
    }

    successfulRoute.unshift([x2, y2]);
    successfulRoute.push([x1, y1]);
    return successfulRoute.reverse();

};

let neighbourCheck = function (matrix, i, j, x1, y1, value) {
    let xDistance = Math.abs(i - x);
    let yDistance = Math.abs(j - y);
    return ((xDistance < 2 && yDistance === 0) || (yDistance < 2 && xDistance === 0))
        && matrix[i] && (matrix[i][j] === value)
        && !(i === x && j === y)
        && !(i === x1 && j === y1);
};
