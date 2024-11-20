const cardRow = document.querySelector(".row");
const modal = document.querySelector(".my-modal");
const modalBody = document.querySelector("my-modal-body")
const closeModale = document.querySelector(".close-modal")
const modalImage = document.querySelector("#modale-img")
// console.log(cardRow)


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(response => {
    // console.log(response.data.length, response.data);

    const createCard = ({ title, url }) => {
        return `
        <div class="col-lg-4">
            <div class="card position-relative mt-3">
                <img src="./img/pin.svg" alt="Puntina" class="puntina">
                <div class="card-header text-center">
                    <img src="${url}" alt="riquadro colorato" data-img="${url}">
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
        cardsHtml += createCard({ title, url });
    };
    cardRow.innerHTML = cardsHtml;

    const images = document.querySelectorAll(".card-header img");
    // console.log(images);
    images.forEach(curImg => {
        curImg.addEventListener("click", () => {
            const clickedImg = curImg.dataset.img;
            console.log(clickedImg);

            modalImage.src = clickedImg;
            console.log(modalImage.src);
            modal.classList.remove("d-none");
        });
    });

    closeModale.addEventListener("click", () => {
        modal.classList.add("d-none");
    })


});

