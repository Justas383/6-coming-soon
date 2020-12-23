class Clock {
    //TODO: isplresti iki galimybes nurodyti custom data,iki kada skaicuoja likusi laika
    constructor(selector, date){  
        this.selector = selector;
            this.deadline = {
                year: (new Date()).getFullYear(),
                month:  11,
                day:  16,
                hour:  10,
                minutes:  0,
                seconds:  0
            }

            this.dateString = this.createDateString();
            this.DOM = null;
            this.DOMdays =null;
            this.DOMhours =null;
            this.DOMminutes =null;
            this.DOMseconds =null;
    }
    init () {
        if (this.isValidSelector()){
            this.findClockValuesElements();
            if (!this.arBusMetines()){
            this.atnaujintiInformacija();
        }
    this.start();
    }
    }
    createDateString() {
        const { year, month, day, hour, minutes, seconds} = this.deadline ;
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
    arBusMetines() {
        const jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
        return  Date.now < jubiliejausMiliseconds;
            
        } 
        // kadangi pagal dabartinius metus metines yra praeityje, reikia atnaujinti metus ir per naujo perskaiciuiti
    atnaujintiInformacija(){
        this.deadline.year++;
        this.dateString = this.createDateString();
    }

    isValidSelector(){
        const DOM= document.querySelector(this.selector);
        if (!DOM){
            console.error('ERROR:blogas selektorius')
            return false;
        }
        this.DOM = DOM;
        return true;
    }
    findClockValuesElements(){
        const values = this.DOM.querySelectorAll('.value');
        this.DOMdays =values[0];
        this.DOMhours =values[1];
        this.DOMminutes =values[2];
        this.DOMseconds =values[3];
    }
    start(){
        const jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
        setInterval(() => {
        const now = Date.now();
        let diff = jubiliejausMiliseconds - now;
        //todo: potenciali vieta klaidai, kai lieka 1 sekunde. gali rodyti -1 diena ar pan.
        if (diff < 0) {
            this.atnaujintiInformacija();
        jubiliejausMiliseconds = (new Date(this.dateString)).getTime();
        diff = jubiliejausMiliseconds - now;
        }

        let secondsLeft = Math.floor(diff / 1000);
        const days = Math.floor(secondsLeft / 60 / 60 / 24);
        
        secondsLeft -= days * 60 * 60 * 24;
        const hours = Math.floor(secondsLeft / 60 / 60);


        secondsLeft -= hours * 60 * 60;
        const minutes = Math.floor(secondsLeft / 60);

        secondsLeft-= minutes * 60;
   
        this.DOMdays.innerText = days;
        this.DOMhours.innerText= this.formatNumber(hours);
        this.DOMminutes.innerText = this.formatNumber(minutes);
        this.DOMseconds.innerText = this.formatNumber(secondsLeft);
        }, 1000); //miliseconds
    }
    formatNumber(number){
        return number < 10 ? '0' + number : number;
    }
}

export {Clock}