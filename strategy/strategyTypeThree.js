
function getExternalData() {
    //on this function you can call external api service to get anythings....
    return 5;
}


export default class ComissionStrategyTypeThree {

    _multiplier = 10;

    get(cost) {
        const externalData = getExternalData();
        return cost *  externalData;
    };
    
};

