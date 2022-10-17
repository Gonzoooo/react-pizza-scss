import React from "react";
import {Categories, SortPopup} from "../../utils/index";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/action/filters"

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    const sortItems = [{name: 'популярности', type: 'popular'}, {name:'цене', type: 'price'}, {name:'алфавиту', type: 'alphabet'}];

    return (
       <>
           <div className="container">
               <div className="content__top">
                   <Categories items={categoryNames} onClickItem={onSelectCategory}/>
                   <SortPopup items={sortItems}/>
               </div>
               <h2 className="content__title">Все пиццы</h2>
               <div className="content__items">
                   {
                       items && items.map((item)=>(
                           <PizzaBlock key={item.id} {...item}/>
                       ))
                   }
               </div>
           </div>
       </>
    )
}

export default Home;
