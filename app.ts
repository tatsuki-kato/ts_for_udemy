// const person: {
//     name: string;
//     age: number;
// } 
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'yota',
    age: 40,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
}

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());

}