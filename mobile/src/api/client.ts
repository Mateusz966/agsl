import axios from 'axios';
import {AXIOS_CONFIGURATION} from './const';

export const httpClient = axios.create(AXIOS_CONFIGURATION);
