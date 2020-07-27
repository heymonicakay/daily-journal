import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryCompontent } from "./JournalEntry.js"

const contentTarget = document.querySelector(".sidenav")

export const EntryList = ( ) => {

    const entries = useJournalEntries()

    contentTarget.innerHTML = ""

    entries.array.forEach((currentEntry) => {
          
      entryList.innerHTML += JournalEntryCompontent(entry)
    }
}

