const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let street = document.getElementById('street').value;
    let state = document.getElementById('state').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let data = {
        name,
        lastname,
        street,
        state,
        email,
        phone
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = '<p>carregando...</p>'
    let pronto = '<p>Pronto!</p> <p>Obrigado por se cadastrar</p>'

    content.innerHTML = carregando

    setTimeout(()=>{
        content.innerHTML = pronto
    },1000)

    setTimeout("location.href = 'index.html'",2000);
})