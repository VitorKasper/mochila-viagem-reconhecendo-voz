const mic = document.getElementsByClassName('microfone');
const input1 = document.getElementById('nome')
const input2 = document.getElementById('quantidade')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const reconhecendo_voz = new SpeechRecognition();
const reconhecendoVoz = new SpeechRecognition();
reconhecendo_voz.lang = 'pt-BR';
reconhecendoVoz.lang = 'pt-BR';

mic[0].addEventListener('click', function() {
    reconhecendo_voz.start();
    reconhecendo_voz.addEventListener('result', function(event) {
        const fala1 = exibe(event);
        input1.value = fala1
    });
});

mic[1].addEventListener('click', function() {
    reconhecendoVoz.start();
    reconhecendoVoz.addEventListener('result', function(event) {
        const fala2 = exibe(event);
        input2.value = fala2
    });
});

function exibe(event) {
    let fala = event.results[0][0].transcript;
    if(fala === "um") {fala = 1;
    }if(fala === "dois") {fala = 2;
    }if(fala === "três") {fala = 3;
    }if(fala === "quatro") {fala = 4;
    }if(fala === "cinco") {fala = 5;
    }if(fala === "seis") {fala = 6;
    }if(fala === "sete") {fala = 7;
    }if(fala === "oito") {fala = 8;
    }if(fala === "nove") {fala = 9;
    }
    return fala
}
