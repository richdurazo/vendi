import React from 'react';

const Panel = (props: any) => {
    return (
        <section className='panel'>
            <div className='panel-copy flex-column'>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.copy}</p>
                </div>
            </div>
            <div className='panel-square'></div>
        </section>
    );
};

export default Panel;
