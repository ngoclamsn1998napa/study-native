import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import CircularProgress from '../../components/CircularProgress';
import HistoryChart from '../../components/HistoryChart';
import {COLORS} from '../../util/colors';

const ChartScreen = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [currentPicker, setCurrentPicker] = useState(1);
  const dataChart = [48, 152, 147, 230, 180, 300, 77, 270, 188, 260, 233, 145];
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={[styles.tab, , currentTab === 1 && styles.tabActive]}>
          <Pressable onPress={() => setCurrentTab(1)}>
            <Text
              style={[
                styles.tabText,
                currentTab === 1 && styles.tabTextActive,
              ]}>
              History
            </Text>
          </Pressable>
        </View>
        <View style={[styles.tab, currentTab === 2 && styles.tabActive]}>
          <Pressable onPress={() => setCurrentTab(2)}>
            <Text
              style={[
                styles.tabText,
                currentTab === 2 && styles.tabTextActive,
              ]}>
              Learned Card
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        {currentTab === 1 && (
          <View style={styles.historyChart}>
            <Text style={styles.h1}>Learned Card History</Text>
            <View style={styles.tabsPicker}>
              <Pressable style={{flex: 1}} onPress={() => setCurrentPicker(1)}>
                <View
                  style={[
                    styles.tabPicker,
                    currentPicker === 1 && styles.tabPickerActive,
                  ]}>
                  <Text
                    style={[
                      styles.tabPickerText,
                      currentPicker === 1 && styles.tabPickerTextActive,
                    ]}>
                    Week
                  </Text>
                </View>
              </Pressable>
              <Pressable style={{flex: 1}} onPress={() => setCurrentPicker(2)}>
                <View
                  style={[
                    styles.tabPicker,
                    currentPicker === 2 && styles.tabPickerActive,
                  ]}>
                  <Text
                    style={[
                      styles.tabPickerText,
                      currentPicker === 2 && styles.tabPickerTextActive,
                    ]}>
                    Month
                  </Text>
                </View>
              </Pressable>
              <Pressable style={{flex: 1}} onPress={() => setCurrentPicker(3)}>
                <View
                  style={[
                    styles.tabPicker,
                    currentPicker === 3 && styles.tabPickerActive,
                  ]}>
                  <Text
                    style={[
                      styles.tabPickerText,
                      currentPicker === 3 && styles.tabPickerTextActive,
                    ]}>
                    Year
                  </Text>
                </View>
              </Pressable>
            </View>
            <HistoryChart dataChart={dataChart} />
          </View>
        )}
        {currentTab === 2 && (
          <View style={styles.learnedChart}>
            <Text style={styles.h1}>Total Learned Card</Text>

            <CircularProgress
              size={270}
              strokeWidth={30}
              progressPercent={10}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.aliceBlue,
    padding: 10,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 30,
    height: 50,
    padding: 8,
  },
  tab: {
    flex: 1,
    textAlign: 'center',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: COLORS.silver,
  },
  tabActive: {
    backgroundColor: COLORS.primary,
  },
  tabTextActive: {
    color: COLORS.white,
  },
  tabsPicker: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 24,
    columnGap: 24,
    justifyContent: 'space-around',
  },
  tabPicker: {
    flex: 1,
    textAlign: 'center',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.orange3,
  },
  tabPickerText: {
    fontWeight: 700,
    color: COLORS.blueBlack,
  },
  tabPickerActive: {
    backgroundColor: COLORS.orange2,
  },
  tabPickerTextActive: {
    color: COLORS.white,
  },
  h1: {
    color: COLORS.blueBlack,
    fontSize: 20,
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 16,
  },
  historyChart: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  learnedChart: {
    marginTop: 50,
  },
});

export default ChartScreen;
