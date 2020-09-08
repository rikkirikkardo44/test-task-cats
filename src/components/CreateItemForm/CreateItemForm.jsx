import React from "react";
import {Form, Input, Button, Space} from 'antd';
import 'antd/dist/antd.css';
import {NavLink, useHistory} from "react-router-dom";

const layout = {
    labelCol: {span: 7},
    wrapperCol: {span: 10},
};

const validateMessages = {
    required: '${label} is required!'
};

const CreateItemForm = ({addItem}) => {

    const history = useHistory();

    const onFinish = (values) => {
        values._id = `${Date.now()}`;
        values.like = [0, false];
        addItem(values);
        history.push('/');
    };

    return (
        <div id="form" className="container z-depth-2">
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name='name' label="Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='img' label="Image" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='description' label="Description" rules={[{required: true}]}>
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 10}}>
                    <Space>
                        <Button id="submit-button" type="primary" htmlType="submit">
                            Create
                        </Button>
                        <Button id="cancel-button" htmlType="button">
                            <NavLink to="/">Cancel</NavLink>
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateItemForm;