function getUniqueUsers(users) {
    const map = new Map()
    return users.filter(user => {
        if (map.has(user.id)) {
            return false
        }
        map.set(user.id)
        return true
    });
}
// Input
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Anna' },
    { id: 1, name: 'John' } // duplicate
];

// Expected Output
console.log(getUniqueUsers(users));
// [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]

