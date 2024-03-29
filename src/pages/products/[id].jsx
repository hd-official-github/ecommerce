import { createClient } from 'contentful'
// export async function getStaticPaths () {
//   return {
//     paths: [],
//     fallback: 'blocking' 
//   }
// }
export async function getServerSideProps(context) {
  // console.log('ID ', context.params.id)
  const client = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.TOKEN_ID || ''
  })
  //   let vid = capitalizeFirstLetter(context.params.id).replaceAll('-', ' ')
  const v = await client.getEntries({
    content_type: 'product',
    'fields.slug': context.params.id
  })
  return {
    props: { proddata: v.items[0].fields,slug:context.params.id }
  }
}
import { StarFilled, WhatsAppOutlined } from '@ant-design/icons'
import { Divider, Rate } from 'antd'
import ImageCarousel from 'components/ImageCarousel'
import Product from 'components/Product'
import SectionHeading from 'components/SectionHeading'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Showdown from 'showdown'
export default function Collection({ proddata,slug }) {
  const [windowsize, setwindowsize] = useState(0)
  const [baseurl, setbaseurl] = useState("")
  useEffect(() => {
    setwindowsize(window.innerWidth)
    setbaseurl(window.location.origin)
  })
  const handleChange = value => {
    // console.log(`selected ${value}`)
  }
  
  var converter = new Showdown.Converter()
  console.log("PD", proddata);
  // console.log("PD");
  return (
    <>
      <div style={{ marginTop: 30 }}>
        <div className='container' style={{ maxWidth: 1000 }}>
          <div className='row'>
            <div className='col-md-6'>
              <ImageCarousel images={proddata.images} />
              {/* <img
                src='https://cdn.shopify.com/s/files/1/0581/9383/8255/products/CHI1372_720x.jpg?v=1625574126'
                alt=''
                style={{ width: '100%' }}
              /> */}
            </div>
            <div className='col-md-6 py-2 pcont'>
              <div className='bcrum'>Home / {proddata.collection[0].fields.collectionName} / {proddata.name}</div>
              <h4>{proddata.name}</h4>
              <div className='star'>
                <Rate disabled defaultValue={5} />
              </div>
              {
                proddata.inStock == true ? <p>Rs. {proddata.price}</p> : <><p style={{ textDecoration: 'line-through' }}>Rs. {proddata.price} </p><p>OUT OF STOCK</p></>
              }
              {/* <p>Rs. {proddata.price}</p> */}
              <span className='spa'>Inclusive of all taxes.</span>
              <div className='divider cox'></div>

              <Link href={`https://wa.me/919667656804?text=I'm%20interested%20in%20your%20product%20${baseurl}/products/${slug}`} className='btn-order'>
                <WhatsAppOutlined style={{ marginRight: 10 }} /> Enquire on
                Whatsapp
              </Link>
              {
                proddata.discount_prc && Object.keys(proddata.discount_prc).length > 0 && <div className='coup'>
                  <span>Flat {proddata.discount_prc.perc} off</span>
                  <span>
                    Use Coupon: <strong>{proddata.discount_prc.code}</strong>{' '}
                  </span>
                </div>

              }

              <div className='desc' dangerouslySetInnerHTML={{__html: converter.makeHtml(proddata.description)}}>
                
              </div>

              <div className='row d-flex justify-content-center align-items-center cc my-4'>
                <div className='col-6 sz'>Size</div>
                <div className='col-6 sz'>{proddata.size}</div>
                <div className='divider'></div>
                <div className='col-6 sz'>Colour</div>
                <div className='col-6 sz'>{proddata.color}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section>
        <SectionHeading title={'Recommened for this category'} />
        <div className='container'>
          <div className='row'>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section> */}
    </>
  )
}
