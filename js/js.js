const io = document.getElementById('io');
const button = document.getElementById('button');
const categories = []

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories')
    const commits = await response.json()
    commits.forEach(element => {
        categories.push({
            id: element.id,
            name: element.name,
        })
    })
    categories.forEach(el => {
        button.insertAdjacentHTML('beforeend', `
        <button class="button-cat" data-id='${el.id}'>${el.name}</button>
    `)
    })


    Array.from(document.querySelectorAll(".button-cat")).forEach(el => {
        el.addEventListener("click", (event) => {
            button.innerHTML = ''
            const catId = event.target.dataset.id
            fetch(`https://api.escuelajs.co/api/v1/categories/${catId}/products`)
                .then(response => response.json())
                .then(commits => {
                    console.log(commits);
                    commits.forEach(element => {
                        io.insertAdjacentHTML('beforeend', `
        <p >${element.id}</p>
        <p onclick="name()">${element.title}</p>
        <a href="vivod.html?${element.id}"><img src="${element.images}" height="250px" width="250px" ></a>
        <p>${element.price} $</p>
        <p onclick="del(${element.id})" class="del">X</p>
    `);

                    });
                });
        })
    })
})

const test = () => {
    console.log(categories[0].id);
}


// fetch(`https://api.escuelajs.co/api/v1/categories/${categories.id}/products`)
// .then(response => response.json())
// .then(commits => {
//     console.log(commits);
//     commits.forEach(element => {
//         io.insertAdjacentHTML('beforeend', `
//         <p >${element.id}</p>
//         <p onclick="name()">${element.title}</p>
//         <a href="vivod.html?${element.id}"><img src="${element.images}" height="250px" width="250px" ></a>
//         <p>${element.price} $</p>
//         <p onclick="del(${element.id})" class="del">X</p>
//     `);

//     });
// });



// fetch(`https://api.escuelajs.co/api/v1/categories/${categories.school}/products`)
//     .then(response => response.json())
//     .then(commits => {
//         console.log(commits);
//         commits.forEach(element => {
//             io.insertAdjacentHTML('beforeend', `
//             <p >${element.id}</p>
//             <p onclick="name()">${element.title}</p>
//             <a href="vivod.html?${element.id}"><img src="${element.images}" height="250px" width="250px" ></a>
//             <p>${element.price} $</p>
//             <p onclick="del(${element.id})" class="del">X</p>
//         `);

//         });
//     });
// fetch('https://api.escuelajs.co/api/v1/categories')
//     .then(response => response.json())
//     .then(comment => console.log(comment))

// // function clickAdd() {
// //     fetch('https://api.escuelajs.co/api/v1/products/', {
// //         method: "POST",
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //             "title": "Что-то",
// //             "price": 100,
// //             "description": "Зачем",
// //             "categoryId": 27,
// //             "images": ["https://upload.wikimedia.org/wikipedia/commons/b/bc/Kenyan_man_2.jpg"]
// //         })
// //     })
// //         .then(response => response.json())
// //         .then(comment => console.log(comment))
// // }
// function del(id) {
//     console.log(id);
//     fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
//         method: "DELETE",
//         headers: { 'Content-Type': 'application/json' },
//     })
// }
