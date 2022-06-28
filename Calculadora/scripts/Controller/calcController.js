class CalcController {

    constructor() {
        this._operation = [];
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }


    initialize(){ 
        this.setDisplayDateTime();

        //setInterval define em quanto tempoo sistema atualiza as informações (em milissegundo)
        setInterval (() => {
           this.setDisplayDateTime();
        }, 1000);
        
    }

    addEventListenerAll(element, events, fn){
                events.split(' ').forEach(event => {
                    element.addEventListener(event, fn, false);
                })                                                                                                                                                                               

    }

    clearAll(){
        this.this._operation = [];
    }

    clearEntry(){
        this.this._operation.pop();
    }
    
    addOperator(value){
        this._operation.push(value);
    }

    setError(){
        this.displayCalc = "ERROR";
    }

    execBtn(value){
        switch (value){
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                break;

            case 'subtracao':
                break;
            
            case 'divisao':
                break;

            case 'multiplicacao':
                break;

            case 'porcento':
                break;

            case'igual':
                break;

                default:
                    this.setError();
                    break;            
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, 'click drag', e=> {
                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn();
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer"
            })
        })
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

    get dataAtual(){
        return this._displayCalc;
    }

    set dataAtual(value) {
        this._displayCalc = value;
    }
}