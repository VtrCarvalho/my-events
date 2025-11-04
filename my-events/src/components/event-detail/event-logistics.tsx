import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

function EventLogistics(props: any) {
  const { date, address, image, imageAlt } = props;

  const dateFormated = new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressFormated = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{dateFormated}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressFormated}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
