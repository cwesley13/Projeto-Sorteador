const but = document.querySelector(".button")

function raffleNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const drawnNumber = document.querySelector(".drawn-number")


    if (min >= max) {
        alert("O primeiro valor não pode ser maior que o Segundo valor")
    }
    if (min < max) {
        drawnNumber.innerHTML = new Intl.NumberFormat("pt-BR", {

        }).format(Math.floor(Math.random() * (max - min + 1)) + min);


    }

}

but.addEventListener("click", raffleNumber)


