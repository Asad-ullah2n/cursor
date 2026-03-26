import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { Guest } from './types';

type GuestListItemProps = {
  item: Guest;
  onCheckIn?: (id: string) => void;
};

export const GuestListItem = ({ item, onCheckIn }: GuestListItemProps) => {
  return (
    <View style={[styles.row, item.checkedIn ? styles.rowChecked : styles.rowPending]}>
      <View style={styles.left}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name.charAt(0).toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.ticket}>{item.ticketType}</Text>
        </View>
      </View>

      {item.checkedIn ? (
        <View style={styles.verifiedWrap}>
          <Text style={styles.verifiedIcon}>✓</Text>
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
      ) : (
        <Pressable style={({ pressed }) => [styles.checkInButton, pressed && styles.checkInButtonPressed]} onPress={() => onCheckIn?.(item.id)}>
          <Text style={styles.checkInText}>CHECK-IN</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  rowPending: {
    backgroundColor: '#33204F',
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
  },
  rowChecked: {
    backgroundColor: colors.surface,
    opacity: 0.7,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexShrink: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#43305F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.primary[500],
    fontSize: 16,
    fontWeight: '700',
  },
  name: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '700',
  },
  ticket: {
    color: colors.textSecondary,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginTop: 2,
  },
  checkInButton: {
    backgroundColor: colors.primary[500],
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  checkInButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  checkInText: {
    color: colors.primary[900],
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  verifiedWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  verifiedIcon: {
    color: colors.primary[500],
    fontSize: 14,
    fontWeight: '700',
  },
  verifiedText: {
    color: colors.primary[500],
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 0.6,
  },
});
