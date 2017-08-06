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
        this.ends = true;
    }

    setLower(text) {
        this.lower = text.toLowerCase();
    }

    noodleAnswer() {
        var index = Math.ceil(Math.random() * (this.answers.length - 1));
        return this.answers[index];
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
        if(this.lower === 'noodle off'){
            this.ends = false;
            return 'No more noodles';
        }
        else if(this.lower === 'noodle on'){
            this.ends = true;
            return 'MOAR NOODLES!';
        }

        if(this.lower === 'noodle' || this.lower === 'noodles') {
            return this.noodleAnswer();
        }
        else if(this.noodleStart(text) !== 'no'){
            return this.noodleStart(text);
        }
        else{
            if(this.ends){
                return this.noodleEnd(text);
            }
            else {
                return null;
            }
        }
    }
}