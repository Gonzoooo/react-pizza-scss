import React from "react";
import {Categories, PizzasLoader, SortPopup} from "../../utils/index";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../redux/action/filters"
import {fetchPizzas} from "../../redux/action/pizzas";

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);
    const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [dispatch]);


    console.log(cartItems)



    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'}, {name:'цене', type: 'price', order: 'desc'}, {name:'алфавиту', type: 'name', order: 'asc'}];

    const handleAddPizzaToCart = obj => {
        dispatch({
            type: 'ADD_PIZZA_CARD',
            payload: obj,
        });
    };

    React.useEffect(()=> {
        dispatch(fetchPizzas(category, sortBy))
    }, [dispatch, category, sortBy]);

    return (
       <>
           <div className="container">
               <div className="content__top">
                   <Categories activeCategory={category} items={categoryNames} onClickItem={onSelectCategory}/>
                   <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems}/>
               </div>
               <h2 className="content__title">Все пиццы</h2>
               <div className="content__items">
                   {
                       isLoaded ?
                           items.map((obj)=>(
                               <PizzaBlock addedCount={cartItems[obj.id] && cartItems[obj.id].length} onClickAddPizza={handleAddPizzaToCart} key={obj.id} {...obj}/>
                           )) :
                           Array(15).fill(0).map((_,index)=><PizzasLoader key={index}/>)}
               </div>
           </div>
       </>
    )
}

export default Home;
