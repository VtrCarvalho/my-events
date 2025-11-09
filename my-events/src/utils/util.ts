export async function getAllEvents() {
    try {
        const response = await fetch(process.env.URL_DATABASE_FIREBASE!)
        const data = await response.json();
        const events = [];

        for (const key in data) {
            events.push({
                id: key,
                ...data[key]
            });
        }
        return events;
    } catch (error) {
        throw error
    }
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: any) {
    try {
        const events = await getAllEvents();
        return events.find(event => event.id === id);
    } catch (error) {
        throw error
    }
}

export async function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();
  if (!events || events.length === 0) {
    return [];
  }

  const filteredEvents = events.filter((event) => {

    const formatedDate = event.date.split("-").map(Number);
    return formatedDate[0] === year && formatedDate[1] === month;
  });

  return filteredEvents;
}