/*EXEMPLOS DE SAÍDA

Situação 1:
O Captuh está a 10km/h, e está mais rápido que o Oroch, que está a 7km/h!

Situação 2:
O Oroch está a 50km/h, e está mais rápido que o Captuh, que está a 25km/h!

Situação 3:
Tanto Captuh quando Oroch estão na mesma velocidade de 30km/h!*/

let nome = prompt('qual o nome do seu veículo?')
let nomeDois = prompt('qual o nome do segundo veículo?')
let primeVeloci = parseInt(prompt(`qual a velocidade do veículo ${nome}?`))
let segunVeloci = parseInt(prompt(`qual a velocidade do veículo ${nomeDois}?`))

if(primeVeloci>segunVeloci){
    alert(`${nome} está a ${primeVeloci}km/h, que está mais rápido que ${nomeDois}, que está a ${segunVeloci}km/h`)
} else if (primeVeloci<segunVeloci){

    alert(`${nomeDois} está a ${segunVeloci}km/h, que está mais rápido que ${nome}, que está a ${primeVeloci}km/h`)
} else {
    alert(`tanto ${nome} quanto ${nomeDois} estão na mesma velocidade de ${primeVeloci}`)
}

