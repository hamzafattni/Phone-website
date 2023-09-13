const phones = [
    {
        brand: 'Samsung',
        img:"/assessts/mobile pics/samsung.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 200000
    },
    {
        brand: 'Xiomi',
        img: "/assessts/mobile pics/xiomi.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 48000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        img: "/assessts/mobile pics/infinix.jpg",
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 55000
    },
    {
        brand: 'Tecno',
        img: "/assessts/mobile pics/tecno.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 60000
    },
    {
        brand: 'Iphone',
        img: "/assessts/mobile pics/iphone.jpg",
        model: '14 Pro Max',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 450000
    },
    {
        brand: 'Oppo',
        img: "/assessts/mobile pics/oppo.jpg",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 85000
    },
    {
        brand: 'Vivo',
        img: "/assessts/mobile pics/vivo.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 30000
    },

]
const div = document.querySelector('.containers');
for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    div.innerHTML += `
    <div>
            <h1>${phones[i].brand}</h1><br>
            <p ><img src="${phones[i].img}" width="300px" height="320px"></p><br>
            <p>Model: ${phones[i].model}</p>
            <p>Ran: ${phones[i].ram}</p>
            <p>Rom: ${phones[i].rom}</p>
            <p>Camera: ${phones[i].camera}</p>
            <p>Price: ${phones[i].price} PKR</p>
            <button onclick="addToCart(${i})" class="list-btn">Add to Cart</button>
    </div>
    `
}   

const cart = []


function addToCart(index) {

    if (cart.includes(phones[index])=== true) {
        console.log("You Already buy this item");
    } else {
       cart.push(phones[index]);
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Added to cart successfully',
        showConfirmButton: false,
        timer: 1500
    })
    }
    console.log('Your List ===> ', cart);    
}