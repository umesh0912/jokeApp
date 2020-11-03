export class Signup {

    firstName : String;
    lastName : String;
    password : String;
    email : String;
    language : String;

    constructor(firstName : String = '', lastName : String = '', password:String = '', email:String = '', language : String = '') {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.language = language;

    }
}
