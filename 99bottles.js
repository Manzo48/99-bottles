


function generateSingleStanza(number){

    if (number === 1){
        console.log(number +  ' бутылка пива на стене,' + number + ' бутылка пива!')
        console.log('Возьми одну, пусти по кругу, нет бутылок пива на стене!');
    } else if (number % 10 == 1 && number !== 11){
        console.log(number +  ' бутылка пива на стене,' + number + ' бутылка пива!')
        console.log(  ' Возьми одну, пусти по кругу,' + (number -1) +  ' бутылок пива на стене!')
    } else if ((number % 10 === 2 || number % 10 === 3 || number % 10 === 4) && !(number >= 12 && number <= 14)){
        phrase = 'бутылки пива';
        console.log(number + ' ' + phrase + ' на стене, ' + number + ' ' + phrase + '!');
        if (number % 10 == 2){
            console.log('Возьми одну, пусти по кругу, ' + (number - 1) + ' бутылка пива на стене!');
        } else {
            console.log('Возьми одну, пусти по кругу, ' + (number - 1) + ' бутылки пива на стене!');
        }
    } else {
        console.log(number +  ' бутылок пива на стене,' + number + ' бутылок пива!')
        console.log(  ' Возьми одну, пусти по кругу,' + (number -1 ) +  ' бутылок пива на стене!') 
    }

}
function generateSongText(number){
    for (let i = number; i > 0; i--){
        generateSingleStanza(i)
    }
}


generateSingleStanza(1)
generateSongText(24)


