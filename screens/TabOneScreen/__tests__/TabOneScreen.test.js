import React from 'react';
import { render } from '@testing-library/react-native';

import TabOneScreen from './TabOneScreen.tsx';

describe('<TabOneScreen />', () => {
  
  test('it works', () => {
    expect(true).toBeTruthy();
  });

it('renders correctly', async () => {
   
    const { getByText, getByTestId, container} = render(<TabOneScreen />);

    const element = await getByText('Tab One');
    const separator = await getByTestId('separator')
    const editScreenInfo = await getByText('Open up the code for this screen:')

    expect(element).toBeTruthy();
    expect(separator).toBeTruthy();

    expect(getByText('Open up the code for this screen:').props.children).toBe("Open up the code for this screen:")
    });


});

