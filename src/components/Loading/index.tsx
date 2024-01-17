import styles from "./Loading.module.scss"

interface ILoading {
  text?: string
}

function Loading(props: ILoading) {
  const { text = "loading..." } = props

  return (
    <div className={styles['loading-container']}>
      <i className="ph-bold ph-spinner animate-spin text-2xl"></i>
      <span className='mt-1 text-sm'>{text}</span>
    </div>
  )
}

export default Loading
