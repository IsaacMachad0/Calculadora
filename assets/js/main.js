function Calculadora() {

    const display = document.querySelector(".display");

    function clickButton() {
        document.addEventListener('click', (event) => {
            const el = event.target;
            
            if(el.classList.contains('btn-num')) {
                addNumDisplay(el);
            }

            if(el.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if(el.classList.contains("btn-del")) {
                delNum();
            }

            if (el.classList.contains('btn-result')) {
                resultCalc();
            }
        });
    }

    const resultCalc = () => {
        try {
            const result = eval(display.value);

            if(!result) return alert("conta inválida");

            display.value = result;
        } catch (e) {
            alert("conta inválida");
            return;
        }
    }

    const delNum = () => display.value = display.value.slice(0, -1);

    const addNumDisplay = (el) => display.value += el.innerText;

    const clearDisplay = () => display.value = "";
    
    this.iniciarCalculadora = () => {
        clickButton();
    }
}

const calc = new Calculadora();

calc.iniciarCalculadora();