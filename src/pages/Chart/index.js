import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {COLORS} from '../../util/colors';
import {LineChart} from 'react-native-chart-kit';
import {LinearGradient} from 'react-native-linear-gradient';

const ChartScreen = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [48, 152, 147, 230, 180, 300, 77, 270, 188, 260, 233, 145],
        strokeWidth: 2,
        color: () => '#103F37',
      },
    ],
  };
  const chartConfiguration = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 1,
    fillShadowGradientOpacity: 1,
    fillShadowGradient: '#103F37',
    decimalPlaces: 0,
    propsForBackgroundLines: {
      strokeDasharray: '', // solid background lines with no dashes
      stroke: '#E8F0F7',
      strokeWidth: 1,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#FFFFFF',
    },
    color: (opacity = 1) => `#1C1F24`,
    propsForHorizontalLabels: {
      fontSize: 12,
      fontWeight: 'bold',
      fill: '#103F37',
    },
    propsForVerticalLabels: {
      fontSize: 10,
      fill: '#8F9DA9',
      fontWeight: 400,
    },
    yAxisInterval: 50,
    yAxisSuffix: '',
    useShadowColorFromDataset: false,
  };
  return (
    <View style={styles.container}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={355}
        bezier={false}
        withVerticalLines={false}
        chartConfig={chartConfiguration}
        xLabelsOffset={10}
        yLabelsOffset={20}
        segments={6}
        fromZero={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default ChartScreen;
