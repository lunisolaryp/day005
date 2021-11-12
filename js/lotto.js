
console.log("lotto~~~~~~~~~~~~~~~~~~")

const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click",(event)=>{
    console.log(event)

    const target = document.getElementById("resultDiv")

    const balls = makeLottoNum()

    for (const num of balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }
}, false)

function makeLottoNum(){

    const numArr = []
    
    return numArr
}