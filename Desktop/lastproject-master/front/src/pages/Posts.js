// import "./Feed.css";
// import "../App.css";
import Likebutton from "./Likebutton";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import Comments from "./Comments";
import Comment from "./Comment";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Posts.css";
import DeleteBpost from "./DeleteBpost";
import { deletepost } from "../action/postaction";

import { Image } from "antd";
import EditPost from "./EditPost";

import 'antd/dist/antd.css'

const useStyles = makeStyles((theme) => ({
  root: {},

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Posts = ({ post }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();

  const auth = useSelector((state) => state.auth);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const refreshComment = () => {
    axios
      .get("http://localhost:4000/api/comment/getComments/" + post._id)
      .then((res) => {
        console.log(res.data);
        return setComments(res.data);
      })
      .catch((err) => setError(err.response.data));
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/comment/getComments/" + post._id)
      .then((res) => setComments(res.data))
      .catch((err) => setError(err.response.data));
  }, []);


  return post === null || !post ? (
    <div className="postgr">
      <Spinner />
    </div>
  ) : (
    <div className="postgr">
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar src={post.owner.avatar} className={classes.avatar} />}
          action={
            <IconButton aria-label="settings">
              <DeleteBpost post={post} />
            </IconButton>
          }
          title={`${post.owner.firstname} ${post.owner.lastname}`}
          subheader={post.owner.created_at}
        />
        <Image 
   
          src={post.picture}
          title={post.title}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.discription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Likebutton post={post} />
          <IconButton aria-label="share">
            <EditPost  post={post} />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {" "}
              <Comments postId={post._id} comments={comments} />
              <Comment
                refreshComment={refreshComment}
                postId={post._id}
                writer={auth.user._id}
              />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Posts;
