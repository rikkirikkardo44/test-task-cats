import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";

import "./CatsCatalog.css";

const CatsCatalog = ({data, onLike, setItemInfoId}) => {
    const items = data.map((item) => <CatalogItem key={item._id} data={item} onLike={onLike}
                                                  setItemInfoId={setItemInfoId}/>)
    return (
        <>
            <div className="cats-catalog container flex">
                <div className="row flex">
                    {items}
                </div>
            </div>
        </>
    )
}

export default CatsCatalog;