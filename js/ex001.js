const input = document.querySelector('input')
const ul = document.querySelector('ul')

let str = "";

function adicionar(event){

    if(event.key != 'Enter'){
    
        if(event.key == 'CapsLock' || event.key == 'Backspace'){

            switch (event.key) {
                case 'Backspace':
            
                    str = str.slice(0, -1)

                    break;
            
                case 'CapsLock':
                    break;
            }

        }else{

            str += event.key; 

        }

     } else{

        if(str == ""){

        }else{

            let li = document.createElement('li')

            li.innerText = str

            ul.append(li)

            input.value = "";
            str = "";
        }
    }

    console.log(str)
}

input.addEventListener('keyup', adicionar)
