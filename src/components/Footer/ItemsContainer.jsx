
import Item from "./Item";
import { RESOURCES } from "./Menus";
const ItemsContainer = () => {
    return (
        <div className="flex justify-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <img

                src="./src/assets/LogoUIT.svg"
                alt="logoUIT"
            />
            <Item Links={RESOURCES} />

        </div>
    );
};

export default ItemsContainer;

