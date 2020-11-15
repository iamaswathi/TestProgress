import {loadProgressBars, abc} from './progressBar';
const fetch = require('node-fetch');


describe('Fetch data', () => {
    it('should call fetch with url', () => {
      require('./progressBar')
      expect(global.fetch).toHaveBeenCalledWith(
        'http://pb-api.herokuapp.com/bars'
      )
    })
  })
describe('Fetch3', () => {
    const desiredResult = {
        bars: [51, 50],
        buttons: [22, 5, -26, -16],
        limit: 180
    };

    it('real fetch call', () => {
        const res =  fetch('http://pb-api.herokuapp.com/bars');
        
        const result =  res.json();
        expect(result).toMatchObject(desiredResult);  // Success!
    })
});



describe('Fetch', () => {
    it('should call fetch with url', () => {
      // Setting a mock Promise response for this test
      jest.spyOn(loadProgressBars, 'fetch').mockImplementation(
        () =>
          new Promise(resolve => {
            resolve({
              json: () =>
                new Promise(resolve =>
                  resolve({
                    bars: [51, 50],
                    buttons: [22, 5, -26, -16],
                    limit: 180
                  })
                )
            })
          })
      )
      require('./progressBar')
      expect(loadProgressBars.fetch).toHaveBeenCalledWith(
        'http://pb-api.herokuapp.com/bars'
      )
    })
  
    // Reset the mock after each test
    afterEach(() => {
        loadProgressBars.fetch.mockClear()
    })
  
})