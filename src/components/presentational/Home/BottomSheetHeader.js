import React from 'react';
/* Config - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';
const BottomSheetHeader = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.bottomSheetRef.snapTo(1);
      }}>
      <WelcomeMessageContainer>
        <View>
          <WelcomeMessageText>Boa noite</WelcomeMessageText>
          <WelcomeMessageName>Rafael</WelcomeMessageName>
        </View>
        <ProfileImage>
          <ProfileLetter>R</ProfileLetter>
        </ProfileImage>
      </WelcomeMessageContainer>

      <BottomSheetHeader>
        <BottomSheetNotch />
      </BottomSheetHeader>
    </TouchableOpacity>
  );
};

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

const WelcomeMessageContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  padding-top: ${SPACING.medium};
  padding-bottom: ${SPACING.medium};
`;

const ProfileImage = styled.View`
  height: 45;
  aspect-ratio: 1;

  border-radius: ${45 / 2};
  background-color: ${COLORS.primaryGray};

  justify-content: center;
  align-items: center;
`;

const ProfileLetter = styled.Text`
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

export default BottomSheetHeader;
