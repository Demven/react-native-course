import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

export default function Goal ({ id, text, onRemoveGoal }) {
  return (
    <View style={styles.goal}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => onRemoveGoal(id)}
      >
        <Text style={styles.goalText}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressed: {

  },
});
