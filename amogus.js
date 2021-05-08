class AMOGUS {

    constructor(crewmates) {
        /**
         * @param {crewmates} Array Array of crewmates
         */
        if(!Array.isArray(crewmates)){
            throw 'Please provide an array of crewmates!'
        } else if(crewmates.length > 10){
            throw 'Allowed crewmates is only 10'
        }
        this.crewmates = crewmates;
    }
    sussify(){
        /**
         * This will sussify the crewmates.
         * @returns String Sus crewmate
         */
        this.sussified = true;
        this.sus = this.crewmates[Math.floor(Math.random() * this.crewmates.length)];
        return this.sus;
    }

    eject(){
        /**
         * This will eject the crewmate who is sus. Make sure you sussify and run an emergency meeting.
         * @returns String Impostor
         */
        if(!this.sussified){
            throw 'SUSSIFY THE CREWMATES IN ORDER TO EJECT THEM!'
        }
       if(!this.meeting){
           throw 'MAKE SURE YOU HAVE DONE EMERGENCY MEETING IN ORDER TO EJECT IMPASTA!';
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
        return `EJECTED IMPOSTOR 😳 | IMPOSTOR WAS ${this.impostor}`;
    }
    emergency_meeting(){

        /**
         * This will run an emergency meeting.
         * @returns String Even more sus crewmate
         */

        if(!this.sussified){
            throw 'SUSSIFY THE CREWMATES IN ORDER TO EJECT THEM!'
        }
        this.meeting = true
       this.evenMoreSus = this.sussify();
        return this.evenMoreSus;
    }
}



module.exports = AMOGUS;

