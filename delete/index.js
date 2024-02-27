let products = []

const show = () => {
    document.getElementById("data").innerHTML = ""

    for (let i = 0; i < products.length; i++) {
        let title = document.createElement("h1")
        title.innerHTML = products[i].title

        let img = document.createElement("img")
        img.src = products[i].img

        let price = document.createElement("p")
        price.innerHTML = products[i].price

        let div = document.createElement("div")


        let btn = document.createElement("button")
        btn.innerHTML = "Remove"
        btn.addEventListener("click", () => {
            products.splice(i, 1)
            btn.setAttribute("class", "btn");
            show();
        })

        div.append(title, img, price, btn);
        title.setAttribute("class", "title");
        document.getElementById("data").append(div)
    }
}




const handlesubmit = (e) => {
    e.preventDefault()


    let title = document.getElementById("title").value
    let img = document.getElementById("img").value
    let price = document.getElementById("price").value


    let product = {
        title: title,
        img: img,
        price: price

    }
    products.push(product)
    show()




}
document.getElementById("form").addEventListener("submit", handlesubmit)