import { FC } from 'react'
import { useParams } from 'react-router-dom';
import { useGetComputerInfoQuery } from '../../services/productsService';


const ComputerPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  if (typeof id !== "string") return <>Неправильне посилання</>
  const { data: computerInfo, isLoading } = useGetComputerInfoQuery(id)

  if (isLoading) return <>Loading...</>
  return (
    <div style={{ display: 'flex', gap: 50 }}>
      <img src="/sliderImg/slide1.webp" alt="" style={{ flex: "0 1 50%", width: "100%", objectFit: "cover" }} />
      <div>
        <div>{computerInfo?.description}</div>
        <div>{computerInfo?.price}</div>
        <button>Купити</button>
      </div>

    </div>
  )
}

export default ComputerPage;