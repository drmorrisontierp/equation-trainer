/**
 * Sets default values for elements if they contain specific characters or are empty.
 */
function setDefaultValues(elements, char, defaultValue) {
    for (let element of elements) {
        if (element.innerHTML.includes(char)) {
            element.innerHTML = element.innerHTML.length > 1 ? element.innerHTML.replace(char, "") : defaultValue;
        }
        if (element.innerHTML === "") {
            element.innerHTML = defaultValue;
        }
    }
}

/**
 * Extracts numerators and denominators from given elements.
 */
function extractNumeratorsAndDenominators(indices) {
    let nums = [];
    let dens = [];
    for (let x of indices) {
        nums.push(element(available[x]).innerHTML);
        dens.push(element(available[x + 1]).innerHTML);
    }
    return { nums, dens };
}

/**
 * Updates the left-hand side (lhs) and right-hand side (rhs) of the equation.
 */
function updateSides(indices, lhs, rhs) {
    for (let x of indices) {
        let num = element(available[x]).innerHTML;
        let den = element(available[x + 1]).innerHTML;
        if (num !== "") {
            if (den === "1" || den === "") {
                x === 0 || x === 3 ? lhs += num : rhs += num;
            } else {
                x === 0 || x === 3 ? lhs += num + den : rhs += num + den;
            }
        }
    }
    return { lhs, rhs };
}

/**
 * Initializes elements in a row to default values if empty.
 */
function initializeRowElements(ids) {
    for (let id of ids) {
        if (element(id).children[0].innerHTML === "" || element(id).children[0].innerHTML === "0") {
            element(id).children[0].innerHTML = "0";
            element(id).children[1].innerHTML = "0";
        }
    }
}

/**
 * Simplifies fractions in the DOM.
 */
function simplifyFractions(x) {
    let p11a = element(`p1${x}`).children[0].innerHTML;
    let p12a = element(`p1${x + 1}`).children[0].innerHTML;
    let p11b = element(`p1${x}`).children[1].innerHTML;
    let p12b = element(`p1${x + 1}`).children[1].innerHTML;
    let o12o = element(`o1${x + 1}o`).children[0].innerHTML;

    let n1 = parseInt(p11a.replace("x", ""));
    let n2 = parseInt(p12a.replace("x", ""));
    let d1 = parseInt(p11b.replace("x", ""));
    let d2 = parseInt(p12b.replace("x", ""));

    let num = o12o === "-" ? (n1 * d2 - n2 * d1) : (n1 * d2 + n2 * d1);
    element(`o1${x + 1}o`).children[0].innerHTML = "+";
    let den = d1 * d2;

    let g = gcd(num, den);

    num = num / g;
    den = den / g;

    element(`p1${x}`).children[0].innerHTML = element(`p1${x}`).children[0].innerHTML.includes("x") ? num + "x" : num;
    element(`p1${x}`).children[1].innerHTML = element(`p1${x}`).children[1].innerHTML.includes("x") ? den + "x" : den;
    element(`p1${x + 1}`).children[0].innerHTML = "0";
    element(`p1${x + 1}`).children[1].innerHTML = "0";
}

/**
 * Performs common setup tasks for checking the equation.
 */
function commonSetup() {
    creating = false;
    available = [];
    for (let x = 0; x < 4; x++) {
        available[x] = `b1${x + 1}`;
    }
    row = 1;
    selected = available[0];
    console.log(selected);
    createBalanceRow();
    hideUnused();
    selected = available[0];
    console.log(selected);
    select(selected);
}


//----------------------------------------------------------

function check() {
    if (stopped) return;
    
    if (creating) {
        let lhs = "";
        let rhs = "";
        
        // Extract numerators and denominators
        let { nums, dens } = extractNumeratorsAndDenominators([0, 3, 5, 8]);
        
        // Update sides
        ({ lhs, rhs } = updateSides([0, 3, 5, 8], lhs, rhs));
        
        if (lhs.length === 0 || rhs.length === 0) return;
        if (!lhs.includes("x") && !rhs.includes("x")) return;
        if (nums.join().includes("x") && dens.join().includes("x")) return;
        
        // Initialize row elements to default values if necessary
        initializeRowElements(["p11", "p12", "p13", "p14"]);
        
        // Simplify fractions
        for (let x of [1, 3]) {
            simplifyFractions(x);
        }
        
        // Further processing and updates
        setDefaultValues([element("o12oa"), element("o14oa")], "-", "+");
        commonSetup();
        
    } else {
        let p = [];
        let b = [];
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

            let bSplit = element(`b${row}${x}`).innerHTML.slice(1).split("/");
            let sign = element(`b${row}${x}`).innerHTML.slice(0, 1);
            if (bSplit.length === 1) bSplit.push("1");
            if (bSplit[0] === "x") bSplit[0] = "1x";
            if (bSplit[1] === "x") bSplit[1] = "1x";
            if (bSplit[0] === "") bSplit[1] = "";
            b.push([sign + bSplit[0], bSplit[1]]);
        }

        let p1 = s[0] === "-" && p[1][0][0] !== "-" ? ["-" + p[1][0], p[1][1]] : p[1];
        let p3 = s[1] === "-" && p[3][0][0] !== "-" ? ["-" + p[3][0], p[3][1]] : p[3];
        let newP = [p[0], p1, p[2], p3];

        let extendCheck = checkExtend(newP, b);
        let xCheck = checkXWithAddition(newP, b);
        let multiplicationCheck = checkMultiplication(newP, b);

        function complete() {
            element(selected).style.borderColor = "black";
            row++;
            createBalanceRow();
            setAvailable();
            selected = available[0];
            select(selected);
            hideUnused();
            updateRow();
            scrollToBottom("left");
            checkWin();
        }

        if (extendCheck) {
            createNewRow(newP);
            for (let e of extendCheck) {
                extend(e[0], e[1], e[2], e[3]);
            }
            complete();
            return;
        }

        if (multiplicationCheck) {
            createNewRow(newP);
            multiplication(newP, b, multiplicationCheck[0]);
            complete();
            return;
        }

        if (!checkBalance(b)) return;

        if (xCheck) {
            createNewRow(newP);
            xAddition(newP, b);
            complete();
            return;
        }
    }
}


//---------------------------------------------------------

function addEquation() {
    setDefaultValues([
        element("o12oa"), element("o12ob"),
        element("o14oa"), element("o14ob")
    ], "-", "+");

    let a = [
        element("o12oa").innerHTML,
        element("o12ob").innerHTML,
        element("o14oa").innerHTML,
        element("o14ob").innerHTML
    ];

    let p = [];
    let pNew = [];
    for (let x = 1; x < 5; x++) {
        let value1 = element(`p1${x}`).children[0].innerHTML;
        let value2 = element(`p1${x}`).children[1].innerHTML;
        if (value1 === "") value1 = "0";
        if (value2 === "") value2 = "0";
        p.push([value1, value2]);
    }

    let p0 = p[0];
    let p2 = p[2];
    pNew.push(p0);
    pNew.push(a[0] === "-" ? ["-" + p[1][0], p[1][1]] : p[1]);
    pNew.push(p2);
    pNew.push(a[2] === "-" ? ["-" + p[3][0], p[3][1]] : p[3]);

    createNewRow(pNew);

    for (let x of [1, 3]) {
        simplifyFractions(x);
    }

    commonSetup();
}
