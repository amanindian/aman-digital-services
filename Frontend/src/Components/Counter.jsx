import React, { useContext } from 'react';
import { ProjectInfoContext } from '../Context/ProjectInfo';
import "./Counter.css"
import NumberCounter from 'number-counter';

export default function Counter() {
    const { Our_Achievements } = useContext(ProjectInfoContext);

    return (
        <section className='counter '>
            <div className="container">
                <h2 className='achievement-title'>Our Acchivments</h2>
                <div className="achievements">
                    {Our_Achievements.map(({ Title, End, Start, Delay, Type, postFix }, i) => {
                        return (
                            <div className="counter-box" key={i}>
                                <NumberCounter end={End} delay={Delay} className={Type} postFix={postFix} />
                                <h3 className='counter-title'>{Title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
