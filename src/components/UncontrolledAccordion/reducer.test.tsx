import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
    // data
      const state: StateType = {
            collapsed: false
      }
    // change data
      const newState = reducer(state, {type: TOGGLE_COLLAPSED })

    //expected
      expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', () => {
      // data
      const state: StateType = {
            collapsed: true
      }
      // change data
      const newState = reducer(state, {type: TOGGLE_COLLAPSED })

      //expected
      expect(newState.collapsed).toBe(false);
})


test('error should be thrown', () => {
      // data
      const state: StateType = {
            collapsed: true
      }
      // change data

      //expected
      expect( () => {
            reducer(state, {type: "NOTEXISTED" })
      }).toThrowError();
})