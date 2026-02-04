class calculator{

    constructor(){
        this.result = 0;
    }

         add(a){
        return this.result+=a;
        }
        minus(a){
            return this.result-=a;
        }
        mult(a){
            return this.result*=a;
        }
        div(a){
            if(a===0){
                throw new Error("You can't divide by zero");
            }
            return this.result /= a;
        }
        clear(){
            return this.result = 0;
        }
        getResult(){
           return this.result;
        }
        calculate(input){
            const temp = input;
            const cleanInput = temp.replace(/\s/g,"");
            const isValidExpression = /^[0-9+\-*/().]+$/.test(cleanInput);

      if(!isValidExpression){
        throw new Error("invalid expression")
      }

      try{
        this.result = eval(input);
      }
      catch(error){
        throw new Error("invalid expression")   
      }

      if(this.result === Infinity || this.result === -Infinity){
        throw new Error("You can't divide by zero");
      }
      return this.result;
        }
}

// module.exports = calculator;
const c = new calculator();
console.log(c.calculate("2 + 3 * (4 - 1)")); // Outputs: 11