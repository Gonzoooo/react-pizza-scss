import ContentLoader from "react-content-loader"

function PizzasLoader() {
    return(
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className="pizza-block"
        >
            <rect x="3" y="274" rx="6" ry="6" width="278" height="84" />
            <circle cx="135" cy="116" r="115" />
            <rect x="3" y="382" rx="0" ry="0" width="54" height="27" />
            <rect x="109" y="371" rx="10" ry="10" width="168" height="49" />
            <rect x="261" y="382" rx="0" ry="0" width="0" height="1" />
            <rect x="3" y="241" rx="6" ry="6" width="278" height="21" />
        </ContentLoader>
    )
}

export default PizzasLoader;
