import { Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import PrivateRoute from './utils/PrivateRoute';
import './styles/index.scss';
import DarkThemeProvider from './utils/DarkThemeProvider';

const App = () => {
  return (
    <DarkThemeProvider>
      <div className='main-body'>
        <Switch>
          {routes.map((route, index) => (
            <PrivateRoute key={index} exact {...route} />
          ))}
        </Switch>
      </div>
    </DarkThemeProvider>
  );
};

export default App;
