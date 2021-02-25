import debug from 'debug'
import http from 'http'
import express from 'express'
import path from 'path'
import logger from 'morgan'

debug('valheim-server-manager:server')

function normalizePort(val): number | string | false {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

const port = normalizePort(process.env.PORT) ?? 3000

const app = express();
app.set('port', port);

type SystemError = Error & {
    code: string,
    syscall: string
}

const server = http.createServer(app);
server.listen(port);
server.on('error', (error: SystemError) => {
    if (error.syscall !== 'listen') {
        throw error;
      }
    
      const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
        default:
          throw error;
      }
});
server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));

import world from './routes/world'
app.use('/world', world)
