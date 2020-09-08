import React from "react";
import {useHistory} from "react-router-dom";
import {Modal, Button, Space} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import "./ItemInfoPage.css";

const {confirm} = Modal;

const ItemInfoPage = ({getIndex, setData, data}) => {
    const currentData = data[getIndex()];
    const history = useHistory();

    const onEdit = () => {
        history.push('/edit');
    }

    const onBack = () => {
        history.push('/');
    }

    const onDelete = (id) => {
        const index = data.findIndex((item) => item._id === id);
        const newData = [
            ...data.slice(0, index),
            ...data.slice(index + 1)
        ];
        setData(newData);
        history.push('/');
    };

    function showConfirm() {
        confirm({
            title: 'Do you want to delete these item?',
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                onDelete(currentData._id);
                history.push('/');
            },
            onCancel() {
            },
        });
    }

    return (

        <div id="form" className="item-info-page container z-depth-2">
            <div className="item-info-page_body container">
                <img className="item-info-page_image" src={currentData.img} alt={currentData.name}/>
                <div className="item-info-page_body-title">
                    <div className="item-info-page_name">{currentData.name}</div>
                    <div className="item-info-page_like">Понравилось: {currentData.like[0]}</div>
                    <div className="item-info-page_description">{currentData.description}</div>
                </div>
            </div>
            <div className="item-info-page_buttons">
                <Space>
                    <Button type="primary" onClick={onEdit}>Edit</Button>
                    <Button onClick={showConfirm} type="primary" danger>Delete</Button>
                    <Button onClick={onBack}>Back</Button>
                </Space>
            </div>
        </div>
    )
}

export default ItemInfoPage;