import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header({dataCount}) {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TODO</Text>
      </View>

      <View>
        <Text style={styles.itemsNumber}>{dataCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#2B89E3',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemsNumber: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold',
    paddingRight: 12,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#fff"
  },
});

export default Header;
