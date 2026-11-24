import { Category, Report } from '../report';

export const demoReports: readonly Report[] = [
  { id: 'CS-1042', title: 'Nid-de-poule sur l’avenue 2 Mars', district: 'Mers Sultan', date: '24 nov. 2026', category: 'Voirie', severity: 'Élevée', status: 'À valider', description: 'Un nid-de-poule s’est formé sur la voie de droite, à proximité du carrefour. Les véhicules ralentissent brusquement pour l’éviter.' },
  { id: 'CS-1038', title: 'Lampadaires éteints rue Ibnou Katir', district: 'Maârif', date: '23 nov. 2026', category: 'Éclairage', severity: 'Moyenne', status: 'En cours', description: 'Trois lampadaires successifs restent éteints après la tombée de la nuit.' },
  { id: 'CS-1031', title: 'Dépôt de déchets près du marché', district: 'Hay Hassani', date: '22 nov. 2026', category: 'Propreté', severity: 'Faible', status: 'Résolu', description: 'Des sacs de déchets se sont accumulés près de l’entrée du marché.' },
  { id: 'CS-1027', title: 'Branche tombée près du parc', district: 'Anfa', date: '21 nov. 2026', category: 'Espaces publics', severity: 'Critique', status: 'Affecté', description: 'Une grosse branche occupe une partie du trottoir et gêne l’accès au passage piéton.' },
];

export const demoActivity = [
  { label: '18 nov.', count: 12 }, { label: '19 nov.', count: 18 },
  { label: '20 nov.', count: 14 }, { label: '21 nov.', count: 24 },
  { label: '22 nov.', count: 20 }, { label: '23 nov.', count: 29 },
  { label: '24 nov.', count: 25 },
];

export const demoKpis = {
  awaitingValidation: 18,
  inProgress: 27,
  resolved: 61,
};

export const demoCategoryCounts: Record<Category, number> = {
  'Voirie': 56,
  'Propreté': 29,
  'Éclairage': 21,
  'Espaces publics': 36,
};
