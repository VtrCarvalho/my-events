import { GetServerSideProps } from "next";
import { getEventById } from '../../utils/util';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import ErrorAlert from '@/components/error-alert/error-alert';
import Button from '@/components/buttons/button';

interface EventDetailPage {
    event?: {
        id: string;
        title: string;
        date: string;
        location: string;
        image: string;
        description: string;
    };
}



export default function DetailsEventPage({ event }: EventDetailPage) {

    if (!event) {
        return (
            <>
                <ErrorAlert>
                    <p>Evento não encontrado!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Mostrar Todos Eventos</Button>
                </div>
            </>
        );
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent><p>{event.description}</p></EventContent>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  const eventId = props.params?.eventId as string;

  if (!eventId) {
    return {
      props: {
        event: null,
      },
    };
  }

  const event = await getEventById(eventId);

  return {
    props: {
      event: event || null,
    },
  };
};
