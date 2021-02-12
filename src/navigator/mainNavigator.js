import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49204179Navigator from '../features/BlankScreen49204179/navigator';
import Maps204161Navigator from '../features/Maps204161/navigator';
import Additem204160Navigator from '../features/Additem204160/navigator';
import Maps204156Navigator from '../features/Maps204156/navigator';
import UserProfile204152Navigator from '../features/UserProfile204152/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49204179: { screen: BlankScreen49204179Navigator },
Maps204161: { screen: Maps204161Navigator },
Additem204160: { screen: Additem204160Navigator },
Maps204156: { screen: Maps204156Navigator },
UserProfile204152: { screen: UserProfile204152Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
