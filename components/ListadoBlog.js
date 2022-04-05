import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'


const ListadoBlog = ({entradas}) => {
  return (
    <>
          <h2 className='heading'>
        Blog
          </h2>

          <div className={styles.blog}>
        {entradas.map(entrada => (
          <Entrada
          entrada={entrada}
          key={entrada.id}
          />
        ))}
          </div>
    </>
  )
}

export default ListadoBlog