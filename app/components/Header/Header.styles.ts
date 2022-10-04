import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IHeaderStyles {
  container: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<IHeaderStyles>({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
});
