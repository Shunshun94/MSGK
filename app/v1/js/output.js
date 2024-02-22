var MSGK = MSGK || {};
MSGK.OUTPUT = MSGK.OUTPUT || {};

MSGK.OUTPUT.DOMS = {
    BASE: document.getElementsByClassName('output')[0],
};


MSGK.OUTPUT.buildOutput = (cards) => {
    MSGK.OUTPUT.DOMS.BASE.innerHTML = '';
    cards.forEach((card)=>{
        const cardBase = document.createElement('div');
        cardBase.className = `card ${card.okng}-card`;
        ['target', 'content', 'detail'].forEach((column)=>{
            const span = document.createElement('span');
            span.className = column;
            span.textContent = card[column];
            cardBase.appendChild(span);
        });
        const span = document.createElement('span');
        span.className = 'stump';
        cardBase.appendChild(span);
        MSGK.OUTPUT.DOMS.BASE.appendChild(cardBase);
    });
};
