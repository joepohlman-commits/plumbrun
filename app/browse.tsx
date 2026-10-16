import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../src/components/Header';
import ProgressBar from '../src/components/ProgressBar';
import FilterTabs from '../src/components/FilterTabs';
import TechCard from '../src/components/TechCard';
import { technicians, filterTabs } from '../src/data/mockData';
import { Technician } from '../src/types';
import { Colors, Spacing } from '../src/constants/theme';

export default function BrowseScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = useMemo(() => activeFilter === 'all' ? technicians : technicians.filter((t) => t.type === activeFilter), [activeFilter]);
  const handleSelect = (tech: Technician) => { router.push({ pathname: '/job-intake', params: { techId: String(tech.id) } }); };
  return (
    <View style={styles.container}>
      <ProgressBar step={1} totalSteps={3} />
      <View style={styles.browseHeader}>
        <Header showBack />
        <View style={styles.locationRow}><Text style={styles.locationBadge}>📍 Linthicum, MD 21090</Text></View>
      </View>
      <FilterTabs tabs={filterTabs} activeTab={activeFilter} onTabPress={setActiveFilter} />
      <FlatList data={filtered} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => (<TechCard tech={item} onSelect={handleSelect} />)} contentContainerStyle={styles.list} showsVerticalScrollIndicator={false} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.gray50 },
  browseHeader: { backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.gray200 },
  locationRow: { paddingHorizontal: Spacing.md, paddingBottom: 10, alignItems: 'flex-end' },
  locationBadge: { backgroundColor: Colors.gray100, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, fontSize: 12, fontWeight: '600', color: Colors.gray600, overflow: 'hidden' },
  list: { padding: Spacing.md, paddingBottom: 40 },
});
