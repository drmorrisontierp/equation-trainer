// Global variables
let row = 1;
let available = ["b11", "b12", "b13", "b14"]
let index = 0
let selected = available[index];
let stopped = false
let creating = false
let emptyArray = ["", "", "", "", "", "", "", "", "", ""]
let testArray = ["2x", "3", "-", "5", "1", "4", "5", "+", "2x", "1"]
let newArray = ["2x", "3", "-", "5", "1", "4", "5", "+", "2x", "1"]
let level = 1

createEquation()
addEquation(1, newArray)


const warningsText = (warning, args) => {
    let warningsText = ""
    if (warning = "x-fault") {
        if (args.length === 1) {
            warningsText = ""
        } else if (args.length === 2) {
            warningsText = ""
        } else if (args.length === 3) {
            warningsText = ""
        } else if (args.length === 3) {
            warningsText = ""
        }
    } else if (warning = "addition-fault") {
        if (args.length === 1) {
            warningsText = ""
        } else if (args.length === 2) {
            warningsText = ""
        } else if (args.length === 3) {
            warningsText = ""
        } else if (args.length === 3) {
            warningsText = ""
        }
    } else if (warning = "balance-fault") {
        warningsText = ""
    } else if (warning = "multiplication-fault") {
        if (args.length === 1) {
            warningsText = ""
        } else if (args.length === 2) {
            warningsText = ""
        } else if (args.length === 3) {
            warningsText = ""
        } else if (args.length === 3) {
            warningsText = ""
        }
    }
    return warningsText

}

// Select the first available position in the first balance row
select(available[0])


// Add event listeners
document.addEventListener("keydown", handleKeydown);

function changeLevel(direction) {
    if (direction === "up") {
        if (level < 9) {
            level ++
        } else {
            level = 9
        }
    } else {
        if (level > 1) {
            level --
        } else {
            level = 1
        }
    }
    element("level-display").innerHTML = level
}

function createEquation() {
    console.log("level:", level)
    newArray = ["", "", "", "", "", "", "", "", "", ""]
    let x1 = Math.round(Math.random() * 8 + 1)
    let x2 = Math.round(Math.random() * 8 + 1)
    let x1b = Math.round(Math.random() * 8 + 1)
    let x2b = Math.round(Math.random() * 8 + 1)
    let nox1 = Math.round(Math.random() * 99 + 1)
    let nox2 = Math.round(Math.random() * 99 + 1)
    let nox1b = Math.round(Math.random() * 8 + 1)
    let nox2b = Math.round(Math.random() * 8 + 1)

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

    let opp1 = Math.round(Math.random() * 100) < 50 ? "+" : "-";
    let opp2 = Math.round(Math.random() * 100) < 50 ? "+" : "-";
    let xOneNum
    let xOneZero
    let xTwoFive
    let noxOneNum
    let noxTwoNum

    if (level === 1) {
        newArray[0] = x1n
        newArray[1] = 1
        newArray[2] = opp1
        newArray[3] = nox1
        newArray[4] = 1
        newArray[5] = nox2
        newArray[6] = 1
        newArray[7] = ""
        newArray[8] = ""
        newArray[9] = ""
    }
    if (level === 2) {
        xOneZero = Math.round(Math.random() * 100) < 50 ? true : false;
        newArray[0] = xOneZero ? x1n : nox1
        newArray[1] = 1
        newArray[2] = opp1
        newArray[3] = xOneZero ? nox1 : x1n
        newArray[4] = 1
        newArray[5] = nox2
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
        newArray[0] = x1n
        newArray[1] = 1
        newArray[2] = opp1
        newArray[3] = nox1
        newArray[4] = 1
        newArray[5] = nox2
        newArray[6] = 1
        newArray[7] = opp2
        newArray[8] = x2n
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


/**
 * Helper function to replace document.getElementById(id).
 * @param {string} id - The ID of the element to retrieve.
 * @returns {HTMLElement} - A HTMLElement object.
 */
function element(id) {
    return document.getElementById(id);
}


/**
 * Helper function to replace document.getElementsByClassName(id).
 * @param {string} id - The class name of the elements to retrieve.
 * @returns {HTMLCollection} - A live HTMLCollection of elements with the specified class name.
 */
function className(id) {
    return document.getElementsByClassName(id);
}

const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
}

const countChars = (str, char) => {
    let count = 0
    if (str === "") return 0;
    for (let x = 0; x < str.length; x++) {
        if (str[x] === char) count++;
    }
    return count
}


/**
 * Sets attributes for an element.
 * @param {HTMLElement} element - The element to set attributes on.
 * @param {Object} attributes - An object containing attribute key-value pairs.
 */
function setAttributes(element, attributes) {
    // Ensure that element is a DOM element
    if (typeof element === "string") {
        element = document.querySelector(element);
    }

    // Iterate over the attributes object and set each attribute
    for (let key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
}


/**
 * Checks if two arrays contain the same items in the same quantities.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {boolean} - True if the arrays contain the same items in the same quantities, false otherwise.
 */
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
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


/**
 * Handles keydown events by performing different actions based on the pressed key.
 *
 * @param {KeyboardEvent} event - The keydown event object.
 */
function handleKeydown(event) {
    const key = event.key;
    if (stopped) return
    if (key === "Backspace") {
        del();
    } else if (key === "Enter") {
        check()
    } else if (key === "ArrowRight") {
        moveThrough("right")
    } else if (key === "ArrowLeft") {
        moveThrough("left")
    } else if (key === "/") {
        enter("/");
    } else if (key === "*") {
        enter("*");
    } else if (key === "-") {
        enter("-");
    } else if (key === "+") {
        enter("+");
    } else if (key === "x") {
        enter("x");
    } else if (key === "Escape") {
        addEquation(2, emptyArray);
    } else if (key === "Delete") {
        addEquation(1, newArray);
    } else if (!isNaN(key)) {
        enter(key);
    }
    //console.log(key);
}

function addEquation(flag, arr) {
    console.log("running", flag, arr)
    if (flag === 1) { 
        createEquation()
        console.log("running", flag, arr) 
    }
    let target = element("left");  // returns an element with id "left"

    // Convert HTMLCollection to an array
    let childrenArray = Array.from(target.children);

    // Iterate over the array and remove each child
    for (let child of childrenArray) {
        child.remove();
    }
    row = 1
    let newRow = document.createElement("div")
    setAttributes(newRow, { "id": "row-1", "class": "row" })
    newRow.innerHTML = `    
        <div id="p11" class="plhs">
            <div id="p11a" class="a-num">${arr[0]}</div>
            <div id="p11b" class="a-int">${arr[1]}</div>
        </div>
        <div id="o12o" class="plhs">
            <div id="o12oa" class="a-int">${arr[2]}</div>
        </div>
        <div id="p12" class="plhs">
            <div id="p12a" class="a-num">${arr[3]}</div>
            <div id="p12b" class="a-int">${arr[4]}</div>
        </div>
        <div class="plhs">
            <div class="int">=</div>
            </div>
        <div id="p13" class="prhs">
            <div id="p13a" class="a-num">${arr[5]}</div>
            <div id="p13b" class="a-int">${arr[6]}</div>
        </div>
        <div id="o14o" class="prhs">
            <div id="o14oa" class="a-int">${arr[7]}</div>
        </div>
        <div id="p14" class="prhs">
            <div id="p14a" class="a-num">${arr[8]}</div>
            <div id="p14b" class="a-int">${arr[9]}</div>
        </div>
    `
    target.appendChild(newRow)
    creating = true
    available = ["p11a", "p11b", "o12oa", "p12a", "p12b", "p13a", "p13b", "o14oa", "p14a", "p14b"]
    selected = available[0]
    select(selected)
    if (1 || 3) check()
}

function enter(key) {
    if (stopped) return
    let entered = element(selected).innerHTML
    const divChars = countChars(entered, "/")
    const xChars = countChars(entered, "x")
    lastEntered = ""
    if (entered !== "") {
        lastEntered = entered[entered.length - 1]
    } else {
        lastEntered = "m"
    }
    console.log(entered, lastEntered)
    if (!creating) {
        if (key === "/" && ("+-/".includes(lastEntered) || divChars > 1)) return
        if (key === "*" && entered !== "") return
        if ("+-".includes(key) && !("/*".includes(lastEntered) || entered === "")) return
        if (key === "x" && !"0123456789-/+*".includes(lastEntered)) return
        if ("0123456789".includes(key) && !"0123456789-/+*".includes(lastEntered)) return
    } else {
        if ("/*".includes(key)) return
        if ("+-".includes(key) && selected[0] !== "o") return
        if ("123456789".includes(key) && (lastEntered === "x" || selected[0] === "o")) return
        if (key === "0" && (entered === "m" || entered === "") && element(selected).className === "a-int") return
        if (key === "x" && xChars > 1) return
    }
    element(selected).innerHTML += key;

}


/**
 * Remove the last character from the selected DOM elements innerHTML.
 * 
 * @param {string} selected - The ID of the selected element.
 */
function del() {
    if (stopped) return
    let expr = element(selected).innerHTML;
    element(selected).innerHTML = expr.slice(0, -1);
}

/**
 * Remove the last character from the selected DOM elements innerHTML.
 * 
 * @param {string} selected - The ID of the selected element.
 */
function back() {
    if (stopped) {
        return
    } else {
        if (row === 1) return
        element(`bal-${row}`).remove()
        element(`row-${row}`).remove()
        row--
        //console.log(row)
        element(`bal-${row}`).remove()
        createBalanceRow()
        available = []
        for (let x = 1; x < 5; x++) {
            if (element(`p${row}${x}`).children[0].innerHTML !== "" && element(`p${row}${x}`).children[0].innerHTML !== "0") {
                available.push(`b${row}${x}`)
            } else {
                element(`b${row}${x}`).style.display = "none"
                if (x === 1 || x === 2) {
                    element(`bal-${row}`).style.marginLeft = "80px"
                    element(`b${row}${2}b`).style.display = "none"
                } else {
                    element(`b${row}${4}b`).style.display = "none"
                }
            }
        }
        //console.log(available)
        selected = available[0]
        select(selected)
        //console.log(element(`bal-${row}`))


    }

}


/**
 * Modifies the `available` array by prepending the `row` number to each ID.
 *
 * @param {Array<string>} available - An array of IDs to be modified.
 * @param {number} row - The row number to prepend to each ID.
 */
function setAvailable() {
    for (let x = 0; x < available.length; x++) {
        available[x] = `b${row}${available[x][available[x].length - 1]}`
    }
}


/**
 * Change the border color of the old selected element to black
 * and the new selected element to gold.
 *
 * @param {string} id - The ID of the newly selected element.
 * @param {string} selected - The ID of the currently selected element (global variable).
 */
function select(id) {
    if (stopped) return
    //console.log(available)
    //console.log(selected)
    let rowText = row.toString()
    if (id.slice(1, 1 + rowText.length) === rowText) {
        element(selected).style.borderColor = "black";
        index = available.indexOf(id)
        selected = available[index];
        element(id).style.borderColor = "gold";
    }
}


/**
 * Change the border color of the old selected element to black,
 * choose a new selected element ID from the array of available IDs
 * and change the border color the new selected element to gold.
 *
 * @param {Array<string>} available - The array of available IDs.
 * @param {string} direction - A string to indicate if index should increase ore decrease 
 * @param {number} index - The index of the currently selected elements ID in the array of available IDs.
 * @param {string} selected - The ID of the currently selected element (global variable).
 */
function moveThrough(direction) {
    //console.log(selected)
    element(selected).style.borderColor = "black";
    if (direction === "right") {
        index = index < available.length - 1 ? index += 1 : 0;
        //console.log("index", index, available[index])
        selected = available[index]
    } else {
        index = index > 0 ? index -= 1 : available.length - 1;
        selected = available[index]
    }
    element(selected).style.borderColor = "gold";
}


function checkWin() {
    console.log("check win")
    let plhs = ""; // String to hold the current row's left-hand-sides values
    let prhs = ""; // String to hold the current row's right-hand-sides values
    // Process the current row's elements to populate the p array
    for (let x = 1; x < 3; x++) {
        //console.log(element(`p${row}${x}`).children[0].innerHTML)
        if (element(`p${row}${x}`).children[0].innerHTML !== "0") plhs += element(`p${row}${x}`).children[0].innerHTML
        if (element(`p${row}${x + 2}`).children[0].innerHTML !== "0") prhs += element(`p${row}${x + 2}`).children[0].innerHTML
        //console.log(plhs, prhs)
    }

    if ((plhs === "x" && prhs !== "x") || (prhs === "x" && plhs !== "x")) {
        element("info-screen").innerHTML = "YOU WON!"
        element(`bal-${row}`).innerHTML = ""
        stopped = true

        console.log("You won")
    } else {
        return
    }

}

/**
 * Checks the added equation for mathematical rules
 */
function checkEquation() {
    let lhs = ""
    let rhs = ""
    let nums = []
    let dens = []
    for (let x of [0, 3, 5, 8]) {
        if (element(available[x]).innerHTML.includes("x") && element(available[x + 1]).innerHTML.includes("x")) {
            element(available[x]).innerHTML = element(available[x]).innerHTML.length > 1 ? element(available[x]).innerHTML.replace("x", "") : "1"
            element(available[x + 1]).innerHTML = element(available[x + 1]).innerHTML.length > 1 ? element(available[x + 1]).innerHTML.replace("x", "") : "1"
        }
        nums.push(element(available[x]).innerHTML)
        dens.push(element(available[x + 1]).innerHTML)
        if (element(available[x]).innerHTML === "" || element(available[x]).innerHTML === "0") {
            if (x === 0 || x === 3) {
                lhs += "0"
            } else {
                rhs += "0"
            }
        } else if (element(available[x]).innerHTML !== "") {
            if (element(available[x + 1]).innerHTML === "1" || element(available[x + 1]).innerHTML === "") {
                if (x === 0 || x === 3) {
                    lhs += element(available[x]).innerHTML
                } else {
                    rhs += element(available[x]).innerHTML
                }

            } else {
                if (x === 0 || x === 3) {
                    lhs += element(available[x]).innerHTML
                    lhs += element(available[x + 1]).innerHTML
                } else {
                    rhs += element(available[x]).innerHTML
                    rhs += element(available[x + 1]).innerHTML
                }

            }
        }
    }
    return { lhs, rhs, nums, dens }
}

function checkForZeros() {
    let zeros = []
    for (let x = 1; x < 5; x++) {
        if (element(`p1${x}`).children[0].innerHTML === "0" || element(`p1${x}`).children[0].innerHTML === "") {
            element(`p1${x}`).children[0].innerHTML === "0"
            element(`p1${x}`).children[1].innerHTML === "0"
            zeros.push(`${x}`)
        }
    }
    return zeros
}

function changeXToOneX(x) {
    if (element(`p1${x}`).children[1].innerHTML === "") element(`p1${x}`).children[1].innerHTML = "1"
    if (element(`p1${x}`).children[0].innerHTML === "x") element(`p1${x}`).children[0].innerHTML = "1x"
    if (element(`p1${x}`).children[0].innerHTML === "-x") element(`p1${x}`).children[0].innerHTML = "-1x"
    if (element(`p1${x}`).children[1].innerHTML === "x") element(`p1${x}`).children[1].innerHTML = "1x"
}

function completeCheckWithAddEquation() {
    creating = false
    available = []
    for (let x = 0; x < 4; x++) {
        available[x] = `b1${x + 1}`
    }
    row = 1
    selected = available[0]
    //console.log(selected)
    createBalanceRow()
    hideUnused()
    selected = available[0]
    //console.log(selected)
    select(selected)
}

/**
         * Completes the process after an operation is performed.
         * This includes creating a new balance row, updating the row counter,
         * setting available elements, and updating the UI.
         */
function completeCheck() {

    element(selected).style.borderColor = "black";
    row++;
    createBalanceRow();
    setAvailable();
    selected = available[0];
    select(selected);
    hideUnused();
    updateRow();
    scrollToBottom("left");
    checkWin()
}

/**
 * Checks the current row's equation, validates the inputs, and decides which operation to perform.
 */

function check() {
    if (stopped) return
    if (creating) {
        const { lhs, rhs, nums, dens } = checkEquation()
        if (lhs.length === 0) return
        if (rhs.length === 0) return
        if (!lhs.includes("x") && !rhs.includes("x")) return
        if (nums.join().includes("x") && dens.join().includes("x")) return

        const zeros = checkForZeros()
        //console.log("zeros", zeros)
        if (zeros.length > 2) return

        for (let x = 1; x < 5; x++) {
            changeXToOneX(x)
        }


        // Check conditions
        for (let x of [1, 3]) {

            // Get raw innerHTML values
            let p11a = element(`p1${x}`).children[0].innerHTML;
            let p12a = element(`p1${x + 1}`).children[0].innerHTML;
            let p11b = element(`p1${x}`).children[1].innerHTML;
            let p12b = element(`p1${x + 1}`).children[1].innerHTML;
            let o12o = element(`o1${x + 1}o`).children[0].innerHTML;

            if ((p11a.includes("x") && p12a.includes("x")) && (!p11b.includes("x") && !p12b.includes("x")) ||
                (!p11a.includes("x") && !p12a.includes("x") && (p11a !== "" || p11a !== "") && (p12a !== "" || p12a !== "")) && (p11b.includes("x") && p12b.includes("x")) ||
                (!p11a.includes("x") && !p12a.includes("x") && (p11a !== "" || p11a !== "") && (p12a !== "" || p12a !== "")) && (!p11b.includes("x") && !p12b.includes("x"))) {

                //console.log("running");

                // Remove "x" and parse integers
                let n1 = parseInt(p11a.replace("x", ""));
                let n2 = parseInt(p12a.replace("x", ""));
                let d1 = parseInt(p11b.replace("x", ""));
                let d2 = parseInt(p12b.replace("x", ""));

                // Calculate num and den
                let num = o12o === "-" ? (n1 * d2 - n2 * d1) : (n1 * d2 + n2 * d1);
                element(`o1${x + 1}o`).children[0].innerHTML = "+"
                let den = d1 * d2;

                // Find gcd
                let g = gcd(num, den);

                // Simplify fraction
                num = num / g;
                den = den / g;

                // Update DOM
                element(`p1${x}`).children[0].innerHTML = element(`p1${x}`).children[0].innerHTML.includes("x") ? num + "x" : num;
                element(`p1${x}`).children[1].innerHTML = element(`p1${x}`).children[1].innerHTML.includes("x") ? den + "x" : den;
                element(`p1${x + 1}`).children[0].innerHTML = "0";
                element(`p1${x + 1}`).children[1].innerHTML = "0";
            }
        }


        for (let x of [0, 3, 5, 8]) {
            if (element(available[x]).innerHTML === "1x") element(available[x]).innerHTML = "x"
            if (element(available[x]).innerHTML === "-1x") element(available[x]).innerHTML = "-x"
            if (element(available[x]).innerHTML === "" || element(available[x]).innerHTML === "0") {
                element(available[x]).innerHTML = "0"
                element(available[x + 1]).remove()
                setAttributes(element(available[x]), { "class": "int", "id": "" })

            } else if (element(available[x]).innerHTML !== "") {
                if (element(available[x + 1]).innerHTML === "1" || element(available[x + 1]).innerHTML === "") {
                    setAttributes(element(available[x]), { "class": "int", "id": "" })
                    element(available[x + 1]).remove()

                } else {
                    setAttributes(element(available[x]), { "class": "num", "id": "" })
                    setAttributes(element(available[x + 1]), { "class": "int", "id": "" })
                }
            }
        }

        element("o12oa").innerHTML = `${element("o12oa").innerHTML === "-" ? "-" : "+"}`
        element("o14oa").innerHTML = `${element("o14oa").innerHTML === "-" ? "-" : "+"}`
        setAttributes(element("o12oa"), { "class": "int", "id": "" })
        setAttributes(element("o14oa"), { "class": "int", "id": "" })

        completeCheckWithAddEquation()

    } else {
        let p = []; // Array to hold the current row's numerator and denominator values
        let b = []; // Array to hold the balance operations and values
        let s = [
            element(`o${row}2o`).children[0].innerHTML,
            element(`o${row}4o`).children[0].innerHTML
        ];

        // Process the current row's elements to populate the p array
        for (let x = 1; x < 5; x++) {
            if (element(`p${row}${x}`).children.length === 1) {
                if (element(`p${row}${x}`).children[0].innerHTML === "x") {
                    p.push(["1x", "1"]);
                } else {
                    p.push([element(`p${row}${x}`).children[0].innerHTML, "1"]);
                }
            } else {
                if (element(`p${row}${x}`).children[0].innerHTML === "x") {
                    p.push([
                        "1x",
                        element(`p${row}${x}`).children[1].innerHTML === "x" ? "1x" : element(`p${row}${x}`).children[1].innerHTML
                    ]);
                } else {
                    p.push([
                        element(`p${row}${x}`).children[0].innerHTML,
                        element(`p${row}${x}`).children[1].innerHTML === "x" ? "1x" : element(`p${row}${x}`).children[1].innerHTML
                    ]);
                }
            }



            // Handle the b array
            let bSplit = element(`b${row}${x}`).innerHTML.slice(1).split("/");
            let sign = element(`b${row}${x}`).innerHTML.slice(0, 1);
            if (bSplit.length === 1) bSplit.push("1");
            if (bSplit[0] === "x") bSplit[0] = "1x";
            if (bSplit[1] === "x") bSplit[1] = "1x";
            if (bSplit[0] === "") bSplit[1] = "";
            b.push([sign + bSplit[0], bSplit[1]]);
        }

        //console.log(p)
        let p1 = s[0] === "-" && p[1][0][0] !== "-" ? ["-" + p[1][0], p[1][1]] : p[1]
        let p3 = s[1] === "-" && p[3][0][0] !== "-" ? ["-" + p[3][0], p[3][1]] : p[3]
        let newP = [
            p[0],
            p1,
            p[2],
            p3
        ]
        console.log(newP)

        // Check for possible operations
        let extendCheck = checkExtend(newP, b);
        let xCheck = checkXWithAddition(newP, b);
        let multiplicationCheck = checkMultiplication(newP, b);

        // Perform the extend operation if valid
        if (extendCheck) {
            createNewRow(newP);
            //console.log(extendCheck)
            for (let e of extendCheck) {
                extend(e[0], e[1], e[2], e[3]);
            }
            completeCheck()
            return;
        }

        // Perform the multiplication operation if valid
        if (multiplicationCheck) {
            createNewRow(newP);
            multiplication(newP, b, multiplicationCheck[0]);
            completeCheck()
            return;
        }

        // Check the balance and perform the addition operation if valid
        if (!checkBalance(b)) return;

        if (xCheck) {
            createNewRow(newP);
            addition(newP, b, xCheck);
            completeCheck()
            return;
        }
    }
}


/**
 * Checks if the two expressions on the left-hand side of an equation are equal to the two expressions on the right-hand side.
 * The function ignores the order of terms within each side.
 *
 * @param {string[]} b - An array of four algebraic expressions representing an equation.
 * @returns {boolean} - True if the equation is balanced, false otherwise.
 */
function checkBalance(b) {
    console.log("checkBalance")
    if ([b[0], b[1]].sort().join() !== [b[2], b[3]].sort().join() || b.join("") === "") {
        //console.log(b)
        let lhs = []
        let rhs = []
        lhs[0] = b[0][0] === "" || b[0][0] === "" ? "" : b[0][1] !== "1" ? `${b[0][0]}/${b[0][1]}` : b[0][0],
            lhs[1] = b[1][0] === "" || b[1][0] === "" ? "" : b[1][1] !== "1" ? `${b[1][0]}/${b[1][1]}` : b[1][0]
        rhs[0] = b[2][0] === "" || b[2][0] === "" ? "" : b[2][1] !== "1" ? `${b[2][0]}/${b[2][1]}` : b[2][0]
        rhs[1] = b[3][0] === "" || b[3][0] === "" ? "" : b[3][1] !== "1" ? `${b[3][0]}/${b[3][1]}` : b[3][0]
        //console.log(lhs, rhs)

        //console.log("failed to balance", b.join(""), [b[0], b[1]].sort().join() !== [b[2], b[3]].sort().join())
        element("info-screen").innerHTML = `Du behöver göra samma sak på båda sidor! Just nu har du på vänster leden ${lhs.join("")} och på höger leden ${rhs.join("")} `
        return false
    }
    //console.log("no problems with balance", b.join(""))
    return true
}


/**
 * Checks and validates positions for performing addition/subtraction with fractions that may include 'x'.
 * 
 * @param {Array} p - The array containing the positions (numerator and denominator).
 * @param {Array} b - The array containing the balance operations and values.
 * @returns {Array|null} - An array of positions for valid addition/subtraction or null if faults are found.
 */
function checkXWithAddition(p, b) {
    console.log("checkXWithAddition");

    let faults = 0;               // Counter for faults
    let positionsToAdd = [];      // Positions to be considered for addition
    let fractionsToAdd = [];      // Positions for valid addition/subtraction

    // Iterate through the positions
    let alertText = ""
    for (let x = 0; x < 4; x++) {
        if (b[x][0] === "") continue; // Skip empty balance entries

        // Check if the balance has a valid sign and validate 'x' presence
        if (b[x][0][0] === "+" || b[x][0][0] === "-") {
            if (b[x][0].includes("x") && !p[x][0].includes("x")) {
                console.log("Fail: b contains 'x' but p does not");
                alertText += `Vid position  ${(x + 1)} måste båda termerna innehålla "x".`
                faults++;
            } else if (!b[x][0].includes("x") && p[x][0].includes("x")) {
                console.log("Fail: p contains 'x' but b does not");
                alertText += `Vid position  ${(x + 1)} måste båda termerna innehålla "x".`
                faults++;
            } else if (b[x][1].includes("x") && !p[x][1].includes("x")) {
                console.log("Fail: b denominator contains 'x' but p does not");
                alertText += `Vid position  ${(x + 1)} måste båda termerna innehålla "x".`
                faults++;
            } else if (!b[x][1].includes("x") && p[x][1].includes("x")) {
                console.log("Fail: p denominator contains 'x' but b does not");
                alertText += `Vid position  ${(x + 1)} måste båda termerna innehålla "x".`
                faults++;
            } else {
                positionsToAdd.push(x); // Add position to the list if valid
            }
            //console.log(`faults: ${faults}, positionsToAdd: ${positionsToAdd}`);
        } else {
            //console.log("Fail: invalid sign in b", x);
            alertText += `Vid position  ${(x + 1)} det finns en ogiltig operation, antigen addera/subtrhera eller multiplicera/dividera men inte samtidig..`
            faults++;
        }
    }

    // Validate denominators and prepare final positions for addition/subtraction
    for (let x of positionsToAdd) {
        if (p[x][1] !== b[x][1] && b[x][0] !== "") {
            //console.log("Fail: mismatched denominators");
            alertText += `Vid position  ${(x + 1)} kan du inte addera bråk som har olika nämnare: du måste förlänga eller förkorta först.`
            faults++;
        } else {
            fractionsToAdd.push(x); // Add position to the list if denominators match
        }
        //console.log(`faults: ${faults}, fractionsToAdd: ${fractionsToAdd}`);
    }

    // Return null if faults are found, else return positions for addition/subtraction
    if (faults > 0) {
        element("info-screen").innerHTML = alertText
        //console.log("Returning null due to faults");
        return null;
    } else {
        //console.log("No problems with x and addition/subtraction");
        return [fractionsToAdd];
    }
}


/**
 * Checks the validity of multiplication or division operations in the given arrays.
 * @param {Array} p - The array containing current positions.
 * @param {Array} b - The array containing operation indicators.
 * @returns {Array|null} - Returns an array with filled positions, empty positions, and positions with x, or null if invalid.
 */
function checkMultiplication(p, b) {
    console.log("checkMultiplication");

    let emptyPosition = [];
    let filledPosition = [];

    // Identify empty and filled positions
    for (let x = 0; x < 4; x++) {
        if (p[x][0] === "" || p[x][0] === "0") {
            emptyPosition.push(x);
        } else {
            filledPosition.push(x);
        }
    }

    let bCheck = ""
    for (let x = 0; x < 4; x++) {
        bCheck += b[x][0]
    }


    // Ensure all filled positions have the same operation
    let lastPosition = b[filledPosition[0]][0];
    for (let x of filledPosition) {
        if (b[x][0] !== lastPosition || b[x][0] === "" || b[x][0] === "0") {
            return null;
        }
        lastPosition = b[x][0];
    }

    // Check for valid x-squared positions
    let mx = checkForXSquared(p, b);
    if (!mx) {
        return null;
    }

    //console.log("No problems with multiplication/division");
    return [filledPosition, emptyPosition, mx];
}


/**
 * Checks if the fractions in the balance array `b` can be extended or reduced.
 * @param {Array} p - The array containing the positions.
 * @param {Array} b - The array containing the balance operations and values.
 * @returns {Array|null} - An array of details for extending/reducing the fractions or null if no such operations are found.
 */
function checkExtend(p, b) {
    console.log("check extend");

    let a = [];        // Stores indices of valid operations
    let possibles = []
    let additions = []
    let reduce = [];   // Stores whether to reduce (true) or extend (false)
    let ext = [];      // Stores the result array to be returned

    // Iterate through balance array `b` to find valid operations
    for (let x = 0; x < b.length; x++) {
        // Check for multiplication/division where both parts are the same non-empty value
        if ("/*".includes(b[x][0][0]) && (b[x][0].slice(1) === b[x][1]) && (b[x][0].slice(1) !== "")) {
            a.push(x);
            reduce.push(b[x][0][0] === "*" ? false : true); // Determine if it's a reduction or extension
        } else if ("/*".includes(b[x][0][0]) && (b[x][0].slice(1) !== b[x][1]) && (b[x][0].slice(1) !== "")) {
            possibles.push(x)
        } else if ("-+".includes(b[x][0][0])) {
            additions.push(x)
        }
    }
    //console.log(a, possibles)

    // If no valid operations are found, return null
    if (a.length === 0) {
        if (possibles.length === 1 && additions.length === 0) {
            console.log("add warning: trying to reduce/expand with wrong method")
            return null
        } else if (possibles.length === 0) {
            console.log("going forward to addition/subtraction")
            return null
        } else if (possibles.length >= 0 && additions.length === 0) {
            let checkNum = b[possibles[0]][0]
            let checkDen = b[possibles[0]][1]
            for (let x = 0; x < possibles.length - 1; x++) {
                if (checkNum === b[x][0] && checkDen === b[x][1]) {
                    checkNum = b[possibles[x]][0]
                    checkDen = b[possibles[x]][1]
                } else {
                    console.log("add warning: trying to expand/reduce with wrong method 2")
                    return null
                }
            }
            console.log("going forward to multiplication")
            return null
        };
    } else if (a.length > 0) {
        if (additions.length >= 1) {
            console.log("add warning: mixed methods")
            return null
        } else if (possibles.length > 0) {
            console.log("add warning: mixed methods")
            return null
        }
    }




    // Prepare the `ext` array with the necessary details
    for (let x = 0; x < a.length; x++) {
        ext.push([p, b[a[x]][0].slice(1), a[x], reduce[x]]);
    }

    // Return the array of details for extending/reducing the fractions
    return ext;
}


/**
 * Creates a new row in the document with the given positions and signs.
 * @param {Array} p - The array containing the positions to be added to the new row.
 * @param {Array} s - The array containing signs (not used in this function).
 */
function createNewRow(p) {
    console.log("Creating new row");

    let newRow = document.createElement("div");
    setAttributes(newRow, {
        "id": `row-${row + 1}`,
        "class": "row",
    });

    let oldText = [];
    let signOne = `<div class="int">+</div>`;
    let signTwo = `<div class="int">+</div>`;

    for (let x = 0; x < 4; x++) {
        if (p[x][0] === "0") {
            oldText.push(`<div class="int">${p[x][0]}</div>`);
        } else if (p[x][1] === "1") {
            oldText.push(`<div class="int">${p[x][0]}</div>`);
        } else {
            oldText.push(`<div class="num">${p[x][0]}</div><div class="int">${p[x][1]}</div>`);
        }
    }

    newRow.innerHTML = `
        <div id="p${row + 1}1" class="plhs">${oldText[0]}</div>
        <div id="o${row + 1}2o" class="plhs">${signOne}</div>
        <div id="p${row + 1}2" class="plhs">${oldText[1]}</div>
        <div class="plhs">
            <div id="e" class="int">=</div>
        </div>
        <div id="p${row + 1}3" class="prhs">${oldText[2]}</div>
        <div id="o${row + 1}4o" class="prhs">${signTwo}</div>
        <div id="p${row + 1}4" class="prhs">${oldText[3]}</div>
    `;

    //console.log("Appending new row to document");
    element("left").appendChild(newRow);
}


/**
 * Updates the signs in the current row based on the values.
 */
function updateRow() {
    let newRow = element(`row-${row}`);

    // Update the signs and values based on conditions
    if (newRow.children[0].children[0].innerHTML === "0" && newRow.children[1].children[0].innerHTML === "-") {
        newRow.children[2].children[0].innerHTML = "-" + newRow.children[2].children[0].innerHTML;
        newRow.children[1].children[0].innerHTML = "+";
    }
    if (newRow.children[4].children[0].innerHTML === "0" && newRow.children[5].children[0].innerHTML === "-") {
        newRow.children[6].children[0].innerHTML = "-" + newRow.children[6].children[0].innerHTML;
        newRow.children[5].children[0].innerHTML = "+";
    }
    if (newRow.children[0].children[0].innerHTML !== "0" && newRow.children[2].children[0].innerHTML[0] === "-") {
        newRow.children[2].children[0].innerHTML = newRow.children[2].children[0].innerHTML.slice(1);
        newRow.children[1].children[0].innerHTML = "-";
    }
    if (newRow.children[4].children[0].innerHTML !== "0" && newRow.children[6].children[0].innerHTML[0] === "-") {
        newRow.children[6].children[0].innerHTML = newRow.children[6].children[0].innerHTML.slice(1);
        newRow.children[5].children[0].innerHTML = "-";
    }
}


/**
 * Creates a balance row in the document.
 */
function createBalanceRow() {
    let newRow = document.createElement("div");
    setAttributes(newRow, {
        "id": `bal-${row}`,
        "class": "bal",
    });

    newRow.innerHTML = `
        <div id="b${row}1" class="blhs" onmousedown="select(id)"></div>
        <div id="b${row}2b" class="blank"></div>
        <div id="b${row}2" class="blhs" onmousedown="select(id)"></div>
        <div id="b${row}3b" class="blank"></div>
        <div id="b${row}3" class="brhs" onmousedown="select(id)"></div>
        <div id="b${row}4b" class="blank"></div>
        <div id="b${row}4" class="brhs" onmousedown="select(id)"></div>
    `;

    element("left").appendChild(newRow);
}


/**
* Extends or reduces a fraction at a given position and updates the corresponding element.
* @param {Array} positions - Array containing the positions to be extended.
* @param {number|string} fraction - The fraction to extend or reduce by.
* @param {number} position - The position to process.
* @param {boolean} reduce - Whether to reduce the fraction.
*/
function extend(positions, fraction, position, reduce) {
    const { num, den, hasXnum, hasXden } = parsePositions(positions, position);
    const { newNum, newDen } = calculateNewValues(num, den, fraction, reduce);
    if (newNum === null || newDen === null) return;
    updateElementWithExtend(newNum, newDen, hasXnum, hasXden, position);
}


/**
 * Parses the positions array to extract numerator and denominator values.
 * @param {Array} positions - Array containing the positions to be extended.
 * @param {number} position - The position to process.
 * @returns {Object} - Object containing num, den, hasXnum, hasXden.
 */
function parsePositions(positions, position) {
    let num, den;
    let hasXnum = false;
    let hasXden = false;

    if (positions[position].length === 1) {
        if (positions[position][0].includes("x")) {
            hasXnum = true;
            num = parseInt(positions[position][0].replace("x", ""));
            den = 1;
        } else {
            hasXnum = false;
            num = parseInt(positions[position][0]);
            den = 1;
        }
    } else {
        if (positions[position][0].includes("x")) {
            hasXnum = true;
            num = parseInt(positions[position][0].replace("x", ""));
        } else {
            hasXnum = false;
            num = parseInt(positions[position][0]);
        }
        if (positions[position][1].includes("x")) {
            hasXden = true;
            den = parseInt(positions[position][1].replace("x", ""));
        } else {
            hasXden = false;
            den = parseInt(positions[position][1]);
        }
    }
    return { num, den, hasXnum, hasXden };
}


/**
 * Calculates the new numerator and denominator based on the fraction and reduce flag.
 * @param {number} num - The numerator.
 * @param {number} den - The denominator.
 * @param {number|string} fraction - The fraction to extend or reduce by.
 * @param {boolean} reduce - Whether to reduce the fraction.
 * @returns {Object} - Object containing newNum and newDen.
 */
function calculateNewValues(num, den, fraction, reduce) {
    let newNum, newDen;

    if (!reduce) {
        newNum = parseInt(fraction) * num;
        newDen = parseInt(fraction) * den;
    } else {
        if (num % parseInt(fraction) === 0 && den % parseInt(fraction) === 0) {
            newNum = num / parseInt(fraction);
            newDen = den / parseInt(fraction);
        } else {
            return { newNum: null, newDen: null };
        }
    }

    return { newNum, newDen };
}


/**
 * Updates the HTML element with the new numerator and denominator values.
 * @param {number} newNum - The new numerator.
 * @param {number} newDen - The new denominator.
 * @param {boolean} hasXnum - Whether the numerator contains an 'x'.
 * @param {boolean} hasXden - Whether the denominator contains an 'x'.
 * @param {number} position - The position to update.
 */
function updateElementWithExtend(newNum, newDen, hasXnum, hasXden, position) {
    let newRow = element(`row-${row + 1}`);
    newRow.children[position * 2].innerHTML = "";

    let numElement = document.createElement("div");
    let denElement = document.createElement("div");
    setAttributes(numElement, { "class": "num" });
    setAttributes(denElement, { "class": "int" });

    const numText = hasXnum ? newNum.toString() + "x" : newNum.toString();
    const denText = hasXden ? newDen.toString() + "x" : newDen.toString();

    if (denText === "1") {
        denElement.innerHTML = numText;
        newRow.children[position * 2].appendChild(denElement);
    } else {
        numElement.innerHTML = numText;
        denElement.innerHTML = denText;
        newRow.children[position * 2].appendChild(numElement);
        newRow.children[position * 2].appendChild(denElement);
    }
}


/**
 * Performs addition or subtraction on the given arrays and updates the elements accordingly.
 * @param {Array} p - Array of terms.
 * @param {Array} b - Array of balance terms.
 * @param {Array} s - Array of signs.
 * @param {Array} a - Array of indices to process.
 */
function addition(p, b, a) {
    console.log("running addition");
    a[0].forEach(index => processIndex(index, p, b));
}


/**
 * Processes each index to perform the addition or subtraction.
 * @param {number} index - The index to process.
 * @param {Array} p - Array of terms.
 * @param {Array} b - Array of balance terms.
 * @param {Array} s - Array of signs.
 */
function processIndex(index, p, b) {
    let pValue = getPValue(index, p);
    let bValue = parseInt(b[index][0].slice(1).replace("x", ""));
    let result = calculateResult(pValue, bValue, b[index][0][0]);
    updateElementWithAddition(result, index, p);
}


/**
 * Gets the value of p after considering the sign.
 * @param {number} index - The index to process.
 * @param {Array} p - Array of terms.
 * @param {Array} s - Array of signs.
 * @returns {number} - The processed p value.
 */
function getPValue(index, p) {
    return parseInt(p[index][0].replace("x", ""));

}


/**
 * Calculates the result of addition or subtraction.
 * @param {number} pValue - The value from p array.
 * @param {number} bValue - The value from b array.
 * @param {string} operation - The operation ('+' or '-') to perform.
 * @returns {number} - The result of the operation.
 */
function calculateResult(pValue, bValue, operation) {
    if (operation === "+") {
        return pValue + bValue;
    } else {
        return pValue - bValue;
    }
}


/**
 * Updates the element with the result.
 * @param {number} result - The result of the operation.
 * @param {number} index - The index to update.
 * @param {Array} p - Array of terms.
 */
function updateElementWithAddition(result, index, p) {
    let resultString = getResultString(result, p[index][0]);
    let elementId = `p${row + 1}${index + 1}`;
    if (result === 0) {
        element(elementId).innerHTML = '<div class="int">0</div>';
    } else {
        element(elementId).children[0].innerHTML = resultString;
    }
}


/**
 * Gets the result string based on the result and original value.
 * @param {number} result - The result of the operation.
 * @param {string} original - The original value.
 * @returns {string} - The result string.
 */
function getResultString(result, original) {
    if (result === 0) {
        return "0";
    } else {
        return original.includes("x") ? result + "x" : result.toString();
    }
}


/**
 * Sets the content of an element based on the provided parameters.
 * @param {Array} p - Array of terms.
 * @param {Array} b - Array of balance terms.
 * @param {string} s - Sign.
 * @param {number} x - Index.
 * @param {HTMLElement} newRow - The new row element.
 */
function setElementContent(p, b, x, newRow) {
    let numElement = document.createElement("div");
    let denElement = document.createElement("div");
    if (p[0] === "-x") p[0] = "-1x"
    if (p[1] === "-x") p[1] = "-1x"

    setAttributes(numElement, { "class": "num" });
    setAttributes(denElement, { "class": "int" });

    let num, den;
    if (b[0][0] === "*") {
        console.log("running *");
        num = parseInt(p[0].replace("x", "")) * parseInt(b[0].slice(1).replace("x", ""));
        den = parseInt(p[1].replace("x", "")) * parseInt(b[1].replace("x", ""));
    } else {
        console.log("running /");
        num = parseInt(p[0].replace("x", "")) * parseInt(b[1].replace("x", ""));
        den = parseInt(p[1].replace("x", "")) * parseInt(b[0].slice(1).replace("x", ""));
    }

    let g = gcd(num, den);
    num = num / g;
    den = den / g;

    let [numHasX, denHasX] = getVariablesStatus(b, p);

    if (den === 1 && !denHasX) {
        denElement.innerHTML = Math.abs(num) !== 1 ? (numHasX ? num + "x" : num) : (numHasX ? "x" : num);
        newRow.children[x * 2].appendChild(denElement);
    } else {
        numElement.innerHTML = Math.abs(num) !== 1 ? (numHasX ? num + "x" : num) : (numHasX ? "x" : num);
        denElement.innerHTML = Math.abs(den) !== 1 ? (denHasX ? den + "x" : den) : (denHasX ? "x" : den);
        newRow.children[x * 2].appendChild(numElement);
        newRow.children[x * 2].appendChild(denElement);
    }
}


/**
 * Determines if the numerator or denominator has a variable 'x'.
 * @param {Array} b - Array of balance terms.
 * @param {Array} p - Array of terms.
 * @returns {Array} - Boolean values indicating if numerator and denominator have 'x'.
 */
function getVariablesStatus(b, p) {
    let numHasX = false, denHasX = false;

    if (b[0].includes("x")) {
        if (b[0][0] === "*") {
            numHasX = (!p[1].includes("x") || (p[0].includes("x") && p[1].includes("x")));
        } else if (b[0][0] === "/") {
            numHasX = (p[0].includes("x") && p[1].includes("x"));
            denHasX = (!p[0].includes("x") || (p[0].includes("x") && p[1].includes("x")));
        }
    } else if (b[1].includes("x")) {
        if (b[0][0] === "*") {
            denHasX = (!p[0].includes("x") || (p[0].includes("x") && p[1].includes("x")));
        } else if (b[0][0] === "/") {
            numHasX = (p[0].includes("x") && p[1].includes("x"));
        }
    } else {
        if (p[0].includes("x")) {
            numHasX = true;
        } else if (p[1].includes("x")) {
            denHasX = true;
        }
    }

    return [numHasX, denHasX];
}


/**
 * Performs multiplication and sets the content for each element.
 * @param {Array} p - Array of terms.
 * @param {Array} b - Array of balance terms.
 * @param {Array} s - Array of signs.
 * @param {Array} a - Array of indices.
 */
function multiplication(p, b, a) {
    console.log("running multiplication");
    let newRow = document.getElementById(`row-${row + 1}`);
    for (let x of a) {
        newRow.children[x * 2].innerHTML = "";
        setElementContent(p[x], b[x], x, newRow);
    }
}


/**
 * Checks for the presence of 'x^2' in terms.
 * @param {Array} p - Array of terms.
 * @param {Array} b - Array of balance terms.
 * @returns {Array|null} - Array of positions or null if invalid.
 */
function checkForXSquared(p, b) {
    let positions = [];
    for (let x = 0; x < 4; x++) {
        if (b[x][0].includes("x") && (p[x][0].includes("x") || p[x][1].includes("x"))) {
            if (b[x][0][0] === "*" && !p[x][0].includes("x")) {
                positions.push(x);
            } else if (b[x][0][0] === "/" && !p[x][1].includes("x")) {
                positions.push(x);
            } else {
                positions.push("e");
            }
        }
    }
    if (positions.join("").includes("e")) return null;
    return positions;
}


/**
 * Hides unused elements based on certain conditions.
 */
function hideUnused() {
    let prhs = getElementsContent(`[id^='p${row}']:not(.plhs)`);
    let plhs = getElementsContent(`[id^='p${row}']:not(.prhs)`);
    handleLeftSide(plhs);
    handleRightSide(prhs);
}


/**
     * Hides elements based on the given indices and offset.
     * @param {number} offset - Offset for the index.
     * @param {number} index - Index of the element.
     */
function hideElements(offset, index) {
    hideElement(`p${row}${index}`);
    hideElement(`b${row}${index}`);
    hideElement(`o${row}${index + offset}o`);
    hideElement(`b${row}${index + offset}b`);
}


/**
 * Gets the content of elements based on the provided selector.
 * @param {string} selector - The selector to match elements.
 * @returns {Array} - Array of element content.
 */
function getElementsContent(selector) {
    //console.log("selector", selector)
    //console.log(document.querySelectorAll(selector))
    let content = [];
    document.querySelectorAll(selector).forEach((e) => content.push(e.children[0].innerHTML));
    return content;
}


/**
 * Hides an element by setting its display style to none.
 * @param {string} id - The ID of the element to hide.
 */
function hideElement(id) {
    element(id).setAttribute("style", "display:none;");
}


/**
 * Handles hiding elements on the left side based on their content.
 * @param {Array} plhs - Array of left-hand side element content.
 */
function handleLeftSide(plhs) {
    if (plhs[0] === "0" && plhs[1] !== "0") {
        hideElements(1, 1);
        adjustMargins();
        updateAvailableAndSelect(`b${row}1`);
    } else if (plhs[0] !== "0" && plhs[1] === "0") {
        hideElements(0, 2);
        adjustMargins();
        updateAvailableAndSelect(`b${row}2`);
    } else if (plhs[0] === "0" && plhs[1] === "0") {
        hideElements(0, 2);
        adjustMargins();
        updateAvailableAndSelect(`b${row}2`);
    }
}


/**
 * Handles hiding elements on the right side based on their content.
 * @param {Array} prhs - Array of right-hand side element content.
 */
function handleRightSide(prhs) {
    if (prhs[0] === "0" && prhs[1] !== "0") {
        hideElements(1, 3);
        updateAvailableAndSelect(`b${row}3`);
    } else if (prhs[0] !== "0" && prhs[1] === "0") {
        hideElements(0, 4);
        updateAvailableAndSelect(`b${row}4`);
    } else if (prhs[0] === "0" && prhs[1] === "0") {
        hideElements(0, 4);
        updateAvailableAndSelect(`b${row}4`);
    }
}


/**
 * Adjusts the margins for the row and balance elements.
 */
function adjustMargins() {
    element(`row-${row}`).setAttribute("style", "margin-left:80px;");
    element(`bal-${row}`).setAttribute("style", "margin-left:80px;");
}


/**
 * Updates the available elements and selects the next available one.
 * @param {string} id - The ID of the element to remove from the available list.
 */
function updateAvailableAndSelect(id) {
    available = removeByValue(id, available);
    select(available[0]);
}


/**
 * Removes a value from an array.
 * @param {string} value - The value to remove.
 * @param {Array} array - The array to remove the value from.
 * @returns {Array} - The updated array.
 */
function removeByValue(value, array) {
    return array.filter(item => item !== value);
}
