import React from "react";
import { Card, Button, Col } from "react-bootstrap";

export default class ProductBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: ""
    };
  }

  render() {
    const img = this.props.product.variation_values[2].images[0].medium;
    const { title, description } = this.props.product;
    return (
      <React.Fragment>
        <Col lg={this.props.lg} md={this.props.md} xs={this.props.xs}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}
