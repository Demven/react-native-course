import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App () {
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);

  function onPress () {
    if (text) {
      setGoals([
        ...goals,
        {
          key: Math.random().toString(),
          text,
        },
      ]);
    }
  }

  return (
    <View style={styles.app}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={setText}
          value={text}
        />

        <Button
          title='Add goal'
          onPress={onPress}
        />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          renderItem={({ item }) => (
            <View style={styles.goal}>
              <Text style={styles.goalText}>
                {item.text}
              </Text>
            </View>
          )}
          keyExtractor={item => item.key}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    width: '70%',
    padding: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  goalsContainer: {
    flex: 5,
  },
  goal: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});
