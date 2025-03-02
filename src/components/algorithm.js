function getPossibleChords(fretNumber, stringValues, chordNotes, maxDifference, mustIncludeAll) {

    const notesMap = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    function hasDifferenceGreaterThanN(difference, numbers) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if ([numbers[i], numbers[j]].includes(0)) continue;
                if (Math.abs(numbers[i] - numbers[j]) > difference) {
                    return true;
                }
            }
        }
        return false;
    }

    function generateCombinations(lists) {

        if (lists.length === 0) {
            return [[]];
        }

        const [firstList, ...restLists] = lists;
        const restCombinations = generateCombinations(restLists);
        const result = [];

        for (const i of firstList) {
            for (const combination of restCombinations) {
                result.push([i, ...combination]);
            }
        }

        return result;

    }

    let notesInStrings = Array.from({ length: stringValues.length }, () => [])

    let stringNumber = 0;

    for (const string of stringValues) {

        for (let i = string; i < fretNumber + string; i++) {

            let note = notesMap[i % 12 - 1]

            if (!note) note = notesMap[11]

            if (chordNotes.includes(note)) {
                notesInStrings[stringNumber].push(i)
            }

        }

        stringNumber ++

    }

    stringNumber = 0;

    let combinations = generateCombinations(notesInStrings)

    let result = [];

    for (let i = 0; i < combinations.length; i++) {

        if (mustIncludeAll) if (!chordNotes.every(note => combinations[i].map(item => notesMap[item % 12 - 1] || notesMap[11]).includes(note))) continue;

        stringNumber = 0;

        let newCombination = [];

        for (let note of combinations[i]) {

            newCombination.push(note - stringValues[stringNumber]);
            stringNumber ++;

        }

        if (hasDifferenceGreaterThanN(maxDifference, newCombination)) continue;

        result.push(newCombination);

    }

    return result;

}

let fretNumber = 18

let stringValues = [5, 10, 3, 8, 12, 5]

let chordNotes = ["C", "E", "G"]

let maxDifference = 5;

let mustIncludeAll = true;

console.log(getPossibleChords(fretNumber, stringValues, chordNotes, maxDifference, mustIncludeAll))