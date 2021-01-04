export default class Visax {
    constructor(props) {
        this.first = props.first
        this.state = props.state
        this.mutations = props.mutations
        this.actions = props.actions
        this.history = {
            mode: false,
            data: {}
        }
    }

    createHistory() {
        this.history.mode = true
    }

    historyUse(mutationName, data) {
        this.mutations[mutationName](this.state, data)
        let newData = {}

        if (this.history.mode) {
            newData["mutationName"] = mutationName
            newData["outgoingData"] = data === undefined ? "no outgoing data" : data
            this.history.data = newData
        }
    }

    async getHistory() {
        if (!this.history.mode) {
            console.warn('Past values ​​cannot be imported without creating a history. Create a history with "createHistory"')
        } else {
            return await this.history.data
        }
    }

    use(mutationName, data) {
        if (this.mutations[mutationName] !== undefined) {
            this.history.mode ? //if
                this.historyUse(mutationName, data) 
            : // else
            this.mutations[mutationName](this.state, data)
        } else {
            console.error(`${mutationName} is not a mutation`)
        }
    }

    async test(mutationName, data, isSpeed, after) {
        isSpeed === undefined ? console.error("You have to enter a speed limit for the test.") : null
        const green = "#CCFCD4"
        const red = "#FC9C9C"
        let count = 0
        const counter = setInterval(() => count++, 0)

        if (this.mutations[mutationName] !== undefined) {
            await this.mutations[mutationName](this.state, data)
        } else {
            console.error(`A mutation named '${mutationName}' was not found.`)
        }

        clearInterval(counter)

        const title = "Visax Store Test Results"
        const name = `mutation name: ${mutationName}`
        const reqSpeed = `required speed: ${isSpeed}ms`
        const speed = `speed: ${count}ms`
        const testMode = `test mode: ${count > isSpeed ? "test failed" : "test successful"}`
        const table = `${name}\n${reqSpeed}\n${speed}\n${testMode}`
        const line = "----------------------------------------"
        const result = await [`%c ${title}\n${line}\n${table}\n${line}`, `background: ${count > isSpeed ? red : green}; color: black; border-left: 5px solid ${count > isSpeed ? '#FC2424' : '#04E474'}; padding: 3px; padding-left: 1em;`]
    
        after(result)
    }

    createVisax() {
        if (this.first !== undefined) {
            this.first({
                state: this.state,
                actions: this.actions
            })
        }

        if (this.state === undefined) {
            console.error("state not found in store")
        }

        if (this.mutations === undefined) {
            console.error("mutation not found in store")
        }

        if  (this.actions === undefined) {
            console.error("actions not found in store")
        }
    }
}