//1-
let arr=[1,2,3,4,5];
let obj={
    name:"Riya"
}
let obj2={
    name:"Mayank",
    proto:obj
}
console.log(obj2);


//2-

// Parent object
const parent = {
    parentProp: 'computer Science'
  };
  // Child object
  const childs = Object.create(parent);
  childs.childProp = 'Biology';
  // Accessing properties
  console.log(childs.childProp);
  console.log(childs.parentProp); 


//3-
        let array=[1,4,5,2,9];
        let sum=0;
        for(let i=0;i< array.length;i++){
           sum+=array[i];
        }
        let child={
           proto:array
        }
        console.log(sum);


//4-
let A=[100,200,300,400,500]
    let res = A.reduce((acc,curr)=>{
        acc+=curr
        return acc
    },0)
    console.log(res);
