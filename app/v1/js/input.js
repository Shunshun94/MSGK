var MSGK = MSGK || {};
MSGK.INPUT = MSGK.INPUT || {};

MSGK.INPUT.CONSTS = {
    TABLE_CLASS: 'consensus-contents',
};

MSGK.INPUT.DOMS = {
    TABLE: document.getElementsByClassName('consensus-contents')[0],
};

MSGK.INPUT.appendLine = (e) => {
    const tr = document.createElement('tr');
    const contentClass = `${MSGK.INPUT.CONSTS.TABLE_CLASS}-content`;
    tr.className = contentClass;
    [
        `<button class="${contentClass}-remove">✕</button>`,
        '',
        '',
        '',
        '',
    ].forEach((content)=>{
        const td = document.createElement('td');
        td.innerHTML = content;
        tr.appendChild(td);
    });

    MSGK.INPUT.DOMS.TABLE.append(tr);
};


MSGK.INPUT.initialize = () => {
    MSGK.INPUT.appendLine();
};
