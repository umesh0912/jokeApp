export class Joke {

    setup: string;
    punchline : string;
    hide : boolean;

    // constructor which intialize this class properties
    constructor (setup: string,  punchline : string, hide : boolean){

        this.setup = setup;
        this.punchline = punchline;
        this.hide = hide;
    }

    // toggle function
    toggle (){
        this.hide = !this.hide;
    }
}
