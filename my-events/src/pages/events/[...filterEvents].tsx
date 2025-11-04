import { useRouter } from "next/router"
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/buttons/button";
import ErrorAlert from "@/components/error-alert/error-alert";

export default function FilteredEventsPage() {

    const router = useRouter();
    const filterData = router.query.filterEvents;

    if(!filterData) {
        return <p className="center">Loading...</p>;
    }

    const filteredAno = filterData[0];
    const filteredMes = filterData[1];

    const numAno = +filteredAno;
    const numMes = +filteredMes;

    if(isNaN(numAno) || isNaN(numMes) || numAno > 2030 || numAno < 2021 || numMes < 1 || numMes > 12) {
        return (
            <>
                <ErrorAlert><p>Filtro inválido! Por favor, ajuste a pesquisa.</p></ErrorAlert>
                <div className="center">
                    <Button link='/events'>Mostrar Todos Eventos</Button>
                </div>
            </>
        ) 
    }

    const filteredEvents = getFilteredEvents({year: numAno, month: numMes,});

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert><p>Nenhum evento encontrado!</p></ErrorAlert>
                <div className="center">
                    <Button link ='/events'>Mostrar Todos Eventos</Button>
                </div>
            </>
        )
    }
    
    const date = new Date(numAno, numMes - 1);

    return(
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents} />
        </>
    )
}