import React from "react";
import ProductBox from "./ProductBox";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchReqdata } from "../Actions";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchReqdata();
  }

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <Container>
          <Row>
            {products.length > 0 &&
              products.map(product => {
                const { id } = product;
                return <ProductBox key={id} product={product} />;
              })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("this is state", state.products);
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { fetchReqdata }
)(ProductList);
