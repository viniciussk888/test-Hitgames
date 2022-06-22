import { StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal:10,
    borderRadius:18,
    width: "100%",
    marginBottom: '10%'
  },
  table: {
    backgroundColor: theme.colors.highlight,
  },
  title:{
    fontFamily:theme.fonts.bold,
    color: theme.colors.heading,
    marginRight:5,
    fontSize:18
  }
});
