export const initialState = {
    currentValue: "0",
    operator: null,
    previusValue: null,
};

export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
        return { currentValue: `${value}` };
    }
    return {
        currentValue: `${state.currentValue}${value}`,
    };
};

const handleEqual = (state) => {
    const {currentValue, previusValue, operator} = state;

    const current = parseFloat(currentValue);
    const previus = parseFloat(previusValue);
    const resetState = {operator: null, previusValue: null};

    switch (operator){
        case "+":
            return {
                currentValue: `${previus + current}`,
                ...resetState,
            };
        case "-":
            return {
                currentValue: `${previus - current}`,
                ...resetState,
            };
        case "*":
            return {
                currentValue: `${previus * current}`,
                ...resetState,
            };
        case "/":
            return {
                currentValue: `${previus / current}`,
                ...resetState,
            };
        default:
            return state;
    }
};

const calculator = (type, value, state) => {
    switch (type){
        case "number":
            return handleNumber(value, state);
        case "clear":
            return initialState;
        case "posneg":
            return {
                currentValue: `${parseFloat(state.currentValue) *-1}`,
            };
        case "percentage":
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`,
            };
        case "operator":
            return {
                operator: value,
                previusValue: state.currentValue,
                currentValue: "0",
            };
        case "equal":
            return handleEqual(state);
        default:
            return state;
        }
    };

export default calculator;
