// const person: {
//     name: string;
//     age: number;
// } 
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'yota',
//     age: 40,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// }

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());

// }

enum Role{ //カスタム型と呼ばれる
    ADMIN, //自動的に0が割り振り
    READ_ONLY, //自動的に1
    AUTHOR,//自動的に2
}

const person = {
    name: 'yota',
    age: 40,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

if(person.role === Role.ADMIN){
    console.log("正解");
}