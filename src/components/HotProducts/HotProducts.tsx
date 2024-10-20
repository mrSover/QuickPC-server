import React, { FC } from 'react'
import { useGetHotProductsQuery } from '../../services/productsService'

const HotProducts: FC = ({ }) => {
  const { data: hotProducts, isLoading, error } = useGetHotProductsQuery("")
  return (
    <div style={{ display: 'flex', flexWrap: "wrap", gap: 20 }}>
      {
        hotProducts &&
        hotProducts.map((item) => {
          return (<div style={{ display: "flex", flexDirection: "column", width: 300 }} key={Math.random()}>
            <div style={{ width: 300 }}><img style={{ width: 300, height: 300, borderRadius: 1 }} src={"/sliderImg/slide5.webp"} alt="" /></div>
            <div>{item.item_id.name}</div>
            <div>{item.item_id.price} грн</div>
            <button>КУпити</button>
          </div>)
        })
      }
    </div>
  )
}

export default HotProducts;