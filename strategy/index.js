import strategyTypeOne from './strategyTypeOne.js';
import strategyTypeTwo from './strategyTypeTwo.js';
import strategyTypeThree from './strategyTypeThree.js';
import TYPES from './constant.js';

export default {
    [TYPES.TYPE_ONE]: strategyTypeOne,
    [TYPES.TYPE_TWO]: strategyTypeTwo,
    [TYPES.TYPE_THREE]: strategyTypeThree,
};
