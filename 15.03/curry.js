function curry(cb) {
    let size = cb.length
    let callargs = []
    return function cruied(...args) {
        callargs.push(...args)
        if (callargs.length >= size) {
            let res = cb(...callargs)
            callargs.length = 0
            return res
        }
        return cruied
    }
}