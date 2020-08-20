import React, {FC, useState} from "react";
import {ICatsData} from "../config/ICatsData.model";
import CatsCatalog from "./CatsCatalog";

interface ICatsListPageProps {
    data: ICatsData[],
    setData (data: ICatsData[]): void
}

const CatsListPage: FC<ICatsListPageProps> = ({data, setData}) => {

    const deleteItem = (id: string): void => {
        const index: number = data.findIndex((item: ICatsData) => item._id === id);
        const newData: ICatsData[] = [
            ...data.slice(0, index),
            ...data.slice(index + 1)
        ];
        setData(newData);
    };

    const onLike = (id: string): void => {
        const index: number = data.findIndex((item: ICatsData) => item._id === id);
        data[index].like = data[index].like + 1;
    }

    const onDislike = (id: string): void => {
        const index: number = data.findIndex((item: ICatsData) => item._id === id);
        data[index].like = data[index].like - 1;
    }

    return (
        <CatsCatalog data={data} onLike={onLike} onDislike={onDislike}/>
    )
}

export default CatsListPage;