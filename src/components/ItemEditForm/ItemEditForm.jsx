import React  from "react";
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


const ItemEditForm = ({getIndex, data}) => {
    const currentData = data[getIndex()];
    const history = useHistory();
    const fields = [
        {
            name: ['name'],
            value: currentData.name,
        },
        {
            name: ['img'],
            value: currentData.img,
        },
        {
            name: ['description'],
            value: currentData.description,
        }
    ];

    const onFinish = (values) => {
        const index = getIndex();
        data[index].name = values.name;
        data[index].img = values.img;
        data[index].description = values.description;
        history.push('/');
    };

    return (
        <div id="form" className="container z-depth-2">
            <Form {...layout} fields={fields} name="nest-messages" onFinish={onFinish}
                  validateMessages={validateMessages}>
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
                        <Button type="primary" htmlType="submit">
                            Apply
                        </Button>
                        <Button htmlType="button">
                            <NavLink to="/">Cancel</NavLink>
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ItemEditForm;