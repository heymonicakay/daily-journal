let journalData = []

export const useJournalData = () => {
  const sortedByDate = journalData.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}



export const getJournalData = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(parsedEntries => {
          journalData = parsedEntries
        })
}

  //     saveJournalEntry(entry) {
  //         return fetch('http://localhost:3000/entries', {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json"
  //             },
  //             body: JSON.stringify(entry)
  //         })
  //     },
  //     deleteJournalEntry(entryID) {
  //         return fetch(`http://localhost:3000/entries/${entryID}`, {
  //             method: "DELETE"
  //         })
  //             .then(response => response.json())
  //     },
  //     getJournalEntry(entryID) {
  //         return fetch(`http://localhost:3000/entries/${entryID}`)
  //             .then(response => response.json())
  //     },
  //     editJournalEntry(entry, entryID) {
  //         return fetch(`http://localhost:3000/entries/${entryID}`, {
  //             method: "PUT",
  //             headers: {
  //                 "Content-Type": "application/json"
  //             },
  //             body: JSON.stringify(entry)
  //         })
  //             .then(response => response.json())
  //             .then(() => document.getElementById('journalId').value = '')
  //     },
  //     getMoods() {
  //         return fetch('http://localhost:3000/moods')
  //             .then(response => response.json())
  //     },
  //     getInstructors() {
  //         return fetch('http://localhost:3000/instructors')
  //             .then(response => response.json())
  //     },
  //     getTags() {
  //         return fetch('http://localhost:3000/tags')
  //             .then(response => response.json())
  //     }
  // }

  // export  journalData