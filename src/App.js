import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fmodo-phinf.pstatic.net%2F20201214_170%2F1607930085084Pg4Mq_JPEG%2Fmosay1Wukd.jpeg&type=a340",
    rating: 5
},
{
  id:2,
  name: "Samg",
  image:
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTNfMTgy%2FMDAxNTk3MzA3NDQ1ODQz.pGfPUfh2OW9I8FLSpwwlHGIEez7D6opWx4L9qyoGP-8g.He2qKPZ6GRV7DlVUyGwFmNJiHV3MbECPy9MG4Kv3bx0g.JPEG.msinvestment%2Fa-024.jpg&type=a340",
    rating: 4.9
},
{
  id:3,
  name: "Ttok",
  image:
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MThfMjQ5%2FMDAxNTkyNDY4NjM4MDMw.QxfB5EESmzFjOg-nmBVuHtvlXdRXhxDf30iBVpBNWaMg.M10yOQ-FfmGC-pgqJIpSzNE-p-QsshrkS-6GTqlqYJog.JPEG.msinvestment%2Fa-091-20200413-154548.jpg&type=a340",
  rating: 4.8
},
{
  id:4,
  name: "numnum",
  image:
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fmodo-phinf.pstatic.net%2F20201214_170%2F1607930085084Pg4Mq_JPEG%2Fmosay1Wukd.jpeg&type=a340",
  rating: 5.5
},
{
  id:5,
  name: "nono",
  image:
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fmodo-phinf.pstatic.net%2F20201214_170%2F1607930085084Pg4Mq_JPEG%2Fmosay1Wukd.jpeg&type=a340",
    rating: 4.7
}
];

function Food({ name, picture, rating }){
  return (<div>
  <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>
);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating}
        />
      ))}

    </div>
  );
}

export default App;
