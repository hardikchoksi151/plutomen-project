// export enum COLOR {
//   RED = 'RED',
//   GREEN = 'GREEN',
//   BLUE = 'BLUE',
//   YELLOW = 'YELLOW',
//   PURPLE = 'PURPLE',
//   CYAN = 'CYAN',
//   ORANGE = 'ORANGE',
//   PINK = 'PINK',
//   BROWN = 'BROWN',
//   GRAY = 'GRAY',
// }

export interface IProduct {
  name: string;
  sku?: number;
  size: number;
  price: number;
  colors: string[];
}

export const seedData = [
  {
    name: 'T shirt 1',
    price: 2000,
    size: 41,
    sku: 1,
    colors: ['red', 'cyan'],
  },
  {
    name: 'T shirt 2',
    price: 2000,
    size: 41,
    sku: 2,
    colors: ['white', 'black'],
  },
  {
    name: 'T shirt 3',
    price: 2000,
    size: 41,
    sku: 3,
    colors: ['orange', 'red'],
  },
  {
    name: 'T shirt 4',
    price: 2000,
    size: 41,
    sku: 4,
    colors: ['orange', 'green'],
  },
  {
    name: 'T shirt 5',
    price: 2000,
    size: 41,
    sku: 5,
    colors: ['dark green', 'gray'],
  },
];

// for toast (todo)
export const kMockResponse = (status: number, data: any, message: string) => ({
  status,
  data,
  message,
});

export const successMsg = 'Operation Completed Successfully!'