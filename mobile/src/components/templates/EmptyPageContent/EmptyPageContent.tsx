import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {EmptyPageContentProps, styles} from '.';

const EmptyPageContent: FC<EmptyPageContentProps> = ({
  fillerPhoto,
  headlineMedium,
  headlineSmall,
  actionElement,
}) => (
  <>
    <View style={styles.photoWrapper}>{fillerPhoto}</View>
    <View style={styles.textWrapper}>
      <Text style={styles.headlineMedium} variant="headlineMedium">
        {headlineMedium}
      </Text>
      <Text style={styles.headlineSmall} variant="headlineSmall">
        {headlineSmall}
      </Text>
      <View style={styles.actionElementWrapper}>{actionElement}</View>
    </View>
  </>
);

export default memo(EmptyPageContent);
