const containerImagesClothes = document.querySelector('#container_images_main');
const containerModalBuy = document.querySelector('#container_modal_buy');

let updatedPrice = '26/09/23 - 17:36 PM';

let tshirt = [];
let optionClothes;
let containerModal;

class Clothes {
    constructor(id,type,name,photo,colors,priceCOP,priceBTC,description,size,limit = null) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.photo = photo;
        this.colors = colors;
        this.priceCOP = priceCOP;
        this.priceBTC = priceBTC;
        this.description = description;
        this.size = size
        this.limit = limit;
    }
}

function generateLimitArray(limit) {
    return Array.from({ length: limit }, (_, i) => i + 1);
}
function convertNumbertoMoney(a) {
    b = a.toLocaleString();
    return b;
};

let tshirtoversizeblack = new Clothes(1,'Shirts','Camiseta Oversize Negra','../resources/img/oversize_unicolor_negra_2.png',['Blanco','Negro'],40000,0.00038,'Camiseta Unicolor cuello redondo, el tamaño de manga es 3/4,el tipo de tela es liso hecho de poly algodón.',['M','L'],generateLimitArray(3));
let tshirtoversizewhite = new Clothes(2,'Shirts','Camiseta Oversize Blanca','../resources/img/oversize_unicolor_blanca_2.png',['Blanco','Negro'],40000,0.00038,'Camiseta Unicolor cuello redondo, el tamaño de manga es 3/4,el tipo de tela es liso hecho de poly algodón.',['S','M'],generateLimitArray(3));


function loadPage() {
    function sendOrder() {
        containerModal = `
            <div class="container_modal_buyload">
                <section class="container_contain_modal_buyload">
                    <h2>¡Gracias por tu compra!</h2>
                    <label>En el momento no contamos con un portal de pagos online, por ello las ordenes se procesaran por redes alternativas como Whatsapp o Gmail para que puedas incluir la información como dirección y el metodo de pago que tengas disponible para el momento de la entrega, al chat o al correo también podras agregar las dudas o detalles adicionales que desees.</label>
                    <figure>
                        <img src="../resources/img/money-transfer-a7.svg" class="img_contain_sect_buyorder">
                    </figure>
                    <form>
                        <label>Dirección</label>
                        <input type="text" placeholder="Indica tu dirección acá" autocomplete="street-address">
                        <label>Punto de referencia</label>
                        <input type="text" placeholder="Indica un punto de refencia cercano a donde recibes el pedido">
                        <label>Correo electronico</label>
                        <input type="email" placeholder="Indica tu gmail acá" autocomplete="email">
                        <label>Número de télefono</label>
                        <input type="number" placeholder="Indica tu número de celular acá" autocomplete="tel">
                        <label>Indica algunas caracteristicas especiales de tu pedido</label>
                        <textarea></textarea>
                    </form>
                    <h2>Revisión de compra</h2>
                    <ul>
                        <li></li>
                    </ul>
                </section>
            </div>
        `;
        containerModalBuy.innerHTML = containerModal;
    };
   
    tshirt.push(tshirtoversizeblack,tshirtoversizewhite);
    
    tshirt.forEach((tshirts)=>{
        optionClothes = `
            <div>
                <figure>
                    <img src='${tshirts.photo}' alt=''>
                    <h2>${tshirts.name}</h2>
                </figure>
                <p>$${convertNumbertoMoney(tshirts.priceCOP)} COP - $${tshirts.priceBTC} BTC</p>
                <form class='section_options_clothes'>
                    <p>Seleccione el color</p>
                    <select>
                        ${tshirts.colors.map(color => `<option>${color}</option>`).join('')};
                    </select>
                    <p>Seleccione la talla</p>
                    <select>
                        ${tshirts.size.map(size => `<option>${size}</option>`).join('')};
                    </select>
                    <p>Seleccione la cantidad</p>
                    <select>
                        ${tshirts.limit.map(limit => `<option>${limit}</option>`).join('')};
                    </select>
                </form>
                <section>
                    <p>Indique detalles</p>
                    <textarea></textarea>
                </section>
                <button class="button_buy_load">Comprar</button>
                <p class="price_updated">Precio actualizado al día: ${updatedPrice}</p>
            </div>
        `;    
    containerImagesClothes.innerHTML += optionClothes;
    const buttonBuyLoad = document.querySelectorAll('.button_buy_load')
    buttonBuyLoad.forEach((button)=>{
        button.addEventListener('click',function(){
            sendOrder();
        })
    })
    })
};


window.addEventListener('load',loadPage);