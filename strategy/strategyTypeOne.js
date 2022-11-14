export default class strategyTypeOne {

    _multiplier = 1;

    get(cost) {
        return cost * this._multiplier;
    };

};