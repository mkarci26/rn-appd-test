import 'react-native';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import NativeSplash from 'components/pages/NativeSplash';
const props: any = {
  some: 'some'
}

describe('NativeSplash test suite', () => {
  
  it('Page to be loaded', async () => {
    const { toJSON, getByTestId } = render(
      <NativeSplash {...props} />
    );
    await waitFor(() => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});