function createEquation2(level) {
    newArray = ["", "", "", "", "", "", "", "", "", ""]
    
    let s = Math.round(Math.random() * 20 + 1) * ("123456".includes(level.toString()) ? 1 : (Math.round(Math.random() * 100) < 50 ? 1 : -1))
    let c0 = Math.round(Math.random() * 99 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let c = Math.round(Math.random() * 25 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
    
    let a = Math.round(Math.random() * 8 + 1)
    let b = Math.round(Math.random() * 8 + 1)
    let b5 = Math.round(Math.random() * 8 + 1)
    let d = Math.round(Math.random() * 8 + 1)
    let n = Math.round(Math.random() * 8 + 1)

    

    while (s*a%b !== 0 ) {
        console.log("new b")
        b = Math.round(Math.random() * 8 + 1)
    }

    let h = Math.round(Math.random()*s*a + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let g = s*a - h
    let j = Math.round(Math.random()*a + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let k = a - j

    let m5 = (g/gcd(g, b5))*Math.round(Math.random() * 2 + 1)
    let n5 = (b5/gcd(g, b5))*Math.round(Math.random() * 2 + 1)
    let c5 = (h/gcd(h, b5))*Math.round(Math.random() * 2 + 1)*(-1)
    let d5 = (b5/gcd(h, b5))*Math.round(Math.random() * 2 + 1)
    let a6 = k
    let o6 = j*(-1)



    //console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d, "m: ", m, "n: ", n, "o: ", o, "p: ", p, "s: ", s, dif2)
    if (level === 0) {
        newArray[0] = "x"
        newArray[1] = "1"
        newArray[2] = (c0.toString())[0] === "-"? "-": "+"
        newArray[3] = (c0.toString())[0] === "-"? c0.toString().slice(1): c0.toString();
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
        newArray[5] = (a*s).toString()
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
        newArray[5] = Math.round(Math.random()*20 + 1).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 3) {
        newArray[0] = a.toString() + "x"
        newArray[1] = "1"
        newArray[2] = c0.toString()[0] === "-"? "-": "+"
        newArray[3] = c0.toString()[0] === "-"? c0.toString().slice(1): c0.toString();
        newArray[4] = "1"
        newArray[5] = (s*a + c0).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    
    
    if (level === 4) {
        console.log((s*a)%b == 0)
        newArray[0] = (a/gcd(a,b)).toString() + "x"
        newArray[1] = (b/gcd(a,b)).toString()
        newArray[2] = c.toString()[0] === "-"? "-": "+"
        newArray[3] = c.toString()[0] === "-"? c.toString().slice(1): c.toString();
        newArray[4] = "1"
        newArray[5] = (s*a)%b == 0 ? ((s*a + c*b)/b).toString() : ((s*a + c)).toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    
    /*if (level === 5) {
        newArray[0] = (a/gcd(a,b)).toString() + "x"
        newArray[1] = (b/gcd(a,b)).toString()
        newArray[2] = (c.toString()[0] === "-"? "-" : "+" ) 
        newArray[3] = (c.toString()[0] === "-"? c.toString().slice(1) : c.toString()) 
        newArray[4] = d.toString()
        newArray[5] = (((s*(a/gcd(a,b))*d + c*b)/((b/gcd(a,b))*d))*n).toString()
        newArray[6] = n.toString()
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }*/
    if (level === 5) {
        newArray[0] = (a/gcd(a,b)).toString() + "x"
        newArray[1] = (b5/gcd(a,b5)).toString()
        newArray[2] = (c5.toString()[0] === "-"? "-" : "+" ) 
        newArray[3] = (c5.toString()[0] === "-"? c5.toString().slice(1) : c5.toString()) 
        newArray[4] = d5.toString()
        newArray[5] = m5.toString()
        newArray[6] = n5.toString()
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 6) {
        newArray[0] = (a6).toString() + "x"
        newArray[1] = "1"
        newArray[2] = (c.toString()[0] === "-"? "-" : "+" ) 
        newArray[3] = (c.toString()[0] === "-"? c.toString().slice(1) : c.toString()) 
        newArray[4] = "1"
        newArray[5] = (s*a + c).toString()
        newArray[6] = "1"
        newArray[7] = (o6.toString()[0] === "-"? "-" : "+" ) 
        newArray[8] = (o6.toString()[0] === "-"? o6.toString().slice(1) + "x" : o6.toString() + "x")
        newArray[9] = "1"
    }

    /*
    if (level === 6) {
        newArray[0] = a
        newArray[1] = "1"
        newArray[2] = (c[0] === "-"? "-": "+")
        newArray[3] = (c[0] === "-"? c.slice(1): c)
        newArray[4] = "1"
        newArray[5] = m
        newArray[6] = "1"
        newArray[7] = (o[0] === "-"? "-": "+") 
        newArray[8] = (o[0] === "-"? o.slice(1): o)
        newArray[9] = "1"
    }
    */
    console.log("level: ", level, "NewArray: ", newArray)

    let xIndex = []
    for (let i = 0; i < newArray.length; i ++) {
        //console.log(newArray[i])
        if (newArray[i].includes("x")) xIndex.push(i)
        if (xIndex.length > 1) {
            let xL
            let xR
            if (xIndex[0] === 0 || xIndex[0] === 3) {
                xL = parseFloat((parseInt(newArray[xIndex[0]].replace("x", ""))/parseInt(newArray[xIndex[0] + 1])).toFixed(5))
                xR = parseFloat((parseInt(newArray[xIndex[1]].replace("x", ""))/parseInt(newArray[xIndex[1] + 1])).toFixed(5))
            } else {
                xL = parseFloat((parseInt(newArray[xIndex[0] - 1])/parseInt(newArray[xIndex[0]].replace("x", ""))).toFixed(5))
                xR = parseFloat((parseInt(newArray[xIndex[1] - 1])/parseInt(newArray[xIndex[1]].replace("x", ""))).toFixed(5))
            }
            //console.log(xL, xR)
            if (xL === xR) {
                console.log("recreating")
                createEquation2(level) 
            }
        }
        
    }
    

    return
    
}

console.log("run")
for (let x = 0; x < 10; x++){
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
