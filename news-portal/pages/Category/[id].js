import React from 'react';
import { useRouter } from 'next/router'
const Category = () => {
    const router = useRouter()
  const { id } = router.query

  axios.get('https://newsdata.io/api/1/news?apikey=pub_123866b10f926081c444ac2c3dcd8a5a352d0&q=ukraine')
  .then(function (response) {
    // handle success
    setData(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  return <p>Category: {id}</p>
};

export default Category;