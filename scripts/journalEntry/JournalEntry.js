export const JournalEntry = (entry) => {
      return `
      <section class="je--${entry.id}">
          <p class="je--date">${entry.date}</p>
          <p class="je--concepts">${entry.concepts}</p>
          <p class="je--entry">${entry.entry}</p>
      </section>
      <button class="btn btn-del--${entry.id}">
        Delete Entry
      </button>
      <button class="btn btn-edit--${entry.id}">
        Edit Entry
      </button>
      `;
  }
