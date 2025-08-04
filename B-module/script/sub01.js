const mottos = [...document.querySelectorAll(".mottos > div")]
mottos.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        mottos.forEach((e2) => {
            document.querySelector(`.Des${e.className.replace(/[^0-9]/g, "")}`).style.opacity = "1"
            e2.style.backgroundImage = `url("../images/${e.className}.png")`
        })
    })

    e.addEventListener("mouseleave", () => {
        mottos.forEach((e2) => {
            document.querySelector(`.Des${e.className.replace(/[^0-9]/g, "")}`).style.opacity = "0"
            e2.style.backgroundImage = `url("../images/${e2.className}.png")`
        })
    })
})
