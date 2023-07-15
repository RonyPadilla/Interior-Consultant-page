import { BsArrowRight } from "react-icons/bs";
import "../Style/content.css";
import Tag from "./Tag";

function Content() {
  return (
    <>
      <section className="content">
        <div className="text-content">
          <h1 className="h1-content">Modern interior</h1>
          <p className="p-content">
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
          <div style={{ display: "flex" }}>
            <a className="a-read" href="#">
              Read more
            </a>
            <BsArrowRight className="arrow-icon" />
          </div>
        </div>
        <div>
          <img
            className="img-interior"
            src="https://github.com/RonyPadilla/Interior-Consultant-page/blob/main/img/photo1.png?raw=true"
            alt="photo-interior"
          />

          <section className="tag">
            <div style={{ display: "flex" }}>
              <img
                className="img-tag"
                src="https://github.com/RonyPadilla/Interior-Consultant-page/blob/main/img/photo2.png?raw=true"
                alt="img-user"
              />
              <div>
                <h5 className="tag-h5">Aliza Webber</h5>
                <p className="tag-p">Interior designer</p>
              </div>
            </div>
            <div className="tag-div" style={{width: "14.9vw"}}>
              <h2 className="tag-h2">Designed in 2020 by Aliza Webber</h2>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Content;
