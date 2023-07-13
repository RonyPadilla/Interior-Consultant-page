import { BsArrowRight } from "react-icons/bs";
import "../Style/content.css"


function Content() {
  return (
    <>
      <section>
        <div>
          <h1>Modern interior</h1>
          <p>
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
          <div style={{ display: 'flex'}}>
            <a className="a-read" href="#">Read more</a>
            <BsArrowRight className="arrow-icon"/>
          </div>
        </div>
        <div>

        </div>
      </section>
    </>
  );
}

export default Content;
