import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

type CheckInStatsOverviewProps = {
  checkedIn: number;
  capacity: number;
};

export const CheckInStatsOverview = ({ checkedIn, capacity }: CheckInStatsOverviewProps) => {
  const pending = Math.max(capacity - checkedIn, 0);
  const checkedInPct = capacity > 0 ? checkedIn / capacity : 0;
  const pendingPct = capacity > 0 ? pending / capacity : 0;

  return (
    <View style={styles.row}>
      <View style={styles.card}>
        <Text style={styles.kicker}>Checked In</Text>
        <View style={styles.metricRow}>
          <Text style={styles.metricPrimary}>{checkedIn}</Text>
          <Text style={styles.metricSecondary}>/ {capacity}</Text>
        </View>
        <View style={styles.track}>
          <View style={[styles.fillChecked, { width: `${Math.min(checkedInPct * 100, 100)}%` }]} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.kicker}>Pending</Text>
        <View style={styles.metricRow}>
          <Text style={styles.metricPending}>{pending}</Text>
        </View>
        <View style={styles.track}>
          <View style={[styles.fillPending, { width: `${Math.min(pendingPct * 100, 100)}%` }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#33204F',
    borderRadius: 14,
    padding: 14,
  },
  kicker: {
    color: colors.textSecondary,
    textTransform: 'uppercase',
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: '600',
    marginBottom: 6,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginBottom: 10,
    minHeight: 30,
  },
  metricPrimary: {
    color: colors.primary[500],
    fontSize: 28,
    fontWeight: '800',
  },
  metricPending: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  metricSecondary: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  track: {
    height: 4,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: colors.neutral[500],
  },
  fillChecked: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colors.primary[500],
  },
  fillPending: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colors.textSecondary,
    opacity: 0.4,
  },
});
