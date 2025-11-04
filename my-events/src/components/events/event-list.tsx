import EventItem from './event-item'
import styles from './event-list.module.css'

export default function EventList(props: any) {
    const {items} = props;
    return (
        <ul className={styles.list}>
            {items.map((event: any) => (
            <EventItem 
                key={event.id}
                id={event.id}
                title={event.title} 
                location={event.location} 
                date={event.date} 
                image={event.image} 
            />))}
        </ul>
    );
}