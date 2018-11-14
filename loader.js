console.log("say hi to clients :D")

class Ajax {
    constructor(url, callback) {
        this.url = url
        this.callback = callback
        this.request = new XMLHttpRequest()

        if (callback)
            this.request.onreadystatechange = () => {
                this.callback(this.request.responseText)
            }
        this.request.open("GET", url)
        this.request.send()
    }
}

class LoadBot {
    constructor(file) {
        let script = document.createElement("script")
        script.type = "application/javascript"
        script.src =
            "https://cdn.jsdelivr.net/gh/mmzroot/nanobots/nanobots/" + file
        document.querySelector("body").appendChild(script)
    }
}

const nanobotsUrl =
    "https://api.github.com/repos/mmzroot/nanobots/contents/nanobots/"

//get list of all nanobots
let nanobotsList = new Ajax(nanobotsUrl, res => {
    const nanobots = JSON.parse(res)
    nanobots.forEach(element => {
        console.log(element.name)
        new LoadBot(element.name)
    })
})

// let test = new Ajax(listUrl, res => {
//     console.log(res)
// })

// //get list of all nanobots
// let list = new XMLHttpRequest()
// list.onreadystatechange = () => {
//     let json = JSON.parse(list.responseText)

// }
// list.open("GET", listUrl)
// list.send()

// const request = (url, callback) => {
//     let httpRequest = new XMLHttpRequest()
//     if (callback) httpRequest.onreadystatechange = callback
//     httpRequest.open("GET", url)
//     httpRequest.send()
//     return httpRequest
// }

// request(list, ())

// function alertContents() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//             alert(httpRequest.responseText)
//         } else {
//             alert("There was a problem with the request.")
//         }
//     }
// }
