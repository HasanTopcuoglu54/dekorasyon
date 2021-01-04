export const typesConsumer = () => {
    const types = {
        String: (req, types) => ({type: "string", isRequire: req, types}),
        Bool: (req, types) => ({type: "boolean", isRequire: req, types}),
        Number: (req, types) => ({type: "number", isRequire: req, types}),
        Object: (req, types) => ({type: "object", isRequire: req, types}),
        Function: (req, types) => ({type: "function", isRequire: req, types}),
        Symbol: (req, types) => ({type: "symbol", isRequire: req, types})
    }

    return types
}

const STRİNG = "string"
const NUMBER = "number"
const OBJECT = "object"
const FUNCTION = "function"
const BOOLEAN = "boolean"
const SYMBOL = "symbol"

export {STRİNG, NUMBER, OBJECT, FUNCTION, SYMBOL, BOOLEAN}


export const propTypesControl = (props) => {
    const controls = (controller) => {
        for (const prop in controller) {
            const reqType = controller[prop].type
            const isType = typeof props[prop]
            const isRequire = controller[prop].isRequire
            const extraTypes = controller[prop].types
            let extraTypesCount = 0

            if (props[prop] === undefined && isRequire) {
                console.error(`It should come with the name ${prop}, prop did not come`)
            } else {
                if (props[prop] !== undefined){
                    if (isType !== reqType) {
                        if (extraTypes !== undefined) {
                            for (let i in extraTypes) {
                                const extraTypesItem = extraTypes[i]
                                
                                if (extraTypesItem !== isType) {
                                    extraTypesCount++
                                } else {
                                    break;
                                }
                            }

                            extraTypesCount === extraTypes.length ?
                                console.warn(`The ${prop} prop named did not come with the requested type\ndesired type: ${reqType} incoming type: ${isType}`)
                            : null
                        } else {
                            console.warn(`The ${prop} prop named did not come with the requested type\ndesired type: '${reqType}', incoming type: '${isType}'`)
                        }
                    }
                }
            }
        }
    }

    return {controls}
}