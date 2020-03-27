const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique Id', ()=>{
  it('should generation an unique ID', ()=>{
    const id = generateUniqueId()
    expect(id).toHaveLength(8)
  })
})