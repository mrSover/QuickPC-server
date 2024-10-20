import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetComponentInfoQuery } from '../../services/productsService'

interface ComponentInfoProps {

}

const ComponentInfo: FC<ComponentInfoProps> = ({ }) => {
  const { id } = useParams<{ id: string }>()
  if (typeof id !== "string") return <>Неправильне посилання</>
  const { data: componentInfo, isLoading } = useGetComponentInfoQuery(id)

  if (isLoading) return <>Loading...</>
  return (
    <div style={{ display: 'flex', gap: 50 }}>
      <img src="/sliderImg/slide1.webp" alt="" style={{ flex: "0 1 50%", width: "100%", objectFit: "cover" }} />
      <div>
        <div>{componentInfo?.description}</div>
        <div>{componentInfo?.price}</div>
        <button>Купити</button>
      </div>

    </div>
  )
}


export default ComponentInfo;