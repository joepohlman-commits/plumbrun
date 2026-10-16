import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Category } from '../types';
import { Colors, Radii } from '../constants/theme';
interface CategoryCardProps { category: Category; selected: boolean; onPress: () => void; }
export default function CategoryCard({ category, selected, onPress }: CategoryCardProps) {
  return (<Pressable onPress={onPress} style={[styles.card, selected && styles.cardSelected]}><Text style={styles.emoji}>{category.emoji}</Text><Text style={styles.label}>{category.label}</Text></Pressable>);
}
const styles = StyleSheet.create({ card: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 16, paddingHorizontal: 8, borderRadius: Radii.md, backgroundColor: Colors.gray50, borderWidth: 2, borderColor: Colors.gray200, minHeight: 80, gap: 6, margin: 5 }, cardSelected: { borderColor: Colors.orange, backgroundColor: 'rgba(232,84,26,0.04)' }, emoji: { fontSize: 26 }, label: { fontSize: 11, fontWeight: '600', color: Colors.gray700, textAlign: 'center', lineHeight: 14 } });
