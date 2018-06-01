var operatore1 = null;
var operatore2 = null;
var operazione = null;
var operazionescelta = false;

function reset(){
    operatore1 = null;
    operatore2 = null;
    operazione = null;
    display.value = '0';
    operazionescelta = false;
}

function accensione(){
    reset();
}

function scrivi(value){
    if(operazionescelta){
        display.value = 0;
        operazionescelta = false;
    }
    if (display.value == '0' || display.value == 'ERRORE') {
        if (value != '.') {
            display.value = '';
        }
    }
    display.value = display.value + value;
}

function salva(segno){
    if (operatore1 == null) {
        operatore1 = display.value;
        operazione = segno;
        operazionescelta = true;
    }
    else if (operatore1 != null && operatore2 == null) {
        operatore2 = display.value;
        display.value = faioperazione();
        operatore1 = display.value;
        operatore2 = null;
        operazione = segno;
        operazionescelta = true;
    }
    else if (operatore1 != null && operazione != null && operatore2 != null) {
        display.value = faioperazione();
        operatore1 = display.value;
        operatore2 = null;
        operazione = segno;
        operazionescelta = true;
    }
}

function operazioneset(segno){
    salva(segno);
}

function risultato(){
    if(operazione == null)
    {
        display.value = 'ERRORE';
    }
    salva();
    faioperazione();
}

function faioperazione(){

    switch(operazione){
        case 'addizione':
            return parseFloat(operatore1) + parseFloat(operatore2);
        break;
        case 'sottrazione':
            return parseFloat(operatore1) - parseFloat(operatore2);
        break;
        case 'moltiplicazione':
            return parseFloat(operatore1) * parseFloat(operatore2);
        break;
        case 'divisione':
            if(operatore2 == 0){
                return 'ERRORE';
            }
            else{
                return parseFloat(operatore1) / parseFloat(operatore2);
            }
        break;
        case 'radice':
            return Math.sqrt(parseFloat(operatore1));
        break;
        case 'potenza':
            return Math.pow(parseFloat(operatore1), parseFloat(operatore2));
        break;
    }
}

function cancella(){
    display.value = display.value.substring(0, display.value.length-1);
    if(display.value == ''){
        display.value = 0;
    }
}    

function debug(){
    console.log(operatore1);
    console.log(operazione);
    console.log(operatore2);
}