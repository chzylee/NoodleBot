const momma = require('../lib/yomomma');

module.exports = class NoodleBot {
    constructor(){
        this.answers = [
            'me too',
            'yes',
            'bring it',
            'keep it coming',
            'MOAR!',
            'NOODLE'
        ]
        this.yomomma = new momma();
    }

    setLower(text) {
        this.lower = text.toLowerCase();
    }

    noodleAnswer() {
        var index = Math.ceil(Math.random() * (this.answers.length - 1));
        return this.answers[index];
    } 

    noodleMomma() {
        var index = Math.ceil(Math.random() * (this.yomomma.jokes.length - 1));
        return this.yomomma.jokes[index];
    }

    noodleStart(text) {
        if(this.lower.startsWith('that')) {
            return 'i have a noodle ' + text;
        }
        else{
            return 'no';
        }
    }

    noodleEnd(text) {
        if(this.lower === 'noodle' || this.lower === 'noodles') {
            return this.noodleAnswer();
        }
        else{
            if(text.endsWith('oodle')) {
                return text + ' noodle';
            }
            else {
                return text + ' noodles';
            }
        }
    }

    noodleHandler(text) {
        if(this.lower === 'noodle' || this.lower === 'noodles') {
            return this.noodleAnswer();
        }
        else if(this.lower === 'yo momma' || this.lower === 'yo mama'){
            return this.noodleMomma();
        }
        else if(this.noodleStart(text) !== 'no'){
            return this.noodleStart(text);
        }
        else{
            return this.noodleEnd(text);
        }
    }
}