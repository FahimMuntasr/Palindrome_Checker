document.getElementById("check-btn").onclick = function() {
    var userInput = document.getElementById("text-input").value;
    console.log(`userInput: ${userInput}`);

    if(userInput == ''){
        window.alert('Please input a value');
    } else {
        var isPalindrome = checkPalindrome(userInput);
        console.log(`User input is a palindrome: ${isPalindrome}`);       
    }
}
function checkPalindrome(str){
    let cleanStr = str.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
    console.log(`clean string: ${cleanStr}`)

    var original = cleanStr;
    var reversed = cleanStr.split('').reverse().join('');
    if (original === reversed){
        console.log("original === reversed")
        document.getElementById('result').innerHTML = "<b>" + str + "</b> is a palindrome";
        return true
    } else {
        console.log("original !== reversed")
        document.getElementById('result').innerHTML = "<b>" + str + "</b> is not a palindrome";
        return false
    }
}