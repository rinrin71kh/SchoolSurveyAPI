import { sequelize } from '../config/sequelize.config';
import { seedLocations } from './seeds/location';

(async () => {
  await sequelize.sync();
  await seedLocations(); // Call individual seed functions here
  console.log('🌱 Seeding complete.');
  process.exit(0);
})();
