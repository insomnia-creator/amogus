class AMOGUS {

    constructor(crewmates) {
        /**
         * @param {crewmates} Array Array of crewmates
         *
         */
        if(!Array.isArray(crewmates)){
             throw 'Please provide a valid array!'
        } else if(crewmates.length > 10){
            throw "10 is the maximum crewmates."
        }
        this.crewmates = crewmates;

    }
    sussify(){
        /**
         * This will sussify the crewmates.
         * Returns sus crewmates;
         */
        this.sussified = true;
        this.sus = this.crewmates[Math.floor(Math.random() * this.crewmates.length)];
        return this.sus
    }

    eject(){
        const eject_promise = new Promise((resolve, reject) => {
            if(!this.sussified){
                reject('SUSSIFY THE CREWMATES IN ORDER TO EJECT THEM!');
            }
            if(!this.meeting){
                reject('MAKE SURE YOU HAVE DONE EMERGENCY MEETING IN ORDER TO EJECT IMPASTA!');
            }
            try {
                let random = Math.floor(Math.random() * 1);
                if(random === 0){
                    this.impostor = this.evenMoreSus;
                } else if(random === 1){
                    this.impostor = this.sus;
                }
            } catch {
                throw 'stop!';
            }
            this.crewmates.splice(this.crewmates.indexOf(this.impostor), 1);
            resolve(`EJECTED IMPOSTOR 😳 | IMPOSTOR WAS ${this.impostor}`);

        });
        return eject_promise;
        /**
         * This will eject the crewmate who is sus. Make sure you sussify and run an emergency meeting.
         * @returns String Impostor
         * Promise String
         */



    }
    emergency_meeting(){
        const emergency_promise = new Promise((resolve, reject) => {
            if(!this.sussified){
                reject('SUSSIFY THE CREWMATES IN ORDER TO EJECT THEM!');
            }
            this.meeting = true
            this.evenMoreSus = this.sussify();
            resolve(this.evenMoreSus);
        })
        /**
         * This will run an emergency meeting.
         * @returns String Even more sus crewmate
         * Promise String
         */
        return emergency_promise;


    }
}



module.exports = AMOGUS;

