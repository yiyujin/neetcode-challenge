class Solution{
    isPalindrome(s){
        let s1 = s.toLowerCase();
        s1 = s1.replaceAll(" ", "");

        let arr1 = s1.split("");

        for(let i = 0; i < arr1.length; i++){
            let char = arr1.join("").charCodeAt(i);

            if(char < 48 || ( char > 57 && char < 65) || ( char > 90 && char < 97) || char > 122 ){
                arr1.splice(i,1);
            }
        }

        s1 = arr1.join("");

        let reversed = arr1.reverse();
        let s2 = reversed.join("");

        if(s1 === s2){
            return true;
        } else {
            return false;
        }
    }
}