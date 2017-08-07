module.exports = class NoodleBot {
    constructor(){
        this.on = true;
        this.answers = [
            'me too',
            'yes',
            'bring it',
            'keep it coming',
            'MOAR!',
            'NOODLE'
        ]
        this.noodleTypes = [
            'soggy',
            'wet',
            'sticky',
            'fat',
            'pool'
        ]
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
        if(this.lower === 'noodle off') {
            this.on = false;
            return 'No more noodles';
        }
        else if(this.lower === 'noodle on') {
            this.on = true;
            return 'MOAR NOODLES!';
        }
        else if(this.lower === 'I ate all the noodles') {
            return 'Noooooooooooooo[dles]!!!';
        }
        
        if(this.on){
            if(this.lower === 'noodle' || this.lower === 'noodles') {
                return this.noodleAnswer();
            }
            else if(this.noodleStart(text) !== 'no'){
                return this.noodleStart(text);
            }
        }
    }
}