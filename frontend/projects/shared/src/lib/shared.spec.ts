import { statusTone } from './report';

describe('statusTone', () => {
  it('uses distinct tones for resolved, rejected and pending validation reports', () => {
    expect(statusTone('Résolu')).toBe('success');
    expect(statusTone('Rejeté')).toBe('danger');
    expect(statusTone('À valider')).toBe('warning');
    expect(statusTone('En cours')).toBe('info');
  });
});
