import { FC } from 'react'
import { useGetComputersQuery } from '../services/productsService';


const Computers: FC = ({ }) => {

  const { data: Computers, isLoading } = useGetComputersQuery("")
  if (isLoading) return <>Loading...</>
  if (!Computers) return <>No components available</>;
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 30 }}>
        {
          Computers.result.map(item => (
            <div key={item._id} style={{}}>
              <img src="/sliderImg/slide2.webp" alt="" style={{ width: "100%", objectFit: "cover", borderRadius: 20 }} />
              <div>{item.name}</div>
              <div>ціна {item.price}
              </div>
              <button>Купити</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Computers;