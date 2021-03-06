import React from 'react';
import { Item, Button, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../app/models/product';
import {format} from 'date-fns';

const ProductListItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header as='a'>{product.title}</Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{product.description}</span>
        <Button
          as={Link}
          to={`/products/${product.id}`}
          floated='right'
          content='View'
          color='blue'
        />
      </Segment>
    </Segment.Group>
  );
};

export default ProductListItem;
