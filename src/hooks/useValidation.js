import { useState } from "react";

export default function(){
    const [checkInput,setInput] = useState('');

    function checkValidation(inp){
        const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const user = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
        if(!user.test(inp.value) && inp.type == 'text'){
            setInput("Name dos't match!")
            inp.classList.add('erorr-input')
        }else if((user.test(inp.value) && inp.type == 'text')){
            setInput('')
            inp.classList.remove('erorr-input')
        }
        if(!mail.test(inp.value) && inp.type == 'email'){
            setInput("Mail dos't match!")
            inp.classList.add('erorr-input')
        }else if((mail.test(inp.value) && inp.type == 'email')){
            setInput('')
            inp.classList.remove('erorr-input')
        }
        if(inp.value == ''){
            setInput('')
            inp.classList.remove('erorr-input')
        }
    }
    return [checkInput,checkValidation]
}