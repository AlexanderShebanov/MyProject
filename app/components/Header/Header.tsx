import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExtendedText } from '../ExtendedText';
import { IHeaderProps } from './Header.props';
import { styles } from './Header.styles';

export const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ExtendedText preset="fs16">{title}</ExtendedText>
    </SafeAreaView>
  );
};
