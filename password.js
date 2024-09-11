window.onload=()=> {
    document.getElementById('generate').addEventListener('click', function() {  
        const length = parseInt(document.getElementById('length').value);  
        const useUppercase = document.getElementById('uppercase').checked;  
        const useLowercase = document.getElementById('lowercase').checked;  
        const useNumbers = document.getElementById('numbers').checked;  
        const useSymbols = document.getElementById('symbols').checked;  
    
        const password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);  
        document.getElementById('password').textContent = password;  
    });  
    
    function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {  
        const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
        const lowerChars = 'abcdefghijklmnopqrstuvwxyz';  
        const numberChars = '0123456789';  
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';  
    
        let characterPool = '';  
        
        if (useUppercase) characterPool += upperChars;  
        if (useLowercase) characterPool += lowerChars;  
        if (useNumbers) characterPool += numberChars;  
        if (useSymbols) characterPool += symbolChars;  
    
        if (characterPool.length === 0) {  
            return 'Please select at least one character type.';  
        }  
    
        let password = '';  
        password += useUppercase ? getRandomCharacter(upperChars) : '';  
        password += useLowercase ? getRandomCharacter(lowerChars) : '';  
        password += useNumbers ? getRandomCharacter(numberChars) : '';  
        password += useSymbols ? getRandomCharacter(symbolChars) : '';  
    
        for (let i = password.length; i < length; i++) {  
            password += getRandomCharacter(characterPool);  
        }  
    
        return shuffleString(password);  
    }  
    
    function getRandomCharacter(characters) {  
        return characters.charAt(Math.floor(Math.random() * characters.length));  
    }  
    
    function shuffleString(string) {  
        const array = string.split('');  
        for (let i = array.length - 1; i > 0; i--) {  
            const j = Math.floor(Math.random() * (i + 1));  
            [array[i], array[j]] = [array[j], array[i]];  
        }  
        return array.join('');  
    }
    alert("Idea from mebastion 2 ")
    }