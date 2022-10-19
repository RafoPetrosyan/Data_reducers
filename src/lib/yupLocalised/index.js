import * as yup from 'yup';

import minAge from './validations/minAge';
import stringLength from './validations/stringLength';

yup.addMethod(yup.string, 'minAge', minAge);
yup.addMethod(yup.string, 'stringLength', stringLength);

export default yup;
