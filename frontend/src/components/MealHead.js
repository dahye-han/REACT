import React from 'react';
import styled from 'styled-components';
import { useMealState } from './MealContext';

const MealHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .meals-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function MealHead() {
    const meals = useMealState();
    const undoneTasks = meals.filter(meal => !meal.done);
    const undoneTasksName = undoneTasksNameGet(undoneTasks)
    
    function undoneTasksNameGet(undoneTasks) {
        console.log(undoneTasks);
        if(undoneTasks.length === 0) {
            return "다 먹었다";
        }else {
            let undoneTaskList = "";
            console.log(undoneTasks);
            for(var i=0; i<undoneTasks.length; i++){
                undoneTaskList = undoneTaskList + " " + undoneTasks[i].text ;
                console.log(undoneTaskList);
            }
            return undoneTaskList + " 아직 안 먹음";
        }
        
    }

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
        <MealHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="meals-left">{undoneTasksName}</div>
        </MealHeadBlock>
    );
}

export default MealHead;