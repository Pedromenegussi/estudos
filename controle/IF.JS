function soBoaNoticia(nota){
    if(nota>=7){
        console.log("Aprovado com nota: " + nota);
    }
}

soBoaNoticia(7.1)
soBoaNoticia(5)

function seForVerdade(valor){
    if(valor){
        console.log("é verdade... " + valor)
    }
}

seForVerdade()
seForVerdade('')
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(' ')
seForVerdade(-1)
seForVerdade(1)
seForVerdade(0)
seForVerdade([1,2])
seForVerdade({})