function groupByGroup(students) {
    let map = new Map()
    for (let i = 0; i < students.length; ++i) {
        let student = students[i]
        let group = student.group
        if (!map.has(group)) {
            map.set(group, [])
        }
        map.get(group).push(student.name)

    }
    return map
}
// Input
const students = [
    { name: 'John', group: 'A' },
    { name: 'Anna', group: 'B' },
    { name: 'Max', group: 'A' }
];

// Expected Output
console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }