import React, {FC} from "react";
import {ICatsData} from "../config/ICatsData.model";
import CatalogItem from "./CatalogItem";

interface ICatsCatalogProps {
    data: ICatsData[],
    onLike(id: string): void,
    onDislike(id: string): void,
}

const CatsCatalog: FC<ICatsCatalogProps> = ({data, onLike, onDislike}) => {
    const items = data.map((item: ICatsData) => <CatalogItem data={item} onLike={onLike} onDislike={onDislike}/>)
    return (
        <div className="container flex">
            <div className="row flex">
                {items}
            </div>
        </div>
    )
}

export default CatsCatalog;