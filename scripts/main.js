
import { EntryList } from "./journalEntry/JournalEntryList.js";
import { getJournalData } from "./journalEntry/JournalData.js";

getJournalData()
.then(EntryList)