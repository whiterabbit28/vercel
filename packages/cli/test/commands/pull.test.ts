import { client } from '../mocks/client';
import { useUser } from '../mocks/user';
import { useTeams } from '../mocks/team';
import { useProject } from '../mocks/project';
import pull from '../../src/commands/pull';
import { cleanupFixtures, setupFixture } from '../helpers/setupFixture';

describe('pull', () => {
  afterAll(() => {
    cleanupFixtures();
  });

  it('should handle pulling', async () => {
    const cwd = setupFixture('unit/now-dev-next');
    client.setArgv('pull', '--yes', cwd);
    useUser();
    useTeams();
    useProject();
    const exitCode = await pull(client);
    expect(exitCode).toEqual(0);
  });
});