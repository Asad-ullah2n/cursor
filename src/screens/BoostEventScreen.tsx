import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BoostNowButton } from '../components/boost/BoostNowButton';
import { BoostPackage, BoostPackageCard } from '../components/boost/BoostPackageCard';
import { PaymentSummaryCard } from '../components/boost/PaymentSummaryCard';
import { colors } from '../theme/colors';

const SERVICE_FEE = 2.5;

const BOOST_PACKAGES: BoostPackage[] = [
  {
    id: 'day-1',
    title: '1 Day Boost',
    description: 'Top of search results for 24h',
    price: 25,
    icon: '⚡',
  },
  {
    id: 'day-3',
    title: '3 Days Premier',
    description: 'Extended exposure for weekend peaks',
    price: 65,
    icon: '✨',
    badge: 'Most Popular',
  },
  {
    id: 'week-1',
    title: '1 Week Elite',
    description: 'Full weekly cycle visibility',
    price: 140,
    icon: '👑',
  },
  {
    id: 'featured-badge',
    title: 'Featured Badge',
    description: 'Exclusive "Gold Label" on event card',
    price: 45,
    icon: '✔',
  },
];

export const BoostEventScreen = () => {
  const [selectedId, setSelectedId] = useState<string>('day-3');

  const selectedPackage = useMemo(
    () => BOOST_PACKAGES.find((item) => item.id === selectedId) ?? BOOST_PACKAGES[0],
    [selectedId],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Boost Your Event</Text>
          <Text style={styles.subtitle}>
            Increase visibility and attract the elite. Choose a package to spotlight your occasion.
          </Text>
        </View>

        <View style={styles.packagesSection}>
          {BOOST_PACKAGES.map((item) => (
            <BoostPackageCard
              key={item.id}
              item={item}
              selected={item.id === selectedId}
              onPress={setSelectedId}
            />
          ))}
        </View>

        <View style={styles.paymentSection}>
          <PaymentSummaryCard
            subtotal={selectedPackage.price}
            fee={SERVICE_FEE}
            cardLabel="Mastercard ending in 4429"
            cardMeta="Expires 12/26"
          />
        </View>

        <BoostNowButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 36,
  },
  headerSection: {
    marginBottom: 24,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 320,
  },
  packagesSection: {
    gap: 12,
    marginBottom: 24,
  },
  paymentSection: {
    marginBottom: 20,
  },
});
