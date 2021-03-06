const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });
  it('has a initial hunger of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.hunger).toEqual(0);
  });
  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });
    describe('walk', () => {
      it('increments the fitness by 4', () => {
        const pet = new Pet('Fido');
    
        pet.fitness = 4;
        pet.walk();
    
        expect(pet.fitness).toEqual(8);
      });
      it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
      });
}); 