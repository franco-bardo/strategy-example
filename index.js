import StrategyResolver from "./strategyResolver.js";
import strategyTypes from "./strategy/constant.js";

const strategyOne = new StrategyResolver(strategyTypes.TYPE_ONE);
const strategyTwo = new StrategyResolver(strategyTypes.TYPE_TWO);
const strategyThree = new StrategyResolver(strategyTypes.TYPE_THREE);

const cost = 100;

console.warn('Strategy one result:   ', strategyOne.get(cost));
console.warn('Strategy two result:   ', strategyTwo.get(cost));
console.warn('Strategy trhee result: ', strategyThree.get(cost));

