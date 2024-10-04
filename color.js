const cor1 = document.getElementById("cor1");
const cor2 = document.getElementById("cor2");
const cor3 = document.getElementById("cor3");
const bg = document.getElementsByClassName('result')[0];
const botao = document.getElementById("icon");
const hex = document.getElementById('hex')

const cores = [cor1, cor2, cor3]
cores.forEach(cor => cor.addEventListener('input', trocarbg));//atualiza toda vez que move cada range

function trocarbg() {
    const [r, g, b] = cores.map(cor => cor.value);//pega o valor dos 3 ranges
    bg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;//troca o bg
    botao.innerHTML = 'content_copy'//atualiza o botão de copiar para o defalt
    
    const res =  divisaoPorResto(r)+divisaoPorResto(g)+divisaoPorResto(b)
    hex.innerHTML  = `#${res}`//atualiza o cod hex para copiar
}

//funçao para converter rbg em hex
function divisaoPorResto(dividendo) {
    const quociente = Math.floor(dividendo / 16);
    const resto = dividendo % 16;
    
    return `${toHex(quociente)}${toHex(resto)}`;
    
}
//converte  de 10 a 15 em A, B, ...
function toHex(value) {
    if (value < 10) return value.toString(); // Números de 0 a 9
    switch (value) {
        case 10:
            return 'A';
        case 11:
            return 'B';
        case 12:
            return 'C';
        case 13:
            return 'D';
        case 14:
            return 'E';
        case 15:
            return 'F';
        default:
            return ''; // Para valores inválidos
    }
}

//ao clicar no icon de copy muda para check e deixa o cod hex na área de tranfencia
botao.addEventListener('click', () => {
    navigator.clipboard.writeText(hex.innerText)
    botao.innerHTML = 'check'
});

    