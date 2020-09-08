import React from "react";
import CatsCatalog from "../CatsCatalog/CatsCatalog";

const CatsListPage = ({data, setItemInfoId, getIndex}) => {

    const onLike = (id) => {
        const index = getIndex(data, id);
        const likeCount = data[index].like[0];
        const isLiked = data[index].like[1];
        if (!isLiked) {
            data[index].like = [likeCount + 1, true];
        } else {
            data[index].like = [likeCount - 1, false];
        }
    }

    return (
        <CatsCatalog data={data} onLike={onLike} setItemInfoId={setItemInfoId}/>
    )
}

export default CatsListPage;