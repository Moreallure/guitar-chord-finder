export function getPossibleChords(fretNumber, stringValues, chordNotes, maxDifference, mustIncludeAll) {

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

    // Generate notesInStrings based on semitones modulo 12
    const notesInStrings = [];
    for (const stringValue of stringValues) {
        const notes = [];
        for (let i = stringValue; i < stringValue + fretNumber; i++) {
            const semitone = i % 12;
            if (chordNotes.includes(semitone)) {
                notes.push(i);
            }
        }
        notesInStrings.push(notes);
    }

    const combinations = generateCombinations(notesInStrings);
    const result = [];

    for (const combination of combinations) {
        // Check if all required chord notes are present
        if (mustIncludeAll) {
            const semitones = combination.map(note => note % 12);
            if (!chordNotes.every(s => semitones.includes(s))) {
                continue;
            }
        }

        // Convert to fret numbers and check max spread
        const fretCombination = combination.map((note, idx) => note - stringValues[idx]);
        if (!hasDifferenceGreaterThanN(maxDifference, fretCombination)) {
            result.push(fretCombination);
        }
    }

    return result;
}