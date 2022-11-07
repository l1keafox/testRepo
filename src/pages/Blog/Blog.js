import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormatQuote from "@mui/icons-material/FormatQuote";

function Blog() {
  const users = [
    {
      firstname: "Michael",
      age: "29",
      review:
        "I’m sore in places I didn’t know was possible to be sore in. That just means he’s making me a better version of myself. Talk about unlocking potential!",
    },
    {
      firstname: "Colin",
      age: "29",
      review:
        "Training with Eric has been awesome! You can really tell how invested he is in the program and feel his passion to help you succeed. I feel the progress in myself already and I can't wait to continue the journey.",
    },
    {
      firstname: "Jessica",
      age: "45",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia quas vel sint commodi repudiandae consequuntur voluptatum laboru numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praeskj.",
    },
    {
      firstname: "Glen",
      age: "62",
      review: `Lorem ommodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem.`,
    },
  ];

  return (
    <div id="blog">
      <h1 className="aboutHeader">Testimonials</h1>
      <div
        className="testimonials"
        style={{
          display: "grid",
          columnGap: 3,
          rowGap: 3,
          gridTemplateColumns: "repeat(2, 1fr)",
          margin: "5rem",
        }}
      >
        {users.map((user) => (
          <Grid
            container
            spacing={2}
            item
            xs={12}
            sx={{
              display: "grid",
              columnGap: 1,
              rowGap: 1,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Grid item xs={4}>
              <Box
                sx={{
                  width: "30rem",
                  border: "3px solid #770000",
                  backgroundColor: "black",
                  color: "white",
                  margin: "25px",
                  boxShadow: "3px 3px 10px black",
                }}
              >
                <Card>
                  <React.Fragment>
                    <CardContent
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        opacity: "90%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "2rem",
                          textDecoration: "underline",
                          textDecorationColor: "#770000",
                        }}
                      >
                        {user.firstname}. {user.age}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Roboto Mono",
                          fontWeight: "300",
                          fontSize: "1.5rem",
                        }}
                        variant="body2"
                      >
                        <FormatQuote
                          sx={{ fontSize: "2rem", color: "#770000" }}
                        />
                        {user.review}
                        <FormatQuote
                          sx={{ fontSize: "2rem", color: "#770000" }}
                        />
                      </Typography>
                    </CardContent>
                  </React.Fragment>
                </Card>
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default Blog;
