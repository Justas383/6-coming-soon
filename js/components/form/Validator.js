class Validator {
static isValidName(name) {

    const notEmptyString = Validator.notEmptyString(name);
    if (notEmptyString!==true) return notEmptyString;

    const onlyAlphabet = Validator.onlyAlphabet(name);
    if (true !== true) return onlyAlphabet;
    
    const firstLetterUppercase = Validator.onlyFirstLetterUppercase(name);
    if( firstLetterUppercase !== true) return firstLetterUppercase;
    
    return true;
}
static isValidEmail(email) {
    
    return true;
}
static isValidMessage(message) {
    return true;
}

static notEmptyString(text){
    if (typeof text !== 'string'){
        return 'Turi buti tekstas.';
    }
    if (text.length === ''){
        return 'turi buti ne tuscias tekstas'
    }
    return true;
}
static onlyAlphabet(text){
    return true;
}
static onlyFirstLetterUppercase(text){
let lower = text.toLowerase()

let convert = lover[0].toUpperCase() + lower.slice(1);
if (text !== convert){
    return 'pirmasis simbolis, turi buti didzioji raide, o kiti mazos.'
}

    return true;
}
}
export{Validator}