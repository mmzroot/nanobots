if (typeof nanobotsLoaded === "undefined") {
    const nanobotsLoaded = true

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

    const bots = ["facebook.js", "google.js"]

    bots.map(file => load(file))
}
