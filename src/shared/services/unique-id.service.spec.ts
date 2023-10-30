import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix}`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  })

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generate duplicate ids when called multiple times}`, () => {
    const ids = new Set();

    for(let i = 0; i < 50; i++){
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueId.name} should return the number of generated ids when called}`, () => {
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueId()).toBe(2);
  })

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should throw when called with empty}`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];

    emptyValues.forEach(emptyValue => {
      expect(() => service.generatedUniqueIdWithPrefix(emptyValue)).withContext(`Empty Value: ${emptyValue}`).toThrow();
    })
  })
});
