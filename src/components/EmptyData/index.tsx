import styles from "./EmptyData.module.scss"

interface IEmptyModule {
  text?: string
}

function EmptyModule(props: IEmptyModule) {
  const { text = "Not found" } = props

  return (
    <div className={styles['empty-container']}>
      <i className="ph-fill ph-warning text-4xl text-gray-600"></i>
      <span className='mt-1 text-sm text-gray-600'>{text}</span>
    </div>
  )
}

export default EmptyModule
