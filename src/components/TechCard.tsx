import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Technician } from '../types';
import { Colors, Radii, Shadows } from '../constants/theme';
const badgeColors: Record<string, { bg: string; text: string }> = { powerhouse: { bg: 'rgba(232,84,26,0.1)', text: '#c0420e' }, lowkey: { bg: 'rgba(52,152,219,0.1)', text: '#2176ad' }, nextgen: { bg: 'rgba(155,89,182,0.1)', text: '#7d3c98' }, veteran: { bg: 'rgba(39,174,96,0.1)', text: '#1e8449' } };
interface TechCardProps { tech: Technician; onSelect: (tech: Technician) => void; }
export default function TechCard({ tech, onSelect }: TechCardProps) {
  const badge = badgeColors[tech.badgeClass];
  return (
    <Pressable style={({ pressed }) => [styles.card, Shadows.shadow, pressed && styles.pressed]} onPress={() => onSelect(tech)}>
      <View style={[styles.typeBadge, { backgroundColor: badge.bg }]}><Text style={[styles.typeBadgeText, { color: badge.text }]}>{tech.typeEmoji} {tech.typeName}</Text></View>
      <View style={styles.topRow}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{tech.initials}</Text><View style={styles.onlineDot} /></View>
        <View style={styles.info}><Text style={styles.name}>{tech.name}</Text><Text style={styles.license}>{tech.license}</Text><View style={styles.stats}><Text style={styles.rating}>★ {tech.rating}</Text><Text style={styles.jobs}>{tech.jobs} jobs</Text></View></View>
        <View style={styles.scoreCircle}><Text style={styles.scoreText}>{tech.score}</Text></View>
      </View>
      <View style={styles.tags}>{tech.tags.map((tag) => (<View key={tag} style={styles.tag}><Text style={styles.tagText}>{tag}</Text></View>))}</View>
      <Pressable style={({ pressed }) => [styles.selectBtn, pressed && { backgroundColor: '#1a2d44' }]} onPress={() => onSelect(tech)}><Text style={styles.selectBtnText}>Select →</Text></Pressable>
    </Pressable>);
}
const styles = StyleSheet.create({ card: { backgroundColor: Colors.white, borderRadius: Radii.lg, padding: 18, marginBottom: 14, borderWidth: 1.5, borderColor: Colors.gray100 }, pressed: { transform: [{ scale: 0.985 }] }, typeBadge: { alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginBottom: 8, gap: 4 }, typeBadgeText: { fontSize: 11, fontWeight: '700' }, topRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 14, marginBottom: 12 }, avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: Colors.gray200, alignItems: 'center', justifyContent: 'center' }, avatarText: { fontSize: 22, fontWeight: '700', color: Colors.gray500 }, onlineDot: { position: 'absolute', bottom: 2, right: 2, width: 12, height: 12, backgroundColor: Colors.green, borderWidth: 2.5, borderColor: Colors.white, borderRadius: 6 }, info: { flex: 1 }, name: { fontSize: 16, fontWeight: '800', color: Colors.navy, marginBottom: 2 }, license: { fontSize: 11, color: Colors.gray500, marginBottom: 6 }, stats: { flexDirection: 'row', alignItems: 'center', gap: 10 }, rating: { fontSize: 13, fontWeight: '700', color: Colors.gold }, jobs: { fontSize: 13, color: Colors.gray500 }, scoreCircle: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(232,84,26,0.08)', borderWidth: 2.5, borderColor: Colors.orange }, scoreText: { fontSize: 14, fontWeight: '800', color: Colors.orange }, tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 2 }, tag: { paddingHorizontal: 9, paddingVertical: 3, borderRadius: 8, backgroundColor: Colors.gray100 }, tagText: { fontSize: 11, fontWeight: '500', color: Colors.gray600 }, selectBtn: { alignItems: 'center', justifyContent: 'center', width: '100%', paddingVertical: 12, marginTop: 14, borderRadius: Radii.md, backgroundColor: Colors.navy }, selectBtnText: { fontSize: 14, fontWeight: '700', color: Colors.white } });
