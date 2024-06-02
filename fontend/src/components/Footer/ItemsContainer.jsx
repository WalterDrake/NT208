
import Item from "./Item";
import { RESOURCES } from "./Menus";
import LogoUIT from "../../assets/LogoUIT.svg"
const ItemsContainer = () => {
    return (
        <div className="flex justify-center lg:grid-cols-2 gap-6 sm:px-8 px-52 py-8">
            <img
                src={LogoUIT}
                alt="logoUIT"
            />
            <Item Links={RESOURCES} />

        </div>
    )
}

export default ItemsContainer

