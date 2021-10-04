var i, c, caps = 0, shift = 0;
    
function init() {
    i = document.getElementById('keyboard_buttons').getElementsByTagName('button');
    for(c = 0; c < i.length; c++) {
        if(i[c].type === 'button') {
            i[c].addEventListener('onclick', makeClickHandler(c));
        }
    }
}

function makeClickHandler(c) {
    i[c].onclick = function() {
        if(i[c].id === 'backspace') {
            document.getElementById('text_area').value = document.getElementById('text_area').value.slice(0, -1);
        } else if(i[c].id === 'ok') {
            document.getElementById('text_area').value += '\n';
        }  else if(i[c].id === 'capslock') {
            if(caps === 0) {
                caps = 1;
            } else {
                caps = 0;
            }
        } else if(i[c].id === 'shift') {
            shift = 1;
        } else if(caps === 1) {
            if(shift === 1) {
                document.getElementById('text_area').value += this.value.toLowerCase();
                shift = 0;
            } else {
                document.getElementById('text_area').value += this.value.toUpperCase();
            }
        } else {   
            if(shift === 1) {
                document.getElementById('text_area').value += this.value.toUpperCase();
                shift = 0;
            } else {
                document.getElementById('text_area').value += this.value.toLowerCase();
            }
       }
    };
}

function showAlert() {
    alert(document.getElementById('text_area').value);
}

window.addEventListener?
window.addEventListener('load', init, false) : window.attachEvent('onload', init);