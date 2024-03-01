export const ENGINE = {

    evade_chance: (): any => {
        const roll = Math.floor(Math.random() * 100) + 1;
        return roll;
    },

    luck_chance: (): any => {
        const roll = Math.floor(Math.random() * 10) + 1;
        return roll.toString();
    }
    
};