import { sequelize } from '../config/sequelize.config';
import { seedLocations } from './seeds/location';
import { seedUsers } from './seeds/user.seed';

(async () => {
  await sequelize.sync();
  await seedUsers();
  await seedLocations(); // Call individual seed functions here
  console.log('🌱 Seeding complete.');
  process.exit(0);
})();
