import { useState } from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';

export default function GoalInput ({ visible, onAddGoal, onClose }) {
  const [text, setText] = useState('');

  function onPress () {
    if (text) {
      onAddGoal(text);
      setText('');
      onClose();
    }
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.goalInput}>
        <Image
          style={styles.image}
          source={require('../assets/goal.png')}
        />

        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={setText}
          value={text}
        />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={onClose}
              color='#f31282'
            />
          </View>

          <View style={styles.button}>
            <Button
              title='Add goal'
              onPress={onPress}
              color='#b180f0'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  goalInput: {
    flex: 1,
    padding: 16,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
  },
  buttons: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});
