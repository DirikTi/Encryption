const keys = [
    'o', 'k', 'j', 'u', 'g', 'y', '1', 't', '2', '6', 'w', 'e', '3', 'b', 'a', 'h', 'q', 'd', 'i', 'r'
    , 'm', '8', '0', '?', '*', 'x'
]
//'x'
let letterCase = ""
let Encryption = (password = "") =>  { 
    console.log(password);
    let newEncryptionPassword = "";
    if(typeof(password) != "string")
        console.log("Enter a password")
    else{
        password = password.trim();


        return main();
    }

   
    function letters_numbers()  {
        return {
        _numberCase : ['1','2','3','4','5','6','7','8','9','0','*','*','*',
        '*','*','*','*','*','*','*','*','*','*','*','*'],
        
        _cryptionalLetterCase : [
            'aaa', 'avb', 'vbx', 'vbh', 'VBD', 'avt', 'qwe', 'ref', 'opd', 'xxx', 'lkj', 'cxs',
            'okb', 'lkb', '03a', 'hll', 'ccf', 'avg', 'avh', 'WTF', 'YYY', 'pcd', 'cvn', 'reh', 'rey'
        ],

        _cryptionalUpperLetterCase : [
            'gbh', 'oop', 'ppc', 'llh', 'cx4', 'ohl', 'pou', 'vvc', 'wcc', 'dag', 'ger', 'ggg', 'lll', 'bbb', 'cvb',
            'ppo', 'ddd', 'slm', 'km6', 'Trf', 'Olc', 'lih', 'hhh', 'bgh', 'POP'
        ],
        
        _cryptionalNumberCase : ['uyu', 'JJJ', 'sht', 'fkk', 'avl', 'OOO', 'kkk', '23q', 'MAL', 'Ak4']
        }
    }


    function main(){
        let newKeys = generateKey();
        setWords(newKeys);
        
        password.split("").forEach((word) => {      
            if(Number(word)){
                toNumbers(word);
                
            } else{
                word == word.toUpperCase() ? toUppers(word) : toLowers(word);
            }
            
        })

        return toTextNewKey(newKeys) +newEncryptionPassword;
        
    }

    function toUppers (word){
        const upperLetter = letters_numbers()._cryptionalUpperLetterCase;
        const LETTERS = letterCase;

        LETTERS.map((theWord, index) => {
            theWord == word.toLowerCase() ?  newEncryptionPassword = newEncryptionPassword + upperLetter[index]
             : null 
        });

    }

    function toLowers (word){
        const lowerLetter = letters_numbers()._cryptionalLetterCase;
        const LETTERS = letterCase;
        LETTERS.map((theWord, index) => {
            theWord == word ?  newEncryptionPassword = newEncryptionPassword + lowerLetter[index]
             : null;
        })
        
    }

    function toNumbers (number){
        const numbersC = letters_numbers()._cryptionalNumberCase;
        const NUMBERS = letters_numbers()._numberCase;

        NUMBERS.map((theNumber, index) => {
            theNumber == number ? newEncryptionPassword = newEncryptionPassword + numbersC[index] 
            : null;
        })
    }

    
    
    function generateKey(){
        let newKeys = [];
        let gotKeys = [];

        
        while (newKeys.length < 25) {
            let found = false;
            let randomNumber = Math.floor(Math.random() * 25 + 0);

            gotKeys.forEach((e) => {
                e == randomNumber ? found = true : null;
            })
            
            if(!found){
                newKeys.push(keys[randomNumber]);
                gotKeys.push(randomNumber);
            }
        }
        return newKeys;
    }

    function toTextNewKey(newKey) {
        let text = "";
        newKey.forEach((e) => {
            text = text + e;
        });

        return text;
    }
    
    function setWords(generatedKey){
        let  _letterCase = ['x','y','z','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v','a','b','c'];
        let newLetterCase = [];
        for(let i = 0; i < 25; i++){
            for(let j = 0; j < 25; j++){
                if(keys[i] == generatedKey[j]){
                    newLetterCase.push(_letterCase[j]);
                }
            }
        }
        letterCase = newLetterCase;
    }
}

let Decryption = (cryptedPassword) => {
    return main()
    function main(){
        let [newKeys, password] = parsePassword(cryptedPassword)
        let letter = getLetters(newKeys);
        let decryptedWord = "";
        for (let i = 0; i < password.length; i = i + 3) {
            let found = false;
            let inP = password[i] + password[i + 1] + password[i + 2];
            for(let j = 0; j < letters_numbers()._cryptionalLetterCase.length; j++){
                if(inP == letters_numbers()._cryptionalLetterCase[j]){
                    decryptedWord = decryptedWord + letter[j];
                    found = true;
                }
            }
            
            
        }
        return decryptedWord;
    }

    function parsePassword(password){
        let key = [];
        let pass = [];
        for (let index = 0; index < password.length; index++) {
            if(index < 25){
                key.push(password[index]);
            }
            else{
                pass.push(password[index]);
            }
            
        }
        return [ key, pass];
    }
    
    function getLetters(newKeys) {
        let newLetter = [];
        let  _letterCase = ['x','y','z','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v','a','b','c'];
        for(let i = 0; i < keys.length; i ++){
            for(let j = 0; j < newKeys.length; j++){
            
                if(keys[i] == newKeys[j]){
                    newLetter.push(_letterCase[j]);
                }
            }
        }
        return newLetter;
    }

    function letters_numbers()  {
        return {
        _numberCase : ['1','2','3','4','5','6','7','8','9','0','*','*','*',
        '*','*','*','*','*','*','*','*','*','*','*','*'],
        
        _cryptionalLetterCase : [
            'aaa', 'avb', 'vbx', 'vbh', 'VBD', 'avt', 'qwe', 'ref', 'opd', 'xxx', 'lkj', 'cxs',
            'okb', 'lkb', '03a', 'hll', 'ccf', 'avg', 'avh', 'WTF', 'YYY', 'pcd', 'cvn', 'reh', 'rey'
        ],

        _cryptionalUpperLetterCase : [
            'gbh', 'oop', 'ppc', 'llh', 'cx4', 'ohl', 'pou', 'vvc', 'wcc', 'dag', 'ger', 'ggg', 'lll', 'bbb', 'cvb',
            'ppo', 'ddd', 'slm', 'km6', 'Trf', 'Olc', 'lih', 'hhh', 'bgh', 'POP'
        ],
        
        _cryptionalNumberCase : ['uyu', 'JJJ', 'sht', 'fkk', 'avl', 'OOO', 'kkk', '23q', 'MAL', 'Ak4']
        }
    }
}

let result = Encryption("secret");
console.log(result);
let decry = Decryption(result)
console.log(decry);