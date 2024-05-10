// Chave API
const key = "0000000000000000000000000000000"

// Evento Clicar na Lupa
function clicarLupa(){
    const cidade = document.querySelector(".input").value;
    realizarBusca(cidade);
}

// Busca Dados na API
async function realizarBusca(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resultado => resultado.json());
    console.log(dados);
    resultadoTela(dados)
}

// Saida no HTML
function resultadoTela(dados){
    // Nome 
    document.querySelector(".cidade-saida").innerHTML = dados.name;
    // País
    document.querySelector(".pais").innerHTML = "País: " +dados.sys.country;
    // Temperatura
    document.querySelector(".temperatura").innerHTML ="Temperatura: " + parseInt(dados.main.temp) + " °C";
    // Umidade 
    document.querySelector(".umidade").innerHTML ="Umidade: " + dados.main.humidity + "%";
    // Vento 
    document.querySelector(".vento").innerHTML ="Vento: " + dados.wind.speed + "Km/h";
    // Clima
    document.querySelector(".tempo").innerHTML = dados.weather[0].description;
    // Imagem
    document.querySelector(".img-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}
