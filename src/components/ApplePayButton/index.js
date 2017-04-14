// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';

// Styles
import {
  StyledButton,
  StyledText,
} from './styles';

// Images
import iconApplePay from './icon-apple-pay.png';
import iconApplePayActive from './icon-apple-pay-active.png';

class ApplePayButton extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    index: PropTypes.number.isRequired,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    active: false,
    onPress: null,
  };

  onPress = () => (this.props.onPress ? this.props.onPress(this.props.index) : null)

  render() {
    return (
      <StyledButton
        active={this.props.active}
        activeOpacity={0.6}
        onPress={this.onPress}
      >
        <Image source={this.props.active ? iconApplePayActive : iconApplePay} />
        <StyledText>Bientôt disponible !</StyledText>
      </StyledButton>
    );
  }

}

export default ApplePayButton;
