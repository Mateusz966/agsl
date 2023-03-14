import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {SignInRequest, SignInResponse} from '../../../api/user/types';
import {UserLogin, userLoginSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {ERROR_MESSAGES} from '../../../utils/errorDictionary';
import {loginUser} from '../../../api/user';
import {useSnackbarVisibility} from '../../atoms/SnackbarMessage/useSnackbarVisibility';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {StackNavigationState, useNavigation} from '@react-navigation/native';
import {Scenes} from '../../../navigators/const';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {
  AddDishNavigationProps,
  RootStackParamList,
} from '../../../navigators/types';
import {CAMERA_OPTIONS} from './const';

export const useCamera = () => {
  const handleLaunchCamera = () =>
    launchCamera(CAMERA_OPTIONS, response => {
      response.assets;
    });
  return {handleLaunchCamera};
};
