import styles from './event-item.module.css'
import Button from '../buttons/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Image from 'next/image';

export default function EventItem(props: any) {
    const {title, image, date, location, id} = props;

    const dateFormated = new Date (date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const addressFormated = location.replace(', ', '\n');

    const visualizeLink = `/events/${id}`;
    
    return (
        <li className={styles.item}>
            <Image src={'/' + image} alt={title} width={340} height={160} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.date}>
                    <DateIcon/>
                    <time>{dateFormated}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon/>
                    <address>{addressFormated}</address>
                </div>
                <div className={styles.actions}>
                    <Button link={visualizeLink}>
                        <span>Visualizar Evento</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
}