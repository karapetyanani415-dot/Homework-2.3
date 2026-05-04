let map = new WeakMap()
function processNotification(notif) {
    let count = 0
    if (!map.has(notif)) {
        map.set(notif)
        return `Processed: Message ${notif.id}`
    }
    return "Already processed, ignoring"
}

// Input
const notif1 = { id: 1, text: 'Message 1' };
const notif2 = { id: 2, text: 'Message 2' };

// Expected Output
console.log(processNotification(notif1)); // "Processed: Message 1"
console.log(processNotification(notif1)); // "Already processed, ignoring"
console.log(processNotification(notif2)); // "Processed: Message 2"

