import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { EntryPassData } from './types';

type EntryPassTicketCardProps = {
  data: EntryPassData;
  onOpenMap?: () => void;
};

const fakeQrPattern = Array.from({ length: 21 }, (_, row) =>
  Array.from({ length: 21 }, (_, col) => ((row * 7 + col * 5) % 4 === 0 ? 1 : 0)),
);

export const EntryPassTicketCard = ({ data, onOpenMap }: EntryPassTicketCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eventName}>{data.eventName}</Text>
          <Text style={styles.eventDate}>{data.eventDateTime}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.entryTag}>{data.entryTag}</Text>
          <View style={styles.validRow}>
            <View style={[styles.validDot, !data.valid && styles.invalidDot]} />
            <Text style={styles.validText}>{data.valid ? 'Valid' : 'Invalid'}</Text>
          </View>
        </View>
      </View>

      <View style={styles.qrSection}>
        <View style={styles.qrGradient}>
          <View style={styles.qrCard}>
            <View style={styles.qrGrid}>
              {fakeQrPattern.map((line, rowIdx) => (
                <View key={`r-${rowIdx}`} style={styles.qrRow}>
                  {line.map((cell, colIdx) => (
                    <View
                      key={`c-${rowIdx}-${colIdx}`}
                      style={[styles.qrCell, cell === 1 ? styles.qrCellDark : styles.qrCellLight]}
                    />
                  ))}
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.bracket, styles.topLeft]} />
          <View style={[styles.bracket, styles.topRight]} />
          <View style={[styles.bracket, styles.bottomLeft]} />
          <View style={[styles.bracket, styles.bottomRight]} />
        </View>

        <View style={styles.ticketIdWrap}>
          <Text style={styles.ticketIdLabel}>Ticket ID</Text>
          <Text style={styles.ticketId}>{data.ticketId}</Text>
        </View>
      </View>

      <View style={styles.perforationRow}>
        <View style={styles.leftCut} />
        <View style={styles.perforationLine} />
        <View style={styles.rightCut} />
      </View>

      <View style={styles.footer}>
        <View style={styles.locationLeft}>
          <View style={styles.locationIconWrap}>
            <Text style={styles.locationIcon}>⌖</Text>
          </View>
          <View>
            <Text style={styles.locationName}>{data.locationName}</Text>
            <Text style={styles.locationDetail}>{data.locationDetail}</Text>
          </View>
        </View>

        <Pressable style={({ pressed }) => [styles.mapButton, pressed && styles.mapButtonPressed]} onPress={onOpenMap}>
          <Text style={styles.mapButtonText}>Map</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.35,
    shadowRadius: 28,
    elevation: 8,
  },
  header: {
    backgroundColor: '#F5F1FA',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  eventName: {
    color: colors.neutral[900],
    fontSize: 26,
    fontWeight: '800',
  },
  eventDate: {
    color: 'rgba(11, 4, 24, 0.6)',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  headerRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 8,
  },
  entryTag: {
    backgroundColor: '#F2BEDA',
    color: colors.tertiary[900],
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  validRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  validDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  invalidDot: {
    backgroundColor: '#EF4444',
  },
  validText: {
    color: 'rgba(11, 4, 24, 0.45)',
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  qrSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 26,
    alignItems: 'center',
  },
  qrGradient: {
    width: 250,
    height: 250,
    borderRadius: 14,
    padding: 3,
    backgroundColor: colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  qrCard: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrGrid: {
    width: 200,
    height: 200,
    borderRadius: 4,
    overflow: 'hidden',
  },
  qrRow: {
    flexDirection: 'row',
    flex: 1,
  },
  qrCell: {
    flex: 1,
  },
  qrCellDark: {
    backgroundColor: '#111111',
  },
  qrCellLight: {
    backgroundColor: '#FFFFFF',
  },
  bracket: {
    width: 22,
    height: 22,
    position: 'absolute',
    borderColor: colors.primary[500],
  },
  topLeft: {
    top: -4,
    left: -4,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  topRight: {
    top: -4,
    right: -4,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  bottomLeft: {
    bottom: -4,
    left: -4,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  bottomRight: {
    bottom: -4,
    right: -4,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  ticketIdWrap: {
    alignItems: 'center',
    marginTop: 24,
  },
  ticketIdLabel: {
    color: 'rgba(11, 4, 24, 0.35)',
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },
  ticketId: {
    color: colors.neutral[900],
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2.4,
  },
  perforationRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 2,
  },
  leftCut: {
    width: 14,
    height: 28,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    backgroundColor: colors.background,
    marginLeft: -8,
  },
  perforationLine: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#DFDFDF',
    borderStyle: 'dashed',
  },
  rightCut: {
    width: 14,
    height: 28,
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    backgroundColor: colors.background,
    marginRight: -8,
  },
  footer: {
    backgroundColor: '#F8F8FA',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  locationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexShrink: 1,
  },
  locationIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    color: colors.primary[500],
    fontSize: 18,
    fontWeight: '700',
  },
  locationName: {
    color: colors.neutral[900],
    fontSize: 14,
    fontWeight: '700',
  },
  locationDetail: {
    color: 'rgba(11, 4, 24, 0.55)',
    fontSize: 12,
    marginTop: 2,
  },
  mapButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#EEE7F5',
  },
  mapButtonPressed: {
    opacity: 0.85,
  },
  mapButtonText: {
    color: colors.primary[700],
    fontSize: 12,
    fontWeight: '700',
  },
});
