import React from 'react';
import styled from 'styled-components';
import { useMealState } from './MealContext';
import MealItem from './Mealitem';

const MealListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function MealList() {
    const meals = useMealState();

    return (
        <MealListBlock>
            {meals.map(meal => (
                <MealItem
                    key={meal.id}
                    id={meal.id}
                    text={meal.text}
                    done={meal.done}
                />
            ))}
        </MealListBlock>
    );
}

export default MealList;