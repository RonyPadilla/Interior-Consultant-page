import { BsArrowRight } from "react-icons/bs";
import "../Style/content.css"


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
          <div style={{ display: 'flex'}}>
            <a className="a-read" href="#">Read more</a>
            <BsArrowRight className="arrow-icon"/>
          </div>
        </div>
        <div>
          <img className="img-interior" src="https://github.com/RonyPadilla/Interior-Consultant-page/blob/main/img/photo1.png?raw=true" alt="photo-interior" />
        </div>
      </section>
    </>
  );
}

export default Content;
