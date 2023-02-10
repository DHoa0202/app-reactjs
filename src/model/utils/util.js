const getIndex = (column, value, array) => {
    if (!value || !array) return -1; // # 0==false
    if (column) for (let i = 0; i < array.length; i++) if (array[i][column] == value) return i;
    else for (let i = 0; i < array.length; i++) if (array[i] == value) return i; return -1;
};

const util = {
    /**
     * @param {string} column is attribute name EX: 'id' | undefined
     * @param {any} value is value of id
     * @param {Array} array to find index of value
     * @return {number} of index if exist || -1 if doesn't exist
     */
    getIndexOf: getIndex,
    /**
     * @param {Array} array to push
     * @param {object} entity add to array
     * @param {string} by is the condition column name
     * @return {Array} array
     */
    insert: (array, entity, by) => {
        let i = getIndex(by, entity[by], array);
        if (i < 0) array.push(entity);
        else throw `The ${entity[by]} value of the key ${by} already exist!`
        return array;
    },
    /**
     * @param {Array} array to set
     * @param {object} entity update on array
     * @param {string} by is the condition column name
     * @return {Array} array
     */
    update: (array, entity, by) => {
        let i = getIndex(by, entity[by], array);
        if (-1 < i) array[i] = entity;
        else throw `The ${entity[by]} value of the key ${by} does not exist!`
        return array;
    },
    /**
     * @param {Array} array to remove
     * @param {object} value of column [by] to delete 
     * @param {string} by is the condition column name
     * @return {Array} array
     */
    delete: (array, value, by) => {
        let i = getIndex(by, value, array);
        if (-1 < i) array.splice(i, 1);
        else throw `The ${value} value of the key ${by} does not exist!`
        return array;
    }
}

const cartHandle = {
    add: (array, id, qty) => new Promise((sol, jec) => {
        try {
            let i = getIndex('id', id, array);
            if (i < 0) array.push({ id, qty: qty || 1 });
            else array[i] = { id, qty: array[i]['qty'] + (qty || 1) }
            sol(array)
        } catch (error) { jec(error) }
    }),

    set: (array, id, qty) => new Promise((sol, jec) => {
        try {
            let i = getIndex('id', id, array);
            if (i < 0) array.push({ id, qty: qty || 1 });
            else if (qty) array[i]['qty'] = qty;
            else array.slice(i, 1);
            sol(array)
        } catch (error) { jec(error) }
    }),

    delete: (array, id) => new Promise((sol, jec) => {
        try {
            array.slice(getIndex('id', id, array), 1);
            sol(array);
        } catch (error) { jec(error) }
    })
}

const util2D = {

    /**
     * @param {Array} array to get the indexes
     * @param {Array} array2 is values need to find
     * @param {Array} by is name of the column
     * @returns {Array} returns all found data
     */
    innerJoin: (array, array2, by, getValue) => {
        let indexes = [];
        array2 = Object.assign([], array2);

        for (let i in array) for (let j in array2)
            // compare between two value by key of the object
            if (array[i][by] === array2[j][by]) {
                indexes.push(getValue ? array[i] : i);
                array2.slice(j, 1); // remove it when found
            }
        return indexes;
    },

    innerMerge: (array, array2, by) => {
        let data = []; // return this array
        array2 = Object.assign([], array2);

        for (let i in array) for (let j in array2) {
            let [obj1, obj2] = [array[i], array2[j]];
            // compare between two value by key of the object
            if (obj1[by] === obj2[by]) {
                data.push(Object.assign(obj1, obj2));
                array2.slice(j, 1); // remove it when found
            }
        }
        return data;
    }
}

export { cartHandle, util2D }
export default util;