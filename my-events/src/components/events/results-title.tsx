import Button from '../buttons/button';
import styles from './results-title.module.css';

export default function ResultsTitle(props: any) {
  const { date } = props;

  const dateFormated = new Date(date).toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Eventos em {dateFormated}</h1>
      <Button link='/events'>Mostrar Todos os Eventos</Button>
    </section>
  );
}

