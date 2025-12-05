const calculater={
    add:(x,y)=>x+y,
    subtract:(x,y)=>x-y,
    multiply:(x,y)=>x*y,
    divide:(x,y)=>(y!==0? x/y:"Division by zero error")
}
let state={
    a:10,  
    b:5
}
function calculatorReducer(){
    return{
        calculate:function(state,action){
            let helper=calculater[action.type.toLowerCase()];
            return helper? helper(state.a,state.b):"Invalid Operation";
        }
    }
}

let res=calculatorReducer();
let addition=res.calculate(state,{type:"subtract"});
console.log("Addition:",addition);