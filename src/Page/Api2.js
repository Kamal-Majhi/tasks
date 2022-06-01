import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";

const Api2 = () => {
  const [api3, setApi3] = useState([]);
  const api3Fun = async () => {
    const api3data = await axios.get("http://localhost:8000/admin2");
    setApi3(api3data.data);
  };
  useEffect(() => {
    api3Fun();
  });

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
      <Col span={8} >
              <Card className="antCard"  bordered={false}>
                <p>{api3.id}</p>
                <p>{api3.name}</p>
                <p>{api3.address}</p>

              </Card>
            </Col>
      </Row>
    </div>
  );
};

export default Api2;
