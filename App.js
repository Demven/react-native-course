import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';
import Goal from './components/Goal';
import GoalInput from './components/GoalInput';

export default function App () {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function onAddGoal (text) {
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

  function onRemoveGoal (key) {
    setGoals(goals.filter(goal => goal.key !== key));
  }

  return (
    <>
      <StatusBar style='light' />

      <View style={styles.app}>
        <Button
          title='Add new goal'
          color='#5e0acc'
          onPress={() => setModalIsVisible(true)}
        />

        <GoalInput
          visible={modalIsVisible}
          onAddGoal={onAddGoal}
          onClose={() => setModalIsVisible(false)}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            alwaysBounceVertical={false}
            renderItem={({ item }) => (
              <Goal
                id={item.key}
                text={item.text}
                onRemoveGoal={onRemoveGoal}
              />
            )}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
