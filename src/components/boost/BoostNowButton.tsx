import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

type BoostNowButtonProps = {
  onPress?: () => void;
};

export const BoostNowButton = ({ onPress }: BoostNowButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={onPress}>
        <Text style={styles.buttonText}>Boost Now</Text>
      </Pressable>
      <Text style={styles.caption}>
        By tapping boost, you agree to our premium event terms and conditions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary[500],
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary[500],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  buttonText: {
    color: colors.primary[900],
    fontWeight: '800',
    fontSize: 18,
  },
  caption: {
    marginTop: 14,
    color: colors.textSecondary,
    fontSize: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    opacity: 0.8,
    paddingHorizontal: 24,
  },
});
