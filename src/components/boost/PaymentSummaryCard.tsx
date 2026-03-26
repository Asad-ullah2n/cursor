import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

type PaymentSummaryCardProps = {
  subtotal: number;
  fee: number;
  cardLabel: string;
  cardMeta: string;
  onChangePayment?: () => void;
};

const money = (value: number) => `$${value.toFixed(2)}`;

export const PaymentSummaryCard = ({
  subtotal,
  fee,
  cardLabel,
  cardMeta,
  onChangePayment,
}: PaymentSummaryCardProps) => {
  const total = subtotal + fee;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Method</Text>

      <View style={styles.methodRow}>
        <View style={styles.methodLeft}>
          <View style={styles.cardBrandWrap}>
            <View style={[styles.dot, styles.dotRed]} />
            <View style={[styles.dot, styles.dotOrange]} />
          </View>

          <View>
            <Text style={styles.cardLabel}>{cardLabel}</Text>
            <Text style={styles.cardMeta}>{cardMeta}</Text>
          </View>
        </View>

        <Pressable onPress={onChangePayment}>
          <Text style={styles.change}>Change</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>{money(subtotal)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Service Fee</Text>
        <Text style={styles.value}>{money(fee)}</Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total Amount</Text>
        <Text style={styles.totalValue}>{money(total)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22133A',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.neutral[500],
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 18,
  },
  methodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 18,
    marginBottom: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.neutral[500],
  },
  methodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardBrandWrap: {
    width: 44,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#2E1A49',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  dotRed: {
    backgroundColor: '#EB001B',
  },
  dotOrange: {
    backgroundColor: '#F79E1B',
    marginLeft: -4,
  },
  cardLabel: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  cardMeta: {
    color: colors.textSecondary,
    fontSize: 10,
    marginTop: 2,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  change: {
    color: colors.primary[500],
    fontSize: 12,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  totalRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.neutral[500],
    paddingTop: 14,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  totalValue: {
    color: colors.primary[500],
    fontSize: 20,
    fontWeight: '800',
  },
});
