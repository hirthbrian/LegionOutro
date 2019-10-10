import { Dimensions } from 'react-native';
import faker from 'faker';

export enum Color {
  white = '#FFFFFF',
  black = '#000000',
  purple = '#B540C5',
  green = '#268413',
}

export const generateName = () => (
  faker.fake('{{name.lastName}} {{name.firstName}}').toUpperCase()
);

export const generateJob = () => {
  const jobArray = faker.name.jobTitle().split(' ');
  jobArray.shift();
  return jobArray.join(' ');
};

export const generateRectangle = () => {
  const { width, height } = Dimensions.get('window');

  const maxWidth = width / 2;
  const maxHeight = height / 2;

  const rndmWidth = Math.floor(Math.random() * maxWidth) + 1;
  const rndmHeight = Math.floor(Math.random() * maxHeight) + 1;
  const rndmX = Math.floor(Math.random() * (width - rndmWidth)) + 1;
  const rndmY = Math.floor(Math.random() * (height - rndmHeight)) + 1;

  return {
    width: rndmWidth,
    height: rndmHeight,
    left: rndmX,
    top: rndmY,
  };
};
