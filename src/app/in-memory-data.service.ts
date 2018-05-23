import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Leon' },
      { id: 12, name: 'Coco' },
      { id: 13, name: 'Genji' },
      { id: 14, name: 'Derpl' },
      { id: 15, name: 'Clunk' },
      { id: 16, name: 'Raelyn' },
      { id: 17, name: 'Vinnie & Spike' },
      { id: 18, name: 'Voltar' },
      { id: 19, name: 'Skree' },
      { id: 20, name: 'Swiggins' }
    ];
    return {heroes};
  }
}
