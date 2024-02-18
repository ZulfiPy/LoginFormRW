import { Link } from "react-router-dom";

const Editor = () => {
    return (
        <section className="editor">
            <h1 className="page__title">Editors page</h1>

            <p>some overview for the EDITOR</p>


            <Link to="/" className="effect__link">Go to the Home page</Link>
            <button className="page__main__button" type="button">EDITOR MODULES</button>
        </section>
    )
}

export default Editor;