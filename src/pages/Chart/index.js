import moment from 'moment/moment';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {COLORS} from '../../util/colors';
import LearnedCardHistory from './LearnedCardHistory';
import TotalLearnedCard from './TotalLearnedCard';

const ChartScreen = () => {
  const [currentTab, setCurrentTab] = useState(1);

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
        {currentTab === 1 && <LearnedCardHistory />}
        {currentTab === 2 && <TotalLearnedCard />}
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
});

export default ChartScreen;
