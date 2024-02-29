import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

class CircularProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0, // initial progress
    };
  }

  componentDidMount() {
    // Simulate progress update
    this.progressInterval = setInterval(() => {
      this.setState(prevState => ({
        progress: (prevState.progress + 1) % 101, // update progress from 0 to 100
      }));
    }, 1000); // update progress every second
  }

  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.progressInterval);
  }

  render() {
    const { size, progressColor, bgColor } = this.props;
    const radius = size / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeWidth = 1; // Set the stroke width to 1 pixel

    const progressOffset = circumference - (this.state.progress / 100) * circumference;

    return (
      <View>
        <Svg width={size} height={size}>
          {/* Background Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth / 2} // Adjust the radius to account for the stroke width
            stroke={bgColor || '#e4e4e4'}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth / 2} // Adjust the radius to account for the stroke width
            stroke={progressColor || '#00cc00'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            fill="none"
            transform={`rotate(-90,${size / 2},${size / 2})`}// Rotate the progress circle by -90 degrees
          />
        </Svg>
        <Text style={{ textAlign: 'center' }}>{`${this.state.progress}%`}</Text>
      </View>
    );
  }
}

export default CircularProgress;
