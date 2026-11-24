export const categories = [
  { name: 'Voirie', icon: 'road', description: 'Nids-de-poule, fissures et chaussées abîmées' },
  { name: 'Propreté', icon: 'delete_outline', description: 'Déchets, dépôts sauvages et bacs débordants' },
  { name: 'Éclairage', icon: 'lightbulb', description: 'Lampadaires en panne ou endommagés' },
  { name: 'Espaces publics', icon: 'park', description: 'Mobilier urbain, arbres et équipements' },
] as const;

export type Category = typeof categories[number]['name'];
export type Severity = 'Faible' | 'Moyenne' | 'Élevée' | 'Critique';
export type Status = 'Soumis' | 'En analyse' | 'À valider' | 'Affecté' | 'En cours' | 'Résolu' | 'Rejeté';

export interface Report {
  id: string;
  title: string;
  district: string;
  date: string;
  category: Category;
  severity: Severity;
  status: Status;
  description: string;
}

export function statusTone(status: Status): string {
  if (status === 'Résolu') return 'success';
  if (status === 'Rejeté') return 'danger';
  if (status === 'À valider') return 'warning';
  return 'info';
}
