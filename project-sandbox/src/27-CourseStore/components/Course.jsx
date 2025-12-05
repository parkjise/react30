import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { CurrencyContext } from "../context/currencies-context";
const Course = ({ course }) => {
  const currency = React.useContext(CurrencyContext);
  const { title, img, price } = course;
  const contextPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(price * currency.conversionRate);

  const [coursedBg, setCoursedBg] = useState("");

  useEffect(() => {
    if (currency.code === "USD") {
      setCoursedBg("card-light");
    } else if (currency.code === "EUR") {
      setCoursedBg("card-primary");
    } else if (currency.code === "GBP") {
      setCoursedBg("card-danger");
    }
  }, [currency.code]);

  return (
    <div className={`card ${coursedBg} mb-2`} style={{ width: 250 }}>
      <div className="card-header">{title}</div>
      <img src={img} alt="course img" style={{ height: "100%" }} />
      <div className="card-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nam
        alias, iusto optio quisquam accusamus autem laborum quas voluptatibus
        explicabo facilis eveniet assumenda numquam mollitia nobis,
        exercitationem beatae illo ut? Dolorum quam animi nihil doloribus
        necessitatibus ab, veniam sit veritatis. Dolore cum atque quibusdam amet
      </div>
      <div className="card-footer d-flex space-between">
        <h4>{contextPrice}</h4>
        <Button btnClass={"btn-success"} text={"BUY"} />
      </div>
    </div>
  );
};

export default Course;
