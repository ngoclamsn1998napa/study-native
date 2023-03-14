import React from 'react';
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native';
import {COLORS} from '../../util/colors';
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import ChartClockSVG from '../../assets/icons/chart_clock.svg';
import NoDataSVG from '../../assets/icons/no_data_chart.svg';
import PrevSVG from '../../assets/icons/ic_chart_prev.svg';
import NextSVG from '../../assets/icons/ic_chart_next.svg';

const BarChart = () => {
  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: [], // optional
    data: [0.2],
    colors: ['#103F37'],
  };
  return (
    <View>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={270}
        strokeWidth={20}
        hasLegend={true}
        withCustomBarColorFromData={true}
        radius={90}
        chartConfig={{
          backgroundGradientFromOpacity: 0.5,
          backgroundGradientToOpacity: 1,
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          backgroundColor: '#FFFFFF',
          fillShadowGradientOpacity: 1,
          fillShadowGradient: '#103F37',
          propsForLabels: {fill: '#103F37'},
          decimalPlaces: 0,
          color: (opacity = 1, _index) => `rgba(0,0,0,${opacity})`,
        }}
        // style={{marginVertical: 8, borderRadius: 10}}
      />
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
});

export default BarChart;
