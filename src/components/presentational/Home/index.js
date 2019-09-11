import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import BottomSheet from 'reanimated-bottom-sheet';
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

const actionsList = [
  {
    label: 'VER EXTRATO',
    onPress: () => {},
  },
  {
    label: 'PAGAR',
    onPress: () => {},
  },
  {
    label: 'TRANSFERIR',
    onPress: () => {},
  },
  {
    label: 'KICK',
    onPress: () => {},
  },
  {
    label: 'CHAT',
    onPress: () => {},
  },
  {
    label: 'OUTROS',
    onPress: () => {},
  },
];

class Home extends React.Component {
  renderInner = () => (
    <BottomSheetContent>
      <BalanceContainer>
        <Text>Saldo</Text>
      </BalanceContainer>
      <ActionsScrollView horizontal showsHorizontalScrollIndicator={false}>
        {actionsList.map((item, index) => {
          return (
            <TouchableActionItem
              key={index}
              isLastItem={index === actionsList.length - 1}
              onPress={item.onPress}>
              <ActionItemLabel>{item.label}</ActionItemLabel>
            </TouchableActionItem>
          );
        })}
      </ActionsScrollView>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
      <Text>Sample text</Text>
    </BottomSheetContent>
  );

  renderHeader = () => (
    <React.Fragment>
      <WelcomeMessageContainer>
        <View>
          <WelcomeMessageText>Boa noite</WelcomeMessageText>
          <WelcomeMessageName>Rafael</WelcomeMessageName>
        </View>
      </WelcomeMessageContainer>

      <BottomSheetHeader>
        <BottomSheetNotch />
      </BottomSheetHeader>
    </React.Fragment>
  );

  bottomSheetRef = React.createRef();

  render() {
    return (
      <HomeContainer>
        <C6BankLogo
          source={require('../../../assets/c6bank.png')}
          resizeMode="contain"
        />
        <BackgroundPatternImage
          source={require('../../../assets/bgPattern.png')}
          resizeMode="cover"
        />

        <BottomSheet
          ref={this.bottomSheetRef}
          snapPoints={['95%', '40%', '18%']}
          initialSnap={1}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
        />
      </HomeContainer>
    );
  }
}

const C6BankLogo = styled.Image`
  width: 40%;
  margin-top: 10%;
`;

const BackgroundPatternImage = styled.Image`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const BottomSheetNotch = styled.View`
  width: 40;
  height: 5;

  border-radius: 20;
  background-color: ${COLORS.secondaryGray};
`;

const BottomSheetHeader = styled.View`
  height: 40;
  justify-content: center;
  align-items: center;

  background-color: white;

  border-top-left-radius: 16;
  border-top-right-radius: 16;
`;

const BottomSheetContent = styled.ScrollView`
  height: 100%;

  background-color: white;

  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  padding-top: ${SPACING.medium};
  padding-bottom: ${SPACING.medium};
`;

const BalanceContainer = styled.View`
  background-color: ${COLORS.primaryGray};

  padding-left: ${SPACING.huge};
  padding-right: ${SPACING.huge};
  padding-top: ${SPACING.huge};
  padding-bottom: ${SPACING.huge};

  border-radius: 8;
`;

const ActionsScrollView = styled.ScrollView`
  margin-top: 15;
  margin-left: -${SPACING.huge};

  padding-left: ${SPACING.huge};
  padding-top: ${SPACING.medium};
  padding-bottom: ${SPACING.medium};
`;

const TouchableActionItem = styled.TouchableOpacity`
  width: 100;
  aspect-ratio: 1;

  background-color: #ededed;

  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};

  margin-right: ${props => (props.isLastItem ? SPACING.huge : SPACING.medium)};

  justify-content: flex-end;
  align-items: center;
`;

const ActionItemLabel = styled.Text`
  font-size: 11;
  color: #636363;
`;

const WelcomeMessageContainer = styled.View`
  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  padding-top: ${SPACING.medium};
  padding-bottom: ${SPACING.medium};
`;

const WelcomeMessageText = styled.Text`
  color: white;
  font-weight: 200;
  font-size: 18;
`;

const WelcomeMessageName = styled.Text`
  color: white;
  font-size: 24;
  font-weight: 700;
`;

const HomeContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  background-color: ${COLORS.primaryBlack};
`;

export default Home;
