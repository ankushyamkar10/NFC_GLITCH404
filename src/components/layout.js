import React from "react";
import Cards from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCovers from "@mui/joy/CardCover";
import CardContents from "@mui/joy/CardContent";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";

const Layout = () => {
  return (
    <div className="mx-4">
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          margin: "2rem auto",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "1.5rem",
        }}
      >
        Reference Videos
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item md={2} lg={1}>
          <Box
            component="ul"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="300"
                  height="600"
                  src="https://www.youtube.com/embed/zUQGYlJHRMs?si=xbIlo9k0-xQDcFwB"
                  title="YouTube video player"
                  frameborder="0"
                  allow="autoplay; clipboard-write; encrypted-media; "
                  allowfullscreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  What Is Fixed Deposit?
                </Typography>
              </CardContents>
            </Cards>
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Pv5ZdSMVOcc?si=LJklRqhmz-O0HsWe"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                  allowfullscreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  FD vs Stocks which one should you choose?
                </Typography>
              </CardContents>
            </Cards>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          margin: "2rem auto",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "1.5rem",
        }}
      >
        Reference Articles
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 150 }}
              image="https://www.investopedia.com/thmb/Sn9WjbJnBVcqoyyS8kCvqO5Mg2U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bank-47189639b37541338a6f383147cba708.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Central Bank Function
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This article described the core functions of a central bank.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://www.managementstudyguide.com/functions-of-central-bank.htm"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 150 }}
              image="https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/19/full/1684499357-9314.jpg?im=FeatureCrop,size=(826,465)"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                How Credit Rating Works ?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This article provides information about what is credit reporting
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://www.managementstudyguide.com/how-credit-rating-works.htm"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 150 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAgxbX8aXxjKOrZS6DbFB3b-r0klJnka-1Q&usqp=CAU"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                History of Modern Banking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The emergence of central banks and fractional reserve system of
                banking has also been described in this article.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://www.managementstudyguide.com/central-banking-in-united-states.htm"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 150 }}
              image="https://cloudinary.hbs.edu/hbsit/image/fetch/s--AtsiaM7E--/f_auto,c_fill,h_372,w_650,/v20200101/https://pubwk.hbs.edu/PublishingImages/dimaggio-overdrafts_1280x720.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Products in Commercial Banking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In this article, the various products offered by banks to
                commercial corporations have been listed.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://www.managementstudyguide.com/types-of-products-in-commercial-banking.htm"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Layout;
