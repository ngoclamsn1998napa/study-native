import React from 'react';
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native';
import {COLORS} from '../../util/colors';
import {LineChart} from 'react-native-chart-kit';
import ChartClockSVG from '../../assets/icons/chart_clock.svg';
import NoDataSVG from '../../assets/icons/no_data_chart.svg';
import PrevSVG from '../../assets/icons/ic_chart_prev.svg';
import NextSVG from '../../assets/icons/ic_chart_next.svg';

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
        data: [[]],
        // data: [48, 152, 147, 230, 180, 300, 77, 270, 188, 260, 233, 145],
        strokeWidth: 2,
        color: () => 'transparent',
        // color: () => '#103F37',
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
      <View>
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
          fromNumber={300}
        />
        {/* <Pressable style={styles.refresh}>
          <ChartClockSVG />
        </Pressable> */}
        <View style={styles.noData}>
          <NoDataSVG />
          <Text style={styles.noDataText}>No data</Text>
        </View>
        <View style={styles.year}>
          <PrevSVG />
          <Text style={styles.yearText}>2020</Text>
          <NextSVG />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refresh: {
    position: 'absolute',
    bottom: 65,
    right: 25,
  },
  noData: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3,
  },
  year: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 60,
    flexDirection: 'row',
  },
  yearText: {
    fontWeight: 700,
    fontSize: 16,
    color: '#435C70',
  },
  noDataText: {
    color: '#103F37',
    fontSize: 20,
    fontWeight: 700,
  },
  text: {
    fontSize: 24,
  },
});

export default ChartScreen;
