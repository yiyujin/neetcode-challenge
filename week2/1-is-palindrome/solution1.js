//s1
//Was it a car or a cat I saw?
//was it a car or a cat i saw?
//wasitacaroracatisaw?
//['w', 'a', 's', 'i', 't','a', 'c', 'a', 'r', 'o','r', 'a', 'c', 'a', 't','i', 's', 'a', 'w', '?']
//['w', 'a', 's', 'i', 't','a', 'c', 'a', 'r', 'o','r', 'a', 'c', 'a', 't','i', 's', 'a', 'w']
//wasitacaroracatisaw

//s2
//['w', 'a', 's', 'i', 't','a', 'c', 'a', 'r', 'o','r', 'a', 'c', 'a', 't','i', 's', 'a', 'w']
//wasitacaroracatisaw

class Solution{
    isPalindrome(s){
        console.log("original string :", s);

    //데이터 정제
        //LOWERCASE
        let s1 = s.toLowerCase();
        console.log("lowercased, s1 :", s1);

        //REMOVE WHITE SPACE
        s1 = s1.replaceAll(" ", "");
        console.log("space removed, s1 :", s1);

        let arr1 = s1.split(""); //make it into array
        console.log("made into array, arr1 :", arr1);

        //REMOVE NONE ASCII
        for(let i = 0; i < arr1.length; i++){
            //48 ~ 57 : 0 ~ 9
            //65 ~ 90 : A ~ Z
            //97 ~ 122 : a ~ z

            let char = arr1.join("").charCodeAt(i); //only works for string

            if(char < 48 || ( char > 57 && char < 65) || ( char > 90 && char < 97) || char > 122 ){
                console.log("splice :", arr1[i]); //only works for array

                arr1.splice(i,1);
            }
        }

        s1 = arr1.join("");
        console.log("ASCII filtered, s1 : ", s1);

        //REVERSE
        let reversed = arr1.reverse();
        console.log("reversed :", reversed);

        //make into string for comparison
        let s2 = reversed.join("");
        console.log(s2);

        //compare two strings
        if(s1 === s2){
            console.log(`${s1} === ${s2} ? true`);
            return true;
        } else {
            console.log(`${s1} === ${s2} ? false`);
            return false;
        }
    }
}

// s = '   별똥별    ';
s = "Was it a car or a cat I saw?";
// s = "0P";

solution = new Solution();
solution.isPalindrome(s);