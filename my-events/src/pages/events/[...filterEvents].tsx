import Head from "next/head";
import { GetServerSideProps } from "next";
import { getFilteredEvents } from "../../utils/util";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/buttons/button";
import ErrorAlert from "@/components/error-alert/error-alert";

interface FilteredEventsPage {
  filteredEvents: any[];
  date: { year: number; month: number }
  hasError?: boolean;
}

export default function FilteredEventsPage({ filteredEvents, date, hasError }: FilteredEventsPage) {

  if (hasError) {
    return (
      <>
        <ErrorAlert><p>Filtro inválido! Por favor, ajuste a pesquisa.</p></ErrorAlert>
        <div className="center">
          <Button link='/events'>Mostrar Todos Eventos</Button>
        </div>
      </>
    )
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert><p>Nenhum evento encontrado!</p></ErrorAlert>
        <div className="center">
          <Button link='/events'>Mostrar Todos Eventos</Button>
        </div>
      </>
    )
  }

  const eventDate = new Date(date.year, date.month - 1);

  return (
    <>
      <Head>
        <title>Eventos Filtrados</title>
        <meta name='description' content={`Todos os eventos de ${date.month}/${date.year}.`} />
      </Head>
      <ResultsTitle date={eventDate} />
      <EventList items={filteredEvents} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filterData = context.params?.filterEvents as string[] | undefined;

  if (!filterData || filterData.length < 2) {
    return {
      props: {
        hasError: true,
        filteredEvents: [],
        date: { year: 0, month: 0 },
      },
    };
  }

  const numAno = +filterData[0];
  const numMes = +filterData[1];

  if (
    isNaN(numAno) ||
    isNaN(numMes) ||
    numAno > 2030 ||
    numAno < 2021 ||
    numMes < 1 ||
    numMes > 12
  ) {
    return {
      props: {
        hasError: true,
        filteredEvents: [],
        date: { year: numAno, month: numMes },
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numAno,
    month: numMes,
  });

  return {
    props: {
      filteredEvents,
      date: { year: numAno, month: numMes },
    },
  };
};
