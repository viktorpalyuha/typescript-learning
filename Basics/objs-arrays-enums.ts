// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Viktor',
//     age: 21,
//     hobbies: ['Video Games', 'Programming'],
//     role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Viktor',
    age: 21,
    hobbies: ['Video Games', 'Programming'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'interesting']

let favoriteActivities: string[];
favoriteActivities = ['Video Games'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
    console.log('it\'s admin');
}