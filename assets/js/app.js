function toggleCart() {
    const cartComponent = document.querySelector("#cart-component")
    document.querySelector('#cart').addEventListener('click', () => {
        if (cartComponent.classList.contains("hidden")) {
            cartComponent.classList.remove('hidden')
        } else {
            cartComponent.classList.add('hidden')
        }
    })
}

function addEvent() {
    let cpt = 0
    document.querySelectorAll(".image-thumbnail").forEach((e) => {
        let index = cpt
        e.addEventListener("click", (event) => {
            toggleImage(index, document.querySelector('#imageCard'))
            makeInactive(false)
            event.target.previousSibling.previousSibling.classList.add('border-2')
            event.target.previousSibling.previousSibling.classList.add('border-orange-400')
        })
        cpt++
    })
}

function makeInactive(onModale) {
    let elements = document.querySelectorAll(".image-thumbnail")
    if (onModale) {
        elements = document.querySelectorAll(".modal-image-thumbnail")
    }
    elements.forEach((e) => {
        if (e.firstElementChild.classList.contains('border-orange-400')) {
            console.log('ok')
            e.firstElementChild.classList.remove('border-orange-400')
            e.firstElementChild.classList.remove('border-2')
        }
    })
}

function toggleImage(index, element) {
    const imageSources = [
        './assets/images/image-product-1.jpg',
        './assets/images/image-product-2.jpg',
        './assets/images/image-product-3.jpg',
        './assets/images/image-product-4.jpg'
    ]
    element.setAttribute('src', imageSources[index])
}

function handleModale() {
    document.querySelector('#imageCard').addEventListener('click', (e) => {
        document.querySelector("#modal").classList.remove("hidden")
        document.querySelector("#modaleImage").setAttribute("src", e.target.src)
        document.querySelector("#close").addEventListener('click', () => {
            document.querySelector("#modal").classList.add("hidden")
        })
        changeImage()
        addEventOnModale()
    })

}

function changeImage() {
    let cpt = 0
    document.querySelector("#next").addEventListener('click', () => {
        toggleImage(cpt, document.querySelector('#modaleImage'))
        if (cpt == 3) {
            cpt = 0
        } else {
            cpt++
        }
    })

    document.querySelector("#previous").addEventListener('click', () => {
        toggleImage(cpt, document.querySelector('#modaleImage'))
        if (cpt == 0) {
            cpt = 3
        } else {
            cpt--
        }
    })
}

function addEventOnModale() {
    let cpt = 0
    document.querySelectorAll(".modal-image-thumbnail").forEach((e) => {
        let index = cpt
        e.addEventListener("click", (event) => {
            toggleImage(index, document.querySelector('#modaleImage'))
            makeInactive(true)
            event.target.previousSibling.previousSibling.classList.add('border-2')
            event.target.previousSibling.previousSibling.classList.add('border-orange-400')
        })
        cpt++
    })
}

handleModale()
toggleCart()
addEvent()
