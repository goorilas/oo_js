const orc = {
    nome: "orc",
    pele: "verde",
    arma: "machados",
    skil: "rage",
    passiva: "força bruta",
    power: 1200,
}

const elf = {
    nome: "elfo",
    pele: "branca",
    arma: "arco",
    skil: "olhos de aguia",
    passiva: "sprint",
    power: 1250,
}

const anao = {
    nome: "anão",
    pele: "amarela",
    arma: "pau de fogo",
    skil: "granada de polvora",
    passiva: "resistência",
    power: 1190,
}

const humam = {
    nome: "humano",
    pele: "rosa",
    arma: "espada",
    skil: "sequencia de golpes",
    passiva: "esquiva",
    power: 1255,
}

function Raca(nome, pele, arma, skil, passiva, power ) {
    this.nome = nome;
    this.pele = pele;
    this.arma = arma;
    this.skil = skil;
    this.passiva = passiva;
    this.power = power;
    this.fusaoDeRaca = function() {
        console.log("Humanos são os unicos que podem misturar raças. Raça em conflito.")
    }
}

function Mutacao(nome, pele, arma, skil, passiva, power, criatura) {
    this.criatura = criatura;
    Raca.call(this, nome, pele, arma, skil, passiva, power)
}

function Grotesco(nome, pele, arma, skil, passiva, power, boss) {
    this.boss = boss;
    Raca.call(this, nome, pele, arma, skil, passiva, power )
}


const newRacaElfHumam = new Raca("Galactas", "rosa", "arco-espada", "sequência de goles rápidos", "acerto critico", 1520);
const newRacaOrcHumam = new Raca("Hermes", "verde", "espada-machado", "sequencia de golpes furiosos", "determinação de combate", 1550);
const newRacaAnaoHumam = new Raca("Sirius", "bege", "pistolas-adagas", "lança-missil", "colosso", 1510);
const newRacaMutacao = new Mutacao("Mutante", "vermelha", "garras", "recoverheal", "regeneração", 2500, "mostro classe elite");
const newRacaBoss = new Grotesco("Grotesco", "cinza", "orbes", "super nova", "falem absorve", 5000, "Boss")

console.log(newRacaElfHumam)
console.log(newRacaOrcHumam)
console.log(newRacaAnaoHumam)
newRacaBoss.fusaoDeRaca();
console.log(newRacaMutacao)
newRacaBoss.fusaoDeRaca();
console.log(newRacaBoss)
