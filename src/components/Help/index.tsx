import './styles.css';
import QuestionIcon from '@/assets/QuestionIcon';
import {useState} from 'react';

// The right and left props are optional and are used to position the help text
export interface HelpProps {
    text: string;
    right?:number;
    left?:number;
}

const Help = ({ text, right, left }: HelpProps) => {
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const handleHelpClick = () => {
        setIsHelpOpen(!isHelpOpen);
    };

    return (
        <div className={'help-container'}>
            <div className={'help-icon-container'} onClick={handleHelpClick}>
                <QuestionIcon width={'14px'} height={'14px'} color={'#FFF'} />
            </div>
            {isHelpOpen && (
                <div className={'help-text-container'} style={{right: right, left: left}}>
                    <p>{text}</p>
                </div>)}
        </div>
    );
};
export default Help;
