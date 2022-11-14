import strategy from './strategy/index.js';

class StrategyResolver {

    strategyClass;
    
    constructor(type){
        const strategyClass = strategy[type] || strategy[TYPE_ONE];

        if(!strategyClass) {
            throw new Error('Comission type doest not exists');
        }

        this.strategyClass = new strategyClass();
    };

    get(cost) {
        return this.strategyClass.get(cost);
    };

};

export default StrategyResolver;
