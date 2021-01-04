export const test = async (testFunction, arg, isSpeed, after) => {
    let count = 0
    const counter = setInterval(() => count++, 0)
    const green = "#CCFCD4"
    const red = "#FC9C9C"

    await testFunction(arg)

    await clearInterval(counter)

    const title = "Test Results"
    const name = `function name: ${testFunction.name}`
    const reqSpeed = `required speed: ${isSpeed}ms`
    const speed = `speed: ${count}ms`
    const testMode = `test mode: ${count > isSpeed ? "test failed" : "test successful"}`
    const table = `${name}\n${reqSpeed}\n${speed}\n${testMode}`
    const line = "----------------------------------------"
    const result = await [`%c ${title}\n${line}\n${table}\n${line}`, `background: ${count > 
    isSpeed ? red : green}; color: black; border-left: 5px solid ${count > isSpeed ? 
    '#FC2424' : '#04E474'}; padding: 3px; padding-left: 1em;`]
    after(result)
}