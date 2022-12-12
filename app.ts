// const person: {
//     name: string;
//     age: number;
// } 
const person = {
    name: 'yota',
    age: 40,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());

}