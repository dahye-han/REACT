import React from 'react';
import  { createGlobalStyle } from 'styled-components';
import MealTemplate from './components/MealTemplate';
import MealHead from './components/MealHead';
import MealList from './components/MealList';
import MealCreate from './components/MealCreate';
import { MealProvider } from './components/MealContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
;

function App() {
  return (
    <>
      <MealProvider>
        <GlobalStyle />
        <MealTemplate>
          <MealHead />
          <MealList />
          <MealCreate />
        </MealTemplate>
      </MealProvider>
    </>
  );
}

export default App;
