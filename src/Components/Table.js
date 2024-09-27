import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';

const Table = ({data}) => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Day</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
        <DataTable.Title>In</DataTable.Title>
        <DataTable.Title>Out</DataTable.Title>
        <DataTable.Title>Hours</DataTable.Title>
      </DataTable.Header>
      {data.map(record => {
        return (
          <DataTable.Row>
            <DataTable.Cell>{record.Date}</DataTable.Cell>
            <DataTable.Cell>{record.Day}</DataTable.Cell>
            <DataTable.Cell>{record.Status}</DataTable.Cell>
            <DataTable.Cell>{record.InTime}</DataTable.Cell>
            <DataTable.Cell>{record.OutTime}</DataTable.Cell>
            <DataTable.Cell>{record.Hours}</DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
