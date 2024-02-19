
let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
]


function user1(users){
    return users.filter((item)=>{
        return item.id === 2
    })
}

console.log(user1(users));


function user2 (users){
    return  users.filter((item)=>{
       return item.id > 1
    })
}


console.log(user2(users));
