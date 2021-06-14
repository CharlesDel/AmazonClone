import React from 'react';
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react';
import { IProduct } from '../../../app/models/product';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';

const productImageStyle = {
  filter: 'brightness(30%)'
};

const productImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const ProductDetailedHeader: React.FC<{product: IProduct}> = ({product}) => {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image
          src={`/assets/categoryImages/${product.category}.jpg`}
          fluid
          style={productImageStyle}
        />
        <Segment style={productImageTextStyle} basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={product.title}
                  style={{ color: 'white' }}
                />
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached='bottom'>
        <Button color='teal'>Join Product</Button>
        <Button>Cancel attendance</Button>
        <Button as={Link} to={`/manage/${product.id}`} color='orange' floated='right'>
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default observer(ProductDetailedHeader);
