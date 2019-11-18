document.querySelector('#rate-form input[type=submit]')
    .addEventListener('click', rate);

function rate(elem){
    elem.preventDefault();
    fetch('rate', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            name:document.querySelector('#rate-form input[name=name]').value,
            rate: document.querySelector('#rate-form input[name=gridRadios]'),
            message: document.querySelector('#rate-form input[name=message]'),
        })
    })
    .then(_=>document.querySelector('#rate-form').reset());
}