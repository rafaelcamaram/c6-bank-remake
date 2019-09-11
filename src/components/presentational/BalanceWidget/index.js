import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

/* Config - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Components - imports */
import Row from '../../core/Row';

const BalanceWidget = props => {
  const [isBalanceVisible, setBalanceVisibility] = useState(false);

  return (
    <BalanceContainer>
      <Row alignItems="center">
        <FlagImage
          resizeMode="contain"
          source={require('../../../assets/icons/brazilFlag.png')}
        />
        <BalanceLabel>Saldo</BalanceLabel>
      </Row>
      <Row justifyContent="space-between" marginTop={SPACING.default}>
        <Row alignItems="flex-end">
          <Text style={{color: COLORS.detailTextColor}}>R$</Text>
          <BalanceValueLabel adjustsFontSizeToFit>
            {isBalanceVisible ? '90,00' : '••••••'}
          </BalanceValueLabel>
        </Row>
        <ShowBalanceButton
          onPress={() => setBalanceVisibility(!isBalanceVisible)}>
          <ShowBalanceLabel>
            {isBalanceVisible ? 'Ocultar' : 'Mostrar'}
          </ShowBalanceLabel>
        </ShowBalanceButton>
      </Row>
    </BalanceContainer>
  );
};

const BalanceContainer = styled.View`
  background-color: ${COLORS.primaryGray};

  padding-left: ${SPACING.large};
  padding-right: ${SPACING.large};
  padding-top: ${SPACING.large};
  padding-bottom: ${SPACING.large};

  border-radius: 8;
`;

const BalanceLabel = styled.Text`
  font-size: 18;
  color: ${COLORS.lightTextColor};
`;

const BalanceValueLabel = styled.Text`
  font-size: 28;
  font-weight: 400;
  margin-left: ${SPACING.medium};
`;

const ShowBalanceLabel = styled.Text`
  text-decoration-line: underline;
  text-transform: uppercase;

  font-size: 12;
`;

const ShowBalanceButton = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 5;
  padding-bottom: 5;
  padding-left: 5;
  padding-right: 5;
`;

const FlagImage = styled.Image`
  height: 20;
  width: 20;

  margin-right: ${SPACING.medium};

  border-radius: 5;
`;

export default BalanceWidget;
