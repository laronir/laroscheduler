import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';

const App = () => {
  const isSigned = useSelector(state => state.auth.signed);
  const Routes = createRouter(isSigned);

  return <Routes />;
};

export default App;
