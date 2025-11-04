import { getAllEvents } from "../../../dummy-data";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/router";

export default function EventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(ano: number, mes: number) {
        const caminho = `/events/${ano}/${mes}`
        
        router.push(caminho);
    }

    return (
        <>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </>
    );
}