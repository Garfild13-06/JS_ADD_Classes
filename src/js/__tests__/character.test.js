import Character from "../Character";


test('should throw error for invalid name', () => {
  expect(() => new Character('A')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Character('VeryLongName')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('Invalid', 'InvalidType')).toThrow('Некорректный тип персонажа');
});
