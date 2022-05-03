import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export default function WineCard({ wineInfo }) {
  // wineInfo = {
  //     title : "Wanted Zin (원티드 진)",
  //     image : "/wanted_zin.png",
  //     grape : "Zinfandel(진판델)",
  //     location : "Puglia, Italy",
  //     type: "레드와인",
  //     description: "바닐라와 초콜릿 향을 느낄 수 있고 끝맛에 라즈베리의 향 또한 느껴집니다. 오크, 체리, 블랙프루트의 존재감이 살아있으며 볼드하고 훌륭한 와인입니다"
  // }

  // 수정 : title : title
  //        image : image
  //        variety : variety
  //        country : country
  //        points : points
  //        keyword : keyword

  let keyword_to_sentence = "";

  for (let i = 0; i < wineInfo.keyword.length; i++) {
    keyword_to_sentence = keyword_to_sentence + "#" + wineInfo.keyword[i] + " ";
  }

  const cardContent = (
    <React.Fragment>
      <Grid container>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              평점 : {wineInfo.points}
            </Typography>
            <Typography variant="h5" component="div">
              {wineInfo.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {wineInfo.variety}, {wineInfo.country}
            </Typography>
            <Typography variant="body2">{wineInfo.keyword}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">더보기</Button>
          </CardActions>
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ height: "200px", transform: "scale(1.2)" }}
            src={process.env.PUBLIC_URL + wineInfo.url}
            alt={wineInfo.title}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return <Card sx={{ overflow: "visible" }}>{cardContent}</Card>;
}
