function formValidation() {
    const forms = document.querySelectorAll('form.form')
    
    for (let form of forms){
        const validables = form.querySelectorAll('[data-validation]');
        const submit = form.querySelector('button[type="submit"]');

        submit.addEventListener('click', event => {
            event.preventDefault();
            console.log(validables);
        })
    
    } 
    }
    export {formValidation}