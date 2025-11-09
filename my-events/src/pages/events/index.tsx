import { GetServerSideProps } from "next";
import { getAllEvents } from "../../utils/util";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/router";

interface EventsPageProps {
  events: any[];
}

export default function EventsPage({ events }: EventsPageProps) {
  const router = useRouter();

  function findEventsHandler(ano: string, mes: string) {
    const caminho = `/events/${ano}/${mes}`;
    router.push(caminho);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

// 🔽 Buscar os eventos no servidor antes de renderizar
export const getServerSideProps: GetServerSideProps = async () => {
  const events = await getAllEvents();

  return {
    props: { events },
  };
};