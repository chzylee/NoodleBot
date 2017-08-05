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
    }

    noodleAnswer() {
        var index = Math.ceil(Math.random() * (noodles.answers.length - 1));
        return noodles.answers[index];
    } 

    noodleHandler(text) {
        var lower = text.toLowerCase();
        if(lower === 'noodle' || lower === 'noodles'){
            return this.noodleAnswer();
        }
        else{
            if(text.endsWith('oodle')){
                return text + ' noodle';
            }
            else{
                return text + ' noodles';
            }
        }
    }
}