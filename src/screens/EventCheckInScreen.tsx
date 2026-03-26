import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import {
  CheckInMode,
  CheckInModeToggle,
  CheckInStatsOverview,
  Guest,
  GuestListSection,
  QrScannerFrame,
} from '../components/checkin';
import { colors } from '../theme/colors';

const BASE_CHECKED_IN = 140;
const CAPACITY = 200;

const INITIAL_GUESTS: Guest[] = [
  {
    id: 'g1',
    name: 'Julian Vane',
    ticketType: 'VIP TABLE 04',
    avatar: '',
    checkedIn: false,
  },
  {
    id: 'g2',
    name: 'Elena Rossi',
    ticketType: 'GENERAL ADMISSION',
    avatar: '',
    checkedIn: true,
  },
  {
    id: 'g3',
    name: 'Marcus Thorne',
    ticketType: 'PRESS LIST',
    avatar: '',
    checkedIn: false,
  },
  {
    id: 'g4',
    name: 'Ava Sterling',
    ticketType: 'VIP LOUNGE',
    avatar: '',
    checkedIn: true,
  },
  {
    id: 'g5',
    name: 'Noah Black',
    ticketType: 'GENERAL ADMISSION',
    avatar: '',
    checkedIn: false,
  },
];

export const EventCheckInScreen = () => {
  const [mode, setMode] = useState<CheckInMode>('qr');
  const [search, setSearch] = useState('');
  const [guests, setGuests] = useState<Guest[]>(INITIAL_GUESTS);

  const checkedInCount = useMemo(
    () => BASE_CHECKED_IN + guests.filter((guest) => guest.checkedIn).length,
    [guests],
  );

  const filteredGuests = useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) {
      return guests;
    }

    return guests.filter(
      (guest) =>
        guest.name.toLowerCase().includes(value) || guest.ticketType.toLowerCase().includes(value),
    );
  }, [guests, search]);

  const handleCheckIn = (id: string) => {
    setGuests((prev) =>
      prev.map((guest) => (guest.id === id ? { ...guest, checkedIn: true } : guest)),
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <CheckInStatsOverview checkedIn={checkedInCount} capacity={CAPACITY} />
        </View>

        <View style={styles.section}>
          <CheckInModeToggle value={mode} onChange={setMode} />
        </View>

        {mode === 'qr' ? (
          <View style={styles.scannerWrap}>
            <QrScannerFrame />
          </View>
        ) : null}

        <GuestListSection
          guests={filteredGuests}
          search={search}
          onSearchChange={setSearch}
          onCheckIn={handleCheckIn}
        />
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
    paddingBottom: 28,
  },
  section: {
    marginBottom: 18,
  },
  scannerWrap: {
    marginBottom: 22,
  },
});
