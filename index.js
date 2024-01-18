// Code your solutions in this filef
function writeCards(names) {

    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        newArray.push(message);
    }

    return newArray;
}
const users = ["Guadalupe", "Ollie", "Aki"];
writeCards(users);


function countDown(count) {
    while(count >= 0){
        console.log(count);
        count --;
    }
}