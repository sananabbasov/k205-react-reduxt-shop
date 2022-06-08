import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../../redux/Actions/ProductAction'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Rating, Skeleton } from '@mui/material';


const Product = () => {

  const getProduct = useSelector((state) => state.products.products.message)

  const dispach = useDispatch()

  useEffect(() => {
    dispach(getProductsAction())
  }, [])


  console.log(getProduct);


  const LoadingData = () => {
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={345} height={118} />
        </Card>
      </>
    )
  }

  return (

    <>
      <Grid container spacing={0}>
        {
          !getProduct ? <LoadingData /> :
          getProduct.map(product => (
            <Card key={product.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.coverPhoto}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Detail</Button>
                <Button size="small">
                  <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                </Button>
              </CardActions>
            </Card>

          ))

        }
      </Grid>
    </>

  )
}

export default Product