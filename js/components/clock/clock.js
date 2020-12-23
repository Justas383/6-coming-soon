class Clock {
    constructor( ){
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
        console.log('konstruojam laikrodi..')
    }
    createDateString(){
        const { year, month, day, hour, minutes, seconds} = this.deadline 
        return`${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
}

export {Clock}