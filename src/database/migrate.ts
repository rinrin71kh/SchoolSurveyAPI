import { sequelize } from '../config/sequelize.config';
import readlineSync from 'readline-sync';
import chalk from 'chalk';

(async () => {
  const tables = await sequelize.getQueryInterface().showAllTables();
  if (tables.length > 0) {
    const confirm = readlineSync.keyInYNStrict(
      chalk.yellow('Tables already exist. Drop and recreate all?')
    );
    if (!confirm) {
      console.log(chalk.cyan('Migration aborted.'));
      process.exit(0);
    }
  }

  await sequelize.sync({ force: true });
  console.log(chalk.green('✅ Database synced from models.'));
  process.exit(0);
})();
