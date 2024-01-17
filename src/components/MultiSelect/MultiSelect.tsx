import { ICharacter } from "@/providers/interfaces"

import { MultiSelectDialog } from "../MultiSelectDialog"
import { MultiSelectTag } from "../MultiSelectTag"
import useMultiSelect from "./useMultiSelect"

import styles from './MultiSelect.module.scss'
import { IMultiSelect } from "."

function MultiSelect(props: IMultiSelect) {
  const {
    placeholder,
    loading,
    data,
    selecteds,
    onSelect,
    onScrollEnd
  } = props

  const {
    searchValue,
    selectedIndex,
    selectedTagIndex,
    onSearch,
    handleKeyDown,
  } = useMultiSelect(props)


  return (
    <div className={styles['multi-select-container']}>
      <div className={styles['multi-select']}>
        {selecteds.map((item: ICharacter, index: number) => (
          <MultiSelectTag
            key={item.id}
            index={index}
            navigationSelectedIndex={selectedTagIndex}
            title={item.name}
            unSelect={() => onSelect(item)}
          />
        ))}
        <input
          className={styles['multi-select-input']}
          placeholder={placeholder}
          onChange={onSearch}
          onKeyDown={handleKeyDown}
        />
      </div>
      <MultiSelectDialog
        isShow={!!searchValue}
        loading={loading}
        data={data}
        onSelect={onSelect}
        selecteds={selecteds}
        searchValue={searchValue}
        navigationSelectedIndex={selectedIndex}
        onScrollEnd={onScrollEnd}
      />
    </div>
  )
}

export default MultiSelect
