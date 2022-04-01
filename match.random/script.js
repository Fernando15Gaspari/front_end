/* função que usa a Match.random para gerar numeros aleatórios. */
var lista = ['item1', 'item2', 'item3'];

for(let i = 0; i < 3; i++) {
    lista[i] = document.getElementsByTagName('h1')[i];
};
                    
function pisca1() { 

    lista[0].style.backgroundColor = `rgb(${Math.random() * 255} ,${Math.random() * 255} ,${Math.random() * 255})`;
                 
};
function pisca2() {               
    lista[1].style.backgroundColor = `rgb(${Math.random() * 255} ,${Math.random() * 255} ,${Math.random() * 255})`;       
};

function pisca3() {               
    lista[2].style.backgroundColor = `rgb(${Math.random() * 255} ,${Math.random() * 255} ,${Math.random() * 255})`;       
}; 
         