import React, {FC, useState} from "react";
import {ICatsData} from "../config/ICatsData.model";

interface ICatalogItemProps {
    data: ICatsData,
    onLike(id:string): void,
    onDislike(id:string): void
}

const CatalogItem: FC<ICatalogItemProps> = ({data, onLike, onDislike}) => {

    const [like, setLike] = useState<boolean>(false);

    const handler = (): void => {
        if (like) {
            onDislike(data._id);
        } else {
            onLike(data._id);
        }
        setLike((like) => !like);
    };

    return (
        <div className="col s12 m3 mw" key={data._id}>
            <div className="card">
                <div className="card-image">
                    <img src={data.img} alt={data.name}/>
                    <span className="card-title">{data.name}</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light" onClick={handler}><i
                        className="material-icons white red-text">{like ? 'favorite' : 'favorite_border'}</i></a>
                </div>
                <div className="card-content mtx1">
                    <p className="like-count">Нравится: <span>{data.like}</span></p>
                    <p className="mh">{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;