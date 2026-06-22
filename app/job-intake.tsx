import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Header from '../src/components/Header';
import ProgressBar from '../src/components/ProgressBar';
import Button from '../src/components/Button';
import CategoryCard from '../src/components/CategoryCard';
import EstimateCard from '../src/components/EstimateCard';
import { categories, technicians } from '../src/data/mockData';
import { Colors, Radii, Spacing, Typography } from '../src/constants/theme';

export default function JobIntakeScreen() {
  const { techId } = useLocalSearchParams<{ techId?: string }>();
  const tech = technicians.find((t) => String(t.id) === techId) ?? technicians[0];
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [description, setDescription] = useState('');
  const [showEstimate, setShowEstimate] = useState(false);
  const renderCategoryRow = (startIdx: number) => { const row = categories.slice(startIdx, startIdx + 3); return (<View style={styles.catRow} key={startIdx}>{row.map((cat, i) => (<CategoryCard key={startIdx + i} category={cat} selected={selectedCat === startIdx + i} onPress={() => setSelectedCat(startIdx + i)} />))}</View>); };
  return (
    <View style={styles.container}>
      <ProgressBar step={2} totalSteps={3} />
      <Header showBack />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Text style={styles.techBadge}>🔧 Booking with {tech.shortName}</Text>
        <Text style={styles.title}>What do you need?</Text>
        <Text style={styles.desc}>Select a category and describe the issue.</Text>
        <View style={styles.catGrid}>{Array.from({ length: Math.ceil(categories.length / 3) }, (_, i) => renderCategoryRow(i * 3))}</View>
        <TextInput style={styles.textarea} placeholder="Describe what's going on..." placeholderTextColor={Colors.gray400} multiline numberOfLines={4} textAlignVertical="top" value={description} onChangeText={setDescription} />
        <Pressable style={styles.photoUpload}><Text style={styles.photoText}>📷 Add photos (optional)</Text></Pressable>
        {showEstimate && <EstimateCard />}
        {!showEstimate ? (<Button title="Get Estimate →" onPress={() => setShowEstimate(true)} disabled={selectedCat === null} />) : (<Button title="Continue to Pricing →" onPress={() => Alert.alert('Coming Soon', `Pricing tiers for ${tech.shortName} will be available in the next update.`)} />)}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  scroll: { padding: Spacing.lg, paddingBottom: 60 },
  techBadge: { alignSelf: 'flex-start', backgroundColor: Colors.gray100, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, fontSize: 13, fontWeight: '600', color: Colors.gray600, marginBottom: Spacing.md, overflow: 'hidden' },
  title: { ...Typography.h1, marginBottom: 8 },
  desc: { ...Typography.caption, fontSize: 14, marginBottom: Spacing.lg },
  catGrid: { marginBottom: Spacing.lg },
  catRow: { flexDirection: 'row' },
  textarea: { borderWidth: 2, borderColor: Colors.gray200, borderRadius: Radii.md, padding: 14, fontSize: 15, minHeight: 90, marginBottom: Spacing.md, backgroundColor: Colors.gray50, color: Colors.navy },
  photoUpload: { alignItems: 'center', justifyContent: 'center', padding: 14, borderWidth: 2, borderStyle: 'dashed', borderColor: Colors.gray300, borderRadius: Radii.md, marginBottom: Spacing.lg },
  photoText: { fontSize: 14, fontWeight: '500', color: Colors.gray500 },
});
