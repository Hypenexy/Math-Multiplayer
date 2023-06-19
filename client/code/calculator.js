function createCalculatorButtons(){
    const element = document.createElement("div");
    element.classList.add("calculatorButtons");
    
    function buttonAction(displayCharacter, character){
        const element = document.createElement("btn");
        ButtonEvent(element, function(){
            console.log(character);
        });
        return element;
    }

    const buttonList = ['÷', '×', 'c', 'backspace', '-', '+', '±', '.', '='];
    const numpad = document.createElement("div");
    for (let i = 0; i < 10; i++) {
        numpad.appendChild(buttonAction(i, i));
    }

    return element;
}a

createCalculatorButtons();