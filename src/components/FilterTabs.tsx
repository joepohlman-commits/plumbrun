import React from 'react';
import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { FilterTab } from '../types';
import { Colors, Spacing } from '../constants/theme';
interface FilterTabsProps { tabs: FilterTab[]; activeTab: string; onTabPress: (id: string) => void; }
export default function FilterTabs({ tabs, activeTab, onTabPress }: FilterTabsProps) {
  return (<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>{tabs.map((tab) => { const active = tab.id === activeTab; return (<Pressable key={tab.id} onPress={() => onTabPress(tab.id)} style={[styles.tab, active && styles.tabActive]}><Text style={[styles.tabText, active && styles.tabTextActive]}>{tab.label}</Text></Pressable>); })}</ScrollView>);
}
const styles = StyleSheet.create({ container: { paddingHorizontal: Spacing.md, paddingVertical: 14, gap: 8 }, tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1.5, borderColor: Colors.gray200, backgroundColor: Colors.white }, tabActive: { backgroundColor: Colors.navy, borderColor: Colors.navy }, tabText: { fontSize: 13, fontWeight: '600', color: Colors.gray600 }, tabTextActive: { color: Colors.white } });
