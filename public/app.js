const containerImagesClothes = document.querySelector('#container_images_main');
const containerModalBuy = document.querySelector('#container_modal_buy');
const containerModalWsGM = document.querySelector('#container_modal_ws_gm');

let updatedPrice = '26/09/23 - 17:36 PM';

let tshirt = [];
let listShirt = [];
let listAddres = [];
let message =[];
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

let tshirtoversizeblack = new Clothes(1,'Shirts','Camiseta Oversize Negra','./resources/img/oversize_unicolor_negra_2.png',['Blanco','Negro'],40000,0.00038,'Camiseta Unicolor cuello redondo, el tamaño de manga es 3/4,el tipo de tela es liso hecho de poly algodón.',['M','L'],generateLimitArray(3));
let tshirtoversizewhite = new Clothes(2,'Shirts','Camiseta Oversize Blanca','./resources/img/oversize_unicolor_blanca_2.png',['Blanco','Negro'],40000,0.00038,'Camiseta Unicolor cuello redondo, el tamaño de manga es 3/4,el tipo de tela es liso hecho de poly algodón.',['S','M'],generateLimitArray(3));


function loadPage() {
    function sendOrder() {
        function sendOrderWsGmail() {
           listShirt.forEach((listOne)=>{
            listAddres.forEach((listTwo)=>{
                const constructedMessage = `¡Hola, estos son los detalles de mi pedido!:${listOne.name},color:${listOne.color},talla:${listOne.size},cantidad:${listOne.quantity},detalles:${listOne.detail},esta es el detalle de mi dirección:${listTwo.address},Punto de referencia:${listTwo.reference},¡Este es mi email por si algo!:${listTwo.email},¡Cuando estén cerca me llaman!:${listTwo.phone},¡si tengo algún detalle te lo dejo por acá!:${listTwo.detail}`;
                message.push(constructedMessage);
            })
           })
            containerModal = `
             <div class="container_modal_wsGmail" id="container_modal_wsGmail">
                 <section class="container_contain_wsGmail" id="container_contain_gsGmail">
                     <figure>
                         <img src="./resources/img/icone-x-avec-cercle-gris.png" class="icon_x_wsgm" id="icon_x_wsgm">
                     </figure>
                     <h2>¡Ya estamos a punto!,elige alguna de las dos opciones para finalmente enviar tu pedido</h2>
                     <figure>
                        ${message.map(message=> `
                        <a href="https://wa.me/573152264378?text=${encodeURIComponent(message)}" target="_blank">
                             <img src="./resources/img/whatsapp-logo-png.png" class="btn_ws_gmail">
                         </a>
                        `).join('')}
                         <img src="./resources/img/logo_gmail_png.png" class="btn_gmail_ws">
                     </figure>
                 </section>
             </div>
             `;
            containerModalWsGM.innerHTML = containerModal;
            const iconXwsgm = document.querySelector('#icon_x_wsgm');
            iconXwsgm.addEventListener('click',function() {
                containerModal = '';
                containerModalWsGM.innerHTML = containerModal;
            });
        };
        listShirt.forEach((foreachshirt)=>{
            containerModal = `
            <div class="container_modal_buyload" id="container_modal_buyload">
                <section class="container_contain_modal_buyload">
                    <figure>
                        <img src="./resources/img/icone-x-avec-cercle-gris.png" class="icon_close_formpayload" id="icon_close_formpayload">
                    </figure>
                    <h2>¡Gracias por tu compra!</h2>
                    <label>En el momento no contamos con un portal de pagos online, por ello las ordenes se procesaran por redes alternativas como Whatsapp o Gmail para que puedas incluir la información como dirección y el metodo de pago que tengas disponible para el momento de la entrega, al chat o al correo también podras agregar las dudas o detalles adicionales que desees.</label>
                    <figure>
                        <img src="./resources/img/money-transfer-a7.svg" class="img_contain_sect_buyorder">
                    </figure>
                    <h2>Revisión de compra</h2>
                    <ul>
                        <li>Nombre : ${foreachshirt.name},Color : ${foreachshirt.color},Tamaño : ${foreachshirt.size},Cantidad : ${foreachshirt.quantity},Detalles : ${foreachshirt.detail}.</li>
                    </ul>
                    <form class="form_modal_payload" id="form_modal_payload">
                        <label>Dirección</label>
                        <input type="text" placeholder="Indica tu dirección acá" autocomplete="street-address" id="input_direction">
                        <label>Punto de referencia</label>
                        <input type="text" placeholder="Indica un punto de refencia cercano a donde recibes el pedido" id="input_reference">
                        <label>Correo electronico</label>
                        <input type="email" placeholder="Indica tu email acá" autocomplete="email" id="input_email">
                        <label>Número de télefono</label>
                        <input type="number" placeholder="Indica tu número de celular acá" autocomplete="tel" id="input_numberphone">
                        <label>Indica algunas caracteristicas especiales de tu pedido</label>
                        <textarea id="input_details"></textarea>
                        <input type="submit" value="Enviar" class="inputsubmit_payload" id="inputsubmit_payload"></input>
                    </form>
                </section>
            </div>
        `;
        })
        containerModalBuy.innerHTML += containerModal;
        const containerModalBuyLoad = document.querySelector('#container_modal_buyload');
        const iconCloseFormPaylaod = document.querySelector('#icon_close_formpayload');
        const inputSubmitPayload = document.querySelector('#inputsubmit_payload');
        const inputDirection = document.querySelector('#input_direction');
        const inputReference = document.querySelector('#input_reference');
        const inputEmail = document.querySelector('#input_email');
        const numberPhone = document.querySelector('#input_numberphone');
        const inputDetails = document.querySelector('#input_details');
        inputSubmitPayload.addEventListener('click',hideFirstModal);
        iconCloseFormPaylaod.addEventListener('click',hideFirstModal);        
        function showFirstModal() {
            containerModalBuyLoad.classList.add('container_modal_buyload_show');
        };
        function hideFirstModal() {
            containerModalBuyLoad.classList.remove('container_modal_buyload_show');
        }
        showFirstModal();
        const formModalPayload = document.querySelector('#form_modal_payload');
        formModalPayload.addEventListener('submit',function(event){
            let TinputDirection = inputDirection.value;
            let TinputReference = inputReference.value;
            let TinputEmail = inputEmail.value;
            let TnumberPhone = numberPhone.value;
            let TinputDetails = inputDetails.value;
            let addressTwo = {
                address : TinputDirection,
                reference : TinputReference,
                email : TinputEmail,
                phone : TnumberPhone,
                detail : TinputDetails
            };
            listAddres.push(addressTwo);      
            event.preventDefault();
            sendOrderWsGmail();
        });
    };
   
    tshirt.push(tshirtoversizeblack,tshirtoversizewhite);
    
    tshirt.forEach((tshirts)=>{
        optionClothes = `
            <div>
                <figure>
                    <img src='${tshirts.photo}' alt=''>
                    <h2 id="target_contain_name">${tshirts.name}</h2>
                </figure>
                <p>$${convertNumbertoMoney(tshirts.priceCOP)} COP - $${tshirts.priceBTC} BTC</p>
                <form class="section_options_clothes">
                    <p>Seleccione el color</p>
                    <select id="target_contan_color">
                        ${tshirts.colors.map(color => `<option>${color}</option>`).join('')};
                    </select>
                    <p>Seleccione la talla</p>
                    <select id="target_contain_size">
                        ${tshirts.size.map(size => `<option>${size}</option>`).join('')};
                    </select>
                    <p>Seleccione la cantidad</p>
                    <select id="target_contain_quantity">
                        ${tshirts.limit.map(limit => `<option>${limit}</option>`).join('')};
                    </select>
                </form>
                <section>
                    <p>Indique detalles</p>
                    <textarea id="target_contain_details"></textarea>
                </section>
                <button class="button_buy_load">Comprar</button>
                <p class="price_updated">Precio actualizado al día: ${updatedPrice}</p>
            </div>
        `;    
    containerImagesClothes.innerHTML += optionClothes;
    const buttonBuyLoad = document.querySelectorAll('.button_buy_load')
    buttonBuyLoad.forEach((button)=>{
        button.addEventListener('click',function(){
            const targetContainName = document.querySelector('#target_contain_name');
            const targetContainColor = document.querySelector('#target_contan_color');
            const targetContainSize = document.querySelector('#target_contain_size');
            const targetContainQuantity = document.querySelector('#target_contain_quantity');
            const targetContainDetails = document.querySelector('#target_contain_details');
            let nameTarget = targetContainName.innerText;
            let  colorTarget= targetContainColor.value;
            let sizeTarget = targetContainSize.value;
            let quantityTarget = targetContainQuantity.value;
            let detailTarget = targetContainDetails.value;

            function sendProductArray() {
                let savedObjectTarget = {
                    name : nameTarget,
                    color : colorTarget,
                    size : sizeTarget,
                    quantity : quantityTarget,
                    detail : detailTarget
                };
                listShirt.push(savedObjectTarget);
                sendOrder();
            };
            sendProductArray();
        })
    })
    })
};


window.addEventListener('load',loadPage);