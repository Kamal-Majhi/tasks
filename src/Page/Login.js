import React, { useState } from 'react';
import { Form, Input, Button, Col,Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinish = (values)=>{
    console.log("Value Received:",values);
  }
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <Row justify="center" align="middle">
      <Col span={10}>
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
      onFinish={onFinish}
    >
     
      <Form.Item label="User name" required tooltip="This is a required field">
        <Input placeholder="Enter your user name" />
      </Form.Item>

      <Form.Item
        label="Email"
        required tooltip="This is a required field">
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item label="Password" required tooltip="This is a required field">
        <Input placeholder="Enter your password" />
      </Form.Item>

      <Form.Item
        label="Phone no"
        required tooltip="This is a required field">
        <Input placeholder="Enter your phone no" />
      </Form.Item>






      
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
  );
};

export default Login;