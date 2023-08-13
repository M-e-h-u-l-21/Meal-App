import { Image, Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function HeaderIcon({ icon, color, onPress }) {
  return (
    <Pressable  style={({ pressed }) => (pressed ? styles.pressed : null)}>
      <Ionicons name={icon} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
}

export default HeaderIcon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
