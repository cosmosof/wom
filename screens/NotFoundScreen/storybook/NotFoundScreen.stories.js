import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { styles } from '../../../constants/globalStyles';
import NotFoundScreen from '../NotFoundScreen';



storiesOf('NotFoundScreen', module)
  .addDecorator(story => <View  style={styles.TaskBox}>{story()}</View>)
  .add('default', () => <NotFoundScreen />)
