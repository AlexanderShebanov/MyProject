import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components';
import { generalStyles } from '../../utils/styles';
import { IHomeScreenProps } from './HomeScreen.props';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <Header title="Home" />
    </SafeAreaView>
  );
};
