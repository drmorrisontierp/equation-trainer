// Global variables
let row = 1;
let available = ["b11", "b12", "b13", "b14"]
let index = 0
let selected = available[index];


// Select the first available position in the first balance row
select(available[0])


// Add event listeners
document.addEventListener("keydown", handleKeydown);


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
    } else if (!isNaN(key)) {
        enter(key);
    }
    //console.log(key);
}


function enter(key) {
    //let entered = element(selected).innerHTML
    //lastEntered = ""
    //if (entered !== "") {
    //    lastEntered = entered[entered.length-1]
    //} else {
    //    lastEntered = "m"
    //}
    //console.log(entered, lastEntered)
    // if ("*/".includes(key) && entered !== "") return
    //if ("+-".includes(key) && !("/*".includes(lastEntered) || entered === "")) return
    //if (key === "x" && !"0123456789-/+*".includes(lastEntered)) return
    //if ("0123456789".includes(key) && !"0123456789-/+*".includes(lastEntered)) return*/
    element(selected).innerHTML += key;
}


/**
 * Remove the last character from the selected DOM elements innerHTML.
 * 
 * @param {string} selected - The ID of the selected element.
 */
function del() {
    let expr = element(selected).innerHTML;
    element(selected).innerHTML = expr.slice(0, -1);
}

/**
 * Remove the last character from the selected DOM elements innerHTML.
 * 
 * @param {string} selected - The ID of the selected element.
 */
function clear() {
    let expr = element(selected).innerHTML;
    element(selected).innerHTML = expr.slice(0, -1);
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
    element(selected).style.borderColor = "black";
    if (direction === "right") {
        index = index < available.length - 1 ? index += 1 : 0;
        selected = available[index]
    } else {
        index = index > 0 ? index -= 1 : available.length - 1;
        selected = available[index]
    }
    element(selected).style.borderColor = "gold";
}


/**
 * Checks the current row's equation, validates the inputs, and decides which operation to perform.
 */
function check() {
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

    // Check for possible operations
    let extendCheck = checkExtend(p, b);
    let xCheck = checkXWithAddition(p, b);
    let multiplicationCheck = checkMultiplication(p, b);

    /**
     * Completes the process after an operation is performed.
     * This includes creating a new balance row, updating the row counter,
     * setting available elements, and updating the UI.
     */
    function complete() {
        element(selected).style.borderColor = "black";
        createBalanceRow();
        row++;
        setAvailable();
        selected = available[0];
        select(selected);
        hideUnused();
        updateRow();
        scrollToBottom("left");
    }

    // Perform the extend operation if valid
    if (extendCheck) {
        createNewRow(p, s);
        for (let e of extendCheck) {
            extend(e[0], e[1], e[2], e[3]);
        }
        complete()
        return;
    }

    // Perform the multiplication operation if valid
    if (multiplicationCheck) {
        createNewRow(p, s);
        multiplication(p, b, s, multiplicationCheck[0]);
        complete()
        return;
    }

    // Check the balance and perform the addition operation if valid
    if (!checkBalance(b)) return;

    if (xCheck) {
        createNewRow(p, s);
        addition(p, b, s, xCheck);
        complete()
        return;
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
        console.log(b)
        let lhs = []
        let rhs = []
        lhs[0] = b[0][0] === "" ||  b[0][0] === "" ? "" : b[0][1] !== "1" ? `${b[0][0]}/${b[0][1]}` : b[0][0],
        lhs[1] = b[1][0] === "" ||  b[1][0] === "" ? "" : b[1][1] !== "1" ? `${b[1][0]}/${b[1][1]}` : b[1][0]
        rhs[0] = b[2][0] === "" ||  b[2][0] === "" ? "" : b[2][1] !== "1" ? `${b[2][0]}/${b[2][1]}` : b[2][0]
        rhs[1] = b[3][0] === "" ||  b[3][0] === "" ? "" : b[3][1] !== "1" ? `${b[3][0]}/${b[3][1]}` : b[3][0]
        console.log(lhs, rhs)
        
        console.log("failed to balance", b.join(""), [b[0], b[1]].sort().join() !== [b[2], b[3]].sort().join())
        element("info-screen").innerHTML = `Du behöver göra samma sak på båda sidor! Just nu har du på vänster leden ${lhs.join("")} och på höger leden ${rhs.join("")} `
        return false
    }
    console.log("no problems with balance", b.join(""))
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
            alertText += `Vid position  ${(x+1)} måste båda termerna innehålla "x".`
                faults++;
            } else if (!b[x][0].includes("x") && p[x][0].includes("x")) {
                console.log("Fail: p contains 'x' but b does not");
                alertText += `Vid position  ${(x+1)} måste båda termerna innehålla "x".`
                faults++;
            } else if (b[x][1].includes("x") && !p[x][1].includes("x")) {
                console.log("Fail: b denominator contains 'x' but p does not");
                alertText += `Vid position  ${(x+1)} måste båda termerna innehålla "x".`
                faults++;
            } else if (!b[x][1].includes("x") && p[x][1].includes("x")) {
                console.log("Fail: p denominator contains 'x' but b does not");
                alertText += `Vid position  ${(x+1)} måste båda termerna innehålla "x".`
                faults++;
            } else {
                positionsToAdd.push(x); // Add position to the list if valid
            }
            console.log(`faults: ${faults}, positionsToAdd: ${positionsToAdd}`);
        } else {
            console.log("Fail: invalid sign in b", x);
            alertText += `Vid position  ${(x+1)} det finns en ogiltig operation, antigen addera/subtrhera eller multiplicera/dividera men inte samtidig..`
            faults++;
        }
    }

    // Validate denominators and prepare final positions for addition/subtraction
    for (let x of positionsToAdd) {
        if (p[x][1] !== b[x][1] && b[x][0] !== "") {
            console.log("Fail: mismatched denominators");
            alertText += `Vid position  ${(x+1)} kan du inte addera bråk som har olika nämnare: du måste förlänga eller förkorta först.`
            faults++;
        } else {
            fractionsToAdd.push(x); // Add position to the list if denominators match
        }
        console.log(`faults: ${faults}, fractionsToAdd: ${fractionsToAdd}`);
    }

    // Return null if faults are found, else return positions for addition/subtraction
    if (faults > 0) {
        element("info-screen").innerHTML = alertText
        console.log("Returning null due to faults");
        return null;
    } else {
        console.log("No problems with x and addition/subtraction");
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

    console.log("No problems with multiplication/division");
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
    let reduce = [];   // Stores whether to reduce (true) or extend (false)
    let ext = [];      // Stores the result array to be returned

    // Iterate through balance array `b` to find valid operations
    for (let x = 0; x < b.length; x++) {
        // Check for multiplication/division where both parts are the same non-empty value
        if ("/*".includes(b[x][0][0]) && (b[x][0].slice(1) === b[x][1]) && (b[x][0].slice(1) !== "")) {
            a.push(x);
            reduce.push(b[x][0][0] === "*" ? false : true); // Determine if it's a reduction or extension
        }
    }

    // If no valid operations are found, return null
    if (a.length === 0) return null;

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
function createNewRow(p, s) {
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

    console.log("Appending new row to document");
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
        "id": `bal-${row + 1}`,
        "class": "bal",
    });

    newRow.innerHTML = `
        <div id="b${row + 1}1" class="blhs" onmousedown="select(id)"></div>
        <div id="b${row + 1}2b" class="blank"></div>
        <div id="b${row + 1}2" class="blhs" onmousedown="select(id)"></div>
        <div id="b${row + 1}3b" class="blank"></div>
        <div id="b${row + 1}3" class="brhs" onmousedown="select(id)"></div>
        <div id="b${row + 1}4b" class="blank"></div>
        <div id="b${row + 1}4" class="brhs" onmousedown="select(id)"></div>
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
function addition(p, b, s, a) {
    console.log("running addition");
    a[0].forEach(index => processIndex(index, p, b, s));
}


/**
 * Processes each index to perform the addition or subtraction.
 * @param {number} index - The index to process.
 * @param {Array} p - Array of terms.
 * @param {Array} b - Array of balance terms.
 * @param {Array} s - Array of signs.
 */
function processIndex(index, p, b, s) {
    let pValue = getPValue(index, p, s);
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
function getPValue(index, p, s) {
    if (index === 1 || index === 3) {
        let signIndex = 0.5 * index - 0.5;
        if (s[signIndex] === "-" && p[index][0][0] === "-") {
            return parseInt(p[index][0].slice(1).replace("x", ""));
        } else if (s[signIndex] === "-" && p[index][0][0] !== "-") {
            return parseInt("-" + p[index][0].replace("x", ""));
        } else {
            return parseInt(p[index][0].replace("x", ""));
        }
    } else {
        return parseInt(p[index][0].replace("x", ""));
    }
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
function setElementContent(p, b, s, x, newRow) {
    let numElement = document.createElement("div");
    let denElement = document.createElement("div");
    let sign = s === "-" && p[0][0] !== "-" ? "-" : "";

    setAttributes(numElement, { "class": "num" });
    setAttributes(denElement, { "class": "int" });

    let num, den;
    if (b[0][0] === "*") {
        console.log("running *");
        num = parseInt(sign + p[0].replace("x", "")) * parseInt(b[0].slice(1).replace("x", ""));
        den = parseInt(p[1].replace("x", "")) * parseInt(b[1].replace("x", ""));
    } else {
        console.log("running /");
        num = parseInt(sign + p[0].replace("x", "")) * parseInt(b[1].replace("x", ""));
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
function multiplication(p, b, s, a) {
    console.log("running multiplication");
    let newRow = document.getElementById(`row-${row + 1}`);
    for (let x of a) {
        newRow.children[x * 2].innerHTML = "";
        let sign = (x === 1 || x === 3) ? s[0.5 * x - 0.5] : "+";
        setElementContent(p[x], b[x], sign, x, newRow);
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
