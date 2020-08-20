import React, {FC, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import CatsListPage from "./components/CatsListPage";
import CreateItemForm from "./components/CreateItemForm";
import {ICatsData} from "./config/ICatsData.model";
import {catsData} from "./config/CatsData";

const App: FC = () => {

    const [data, setData] = useState<ICatsData[]>(catsData);

    const addItem = (newCat: ICatsData): void => {
        const newData: ICatsData[] = [
            ...data,
            newCat
        ];
        setData((data) => newData);
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route render={() => <CatsListPage data={data} setData={setData}/>} path="/" exact/>
                <Route render={() => <CreateItemForm data={data} addItem={addItem}/>} path="/create"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
