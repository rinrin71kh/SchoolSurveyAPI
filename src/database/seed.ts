import { sequelize } from '../config/sequelize.config';
import { seedUsers } from './seeds/user.seed';

(async () => {
  await sequelize.sync();
  await seedUsers();

  console.log('🌱 Seeding complete.');
  process.exit(0);
})();
