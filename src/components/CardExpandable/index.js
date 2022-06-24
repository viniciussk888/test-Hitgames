import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { theme } from "../../global/styles/theme";

export const SECardExpandable = ({
  radius,
  title,
  titleColor = "#000",
  fontSize,
  subtitle,
  uriSvg,
  expanded = false,
  children,
  style = [],
  footerText,
  footerTextColor = "#000",
}) => {
  const [cardExpanded, setCardExpanded] = useState(expanded);

  const onClickToExpandable = (clickExpanded) => {
    setCardExpanded(clickExpanded);
  };

  return (
    <View style={[styles.container, { borderRadius: radius }]}>
      <TouchableOpacity
        onPress={() => onClickToExpandable(!cardExpanded)}
        activeOpacity={1}
        style={{ padding: 6 }}
      >
        {title && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
             <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: fontSize ? fontSize : 14,
                color: titleColor,
                marginRight:5,
                fontFamily: theme.fonts.bold,
              }}
            >
              {title}
            </Text>
            <SvgUri width={20} height={20} uri={uriSvg} />
            </View>
            <View style={{ marginRight: 4 }}>
              <View>
                <MaterialIcons
                  name={cardExpanded ? "arrow-circle-up" : "arrow-circle-down"}
                  size={26}
                  color="#000"
                />
              </View>
            </View>
          </View>
        )}
        {subtitle && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#000",
                fontFamily: theme.fonts.regular,
              }}
            >
              {subtitle}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      {cardExpanded && (
        <View style={[{ marginTop: 16 }, style]}>{children}</View>
      )}
      {footerText && !cardExpanded ? (
        <View style={[{ marginTop: 4, marginBottom: 6, marginLeft: 6 }]}>
          <Text style={{ color: footerTextColor, fontSize: 11 }}>
            {footerText}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
