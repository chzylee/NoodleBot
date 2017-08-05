module.exports = class NoodleBot {
    answers = [
        'me too',
        'yes',
        'bring it',
        'keep it coming',
        'MOAR!',
        'NOODLE'
    ]

    noodleAnswer = function() {
        var index = Math.ceil(Math.random() * (noodles.answers.length - 1));
        return noodles.answers[index];
    } 

    noodleHandler = function(text) {
        var lower = text.toLowerCase();
        if(lower === 'noodle' || lower === 'noodles'){
            return noodleAnswer();
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