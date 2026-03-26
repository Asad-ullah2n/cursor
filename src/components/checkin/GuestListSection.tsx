import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../theme/colors';
import { GuestListItem } from './GuestListItem';
import { Guest } from './types';

type GuestListSectionProps = {
  guests: Guest[];
  search: string;
  onSearchChange: (value: string) => void;
  onCheckIn?: (id: string) => void;
};

export const GuestListSection = ({
  guests,
  search,
  onSearchChange,
  onCheckIn,
}: GuestListSectionProps) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Guest List</Text>
        <View style={styles.searchWrap}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            value={search}
            onChangeText={onSearchChange}
            style={styles.searchInput}
            placeholder="Search guests..."
            placeholderTextColor={colors.textSecondary}
          />
        </View>
      </View>

      <View style={styles.list}>
        {guests.map((guest) => (
          <GuestListItem key={guest.id} item={guest} onCheckIn={onCheckIn} />
        ))}
        {guests.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No guests match your search.</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
  searchWrap: {
    width: 190,
    backgroundColor: '#33204F',
    borderRadius: 999,
    paddingLeft: 34,
    paddingRight: 10,
    height: 40,
    justifyContent: 'center',
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 10,
    color: colors.textSecondary,
    fontSize: 16,
  },
  searchInput: {
    color: colors.textPrimary,
    fontSize: 13,
    padding: 0,
    margin: 0,
  },
  list: {
    gap: 10,
  },
  empty: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
