/**
 * Sorts a package into one of three stacks based on its volume and mass.
 * The function calculates the volume of the package and checks if it is bulky or heavy.
 * It then returns the name of the stack where the package should go.
 * 
 * The sorting rules are as follows:
 * - If the package is bulky (volume >= 1,000,000 cm³ or any dimension >= 150 cm) and heavy (mass >= 20 kg), it should be rejected.
 * - If the package is bulky or heavy, it should be dispatched to the SPECIAL stack.
 * - Otherwise, it should be dispatched to the STANDARD stack.
 *
 * @param {number} width - The width of the package in centimeters.
 * @param {number} height - The height of the package in centimeters.
 * @param {number} length - The length of the package in centimeters.
 * @param {number} mass - The mass of the package in kilograms.
 * @returns {string} - The name of the stack where the package should go.
 */
function sort(width, height, length, mass) {
    const volume = width * height * length;
    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;

    if (isBulky && isHeavy) {
        return "REJECTED";
    } else if (isBulky || isHeavy) {
        return "SPECIAL";
    } else {
        return "STANDARD";
    }
}

// ### Testing
function runTests() {
    const tests = [
        { input: [50, 50, 50, 10], expected: "STANDARD" },
        { input: [150, 50, 50, 10], expected: "SPECIAL" },
        { input: [50, 150, 50, 10], expected: "SPECIAL" },
        { input: [50, 50, 150, 10], expected: "SPECIAL" },
        { input: [100, 100, 100, 10], expected: "SPECIAL" },
        { input: [50, 50, 50, 20], expected: "SPECIAL" },
        { input: [150, 150, 150, 20], expected: "REJECTED" },
        { input: [200, 200, 200, 30], expected: "REJECTED" },
    ];

    tests.forEach(({ input, expected }, index) => {
        const result = sort(...input);
        console.log(`Test ${index + 1}: Input: ${input.join(", ")} | Expected: ${expected} | Got: ${result}`);
        console.assert(result === expected, `Test ${index + 1} failed: expected ${expected}, got ${result}`);
    });
}

runTests();