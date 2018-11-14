class Ajax {
    constructor(url, callback) {
        this.request = new XMLHttpRequest()
        if (callback) this.request.onreadystatechange = callback
        this.request.open("GET", url)
        this.request.send()
    }
}

const loadBot = file => {
    let url =
        "https://raw.githubusercontent.com/mmzroot/nanobots/master/nanobots/" +
        file
    new Ajax(url, res => {
        if (res.target.responseText) eval(res.target.responseText)
    })
}

const nanobotsUrl =
    "https://api.github.com/repos/mmzroot/nanobots/contents/nanobots/"

//get list of all nanobots
let nanobotsList = new Ajax(nanobotsUrl, res => {
    if (res.target.responseText) {
        res = JSON.parse(res.target.responseText)
        res.forEach(element => {
            console.log(element.name)
            new LoadBot(element.name)
        })
    }
})
