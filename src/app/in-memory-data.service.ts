import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Best Jeanist' },
        { id: 12, name: 'Endeavor' },
        { id: 13, name: 'Gang Orca' },
        { id: 14, name: 'Fat Gum' },
        { id: 15, name: 'Hawks' },
        { id: 16, name: 'Midnight' },
        { id: 17, name: 'Gran Torino' },
        { id: 18, name: 'Mt. Lady' },
        { id: 19, name: 'Sir Nighteye' },
        { id: 20, name: 'Recovery Girl' }
    ];
    return {heroes};
  }
}