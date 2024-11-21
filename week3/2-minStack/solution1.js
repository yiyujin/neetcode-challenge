/*
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
*/

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.min = 0;
    }

    push(val) {
        this.stack.push(val);
        //if minStack is empty, min = val
        if(this.minStack.length === 0){
            this.min = val;
        } else {
            this.min = Math.min(val, this.minStack[this.minStack.length - 1]);
        }
        
        this.minStack.push(this.min);

        console.log(this.stack, this.minStack);
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();

        console.log(this.stack, this.minStack);
    }

    top() {
        console.log(this.stack[this.stack.length - 1]);
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        console.log(this.minStack[this.minStack.length - 1]);
        return this.minStack[this.minStack.length - 1];
    }
}



const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1