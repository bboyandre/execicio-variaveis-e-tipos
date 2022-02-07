const verificarPalindromo1 = (string)=> {
    if(!string) return;
    
    return string.split("").reverse().join("") === string;
}


const verificarPalindromo2 = (string)=> {
    if(!string) return;

    for (let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght -1 - i]) {
            return false;
        } 
    }

    return true;
}


console.log(verificarPalindromo2("ovo"));