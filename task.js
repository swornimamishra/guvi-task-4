// 1.For the given JSON iterate over all forloops(For, For in, For of,ForEach):
 
let student={"users":{
    
      "id": 1,
      "first_name": "Robert",
      "last_name": "Schwartz",
      "email": "rob23@gmail.com"
    }
    }
 //For in:
  for(let key in student){
 console.log(student[key].id);
 console.log(student[key].first_name);
 console.log(student[key].last_name);
 console.log(student[key].email);
 } 
//For of:
 let entries = Object.entries(student.users);
for(let [key,value] of entries){
console.log(`${key}: ${value}`);
} 
//For:
 for(let i=0;i<entries.length;i++){
console.log(entries[i]);
} 
//ForEach:
entries.forEach(function(number,index){
console.log(`${index}: ${number}`);

});