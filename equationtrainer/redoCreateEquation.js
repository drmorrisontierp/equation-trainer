function createEquation2(level) {
    newArray = ["", "", "", "", "", "", "", "", "", ""]
    
    
    
    let x1 = Math.round(Math.random() * 8 + 1)
    let x2 = Math.round(Math.random() * 8 + 1)
    let x1b = Math.round(Math.random() * 8 + 1)
    let x2b = Math.round(Math.random() * 8 + 1)
    let nox1 = Math.round(Math.random() * 99 + 1)
    let nox2 = Math.round(Math.random() * 99 + 1)
    let nox1b = Math.round(Math.random() * 8 + 1)
    let nox2b = Math.round(Math.random() * 8 + 1)
    let opp1 = Math.round(Math.random() * 100) < 50 ? "+" : "-";
    let opp2 = Math.round(Math.random() * 100) < 50 ? "+" : "-";
    let gx1 = gcd(x1, x1b)
    let gx2 = gcd(x2, x2b)
    let g1 = gcd(nox1, nox1b)
    let g2 = gcd(nox2, nox2b)
    let x1n = (x1 / gx1).toString() + "x"
    let x1d = x1b / gx1
    let x2n = (x2 / gx2).toString() + "x"
    let x2d = x2b / gx2
    nox1 = nox1 / g1
    nox1b = nox1b / g1
    nox2 = nox2 / g2
    nox2b = nox2b / g2
    

    let a = Math.round(Math.random() * 8 + 1)*(level > 2 ? (Math.round(Math.random() * 100) < 50 ? 1 : -1) : 1)
    let o = level < 4 ? 0 : Math.round(Math.random() * 8 + 1)*(Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let x = a - o
 
    let b = "14".includes(level.toString()) ? 1 : Math.round(Math.random() * 8 + 1)
    let p = Math.round(Math.random() * 8 + 1)

    let f = Math.round(Math.random() * 20 + 1) * x / b
    
    let c = Math.round(Math.random() * 8 + 1) * (Math.round(Math.random() * 100) < 50 ? 1 : -1)
    let d = Math.round(Math.random() * 8 + 1)
    
    let m = f + c
    let n = Math.round(Math.random() * 8 + 1)
    
    a = a.toString() + "x"
    b = b.toString()
    c = c.toString()
    d = d.toString()
    m = m.toString()
    n = n.toString()
    o = o.toString() + "x"
    p = p.toString()

    console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d, "m: ", m, "n: ", n, "o: ", o, "p: ", p, "f: ", f)
    if (level === 1) {
        newArray[0] = a
        newArray[1] = 1
        newArray[2] = c[0] === "-"? "-": "+"
        newArray[3] = c[0] === "-"? c.slice(1): c;
        newArray[4] = 1
        newArray[5] = m
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 2) {
        newArray[0] = "x"
        newArray[1] = b
        newArray[2] = c[0] === "-"? "-": "+"
        newArray[3] = c[0] === "-"? c.slice(1): c;
        newArray[4] = 1
        newArray[5] = m
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 3) {
        let xOneZero = Math.round(Math.random() * 100) < 50 ? true : false;
        newArray[0] = xOneZero ? a : c;
        newArray[1] = 1
        newArray[2] = xOneZero ? (c[0] === "-"? "-" : "+" ) : (a[0] === "-"? "-" : "+" )
        newArray[3] = xOneZero ? (c[0] === "-"? c.slice(1) : c ) : (a[0] === "-"? a.slice(1) : a ) 
        newArray[4] = 1
        newArray[5] = m
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    console.log(newArray)

    return


    while (num2 === 0) {
        num1 = Math.round(Math.random() * numbers + 1); // Regenerate num1
        num2 = opp1 === "+" ? numbers + num1 : numbers - num1;
    }

    while (num4 === 0) {
        num3 = Math.round(Math.random() * multiple + 1); // Regenerate num1
        num4 = opp1 === "+" ? (multiple + num3) * (-1) : (num3 - multiple);
    }

    while (x24 === 0) {
        x14 = Math.round(Math.random() * x1 + 1)
        x24 = opp2 === "+" ? (x1 - x14) * (-1) : (x14 - x1)
    }

    let flip = Math.round(Math.random() * 100) < 50
    let x114 = `${flip ? x14 : x24}x`
    let x224 = `${flip ? x24 : x24}x`
    num1 = num1.toString()
    num3 = num3.toString()
    num4 = num4.toString()

    console.log(final, numbers, num1, num2)
    let xOneNum
    let xOneZero
    let xTwoFive
    let noxOneNum
    let noxTwoNum

    if (level === 1) {
        newArray[0] = x1n
        newArray[1] = 1
        newArray[2] = opp1
        newArray[3] = num1
        newArray[4] = 1
        newArray[5] = num2
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 2) {
        xOneZero = Math.round(Math.random() * 100) < 50 ? true : false;
        numOneMinus = Math.round(Math.random() * 100) < 50 ? true : false;
        numTwoMinus = Math.round(Math.random() * 100) < 50 ? true : false;
        newArray[0] = xOneZero ? x1n : opp1 === "+" ? num1 : num1[0] === "-" ? num1.replace("-", "") : "-" + num1
        newArray[1] = 1
        newArray[2] = !xOneZero ? opp2 : opp1 === "-" && num1[0] === "-" ? "+" : opp1 === "+" && num1[0] !== "-" ? "+" : "-"
        newArray[3] = !xOneZero ? x1n : opp1 === "-" && num1[0] === "-" ? num1.replace("-", "") : opp1 === "+" && num1[0] !== "-" ? num1 : num1.replace("-", "")
        newArray[4] = 1
        newArray[5] = num2
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 3) {
        newArray[0] = "x"
        newArray[1] = x1b
        newArray[2] = opp1
        newArray[3] = nox1
        newArray[4] = 1
        newArray[5] = nox2
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 4) {
        newArray[0] = x114
        newArray[1] = 1
        newArray[2] = num3[0] === "+" ? "+" : "-"
        newArray[3] = num3[0] === "+" ? num3 : num3.replace("-", "")
        newArray[4] = 1
        newArray[5] = num4
        newArray[6] = 1
        newArray[7] = x224[0] === "+" ? "+" : "-"
        newArray[8] = x224[0] === "+" ? x224 : x224.replace("-", "")
        newArray[9] = 1
    }
    if (level === 5) {
        newArray[0] = x1n
        newArray[1] = x1d
        newArray[2] = opp1
        newArray[3] = nox1
        newArray[4] = nox1b
        newArray[5] = nox2
        newArray[6] = nox2b
        newArray[7] = opp2
        newArray[8] = x2n
        newArray[9] = x2d
    }
    if (level === 6) {
        xOneNum = Math.round(Math.random() * 100) < 50 ? true : false;
        newArray[0] = xOneNum ? x1n : x1d
        newArray[1] = xOneNum ? x1d : x1n
        newArray[2] = opp1
        newArray[3] = nox1
        newArray[4] = 1
        newArray[5] = nox2
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 7) {
        xOneNum = Math.round(Math.random() * 100) < 50 ? true : false;
        newArray[0] = xOneNum ? x1n : x1d
        newArray[1] = xOneNum ? x1d : x1n
        newArray[2] = opp1
        newArray[3] = nox1
        newArray[4] = nox1b
        newArray[5] = nox2
        newArray[6] = nox2b
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }

    if (level === 8) {
        xOneNum = Math.round(Math.random() * 100) < 50 ? true : false;
        newArray[0] = xOneNum ? x1n : x1d
        newArray[1] = xOneNum ? x1d : x1n
        newArray[2] = opp1
        newArray[3] = nox1
        newArray[4] = nox1b
        newArray[5] = nox2
        newArray[6] = nox2b
        newArray[7] = opp2
        newArray[8] = xOneNum ? x2n : x2d
        newArray[9] = xOneNum ? x2d : x2n
    }
    if (level === 9) {
        xOneNum = Math.round(Math.random() * 100) < 50 ? true : false;
        noxOneNum = Math.round(Math.random() * 100) < 50 ? true : false;
        noxTwoNum = Math.round(Math.random() * 100) < 50 ? true : false;
        xOneZero = Math.round(Math.random() * 100) < 50 ? true : false;
        xTwoFive = Math.round(Math.random() * 100) < 50 ? true : false;
        if (xOneNum) {
            if (noxOneNum) {
                if (xOneZero) {
                    newArray[0] = x1n
                    newArray[1] = x1d
                    newArray[3] = nox1
                    newArray[4] = nox1b
                } else {
                    newArray[0] = nox1
                    newArray[1] = nox1b
                    newArray[3] = x1n
                    newArray[4] = x1d
                }
            } else {
                if (xOneZero) {
                    newArray[0] = x1n
                    newArray[1] = x1d
                    newArray[3] = nox1b
                    newArray[4] = nox1
                } else {
                    newArray[0] = nox1b
                    newArray[1] = nox1
                    newArray[3] = x1n
                    newArray[4] = x1d
                }
            }
        } else {
            if (noxOneNum) {
                if (xOneZero) {
                    newArray[0] = nox1
                    newArray[1] = nox1b
                    newArray[3] = x1d
                    newArray[4] = x1n
                } else {
                    newArray[0] = x1d
                    newArray[1] = x1n
                    newArray[3] = nox1
                    newArray[4] = nox1b
                }
            } else {
                if (xOneZero) {
                    newArray[0] = x1d
                    newArray[1] = x1n
                    newArray[3] = nox1b
                    newArray[4] = nox1
                } else {
                    newArray[0] = nox1b
                    newArray[1] = nox1
                    newArray[3] = x1n
                    newArray[4] = x1d
                }
            }

        }
        newArray[2] = opp1
        if (xOneNum) {
            if (noxTwoNum) {
                if (xTwoFive) {
                    newArray[5] = x2n
                    newArray[6] = x2d
                    newArray[8] = nox2
                    newArray[9] = nox2b
                } else {
                    newArray[5] = nox2
                    newArray[6] = nox2b
                    newArray[8] = x2n
                    newArray[9] = x2d
                }
            } else {
                if (xTwoFive) {
                    newArray[5] = x2n
                    newArray[6] = x2d
                    newArray[8] = nox2b
                    newArray[9] = nox2
                } else {
                    newArray[5] = nox2b
                    newArray[6] = nox2
                    newArray[8] = x2n
                    newArray[9] = x2d
                }
            }
        } else {
            if (noxTwoNum) {
                if (xTwoFive) {
                    newArray[5] = nox2
                    newArray[6] = nox2b
                    newArray[8] = x2d
                    newArray[9] = x2n
                } else {
                    newArray[5] = x2d
                    newArray[6] = x2n
                    newArray[8] = nox2
                    newArray[9] = nox2b
                }
            } else {
                if (xTwoFive) {
                    newArray[0] = x2d
                    newArray[1] = x2n
                    newArray[3] = nox2b
                    newArray[4] = nox2
                } else {
                    newArray[0] = nox2b
                    newArray[1] = nox2
                    newArray[3] = x2n
                    newArray[4] = x2d
                }
            }

        }
        newArray[7] = opp2
    }
}

createEquation2(2)



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
