const prod = document.getElementById('prod')

prod.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    let price = document.getElementById('price').value;

    let data = {
        name,
        desc,
        price,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
})