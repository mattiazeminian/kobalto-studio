import { test } from 'node:test';
import assert from 'node:assert/strict';

test('Kobalto content uses verified Italian project and service information', async () => {
  const { projects, services, studio, navigation } = await import('../src/content/site.ts');
  assert.equal(studio.name, 'Kobalto Studio');
  assert.equal(studio.city, 'Verona');
  assert.equal(studio.founders.length, 2);
  assert.equal(projects.length, 6);
  assert.ok(projects.every((project) => project.image.startsWith('/assets/projects/')));
  assert.deepEqual(navigation.map((item) => item.label), ['Progetti', 'Competenze', 'Manifesto', 'Studio', 'Contatti']);
  assert.equal(services.length, 3);
  assert.ok(services.every((service) => !/branding|logo|marketing/i.test(service.title)));
});
