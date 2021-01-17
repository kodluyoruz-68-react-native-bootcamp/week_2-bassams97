import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function Footer({dataChange, addDataToList}) {
  const [formValue, setFormValue] = useState("");

  const handleChangeText = (value) => {
    setFormValue(value)
  }

  const handleOnPressButton = () => {
    if(formValue && formValue.length > 0) {
      dataChange(formValue)
      setFormValue('')
    } 
  };


  return (
    <View style={styles.footer}>
      <View style={styles.footerInnerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
          testID="input"
            style={styles.textInput}
            /* onChange={() => handleTextChange()} */
            value={formValue}
            onChangeText={(val) => handleChangeText(val)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          testID="button"
            style={styles.button}
            onPress={() => handleOnPressButton()}>
            <Text style={styles.buttonText}>Add to list</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: Dimensions.get('window').width,
    padding: 20,
    backgroundColor: 'gray',
    height: Dimensions.get('window').height / 5,
  },
  footerInnerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textInput: {
    borderRadius: 4,
    backgroundColor: 'white',
    width: '100%',
  },
  button: {
    color: 'black',
    backgroundColor: '#21E9FD',
    borderRadius: 4,
    padding: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default Footer;
