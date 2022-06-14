/*
SWITCH
salygu palyginimas, beveik kaip if() {}
*/

const day = 1;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    
    default:
        console.log('tokios dienos saivaiteje nera');
        break;
}


const weekday = 2;

switch (weekday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        
        console.log('darbo diena');
        break;
    case 6:
    case 7:

    default:
        console.log ('savaitgalis');
        break;
}

console.log('------------------------------')

if (weekday === 1
    || weekday === 2
    || weekday === 3
    || weekday === 4
    || weekday === 5){
    console.log('darbo diena');
} else if (weekday === 6
    || weekday === 7) {
        console.log ('savaitgalis');
    } else {
        console.log ('tokios dienos savaitgali nera');
    }

    const stotele = 'parko';

    switch (stotele) {
        case 'parko':
            console.log('parko')
        case 'Geniu':
            console.log('Geniu')
        case 'Tremtiniu':
            console.log('Tremtiniu')
        case 'Rudens':
            console.log('Rudens')
        case 'Mindaugo':
            console.log('Mindaugo')
        case 'Zalias tiltas':
            console.log('Zalias tiltas')
            break;
        
        case 'Lvovo':
            console.log('Lvovo')
        case 'Vasara':
            console.log('Vasara')
        case 'Rudens 2':
            console.log('Rudens 2')
        case 'Tremtiniu 2':
            console.log('Tremtiniu 2')
        case 'Parko 2':
            console.log('Parko 2')

    }
