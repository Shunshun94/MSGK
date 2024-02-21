var MSGK = MSGK || {};
MSGK.APP = MSGK.APP || {};

MSGK.INPUT.initialize();

document.getElementsByClassName('input')[0].addEventListener(MSGK.INPUT.CONSTS.UPDATE_EVENT, (e)=>{
    const cards = MSGK.INPUT.getCardInfo();
});

