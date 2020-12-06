import React, { createContext, useReducer, useContext, useRef } from 'react';

const initialMeals = [
    {
        id: 1,
        text: '아침밥',
        done: false
    },
    {
        id: 2,
        text: '점심밥',
        done: false
    },
    {
        id: 3,
        text: '저녁밥',
        done: false
    }
];

function mealReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.meal);
        case 'TOGGLE':
            return state.map(meal => 
                meal.id === action.id ? {...meal, done: !meal.done } : meal
            );
        case 'REMOVE':
            return state.filter(meal => meal.id !== action.id);
        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}

const MealStateContext = createContext();
const MealDispatchContext = createContext();
const MealNextIdContext = createContext();

export function MealProvider({ children }) {
    const [state, dispatch] = useReducer(mealReducer, initialMeals);
    const nextId = useRef(4);

    return (
        <MealStateContext.Provider value={state}>
            <MealDispatchContext.Provider value={dispatch}>
                <MealNextIdContext.Provider value={nextId}>
                    {children}
                </MealNextIdContext.Provider>
            </MealDispatchContext.Provider>
        </MealStateContext.Provider>
    );
}

export function useMealState() {
    const context = useContext(MealStateContext);
    if(!context) {
        throw new Error('Cannot find MealProvider');
    }
    return context;
}

export function useMealDispatch() {
    const context = useContext(MealDispatchContext);
    if(!context) {
        throw new Error('Cannot find MealProvider');
    }
    return context;
}

export function useMealNextId() {
    const context = useContext(MealNextIdContext);
    if(!context) {
        throw new Error('Cannot find MealProvider');
    }
    return context;
}