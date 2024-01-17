import EnterSVG from '@/assets/enter.svg'
import TabSVG from '@/assets/tab.svg'
import UpSVG from '@/assets/up.svg'
import DownSVG from '@/assets/down.svg'
import BackSpaceSVG from '@/assets/backspace.svg'

function Shorcuts() {


  return (
    <div>
      <div className='flex items-center'>
        <img src={UpSVG} width={36} />
        <img src={DownSVG} width={36} className='ml-2' />
        <span className='ml-4 text-sm'>Navigate between items in the search list</span>
      </div>
      <div className='flex items-center mt-4'>
        <img src={EnterSVG} width={36} />
        <span className='ml-4 text-sm'>Selects or deselects items in the search list.</span>
      </div>
      <div className='flex items-center mt-4'>
        <img src={TabSVG} width={36} />
        <span className='ml-4 text-sm'>Allows you to navigate between selected items</span>
      </div>
      <div className='flex items-center mt-4'>
        <img src={BackSpaceSVG} width={36} />
        <span className='ml-4 text-sm'>Removes the selected item on the input.</span>
      </div>
    </div>
  )
}

export default Shorcuts