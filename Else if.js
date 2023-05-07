//      Condicionais Else if


const temperature = 40

if (temperature >= 36 && temperature <= 39){
    console.log('A pessoa está saudavel') 
} else if (temperature > 37) {
    console.log('A pessoa esta febriu')
}else if (temperature > 38) {
    console.log('A pessoa esta com febre')
}
else {
    console.log('A pessoa esta com a temperatura baixa, deve procurar um médico!')
}


// A conficional Else If pode ser usada repeditas vezes sem problema ate ser feita a aveitação da mesma
