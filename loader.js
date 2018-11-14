console.log("say hi to clients :D")

const list = "https://api.github.com/repos/mmzroot/nanobots/contents/nanobots/"

//get list of all nanobots
let list = new XMLHttpRequest()
list.onreadystatechange = () => {
    console.log(JSON.parse(responseText))
}
list.open("GET", list)
list.send()

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
