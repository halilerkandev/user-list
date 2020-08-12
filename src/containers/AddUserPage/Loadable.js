import React from 'react';
import loadable from '../../utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <h1>Loading...</h1>,
});
