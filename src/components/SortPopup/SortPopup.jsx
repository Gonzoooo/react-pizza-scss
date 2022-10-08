function SortPopup({items}){
    return (
        <div className="sort__popup">
            <ul>
                {
                    items.map((item, i)=> (
                        <li key={i}>{item.name}</li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default SortPopup;
