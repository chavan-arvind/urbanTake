import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Table = ({ table }) => {
  return (
    <View style={styles.table}>
      <Text style={styles.tableNumber}>{table.number}</Text>
      <Text style={styles.tableStatus}>{table.status}</Text>
    </View>
  );
};

const Tables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    // Get the tables from the server
    fetch('https://example.com/api/tables')
      .then(response => response.json())
      .then(data => setTables(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tables}
        renderItem={({ item }) => <Table table={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  table: {
    width: '50%',
    height: 100,
    backgroundColor: '#ccc',
    margin: 10,
  },
  tableNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tableStatus: {
    fontSize: 16,
  },
});

export default Tables;
