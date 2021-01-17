import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text, FlatList} from 'react-native';

import Header from './components/header';
import Footer from './components/footer';
import ItemList from './components/itemsList';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [addDataToList, setAddDataToList] = useState([])

  const handleDataChange = (value) => {
    if ( addDataToList.length > 0 ) {
      setAddDataToList([...addDataToList, {task: value, id: addDataToList.length + 1, isDone: false }])
    }
    else {
      setAddDataToList([{task: value, id: addDataToList.length + 1, isDone: false }])
    }
  };

  const handleDataDelete = (itemId) => {
    setAddDataToList( addDataToList.filter(item => item.id != itemId) )
  }

  const handleFinish = (itemFull) => {

    const arr = [...addDataToList]
    
    const indexKey = addDataToList.findIndex(item => item.id == itemFull.id)
    arr[indexKey] = {...itemFull, isDone: !itemFull.isDone}
    setAddDataToList(arr)

  }

  return (
    <View style={styles.container}>
      <Header dataCount={addDataToList.length}/>
      <View style={styles.listCntainer}>
        <FlatList
          testID="list"
          data={addDataToList}
          renderItem={({item}) => <ItemList item={item} handleDel={(val) => handleDataDelete(val)} finishTask={(val) => handleFinish(val)} isDone={item.isDone} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Footer dataChange={(value) => handleDataChange(value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'baseline',
    backgroundColor: '#efecfc',
  },
  listCntainer: {
    flex: 5,
    padding: 20,
  },
});

export default App;
