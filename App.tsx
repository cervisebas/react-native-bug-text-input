import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <TextInput
        multiline={true}
        numberOfLines={6}
        style={styles.input}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
  },
  input: {
    color: 'black',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default App;
