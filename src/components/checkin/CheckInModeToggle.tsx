import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { CheckInMode } from './types';

type CheckInModeToggleProps = {
  value: CheckInMode;
  onChange: (mode: CheckInMode) => void;
};

export const CheckInModeToggle = ({ value, onChange }: CheckInModeToggleProps) => {
  return (
    <View style={styles.wrap}>
      <Pressable
        style={[styles.item, value === 'qr' && styles.itemActive]}
        onPress={() => onChange('qr')}
      >
        <Text style={[styles.label, value === 'qr' && styles.labelActive]}>QR Scan</Text>
      </Pressable>
      <Pressable
        style={[styles.item, value === 'manual' && styles.itemActive]}
        onPress={() => onChange('manual')}
      >
        <Text style={[styles.label, value === 'manual' && styles.labelActive]}>Manual List</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#2E1A49',
    borderRadius: 999,
    padding: 4,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 999,
  },
  itemActive: {
    backgroundColor: colors.primary[500],
  },
  label: {
    color: colors.textSecondary,
    fontWeight: '700',
    fontSize: 14,
  },
  labelActive: {
    color: colors.primary[900],
  },
});
