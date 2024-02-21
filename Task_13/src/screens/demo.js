import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Calendar = () => {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const daysInMonth = [
    null,
    null,
    27,
    28,
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {daysOfWeek.map((day) => (
          <Text key={day} style={styles.dayText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.daysRow}>
        {daysInMonth.map((day, index) => {
          const isCurrentDay = index === new Date().getDate() - 1;
          const isHighlighted = day && day > 26 && day < 32;
          const dayTextStyle = {
            ...styles.dayText,
            backgroundColor: isHighlighted ? 'yellow' : 'white',
          };
          return (
            <Text key={index} style={[dayTextStyle, isCurrentDay && styles.currentDay]}>
              {day}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayText: {
    width: 36,
    height: 36,
    lineHeight: 36,
    textAlign: 'center',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  currentDay: {
    backgroundColor: '#007AFF',
    color: 'white',
  },
  daysRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Calendar;
// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export default class demo extends Component {
//   render() {
//     return (
//       <View>
//         <Text>demo</Text>
//       </View>
//     )
//   }
// }