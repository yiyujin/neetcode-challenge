class Solution {
    isValid(s) {
    
        while( s.includes("()") || s.includes("[]") || s.includes("{}") ){
            s = s.replace("()", "");
            s = s.replace("[]", "");
            s = s.replace("{}", "");

            console.log(s);
        }

        console.log(s);
        return s;
    }
}

s = "[]";
//true

s = "([{}])";
//true

// s = "[(])";
//false

solution = new Solution();
solution.isValid(s);