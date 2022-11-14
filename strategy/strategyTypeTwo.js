export default class ComissionStrategyTypeTwo {

    _multiplier = 10;

    get(cost) {
        return cost *  (this._multiplier * 0.9);
    };
    
};
