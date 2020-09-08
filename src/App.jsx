import React, {useState} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import CatsListPage from "./components/CatsListPage/CatsListPage";
import CreateItemForm from "./components/CreateItemForm/CreateItemForm";
import ItemEditForm from "./components/ItemEditForm/ItemEditForm";
import ItemInfoPage from "./components/ItemInfoPage/ItemInfoPage";
import testData from "../src/config/cats.json";

const App = () => {

    const initialDAta = testData.map((item) => {
        const newLike = {like: [item.like, false]};
        return {...item, ...newLike};
    });

    const [data, setData] = useState(initialDAta);

    const [itemInfoId, setItemInfoId] = useState({});

    const addItem = (newCat) => {
        const newData = [
            ...data,
            newCat
        ];
        setData((data) => newData);
    }

    const getIndex = (data, id) => {
        const index = data.findIndex((item) => item._id === id);
        return index;
    }

    return (
        <HashRouter>
            <Navbar/>
            <Switch>
                <Route render={() => <CatsListPage data={data}
                                                   setData={setData}
                                                   setItemInfoId={setItemInfoId}
                                                   getIndex={getIndex}/>} path="/" exact/>
                <Route render={() => <CreateItemForm addItem={addItem}/>} path="/create"/>
                <Route render={() => <ItemInfoPage getIndex={() => getIndex(data, itemInfoId.id)}
                                                   setData={setData}
                                                   data={data}/>} path="/info"/>
                <Route render={() => <ItemEditForm getIndex={() => getIndex(data, itemInfoId.id)}
                                                   data={data}/>} path="/edit"/>
            </Switch>
        </HashRouter>
    );
}

export default App;
