import '../NumericQuestion/styles.css';
import React from 'react';

interface NotAQuestion {
    questionTitle: string;
}

const NotAQuestion = ({ questionTitle }: NotAQuestion) => {
    return (
        <div className="layout">
            <div className="head border-radius-15">
                <p className="questionText">{questionTitle}</p>
            </div>
        </div>
    );
};

export default NotAQuestion;
