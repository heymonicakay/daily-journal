import { useJournalData } from "./JournalData.js"
import { JournalEntry } from "./JournalEntry.js"

const savedEntries = document.querySelector(".entry--list")

export const EntryList = () => {
  const allEntries = useJournalData()

  for (const entry of allEntries) {
      savedEntries.innerHTML += `
        ${JournalEntry(entry)}
      `
  }
}

// this is testing stashes
// as;ovinewa;owinf;aeoihat;woiehtg;ekha;wske
