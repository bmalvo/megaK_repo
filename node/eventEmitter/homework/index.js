const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
  .on('open', () => console.log('Otwarto restaurację'))
  .on('close', () => console.log('Zamknięto restaurację.'))
  .on('reserveTable', (reserve) => {
    console.log(`Dostepnych stolików: ${tablesCount - reserve}.`);
    tablesCount -= reserve;
  })
  .on('cancelTableReservation', (canceled) => {
    console.log(`Dostepnych stolików: ${tablesCount + canceled}.`);
    tablesCount += canceled;
  })
  .on('takeTableWithoutReservation', (reserve) => {
    console.log(`Dostepnych stolików: ${tablesCount - reserve}.`);
    tablesCount -= reserve;
  })
  .on('tableBroken', (broken) => {
    console.log(`Dostepnych stolików: ${tablesCount - broken}.`);
    tablesCount -= broken;
  })
  .on('cleanupTable', (cleaned) => {
    console.log(`Dostepnych stolików: ${tablesCount + cleaned}.`);
    tablesCount += cleaned;
  });

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."
