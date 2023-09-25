const containerImagesClothes = document.querySelector('#container_images_main');

let tshirt = [];
let optionClothes;

class Clothes {
    constructor(id,type,name,photo,colors,description,limit = null) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.photo = photo;
        this.colors = colors;
        this.description = description;
        this.limit = limit;
    }
}

let tshirtoversizeblack = new Clothes(1,'Shirts','Camiseta Oversize Negra','../resources/img/oversize_unicolor_negra_2.png',['Blanco','Negro'],'Camiseta Unicolor cuello redondo, el tamaño de manga es 3/4,el tipo de tela es liso hecho de poly algodón.',generateLimitArray(3));
let tshirtoversizewhite = new Clothes(2,'Shirts','Camiseta Oversize Blanca','../resources/img/oversize_unicolor_blanca_2.png',['Blanco','Negro'],'Camiseta Unicolor cuello redondo, el tamaño de manga es 3/4,el tipo de tela es liso hecho de poly algodón.',generateLimitArray(3));

function generateLimitArray(limit) {
    return Array.from({ length: limit }, (_, i) => i + 1);
}

function loadPage() {
   
    tshirt.push(tshirtoversizeblack,tshirtoversizewhite);
    
    tshirt.forEach((tshirts)=>{
        optionClothes = `
            <div>
                <figure>
                    <img src='${tshirts.photo}' alt=''>
                    <h2>${tshirts.name}</h2>
                </figure>
                <form class='section_options_clothes'>
                    <p>Seleccione el color</p>
                    <select>
                        ${tshirts.colors.map(color => `<option>${color}</option>`).join('')};
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
                <button>Comprar</button>
            </div>
        `;

    containerImagesClothes.innerHTML += optionClothes;
    console.log(tshirt);
    })
};


window.addEventListener('load',loadPage);