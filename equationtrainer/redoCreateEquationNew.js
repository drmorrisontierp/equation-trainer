function createEquation2(level) {
    newArray = ["", "", "", "", "", "", "", "", "", ""]
    
    
    let e = Math.round(Math.random() * 8 + 1)
    let a = Math.round(Math.random() * 8 + 1)*(("5789").includes(level) ? (Math.round(Math.random() * 100) < 50 ? 1 : -1) : 1)
    let f = Math.round(Math.random() * 20 + 2)
    let g = a*f
    let dif = "01234".includes(level.toString()) ? 0 : (a - Math.round(Math.random()*a+1))
    a = a - dif
    let o = ("01234".includes(level.toString()) ? 0 : (dif))*(-1)
    let b = "01367".includes(level.toString()) ? 1 : f * e
    let p = "01234567".includes(level.toString()) ? 1 : e

    let s = Math.round(Math.random() * 20 + 1) * ("123456".includes(level.toString()) ? 1 : (Math.round(Math.random() * 100) < 50 ? 1 : -1))
    let dif2 = (s - Math.round(Math.random()*s+1))
    let c = (s*e - dif2)*(-1)
    let d = e
    let m = dif2*a
    let n = e*g
    
    
    
    a = a.toString() + "x"
    b = b.toString()
    c = c.toString()
    d = d.toString()
    m = m.toString()
    n = n.toString()
    o = o.toString() + "x"
    p = p.toString()

    //console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d, "m: ", m, "n: ", n, "o: ", o, "p: ", p, "s: ", s, dif2)
    if (level === 0) {
        newArray[0] = "x"
        newArray[1] = "1"
        newArray[2] = c[0] === "-"? "-": "+"
        newArray[3] = c[0] === "-"? c.slice(1): c;
        newArray[4] = "1"
        newArray[5] = m
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 1) {
        newArray[0] = a
        newArray[1] = "1"
        newArray[2] = ""
        newArray[3] = ""
        newArray[4] = "1"
        newArray[5] = g.toString()
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 2) {
        newArray[0] = "x"
        newArray[1] = e.toString()
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
        newArray[0] = a
        newArray[1] = "1"
        newArray[2] = c[0] === "-"? "-": "+"
        newArray[3] = c[0] === "-"? c.slice(1): c;
        newArray[4] = "1"
        newArray[5] = m
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    
    
    if (level === 4) {
        newArray[0] = a
        newArray[1] = b
        newArray[2] = c[0] === "-"? "-": "+"
        newArray[3] = c[0] === "-"? c.slice(1): c;
        newArray[4] = "1"
        newArray[5] = m
        newArray[6] = "1"
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    
    if (level === 5) {
        newArray[0] = a
        newArray[1] = b
        newArray[2] = (c[0] === "-"? "-" : "+" ) 
        newArray[3] = (c[0] === "-"? c.slice(1) : c ) 
        newArray[4] = d
        newArray[5] = m
        newArray[6] = n
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = "1"
    }
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
    if (level === 7) {
        let xPosOne = Math.round(Math.random() * 100) < 50
        let xPosTwo = Math.round(Math.random() * 100) < 50
        newArray[0] = xPosOne ? a : c
        newArray[1] = "1"
        newArray[2] = xPosOne ? (c[0] === "-"? "-": "+") : (a[0] === "-"? "-": "+")
        newArray[3] = xPosOne? (c[0] === "-"? c.slice(1): c) : (a[0] === "-"? a.slice(1): a)
        newArray[4] = "1"
        newArray[5] = xPosTwo ? m : o
        newArray[6] = "1"
        newArray[7] = xPosOne ? (o[0] === "-"? "-": "+") : (m[0] === "-"? "-": "+")
        newArray[8] = xPosOne? (o[0] === "-"? o.slice(1): o) : (m[0] === "-"? m.slice(1): m)
        newArray[9] = "1"
    }
    if (level === 8) {
        let xPosOne = Math.round(Math.random() * 100) < 50
        let xPosTwo = Math.round(Math.random() * 100) < 50
        
        let a9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let b9 = Math.round(Math.random() * 8 + 1)
        let c9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let d9 = Math.round(Math.random() * 8 + 1)
        let m9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let n9 = Math.round(Math.random() * 8 + 1)
        let o9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let p9 = Math.round(Math.random() * 8 + 1)
        let g = gcd(a9, b9)
        a9 = (Math.round(a9/g)).toString() + "x"
        b9 = (Math.round(b9/g)).toString()
        g = gcd(c9, d9)
        c9 = (Math.round(c9/g)).toString()
        d9 = (Math.round(d9/g)).toString()
        g = gcd(m9, n9)
        m9 = (Math.round(m9/g)).toString()
        n9 = (Math.round(n9/g)).toString()
        g = gcd(o9, p9)
        o9 = (Math.round(o9/g)).toString() + "x"
        p9 = (Math.round(p9/g)).toString()

        
        newArray[0] = xPosOne ? a9 : c9
        newArray[1] = xPosOne ? b9 : d9
        newArray[2] = xPosOne ? (c9[0] === "-"? "-": "+") : ( a9[0] === "-" ? "-" : "+" )
        newArray[3] = xPosOne ? (c9[0] === "-"? c9.slice(1): c9) : (a9[0] === "-" ? a9.slice(1) : a9 )
        newArray[4] = xPosOne ? d9 : b9
        newArray[5] = xPosTwo ? o9 : m9
        newArray[6] = xPosTwo ? p9 : n9
        newArray[7] = xPosTwo ? (m9[0] === "-"? "-": "+") : ( o9[0] === "-" ? "-" : "+" )
        newArray[8] = xPosTwo ? (m9[0] === "-"? m9.slice(1): m9) : (o9[0] === "-" ? o9.slice(1) : o9 )
        newArray[9] = xPosTwo ? n9 : p9 
    }

    if (level === 9) {
        let xPosOne = Math.round(Math.random() * 100) < 50
        let xPosTwo = Math.round(Math.random() * 100) < 50
        let xNum = Math.round(Math.random() * 100) < 50
        let a9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let b9 = Math.round(Math.random() * 8 + 1)
        let c9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let d9 = Math.round(Math.random() * 8 + 1)
        let m9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let n9 = Math.round(Math.random() * 8 + 1)
        let o9 = Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
        let p9 = Math.round(Math.random() * 8 + 1)
        let g = gcd(a9, b9)
        a9 = (Math.round(a9/g)).toString() + "x"
        b9 = (Math.round(b9/g)).toString()
        g = gcd(c9, d9)
        c9 = (Math.round(c9/g)).toString()
        d9 = (Math.round(d9/g)).toString()
        g = gcd(m9, n9)
        m9 = (Math.round(m9/g)).toString()
        n9 = (Math.round(n9/g)).toString()
        g = gcd(o9, p9)
        o9 = (Math.round(o9/g)).toString() + "x"
        p9 = (Math.round(p9/g)).toString()

        
        newArray[0] = xPosOne ? ( xNum ? a9 : b9 ) : c9
        newArray[1] = xPosOne ? ( xNum ? b9 : a9 ) : d9
        newArray[2] = xPosOne ? (c9[0] === "-"? "-": "+") : ( a9[0] === "-" ? "-" : "+" )
        newArray[3] = xPosOne ? (c9[0] === "-"? c9.slice(1): c9) : ( xNum ? (a9[0] === "-" ? a9.slice(1) : a9 ) : b9 )
        newArray[4] = xPosOne ? d9 : ( xNum ? b9 : (a9[0] === "-" ? a9.slice(1) : a9 ))
        newArray[5] = xPosTwo ? ( xNum ? o9 : p9 ) : m9
        newArray[6] = xPosTwo ? ( xNum ? p9 : o9 ) : n9
        newArray[7] = xPosTwo ? (m9[0] === "-"? "-": "+") : ( o9[0] === "-" ? "-" : "+" )
        newArray[8] = xPosTwo ? (m9[0] === "-"? m9.slice(1): m9) : ( xNum ? (o9[0] === "-" ? o9.slice(1) : o9 ) : p9 )
        newArray[9] = xPosTwo ? n9 : ( xNum ? p9 : (o9[0] === "-" ? o9.slice(1) : o9 ))
    }
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
                //console.log("recreating")
                createEquation2(level) 
            }
        }
        
    }
    

    return
    
}

console.log("run")
for (let x = 0; x < 10; x++){
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
