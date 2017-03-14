import expect, {createSpy, spyOn, isSpy} from 'expect';
import deepFreeze from 'deep-freeze';

it('Adds Counter without mutating array.', () => {
    const addCounter = (list) => {
        return [...list, 0];
    };
    const testAddCounter = () => {
        const listBefore = [];
        const listAfter = [0];

        deepFreeze(listBefore);

        expect(
            addCounter(listBefore)
        ).toEqual(listAfter);
    };
    testAddCounter();
});

it('Removes Counter without mutating array.', () => {
    const removeCounter = (list, index) => {
        return [
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ];
    };
    const testRemoveCounter = () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 20];

        deepFreeze(listBefore);

        expect(
            removeCounter(listBefore, 1)
        ).toEqual(listAfter);
    };
    testRemoveCounter();
});

it('Increments Counter without mutating array.', () => {
    const incrementCounter = (list, index) => {
        return [
            ...list.slice(0, index),
            list[index] + 1,
            ...list.slice(index + 1)
        ];
    };
    const testIncrementCounter = () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 11, 20];

        deepFreeze(listBefore);

        expect(
            incrementCounter(listBefore, 1)
        ).toEqual(listAfter);
    };
    testIncrementCounter();
});

it('Decrements Counter without mutating array.', () => {
    const decrementCounter = (list, index) => {
        return [
            ...list.slice(0, index),
            list[index] - 1,
            ...list.slice(index + 1)
        ];
    };
    const testDecrementCounter = () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 9, 20];

        deepFreeze(listBefore);

        expect(
            decrementCounter(listBefore, 1)
        ).toEqual(listAfter);
    };
    testDecrementCounter();
});
console.log("================");
console.log("All Tests Passed!");
console.log("================");