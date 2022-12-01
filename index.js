const isItFunction = (obj) => { return typeof obj === 'function' }

export const useClientStide = (callback) => {
    if (isItFunction(callback)) {
        if (typeof process === 'undefined') {
            callback();
        }
    } else {
        throw new Error('Please provide a function as an argument');
    }
}
