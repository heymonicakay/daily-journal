export const JournalEntryCompontent = (entry) => {
      return `
            <a class="sidenav__link" href="#">
                  <div class="sidenav__text--date">
                        ${entry.date}
                  </div>
                  <div class="sidenav__text--entry">
                        ${entry.entry}
                  </div>      
            </a>
      `
}