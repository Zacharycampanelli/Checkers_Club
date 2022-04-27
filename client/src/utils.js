export function fixFirst(fn, arg) {
    return (...args) => fn(arg, ...args)
}