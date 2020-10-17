function factorial (n){
    return n == 1 ? n : n * factorial(n - 1);
}
const keys = [
    'o', 'k', 'j', 'u', 'g', 'y', '1', 't', '2', '6', 'w', 'e', '3', 'b', 'a', 'h', 'q', 'd', 'i', 'r'
    , 'm', '8', '0', '?', '*', 'x'
]
function generateKey(){
    let newKeys = [];
    let gotKeys = [];

    
    while (newKeys.length < 25) {
        let found = false;
        let randomNumber = Math.floor(Math.random() * 25 + 1);

        gotKeys.forEach((e) => {
            e == randomNumber ? found = true : null;
        })
        
        if(!found){
            newKeys.push(keys[randomNumber]);
            gotKeys.push(randomNumber);
        }
    }
    toTextNewKey(newKeys);
}

function toTextNewKey (newKey){
    let text = "";
    newKey.forEach((e) => {
        text = text + e;
    });
    console.log(text);
}

generateKey();