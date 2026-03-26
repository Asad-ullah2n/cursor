import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

type EntryPassActionsProps = {
  onAddToWallet?: () => void;
  onShare?: () => void;
};

export const EntryPassActions = ({ onAddToWallet, onShare }: EntryPassActionsProps) => {
  return (
    <View style={styles.wrap}>
      <Pressable
        style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
        onPress={onAddToWallet}
      >
        <Text style={styles.primaryText}>Add to Apple Wallet</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}
        onPress={onShare}
      >
        <Text style={styles.secondaryText}>Share Ticket</Text>
      </Pressable>

      <Text style={styles.caption}>
        Tickets are non-transferable. Please bring a valid government ID for age verification at
        the dock.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    marginTop: 20,
    gap: 12,
  },
  primaryButton: {
    height: 56,
    borderRadius: 999,
    backgroundColor: colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary[500],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  secondaryButton: {
    height: 56,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.neutral[500],
    backgroundColor: '#33204F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  primaryText: {
    color: colors.primary[900],
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  secondaryText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  caption: {
    color: colors.textSecondary,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    paddingHorizontal: 16,
    marginTop: 8,
  },
});
