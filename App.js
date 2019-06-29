import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUp from './Components/signUp';
import Home from './Components/home';
import Login from './Components/login';

export default createAppContainer(createStackNavigator({
  Register: SignUp,
  Splash: Home,
  SignIn: Login,
},{

}));