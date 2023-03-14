import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Svg, Circle} from 'react-native-svg';
import {COLORS} from '../../util/colors';

const CircularProgress = props => {
  const {size, strokeWidth} = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - props.progressPercent;

  const styles = styling(size);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={
            props.bgColor
              ? props.bgColor
              : props.progressPercent > 0
              ? '#D8F2EF'
              : '#ECF8F6'
          }
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />

        {/* Progress Circle */}
        <Circle
          stroke={props.pgColor ? props.pgColor : '#103F37'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
        />
      </Svg>
      <View style={styles.detail}>
        <Text style={styles.detailNumber}>150/200</Text>
        <Text style={styles.detailText}>Learned / Total</Text>
      </View>
    </View>
  );
};

const styling = size =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 40,
    },
    detail: {
      position: 'absolute',
      width: size - 110,
      height: size - 110,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      backgroundColor: '#D8F2EF',
      borderRadius: 100,
    },
    detailText: {
      fontSize: 16,
      color: '#8F9DA9',
    },
    detailNumber: {
      color: '#435C70',
      fontWeight: 700,
      fontSize: 24,
    },
  });

export default CircularProgress;
