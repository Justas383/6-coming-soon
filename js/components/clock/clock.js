class Clock {
    constructor(selector){  
        this.selector = selector;
        this.now = Date.now();
            this.deadline = {
                year: (new Date()).getFullYear(),
                month: 11,
                day: 16,
                hour: 10,
                minutes: 0,
                seconds: 0
            }

            this.dateString = this.createDateString();
            this.DOM = null;
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
}

export {Clock}