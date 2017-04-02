// Externals
import React, { PropTypes } from 'react';
import { View } from 'react-native';

// Components
import PriceLozenge from '../PriceLozenge';

// Styles
import {
  StyledButton,
  StyledText,
} from './styles';

// Config
import { lightest } from '../../config/colors';

const propTypes = {
  active: PropTypes.bool,
  onPress: PropTypes.func,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  active: false,
  onPress: () => {},
};

const ShippingButton = props => (
  <StyledButton
    onPress={props.onPress}
    underlayColor={lightest}
  >
    <View>
      <StyledText active={props.active}>
        {props.title}
      </StyledText>
      <PriceLozenge
        active={props.active}
        price={props.price}
      />
    </View>
  </StyledButton>
);

ShippingButton.propTypes = propTypes;
ShippingButton.defaultProps = defaultProps;

export default ShippingButton;
