import React, {useState} from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';


function ItemsList({item, handleDel, isDone, finishTask}) {
  const [itemDisabled, setItemDisabled] = useState(false);

  const handleOnPressItem = () => {
    setItemDisabled(!itemDisabled);
    finishTask(item)
  };

  const handleDelete = (itemId) => {
    handleDel(itemId)
  };
  
  const backgroundColor = isDone ? '#2B89E3' : '#21E9FD';
  const color = isDone ? '#ffffff' : '#000';
  const textDecorationLine = isDone ? 'line-through' : 'none';

  return (
    <TouchableOpacity
      onPress={() => handleOnPressItem(item)}
      onLongPress={() => handleDelete(item.id)}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color, textDecorationLine}]}>
        {item.task}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 4,
    width: Dimensions.get('window').width,
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  listItem: {
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default ItemsList;
