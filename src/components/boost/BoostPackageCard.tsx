import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export type BoostPackage = {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  badge?: string;
};

type BoostPackageCardProps = {
  item: BoostPackage;
  selected?: boolean;
  onPress?: (id: string) => void;
};

export const BoostPackageCard = ({ item, selected = false, onPress }: BoostPackageCardProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress?.(item.id)}
    >
      {item.badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      ) : null}

      <View style={styles.contentRow}>
        <View style={styles.leftRow}>
          <View style={[styles.iconWrap, selected && styles.iconWrapSelected]}>
            <Text style={[styles.iconText, selected && styles.iconTextSelected]}>{item.icon}</Text>
          </View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.neutral[500],
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: colors.primary[500],
    backgroundColor: '#33204F',
  },
  cardPressed: {
    opacity: 0.85,
  },
  badge: {
    position: 'absolute',
    top: -12,
    right: 20,
    backgroundColor: colors.primary[500],
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: colors.primary[900],
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexShrink: 1,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 168, 76, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapSelected: {
    backgroundColor: colors.primary[500],
  },
  iconText: {
    color: colors.primary[500],
    fontSize: 16,
  },
  iconTextSelected: {
    color: colors.primary[900],
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
    flexShrink: 1,
  },
  price: {
    color: colors.primary[500],
    fontSize: 22,
    fontWeight: '800',
  },
});
