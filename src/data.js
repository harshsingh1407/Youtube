export const api_key = "AIzaSyAHZNnW1YXHlf1SorCI8Y7mApwe-k1PPD0";

export const valueConvertor = (value) => {
    if(value>=1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000) {
        return Math.floor(value/1000)+"K";
    }
    else {
        return value;
    }
}