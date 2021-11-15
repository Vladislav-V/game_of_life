import {sum} from './Cell';

describe('check sum fuction', () => {
    it('sum(1,1)', ()  => {
        expect(sum(1,1)).toBe(2)
    })
    it('sum(-1,1)', ()  => {
        expect(sum('-1',1)).toBe(2)
    })
})