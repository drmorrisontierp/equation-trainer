function createEquation2(level) {
    newArray = ["", "", "", "", "", "", "", "", "", ""]

    let s = Math.round(Math.random() * 20 + 1) * ("123456".includes(level.toString()) ? 1 : (Math.round(Math.random() * 100) < 50 ? 1 : -1))
    let c0 = Math.round(Math.random() * 99 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let c4 = Math.round(Math.random() * 25 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let a = Math.round(Math.random() * 8 + 1)
    let b = Math.round(Math.random() * 8 + 1)
    let c = Math.round(Math.random() * 20 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let d = Math.round(Math.random() * 8 + 1)
    let m = Math.round(Math.random() * 20 + 1)
    let n = Math.round(Math.random() * 8 + 1)
    let o = Math.round(Math.random() * 12 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let p = Math.round(Math.random() * 8 + 1)

    if ("89".includes(level.toString())) {
        while (a / b == (o / p)*(-1)) {
            console.log("new o")
            o = Math.round(Math.random() * 12 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
        }
        while (c / d == (o / p)*(-1)) {
            console.log("new c")
            c = Math.round(Math.random() *20 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
        }
        while (c / d == (m / n)*(-1)) {
            console.log("new m")
            m = Math.round(Math.random() * 20 + 1)
        }
    }
    if ("4".includes(level.toString())) {
        while (s * a % b !== 0) {
            console.log("new b")
            b = Math.round(Math.random() * 8 + 1)
        }
    }
    let j = Math.round(Math.random() * a + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let k = a - j
    let a6 = k
    let o6 = j * (-1)
    let [x, y, x1, y1, b1, a1, o1] = [0, 0, 0, 0, 0, 0]

    if ("57".includes(level.toString())) {
        x = Math.round(Math.random() * 8 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
        y = Math.round(Math.random() * 8 + 1)
        x1 = Math.round(Math.random() * 8 + 1)
        y1 = Math.round(Math.random() * 8 + 1)
        b1 = Math.round(Math.random() * 3 + 1)
        a1 = Math.round(Math.random() * 8 + 1)
        o1 = Math.round(Math.random() * 8 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)

        while ((x + x1) % a !== 0) {
            console.log("new x")
            x = Math.round(Math.random() * 8 + 1)
        }
        while ((y + y1) % a !== 0) {
            console.log("new y")
            y = Math.round(Math.random() * 8 + 1)
        }
    }

    //console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d, "m: ", m, "n: ", n, "o: ", o, "p: ", p, "s: ", s, dif2)
    if (level === 0) {
        newArray[0] = "x"
        newArray[1] = "1"
        newArray[2] = (c0.toString())[0] === "-" ? "-" : "+"
        newArray[3] = (c0.toString())[0] === "-" ? c0.toString().slice(1) : c0.toString();
        newArray[4] = "1"
        newArray[5] = (s - c0).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 1) {
        newArray[0] = a.toString() + "x"
        newArray[1] = "1"
        newArray[2] = ""
        newArray[3] = ""
        newArray[4] = "1"
        newArray[5] = (a * s).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 2) {
        newArray[0] = "x"
        newArray[1] = a.toString()
        newArray[2] = ""
        newArray[3] = ""
        newArray[4] = "1"
        newArray[5] = Math.round(Math.random() * 20 + 1).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 3) {
        newArray[0] = a.toString() + "x"
        newArray[1] = "1"
        newArray[2] = c0.toString()[0] === "-" ? "-" : "+"
        newArray[3] = c0.toString()[0] === "-" ? c0.toString().slice(1) : c0.toString();
        newArray[4] = "1"
        newArray[5] = (s * a + c0).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 4) {
        console.log((s * a) % b == 0)
        newArray[0] = (a / gcd(a, b)).toString() + "x"
        newArray[1] = (b / gcd(a, b)).toString()
        newArray[2] = c4.toString()[0] === "-" ? "-" : "+"
        newArray[3] = c4.toString()[0] === "-" ? c4.toString().slice(1) : c4.toString();
        newArray[4] = "1"
        newArray[5] = (s * a) % b == 0 ? ((s * a + c4 * b) / b).toString() : ((s * a + c4)).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 5) {
        newArray[0] = (a / gcd(a, (x1 * y1 * b1))).toString() + "x"
        newArray[1] = ((x1 * y1 * b1) / gcd(a, (x1 * y1 * b1))).toString()
        newArray[2] = (x.toString()[0] === "-" ? "-" : "+")
        newArray[3] = (x.toString()[0] === "-" ? (x / gcd(x, (x1 * b1))).toString().slice(1) : (x / gcd(x, (x1 * b1))).toString())
        newArray[4] = ((x1 * b1) / gcd(x, (x1 * b1))).toString()
        newArray[5] = (y / gcd(y, (y1 * b1))).toString()
        newArray[6] = ((y1 * b1) / gcd(y, (y1 * b1))).toString()
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 6) {
        newArray[0] = (a6).toString() + "x"
        newArray[1] = "1"
        newArray[2] = (c4.toString()[0] === "-" ? "-" : "+")
        newArray[3] = (c4.toString()[0] === "-" ? c4.toString().slice(1) : c4.toString())
        newArray[4] = "1"
        newArray[5] = (s * a + c4).toString()
        newArray[6] = "1"
        newArray[7] = (o6.toString()[0] === "-" ? "-" : "+")
        newArray[8] = (o6.toString()[0] === "-" ? o6.toString().slice(1) + "x" : o6.toString() + "x")
        newArray[9] = "1"
    }
    if (level === 7) {
        newArray[0] = (a1 / gcd(a1, (x1 * y1 * b1))).toString() + "x"
        newArray[1] = ((y1 * b1) / gcd(a1, (y1 * b1))).toString()
        newArray[2] = (x.toString()[0] === "-" ? "-" : "+")
        newArray[3] = ((x / gcd(x, (x1 * b1))).toString()[0] === "-" ? x.toString().slice(1) : x.toString())
        newArray[4] = ((x1 * b1) / gcd(x, (x1 * b1))).toString()
        newArray[5] = (y / gcd(y, y1 * b1)).toString()
        newArray[6] = ((y1 * b1 / gcd(y, y1 * b1))).toString()
        newArray[7] = (o1.toString()[0] === "-" ? "-" : "+")
        newArray[8] = (o1.toString()[0] === "-" ? (o1 / gcd(o1, (x1 * b1))).toString().slice(1) + "x" : (o1 / gcd(o1, (x1 * b1))).toString() + "x")
        newArray[9] = ((x1 * b1) / gcd(o1, (x1 * b1))).toString()
    }
    if (level === 8) {
        newArray[0] = (a / gcd(a, b)).toString() + "x"
        newArray[1] = (b / gcd(a, b)).toString()
        newArray[2] = (c.toString()[0] === "-" ? "-" : "+")
        newArray[3] = (c.toString()[0] === "-" ? (c / gcd(c, d)).toString().slice(1) : (c / gcd(c, d)).toString())
        newArray[4] = (d / gcd(c, d)).toString()
        newArray[5] = (m / gcd(m, n)).toString()
        newArray[6] = (n / gcd(m, n)).toString()
        newArray[7] = (o.toString()[0] === "-" ? "-" : "+")
        newArray[8] = (o.toString()[0] === "-" ? (o / gcd(o, p)).toString().slice(1) + "x" : (o / gcd(o, p)).toString() + "x")
        newArray[9] = (p / gcd(o, p)).toString()
    }
    if (level === 9) {
        let xpos1 = (Math.round(Math.random() * 100) < 50 ? true : false)
        let xpos3 = (Math.round(Math.random() * 100) < 50 ? true : false)
        let xnum = (Math.round(Math.random() * 100) < 50 ? true : false)
        newArray[0] = (a / gcd(a, b)).toString() + (!xpos1 ? "" : xnum ? "x" : "")
        newArray[1] = (b / gcd(a, b)).toString() + (!xpos1 ? "" : xnum ? "" : "x")
        newArray[2] = (c.toString()[0] === "-" ? "-" : "+")
        newArray[3] = (c.toString()[0] === "-" ? (c / gcd(c, d)).toString().slice(1) + (xpos1 ? "" : xnum ? "x" : "") : (c / gcd(c, d)).toString() + (xpos1 ? "" : xnum ? "x" : ""))
        newArray[4] = (d / gcd(c, d)).toString() + (xpos1 ? "" : xnum ? "" : "x")
        newArray[5] = (m / gcd(m, n)).toString() + (!xpos3 ? "" : xnum ? "x" : "")
        newArray[6] = (n / gcd(m, n)).toString() + (!xpos3 ? "" : xnum ? "" : "x")
        newArray[7] = (o.toString()[0] === "-" ? "-" : "+")
        newArray[8] = (o.toString()[0] === "-" ? (o / gcd(o, p)).toString().slice(1) + (xpos3 ? "" : xnum ? "x" : "") : (o / gcd(o, p)).toString() + (xpos3 ? "" : xnum ? "x" : ""))
        newArray[9] = (p / gcd(o, p)).toString() + (xpos3 ? "" : xnum ? "" : "x")
    }
    return
}

console.log("run")
for (let x = 0; x < 10; x++) {
    console.log("running: " + x)
    createEquation2(x)
}


/**
 * Calculates the greatest common divisor of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The greatest common divisor.
 */
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) { let temp = a; a = b; b = temp; }
    while (b !== 0) {
        let c = a % b
        a = b
        b = c
    }
    return a
}
