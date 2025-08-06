import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import path from 'path';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5463;

// ==============================>> Logger Middleware
app.use((req, res, next) => {
  console.log(
    `${chalk.gray(`[${new Date().toLocaleTimeString()}]`)} ${chalk.magenta(req.method)} ${chalk.cyan(req.url)}`
  );
  next();
});

// ==============================>> Static File Serving
app.use(express.static(path.join(__dirname, 'public')));

// ==============================>> Serve index.html on "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ==============================>> API Routes
app.get('/api/hello', (req, res) => res.send('Hello'));
app.get('/api/ping', (req, res) => res.send('pong'));
app.post('/api/login', (req, res) => res.json({ message: 'Logged in' }));

// ==============================>> Start Server
const server = app.listen(PORT, () => {
  process.stdout.write('\x1Bc'); // fully clears terminal scrollback

  console.log(chalk.green('==========================================='));
  console.log(chalk.green('✅  API Server Started Successfully'));
  console.log(chalk.green('===========================================\n'));

  printRoutes(app);

  console.log(
    chalk.white('\n🔗 Server Running At: ') + chalk.blueBright(`http://localhost:${PORT}\n`)
  );
});

// ==============================>> Route Printer
function printRoutes(app: express.Express) {
  const stack = app._router?.stack || [];
  let count = 0;

  console.log(chalk.cyan('📡 Available Routes:\n'));

  for (const layer of stack as any[]) {
    if (layer.route && layer.route.path) {
      count++;
      const methods = Object.keys(layer.route.methods)
        .map((m) => m.toUpperCase())
        .join(', ');
      console.log(
        `${chalk.gray('[AppRouter]')} ${chalk.yellow(methods.padEnd(6))} ${chalk.green(layer.route.path)}`
      );
    }
  }

  if (count === 0) {
    console.log(chalk.red('🚫 No routes registered.\n'));
  }
}

// ==============================>> Graceful Shutdown
process.on('SIGINT', () => {
  console.log(chalk.red('\n🛑 Shutting down server...'));
  server.close(() => {
    console.log(chalk.gray('🔒 Server closed.\n'));
    process.exit(0);
  });
});
