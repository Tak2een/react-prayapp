/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import JointPrayer from './small_community/view/joint_prayer';
import MakeRoom from './small_community/view/make_room';
AppRegistry.registerComponent(appName, () => MakeRoom);
