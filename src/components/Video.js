import "./Video.css";

const Video = (props) => {
  const { url } = props;
  return;
  <iframe
    width="560"
    height="315"
    src={url}
    title="Youtube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>;
};

export default Video;
