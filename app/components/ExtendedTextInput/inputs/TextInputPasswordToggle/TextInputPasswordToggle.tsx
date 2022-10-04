import React, { useCallback, useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';

import { ITextInputPasswordToggleProps } from './TextInputPasswordToggle.props';
import { styles } from './TextInputPasswordToggle.styles';

export const TextInputPasswordToggle: React.FC<
  ITextInputPasswordToggleProps
> = props => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onEyeIconPress = useCallback(() => {
    setIsPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={isPasswordHidden}
        style={[props.style, styles.input]}
      />
      <TouchableOpacity onPress={onEyeIconPress} style={styles.iconContainer}>
        {/* This should be an eye icon */}
        <View style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
