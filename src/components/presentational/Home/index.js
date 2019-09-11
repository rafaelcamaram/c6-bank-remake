import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import BottomSheet from 'reanimated-bottom-sheet';

/* Config - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Mock - imports */
import actionsList from './actionsList';
import BalanceWidget from '../BalanceWidget';

class Home extends React.Component {
  state = {
    shouldDisplayBalance: false,
  };

  renderInner = () => (
    <BottomSheetScrollView>
      <BalanceWidget />
      <ActionsScrollView horizontal showsHorizontalScrollIndicator={false}>
        {actionsList.map((item, index) => {
          return (
            <TouchableActionItem
              key={index}
              activeOpacity={1}
              isLastItem={index === actionsList.length - 1}
              onPress={item.onPress}>
              {item.icon ? (
                <Image source={item.icon} />
              ) : (
                <OtherIconView>
                  <OtherIconText>+</OtherIconText>
                </OtherIconView>
              )}
              <ActionItemLabel>{item.label}</ActionItemLabel>
            </TouchableActionItem>
          );
        })}
      </ActionsScrollView>
    </BottomSheetScrollView>
  );

  renderHeader = () => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        this.bottomSheetRef.current.snapTo(1);
      }}>
      <WelcomeMessageContainer>
        <View>
          <WelcomeMessageText>Boa noite</WelcomeMessageText>
          <WelcomeMessageName>Rafael</WelcomeMessageName>
        </View>
        <ProfileImageView>
          <ProfileLetterText>R</ProfileLetterText>
        </ProfileImageView>
      </WelcomeMessageContainer>

      <BottomSheetHeaderView>
        <BottomSheetNotchView />
      </BottomSheetHeaderView>
    </TouchableOpacity>
  );

  bottomSheetRef = React.createRef();

  render() {
    return (
      <HomeContainer>
        <C6BankImage
          source={require('../../../assets/c6bank.png')}
          resizeMode="contain"
        />
        <BackgroundPatternImage
          source={require('../../../assets/bgPattern.png')}
          resizeMode="cover"
        />

        <BottomSheet
          ref={this.bottomSheetRef}
          snapPoints={['95%', '50%', '18%']}
          initialSnap={1}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
        />
      </HomeContainer>
    );
  }
}

const C6BankImage = styled.Image`
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

const BottomSheetNotchView = styled.View`
  width: 40;
  height: 5;

  border-radius: 20;
  background-color: ${COLORS.secondaryGray};
`;

const BottomSheetHeaderView = styled.View`
  height: 40;
  justify-content: center;
  align-items: center;

  background-color: white;

  border-top-left-radius: 16;
  border-top-right-radius: 16;
`;

const BottomSheetScrollView = styled.ScrollView`
  height: 100%;

  background-color: white;

  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  padding-top: ${SPACING.medium};
  padding-bottom: ${SPACING.medium};
`;

const ActionsScrollView = styled.ScrollView`
  margin-top: ${SPACING.small};
  margin-left: -${SPACING.huge};

  padding-left: ${SPACING.huge};
  padding-top: ${SPACING.medium};
  padding-bottom: ${SPACING.medium};
`;

const TouchableActionItem = styled.TouchableOpacity`
  width: 100;
  aspect-ratio: 1;

  justify-content: center;
  align-items: center;

  background-color: #fbfbfb;
  border-radius: 8;

  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};

  margin-right: ${props => (props.isLastItem ? SPACING.huge : SPACING.medium)};
`;

const ActionItemLabel = styled.Text`
  font-size: 11;
  color: #636363;
  margin-top: ${SPACING.default};
`;

const WelcomeMessageContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  padding-top: ${SPACING.medium};
  padding-bottom: ${SPACING.medium};
`;

const ProfileImageView = styled.View`
  height: 45;
  aspect-ratio: 1;

  border-radius: ${45 / 2};
  background-color: ${COLORS.primaryGray};

  justify-content: center;
  align-items: center;
`;

const ProfileLetterText = styled.Text`
  font-size: 14;
  font-weight: 200;
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

const OtherIconView = styled.View`
  height: 41;
  width: 41;

  background-color: ${COLORS.primary};
  border-radius: 8;

  justify-content: center;
  align-items: center;
`;

const OtherIconText = styled.Text`
  color: ${COLORS.white};
  font-size: 28;
`;
export default Home;
