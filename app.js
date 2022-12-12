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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'yota',
    age: 40,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("正解");
}
