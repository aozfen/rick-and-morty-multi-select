import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCharacters } from '@/store/character/list.slice'
import { ICharacter, ICharacterListSliceState } from '@/providers/interfaces'

import { parseUrlParams } from '@/utils/parse-url-params'
import { debounce } from '@/utils/debounce'
import { MultiSelect } from '@/components/MultiSelect'

import { Shortcuts } from '@/components/Shortcuts'

function Home() {
  const [selecteds, setSelecteds] = useState<ICharacter[]>([])
  
  const characterList: ICharacterListSliceState = useSelector((state: any) => state.character.list)
  const dispatch = useDispatch()

  const handleSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
    dispatch(getCharacters({ name }) as any)
  }, 800)
  
  const handleScrollEnd = () => {
    if(characterList.info.next && !characterList.loading) {
      dispatch(getCharacters(parseUrlParams(characterList.info.next) as { name: string }) as any)
    }
  }

  const selectedItems = (item: ICharacter) => {
    setSelecteds((prevSelecteds: ICharacter[]) => {
      const isItemAlreadySelected = prevSelecteds.some(selectedItem => selectedItem.id === item.id)
  
      return isItemAlreadySelected
        ? prevSelecteds.filter(selectedItem => selectedItem.id !== item.id)
        : [...prevSelecteds, item]
    })
  }

  return (
    <div className='flex items-center justify-center mt-96 p-4'>
      <div className='w-[500px]'>
        <MultiSelect
          placeholder='Search a character'
          data={characterList.data}
          loading={characterList.loading}
          selecteds={selecteds}
          search={handleSearch}
          onSelect={selectedItems}
          onScrollEnd={handleScrollEnd}
        />

        <div className='mt-16'>
          <Shortcuts />
        </div>
      </div>
    </div>
  )
}

export default Home
