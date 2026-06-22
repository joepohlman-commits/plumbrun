import { Technician, Category, FilterTab } from '../types';
export const technicians: Technician[] = [
  { id: 1, name: 'Marcus "Big Mac" Rodriguez', initials: 'MR', shortName: 'Marcus Rodriguez', firstName: 'Marcus', type: 'powerhouse', typeName: 'Powerhouse', typeEmoji: '💪', badgeClass: 'powerhouse', license: 'MD-PLB-29847', rating: 4.9, jobs: 187, score: 96, tags: ['Water Heaters', 'Gas Lines', 'Repipes', 'Commercial'] },
  { id: 2, name: 'Kevin Park', initials: 'KP', shortName: 'Kevin Park', firstName: 'Kevin', type: 'lowkey', typeName: 'Low-Key Pro', typeEmoji: '🔧', badgeClass: 'lowkey', license: 'MD-PLB-31205', rating: 4.8, jobs: 134, score: 93, tags: ['Drains', 'Faucets', 'Disposals', 'Residential'] },
  { id: 3, name: 'Jordan Watts', initials: 'JW', shortName: 'Jordan Watts', firstName: 'Jordan', type: 'nextgen', typeName: 'Next Gen', typeEmoji: '⚡', badgeClass: 'nextgen', license: 'MD-PLB-34102', rating: 4.8, jobs: 67, score: 91, tags: ['Smart Home', 'Leak Detection', 'Sump Pumps'] },
  { id: 4, name: 'Dan "The Man" Kowalski', initials: 'DK', shortName: 'Dan Kowalski', firstName: 'Dan', type: 'veteran', typeName: 'Veteran', typeEmoji: '🎖', badgeClass: 'veteran', license: 'MD-PLB-18993', rating: 5.0, jobs: 412, score: 98, tags: ['Main Lines', 'Inspections', 'Full Repipe', 'Emergency'] },
];
export const categories: Category[] = [
  { emoji: '🚿', label: 'Clogged Drain' }, { emoji: '💧', label: 'Leak / Pipe' }, { emoji: '🔥', label: 'Water Heater' }, { emoji: '🚽', label: 'Toilet' }, { emoji: '🔩', label: 'Faucet' }, { emoji: '⚙️', label: 'Garbage Disposal' }, { emoji: '🏠', label: 'Sump Pump' }, { emoji: '🛠️', label: 'Main Line' }, { emoji: '⚠️', label: 'Gas Line' }, { emoji: '🔗', label: 'Repipe' }, { emoji: '📋', label: 'Inspection' }, { emoji: '❓', label: 'Other' },
];
export const filterTabs: FilterTab[] = [
  { id: 'all', label: 'All' }, { id: 'powerhouse', label: 'Powerhouse 💪' }, { id: 'lowkey', label: 'Low-Key 🔧' }, { id: 'nextgen', label: 'Next Gen ⚡' }, { id: 'veteran', label: 'Veteran 🎖' },
];
