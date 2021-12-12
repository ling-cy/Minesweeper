import React from 'react';
import { generateField } from './util/generateField';

const App = () => {
  console.log(generateField(100, 10, 10));
  return <h1>Minesweeper</h1>;
};

export default App;
