export const addComponentFunctions = (functions) => {
    for (const prop in functions) {
        if ($[prop] === undefined) {
            $[prop] = functions[prop]
        }
    }
}