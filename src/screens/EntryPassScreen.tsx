import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EntryPassActions, EntryPassData, EntryPassTicketCard } from '../components/ticket';
import { colors } from '../theme/colors';

const PASS_DATA: EntryPassData = {
  eventName: 'Sunset Yacht',
  eventDateTime: 'Saturday, 24 June - 18:00',
  entryTag: 'Women · Free Entry',
  valid: true,
  ticketId: 'VS-7729-0112-XC',
  locationName: 'Port de Monaco',
  locationDetail: 'Pier 7, Private Access',
  qrValue: 'VS-7729-0112-XC',
};

export const EntryPassScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Entry Pass</Text>
          <Text style={styles.subtitle}>
            Present this code to the concierge upon arrival.
          </Text>
        </View>

        <EntryPassTicketCard data={PASS_DATA} />

        <EntryPassActions />
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
    alignItems: 'center',
  },
  titleWrap: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 6,
  },
});
