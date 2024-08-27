import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TileGame from '../TileGame.vue'
import Answers from '../Answers.vue'

describe('contains tile zero un dos 0 1 2', () => {
  it('renders properly', () => {
    const wrapper = mount(TileGame)
    expect(wrapper.text()).toContain('zeroundos012')
  })
})


describe('component check', () => {
    it('answers component exist', () => {
      const wrapper = mount(TileGame)
      expect(wrapper.findComponent(Answers).exists()).toBe(true)
    })
})

describe('TileGame Component', () => {
    it('should have the correct initial data for tiles', () => { 
        //Mount the component
        const wrapper = mount(TileGame);

        //Access component internal data
        const tilesData = wrapper.vm.tiles


         // Expected tiles data
    const expectedTiles = [
        { number: 0, name: "zero" },
        { number: 1, name: "un" },
        { number: 2, name: "dos" },
        { number: 0, name: "0" },
        { number: 1, name: "1" },
        { number: 2, name: "2" }
      ]
  
      // Assert that the component's data matches the expected data
      expect(tilesData).toEqual(expectedTiles)
    })
})

describe('TileGame Component', () => {
    it('should update tiles after connect is triggered', async () => {
      // Mount the component
      const wrapper = mount(TileGame)
  
      // Simulate clicks on two tiles that should match
      const tileElements = wrapper.findAll('.tile')
  
      // Click on the first and the fourth tiles (matching numbers: 0)
      await tileElements[0].trigger('click') // "zero"
      await tileElements[3].trigger('click') // "0"
  
      // Access the updated tiles data
      const updatedTiles = wrapper.vm.tiles
  
      // Check that the matched tiles are removed (length should be 4 instead of 6)
      expect(updatedTiles.length).toBe(4)
  
      // Ensure the tiles with number 0 are removed
      expect(updatedTiles).toEqual([
        { number: 1, name: "un" },
        { number: 2, name: "dos" },
        { number: 1, name: "1" },
        { number: 2, name: "2" }
      ])
    })
  
    it('should not update tiles if two non-matching tiles are clicked', async () => {
      // Mount the component
      const wrapper = mount(TileGame)
  
      // Simulate clicks on two tiles that do not match
      const tileElements = wrapper.findAll('.tile')
  
      // Click on the first and second tiles (non-matching numbers: 0 and 1)
      await tileElements[0].trigger('click') // "zero"
      await tileElements[1].trigger('click') // "un"
  
      // Access the updated tiles data
      const updatedTiles = wrapper.vm.tiles
  
      // Check that no tiles are removed (length should still be 6)
      expect(updatedTiles.length).toBe(6)
  
      // Ensure the tiles array remains unchanged
      expect(updatedTiles).toEqual([
        { number: 0, name: "zero" },
        { number: 1, name: "un" },
        { number: 2, name: "dos" },
        { number: 0, name: "0" },
        { number: 1, name: "1" },
        { number: 2, name: "2" }
      ])
    })
  })