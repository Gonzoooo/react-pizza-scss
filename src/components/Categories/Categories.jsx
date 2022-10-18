import React from 'react';
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({activeCategory, items, onClickItem}) {

    return (
        <div className="categories">
            <ul>
                <li onClick={()=> onClickItem(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {items &&
                    items.map((item, i) => (
                        <li key={`${i}_${item}`} onClick={()=> onClickItem(i)} className={activeCategory === i ? 'active' : ''}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.array.isRequired,
    onClickItem: PropTypes.func,
};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
};

export default Categories;
