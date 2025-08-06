import { sequelize } from '../config/sequelize.config';
import { seedUsers } from './seeds/user.seed';
import { seedStudents } from './seeds/student.seed';
import { seedClasses } from './seeds/class.seed';
// import other seeds as needed

(async () => {
  try {
    // 🔄 Clear all data (truncate all tables)
    await sequelize.truncate({ cascade: true });
    console.log('🧹 All tables truncated.');

    // 🌱 Seed each table
    await seedUsers();
    await seedStudents();
    await seedClasses();
    // add other seeders...

    console.log('✅ Seeding completed.');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    process.exit(0);
  }
})();
