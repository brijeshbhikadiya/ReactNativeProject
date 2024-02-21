// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Calendar = () => {
//   const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
//   const daysInMonth = [
//     null,
//     null,
//     27,
//     28,
//     29,
//     30,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
//     19,
//     20,
//     21,
//     22,
//     23,
//     24,
//     25,
//     26,
//     27,
//     28,
//     29,
//     30,
//     31,
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerRow}>
//         {daysOfWeek.map((day) => (
//           <Text key={day} style={styles.dayText}>
//             {day}
//           </Text>
//         ))}
//       </View>
//       <View style={styles.daysRow}>
//         {daysInMonth.map((day, index) => {
//           const isCurrentDay = index === new Date().getDate() - 1;
//           const isHighlighted = day && day > 26 && day < 32;
//           const dayTextStyle = {
//             ...styles.dayText,
//             backgroundColor: isHighlighted ? 'yellow' : 'white',
//           };
//           return (
//             <Text key={index} style={[dayTextStyle, isCurrentDay && styles.currentDay]}>
//               {day}
//             </Text>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   dayText: {
//     width: 36,
//     height: 36,
//     lineHeight: 36,
//     textAlign: 'center',
//     borderRadius: 18,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     fontSize: 16,
//   },
//   currentDay: {
//     backgroundColor: '#007AFF',
//     color: 'white',
//   },
//   daysRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
// });

// export default Calendar;
// // import { Text, View } from 'react-native'
// // import React, { Component } from 'react'

// // export default class demo extends Component {
// //   render() {
// //     return (
// //       <View>
// //         <Text>demo</Text>
// //       </View>
// //     )
// //   }
// // }

import * as React from 'react';
import * as RN from 'react-native';

class App extends React.Component {
  months = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", 
    "November", "December"
  ];

  _onPress = (item) => {    
    this.setState(() => {
      if (!item.match && item != -1) {
        this.state.activeDate.setDate(item);
        return this.state;
      }
    });
  };

  changeMonth = (n) => {
    this.setState(() => {
      this.state.activeDate.setMonth(
        this.state.activeDate.getMonth() + n
      )
      return this.state;
    });
}

  weekDays = [
      "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
  ];

  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  state = {
    activeDate: new Date()
  }

  generateMatrix() {
    var matrix = [];
    // Create header
    matrix[0] = this.weekDays;

    var year = this.state.activeDate.getFullYear();
    var month = this.state.activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();

    var maxDays = this.nDays[month];
    if (month == 1) { // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }

    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
  }


  render() {
    var matrix = this.generateMatrix();

    var rows = [];
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        return (
          <RN.Text
            style={{
              flex: 1,
              height: 18,
              textAlign: 'center',
              // Highlight header
              backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
              // Highlight Sundays
              color: colIndex == 0 ? '#a00' : '#000',
              // Highlight current date
              fontWeight: item == this.state.activeDate.getDate() 
                                  ? 'bold': ''
            }}
            onPress={() => this._onPress(item)}>
            {item != -1 ? item : ''}
          </RN.Text>
        );
      });

      return (
        <RN.View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {rowItems}
        </RN.View>
      );
    });    
    
    return (
      <RN.View> 
        <RN.Text style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center'
        }}>
          {this.months[this.state.activeDate.getMonth()]} &nbsp;
          {this.state.activeDate.getFullYear()}
        </RN.Text>
        { rows }

        <RN.Button title="Previous" 
        onPress={() => this.changeMonth(-1)}/>
        
        <RN.Button title="Next" 
        onPress={() => this.changeMonth(+1)}/>
      </RN.View>
    );
  }
}

// Export for now to get rid of error and see preview:
export default App