import { FC, useState } from 'react'
import { useGetComponentsQuery } from '../services/productsService'
import { Link } from 'react-router-dom'



const Components: FC = ({ }) => {

  const [fetchParams, setFetchParams] = useState({ minPrice: "300", maxPrice: "54100", sortValue: "price" })
  const { data, isLoading } = useGetComponentsQuery(fetchParams)
  if (isLoading) return <>Loading...</>
  if (!data) return <>No components available</>;



  return (
    <div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: 30,
        backdropFilter: "blur(5px)",
        background: "rgba(255,255,255,0.05)",
        borderRadius: 10,
        padding: " 70px 0"
      }}>
        {
          data.result.map(item => (
            <div key={item._id} style={{ padding: "10px" }}>
              <img src="/sliderImg/slide2.webp" alt="" style={{ width: "100%", objectFit: "cover", borderRadius: 20 }} />
              <div>{item.name}</div>
              <div>ціна {item.price}
              </div>
              <Link to={"/computers/" + item._id}>Купити</Link>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Components;