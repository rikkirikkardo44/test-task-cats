import React, {FC} from "react";
import {Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import {ICatsData} from "../config/ICatsData.model";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

const validateMessages = {
    required: '${label} is required!'
};

interface CreateItemFormProps {
    data: ICatsData[],
    addItem(data: ICatsData) : void
}

const CreateItemForm: FC<CreateItemFormProps> = ({data, addItem}) => {

    const onFinish = (values: any): void => {
        values._id = `${Date.now()}`;
        values.like = 0;
        addItem(values);
    };

    return (
        <div className="container">
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
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateItemForm;