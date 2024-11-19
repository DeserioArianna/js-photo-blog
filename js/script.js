const cardRow = document.querySelector(".row");
// console.log(cardRow)


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response => {
    // console.log(response.data.length, response.data);

    const createCard = ({title, url}) => {
        return `
        <div class="col-lg-4">
            <div class="card position-relative mt-3">
                <img src="./img/pin.svg" alt="Puntina" class="puntina">
                <div class="card-header text-center">
                    <img src="${url}" alt="riquadro colorato">
                </div>
                <div class="card-body">
                    <p class="my-text">${title}</p>
                </div>
            </div>
        </div>`
    };

    let cardsHtml = "";

    for (let i = 0; i < response.data.length; i++) {
        let title = response.data[i].title;
        let url = response.data[i].url;
        cardsHtml += createCard({title, url});  
    };
    cardRow.innerHTML = cardsHtml;
});

