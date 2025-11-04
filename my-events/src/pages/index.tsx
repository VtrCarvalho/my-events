import Head from "next/head";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from '../components/events/event-list';


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>My Events | Página Inicial</title>
      </Head>
      <EventList items={featuredEvents}/>
    </>
  );
}
