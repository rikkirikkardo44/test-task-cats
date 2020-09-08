import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import "./CatalogItem.css";

const CatalogItem = (props) => {

    const {data, onLike, setItemInfoId} = props;
    const [like, setLike] = useState(data.like);
    const likeIcon = like[1] ? 'favorite' : 'favorite_border';
    const history = useHistory();

    const likeHandler = (id) => {
        if (like[1]) {
            setLike([like[0] - 1, false]);
        } else {
            setLike([like[0] + 1, true]);
        }
        onLike(id);
    }

    const editHandler = (id) => {
        setItemInfoId({id: id})
        history.push('/info');
    }

    return (
        <div className="col s12 m3 catalog-item" key={data._id}>
            <div className="card">
                <div className="card-image">
                    <img src={data.img} alt={data.name}/>
                    <span className="card-title">{data.name}</span>
                    <a className="btn-floating btn-large halfway-fab waves-effect waves-light" onClick={() => likeHandler(data._id)}><i
                        className="material-icons white red-text" style={{fontSize: "40px"}}>{likeIcon}</i></a>
                    <a id="edit-btn" className="btn-floating btn-small halfway-fab waves-effect waves-light white" onClick={() => editHandler(data._id)}><i
                        className="material-icons orange-text" style={{fontSize: "20px"}}>info_outline</i></a>
                </div>
                <div className="card-content card_footer">
                    <p className="like-count">Нравится: <span>{data.like[0]}</span></p>
                    <p className="card-content_description">{data.description}</p>
                </div>
            </div>
        </div>
    );

}

export default CatalogItem;