import React from 'react';

function Categories({items}) {
    const [activeButton, setActiveButton] = React.useState(null);

    function onActiveButton(i) {
        setActiveButton(i);
    }
    
    return (
        <div className="categories">
            <ul>
                <li onClick={()=> onActiveButton(null)} className={activeButton === null ? 'active' : ''}>Все</li>
                {items &&
                    items.map((item, i) => (
                        <li key={`${i}_${item}`} onClick={()=>onActiveButton(i)} className={activeButton === i ? 'active' : ''}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Categories;
