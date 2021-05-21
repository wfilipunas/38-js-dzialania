function dzialania(a,b) {
    let suma = a + b;
    let roznica = a - b;
    let iloczyn = a * b;
    let textSuma = 'Wynik dodawania wynosi '
    let textRoznica = 'Wynik odejmowania wynosi ';
    let textIloczyn = 'Wynik mnożenia wynosi ';
    
    if (suma >= 0 && roznica >= 0 && iloczyn >= 0 ) {
        console.log(textSuma.substr(0) + suma);
        console.log(textRoznica.substr(0) + roznica);
        console.log(textIloczyn.substr(0) + iloczyn);
    } else if (suma < 0 && roznica >= 0 && iloczyn >= 0){
        suma = console.log('Wynik nieprawidłowy');
        console.log(textRoznica.substr(0) + roznica);
        console.log(textIloczyn.substr(0) + iloczyn);
    } else if (suma >= 0 && roznica < 0 && iloczyn >= 0) {
        console.log(textSuma.substr(0) + suma);
        roznica = console.log('Wynik nieprawidłowy');
        console.log(textIloczyn.substr(0) + iloczyn);
    } else if (iloczyn  < 0 && suma >= 0 && roznica >= 0) {
        console.log(textSuma.substr(0) + suma);
        console.log(textRoznica.substr(0) + roznica);
        iloczyn = console.log('Wynik nieprawidłowy');
    } else if (suma >= 0 && roznica < 0 && iloczyn < 0) {
        console.log(textSuma.substr(0) + suma);
        roznica = console.log('Wynik nieprawidłowy');
        iloczyn = console.log('Wynik nieprawidłowy');
    } else if (suma < 0 && roznica >= 0 && iloczyn < 0) {
        suma = console.log('Wynik nieprawidłowy');
        console.log(textRoznica.substr(0) + roznica);
        iloczyn = console.log('Wynik nieprawidłowy');
    } else if (suma < 0 && roznica < 0 && iloczyn < 0) {
        suma = console.log('Wynik nieprawidłowy');
        roznica = console.log('Wynik nieprawidłowy');
        iloczyn = console.log('Wynik nieprawidłowy');
    } else if (suma < 0 && roznica >= 0 && iloczyn >= 0) {
        suma = console.log('Wynik nieprawidłowy');
        console.log(textRoznica.substr(0) + roznica);
        console.log(textIloczyn.substr(0) + iloczyn);
    } else if (suma >= 0 && roznica >= 0 && iloczyn < 0) {
        console.log(textSuma.substr(0) + suma);
        console.log(textRoznica.substr(0) + roznica);
        iloczyn = console.log('Wynik nieprawidłowy');
    }
}

dzialania(1,3);

