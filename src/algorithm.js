export function getPossibleChords(fretNumber, stringValues, chordNotes, maxDifference, mustIncludeAll) {
    const notesMap = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    // Precompute notesData and stringNotes for each string
    const notesData = [];
    const stringNotes = [];
    for (let s = 0; s < stringValues.length; s++) {
        const stringValue = stringValues[s];
        const currentData = [];
        const currentNotes = new Set();
        for (let i = stringValue; i < stringValue + fretNumber; i++) {
            const noteValue = i % 12;
            const noteIndex = noteValue === 0 ? 11 : noteValue - 1;
            const note = notesMap[noteIndex];
            if (chordNotes.includes(note)) {
                const fret = i - stringValue;
                currentData.push({ fret, note });
                currentNotes.add(note);
            }
        }
        notesData.push(currentData);
        stringNotes.push(currentNotes);
    }

    // Precompute chordNoteToStrings: which strings can play each chord note
    const chordNoteToStrings = {};
    for (const note of chordNotes) {
        chordNoteToStrings[note] = [];
        for (let s = 0; s < stringNotes.length; s++) {
            if (stringNotes[s].has(note)) {
                chordNoteToStrings[note].push(s);
            }
        }
    }

    const result = [];

    // Backtracking function
    function backtrack(currentCombination, currentNotes, currentMin, currentMax, stringIndex) {
        if (stringIndex === stringValues.length) {
            if (mustIncludeAll && currentNotes.size !== chordNotes.length) return;
            result.push([...currentCombination]);
            return;
        }

        const currentStringData = notesData[stringIndex];
        for (const { fret, note } of currentStringData) {
            const newNotes = new Set(currentNotes);
            newNotes.add(note);

            let newMin = currentMin;
            let newMax = currentMax;
            if (fret !== 0) {
                newMin = Math.min(newMin, fret);
                newMax = Math.max(newMax, fret);
            }

            // Check maxDifference constraint
            if (newMin !== Infinity && newMax - newMin > maxDifference) continue;

            // Forward check for remaining notes if needed
            if (mustIncludeAll) {
                const remainingNotes = chordNotes.filter(n => !newNotes.has(n));
                let canCover = true;
                for (const n of remainingNotes) {
                    const availableStrings = chordNoteToStrings[n];
                    if (!availableStrings.some(s => s > stringIndex)) {
                        canCover = false;
                        break;
                    }
                }
                if (!canCover) continue;
            }

            backtrack([...currentCombination, fret], newNotes, newMin, newMax, stringIndex + 1);
        }
    }

    backtrack([], new Set(), Infinity, -Infinity, 0);
    return result;
}