import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TileGame from '../TileGame.vue'
import Answers from '../Answers.vue'

describe('contains tile zero un dos 0 1 2', () => {
  it('renders properly', async() => {
    const wrapper = mount(TileGame)

    await wrapper.setProps({ tiles: [
          {
            number:0, name: "zero"
          },
          {
            number:1, name: "un"
          },
          {
            number:2, name: "dos"
          },
          {
            number:0, name: "0"
          },
          {
            number:1,name: "1"
          },
          {
            number:2, name: "2"
          }
        ] 
      })
    const text = wrapper.text();
    const expectedNames = ['zero', 'un', 'dos', '0', '1', '2'];

    expectedNames.forEach(name => {
      expect(text).toContain(name);
    });
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
        const vm = wrapper.vm  as any;
        const tiles = vm.game.tiles.value.length;


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
      expect(vm.game.tiles.value).toEqual(expect.arrayContaining(expectedTiles));
    })
})

describe('TileGame Component', () => {
    it('should update tiles after connect is triggered', async () => {
      // Mount the component
      const wrapper = mount(TileGame)
      const initialTiles =  [
        { number: 0, name: "zero" },
        { number: 1, name: "un" },
        { number: 2, name: "dos" },
        { number: 0, name: "0" },
        { number: 1, name: "1" },
        { number: 2, name: "2" }
    ];

    const expectedTiles = [
      { number: 1, name: "un" },
      { number: 2, name: "2" },
      { number: 2, name: "dos" },
      { number: 1, name: "1" },
     
    ]

       // set the tiles data skipping the shuffle

      const vm = wrapper.vm as any;
      vm.game.tiles.value = initialTiles;

      await wrapper.vm.$nextTick()
      const tileElements = wrapper.findAll('.tile');

      // Click on the first and the fourth tiles (matching numbers: 0)
      await tileElements[0].trigger('click') // "zero"
      await tileElements[3].trigger('click') // "0"
  
      await wrapper.vm.$nextTick()
      
      const updatedTiles = vm.game.tiles.value;
  
      // Check that the matched tiles are removed (length should be 4 instead of 6)
      expect(updatedTiles.length).toBe(4)

      
  
      // Ensure the tiles with number 0 are removed
      expect(updatedTiles).toEqual(expect.arrayContaining(expectedTiles))
    })
  
    it('should not update tiles if two non-matching tiles are clicked', async () => {
      // Mount the component
      const wrapper = mount(TileGame)
      const expectedTiles =  [
        { number: 0, name: "zero" },
        { number: 1, name: "un" },
        { number: 2, name: "dos" },
        { number: 0, name: "0" },
        { number: 1, name: "1" },
        { number: 2, name: "2" }
      ];

      const vm = wrapper.vm as any;
      vm.game.tiles.value = expectedTiles;

      await wrapper.vm.$nextTick()
      

      // Simulate clicks on two tiles that do not match
      const tileElements = wrapper.findAll('.tile')

      // Click on the first and second tiles (non-matching numbers: 0 and 1)
      await tileElements[0].trigger('click') // "zero"
      await tileElements[1].trigger('click') // "un"

      
      // Access the updated tiles data
      const updatedTiles = vm.game.tiles.value

      // Check that no tiles are removed (length should still be 6)
      expect(updatedTiles.length).toBe(6)

      // Ensure the tiles array remains unchanged
      expect(updatedTiles).toEqual(expect.arrayContaining(expectedTiles))
    })
  })