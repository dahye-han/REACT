import React from 'react';
import './TodoListTemplate.css';
import NowDate from './NowDate.js';

const TodolistTemplate = ({form, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                <NowDate/> 은구에게 속지마
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodolistTemplate;