document.addEventListener('DOMContentLoaded', function(){
let nomeDoHeroi = prompt("Qual é o seu nome aventureiro ?")
let xpDoHeroi = prompt("O quanto você ja evolui nesse mundo ? sua xp em números")
let respostaUsuario = document.getElementById("resposta")
let eloUsuario = document.getElementById("elo")


if (xpDoHeroi <= 1000) {
    console.log("você é novo por aqui. Elo: Ferro ")
    respostaUsuario.innerHTML = "você é novo por aqui. "
    eloUsuario.innerHTML = "Elo: Ferro "
} else 
if (xpDoHeroi > 1000 &&  xpDoHeroi<= 2000) {
    console.log("Tem muito que evoluir ainda! elo: Bronze")
    respostaUsuario.innerHTML = "Tem muito que evoluir ainda! "
    eloUsuario.innerHTML = "Elo: Bronze "
}
else
 if (xpDoHeroi > 2001 && xpDoHeroi<= 5000) {
    console.log("Não tem porque parar agora continue evoluindo! elo: Prata")
    respostaUsuario.innerHTML = "Não tem porque parar agora continue evoluindo! elo: Prata"
    eloUsuario.innerHTML = "Elo: Prata "
} else
 if (xpDoHeroi > 5000 && xpDoHeroi <= 7000) {
    console.log("Talvez um dia você será lembrado! elo: Ouro")
    respostaUsuario.innerHTML = "Talvez um dia você será lembrado! "
    eloUsuario.innerHTML = "Elo: Ouro "
} else
 if (xpDoHeroi > 7000 && xpDoHeroi <= 8000) {
    console.log("Aqui é onde os fracos desistem! elo: PLatina")
    respostaUsuario.innerHTML = "Aqui é onde os fracos desistem! "
    eloUsuario.innerHTML = "Elo: Platina "
} else
 if (xpDoHeroi > 8000 && xpDoHeroi <= 9000) {
    console.log("você ainda não esta pronto para me enfrentar, fraco! elo: Ascendente")
    respostaUsuario.innerHTML = "você ainda não esta pronto para me enfrentar, fraco! "
    eloUsuario.innerHTML = "Elo: Ascendente "
} else 
if (xpDoHeroi > 9000 && xpDoHeroi <= 10000) {
    console.log("Ja ouvi por ai canções com o nome " + nomeDoHeroi, "elo: Imortal")
    respostaUsuario.innerHTML = "Ja ouvi por ai canções com o nome " + nomeDoHeroi 
    eloUsuario.innerHTML = "Elo: Imortal "
} else 
if (xpDoHeroi > 10000) {
    console.log("Um digno de sentar ao meu lado em uma taverna, vem vamos tomar uma! elo: Radiante")
    respostaUsuario.innerHTML = "Um digno de sentar ao meu lado em uma taverna, vem vamos tomar uma!"
    eloUsuario.innerHTML = "Elo: Radiante "
}
})

