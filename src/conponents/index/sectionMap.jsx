import Section from "../sections/section";

const SectionMap = () => {
  return (
    <Section
      secondElement={
        <>
          <h3>Место встречи</h3>
          <p>
            Здесь рождаются легенды и воплощаются мечты! Наш магазин – это не
            просто место продажи товаров для косплея, это портал в мир фэндома,
            где каждый может найти вдохновение и все необходимое для создания
            своего уникального образа. От высококачественных тканей и красок до
            эксклюзивных аксессуаров и париков – у нас есть все, чтобы ваш
            косплей был безупречным.
          </p>
        </>
      }
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.14485255523!2d83.76154807641366!3d53.34066317514906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dda4419cd241ff%3A0xfe801be2576c6446!2z0YPQuy4g0JrRgNGD0L_RgdC60L7QuSwgMTAzLCDQkdCw0YDQvdCw0YPQuywg0JDQu9GC0LDQudGB0LrQuNC5INC60YDQsNC5LCA2NTYwMzE!5e0!3m2!1sru!2sru!4v1736533063861!5m2!1sru!2sru"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Section>
  );
};
export default SectionMap;
