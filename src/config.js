import { BrowserRouter } from 'react-router-dom';

// Reducers
import session from 'react-app-engine/src/reducers/session';

const { DEBUG } = process.env;

export default {
  debug: DEBUG,
  reducers: {
    session
  },
  router: BrowserRouter
  // sagas: [],
  // socketEvents: [],
  // socketIO: socketIoClient,
};
