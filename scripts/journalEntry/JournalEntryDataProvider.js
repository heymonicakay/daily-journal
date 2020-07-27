const journalEntries = [
      {
          id: 1,
          date: "07/20/2020",
          concept: "Hello, World.",
          entry: "Haphazard Hobbits traveled the world.",
          mood: "happy"
      },
      {
          id: 2,
          date: "07/21/2020",
          concept: "second",
          entry: "This is the second entry",
          mood: "welp"
      },
      {
          id: 3,
          date: "07/22/2020",
          concept: "third",
          entry: "this is the third entry",
          mood: "hmm"
      }
  ]
  export const useJournalEntries = () => {

    return journalEntries.slice()

   }