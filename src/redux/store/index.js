import {init} from '@rematch/core';
import logger from 'redux-logger';

import * as models from '../models';

export default init({
  models,
  plugins: [],
  redux: {
    middlewares: [logger],
  },
  devtoolOptions: {},
  rootReducers: {RESET_APP: () => undefined},
});
