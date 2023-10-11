fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(commits => { console.log(commits); });
fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
    .then(commits => { console.log(commits); });
let category = document.getElementById('category')

fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
    .then(commits => { 
       commits.forEach(element => {
         category.insertAdjacentHTML('beforeend', `
         <option value="${element.id}">${element.name}</option>
         `);
       })
    });
document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault;
    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let file = document.getElementById('foto').value;
    let categoryId = document.getElementById('category').value;
    fetch('https://api.escuelajs.co/api/v1/products/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "title": `${title}`,
            "price": `${price}`,
            "description": `${description}`,
            "categoryId": `${categoryId}`,
            "images": [`${file}`]
        })
    })
        .then(response => response.json())
        .then(comment => console.log(comment))

})
document.getElementById('button1').addEventListener('click', (e) => {
    e.preventDefault;
    let catrerogy = document.getElementById('catrerogy').value;
    let image = document.getElementById('image').value;
    fetch('https://api.escuelajs.co/api/v1/categories/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "name": `${catrerogy}`,
            "image": `${image}`
        })
    })
        .then(response => response.json())
        .then(comment => console.log(comment))

})