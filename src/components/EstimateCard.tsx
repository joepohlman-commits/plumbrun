import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Radii } from '../constants/theme';
export default function EstimateCard() {
  return (<LinearGradient colors={['#0D1B2A', '#1a3350']} style={styles.card}><Text style={styles.label}>AI Estimate</Text><Text style={styles.price}>$185</Text><Text style={styles.range}>Range: $140 - $260</Text><View style={styles.details}><View style={styles.detail}><Text style={styles.detailValue}>Moderate</Text><Text style={styles.detailLabel}>Complexity</Text></View><View style={styles.detail}><Text style={styles.detailValue}>~1.5 hrs</Text><Text style={styles.detailLabel}>Est. Duration</Text></View></View></LinearGradient>);
}
const styles = StyleSheet.create({ card: { borderRadius: Radii.lg, padding: 24, alignItems: 'center', marginBottom: 24 }, label: { fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: Colors.gray400, marginBottom: 8 }, price: { fontSize: 44, fontWeight: '900', color: Colors.gold, marginBottom: 4 }, range: { fontSize: 13, color: Colors.gray400, marginBottom: 16 }, details: { flexDirection: 'row', justifyContent: 'center', gap: 24, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 14, width: '100%' }, detail: { alignItems: 'center' }, detailValue: { fontSize: 15, fontWeight: '700', color: Colors.white }, detailLabel: { fontSize: 11, color: Colors.gray500, marginTop: 2 } });
