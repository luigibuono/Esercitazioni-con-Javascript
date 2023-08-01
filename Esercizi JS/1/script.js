let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){

//cancellazione

            case 'C':
                display.innerText = '';
                break;

//funzionamento per stampare il risultato

            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;

                //pulsante per tornare indietro
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;

                // consente di usare la tastiera 
            default:
                display.innerText += e.target.innerText;
        }
    });
});