class Ajax {
    constructor(url, callback) {
        this.request = new XMLHttpRequest()
        if (callback) this.request.onreadystatechange = callback
        this.request.open("GET", url)
        this.request.send()
    }
}

const base = "https://raw.githubusercontent.com/mmzroot/nanobots/master"

const load = file => {
    let url = base + "/nanobots/" + file
    new Ajax(url, res => {
        if (res.target.responseText) eval(res.target.responseText)
    })
}

const bots = ["hello-world.js", "hi-clients.js"]

bots.map(e => load(e))
