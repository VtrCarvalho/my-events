import Head from "next/head";
import { getFeaturedEvents } from "../utils/util";
import EventList from '../components/events/event-list';


export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>My Events | Página Inicial</title>
      </Head>
      <EventList items={props.events}/>
    </>
  );
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    }
  }
}
