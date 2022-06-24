import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    marginRight: 4,
    paddingHorizontal:10,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    color: theme.colors.heading,
  },
});