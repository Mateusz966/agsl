import {StyleSheet} from 'react-native';
import {typography, colors} from '../../../config/theme';

export default StyleSheet.create({
  modalButtonsContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    marginLeft: 10,
    borderTopWidth: 0.5,
    borderTopColor: 'black',
  },
  modalTitle: {
    textAlign: 'center',
    ...typography.large,
    color: colors.primary,
    height: 50,
  },
  modalBody: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    ...typography.form,
    height: 50,
    width: 270,
  },
});
