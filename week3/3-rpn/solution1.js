class Solution {
    evalRPN(tokens) {
        const stack = [];

        for(let i = 0; i < tokens.length; i++){
            if( tokens[i] == "+"){
                let a = stack.pop();
                let b = stack.pop();

                stack.push(a + b);
                console.log(stack);
            } else if ( tokens[i] == "*"){
                let a = stack.pop();
                let b = stack.pop();

                stack.push(a * b);
                console.log(stack);
            } else if ( tokens[i] == "-"){
                let a = stack.pop();
                let b = stack.pop();

                stack.push(b - a);
                console.log(stack);
            } else if ( tokens[i] == "/"){
                let a = stack.pop();
                let b = stack.pop();

                stack.push(Math.trunc(b / a));
                console.log(stack);
            } else {
                stack.push(parseInt(tokens[i]));
                console.log(stack);
            }
        }

        console.log(stack[0]);
        return stack[0];
    }
}

tokens = ["1","2","+","3","*","4","-"]
//5

solution = new Solution();
solution.evalRPN(tokens);