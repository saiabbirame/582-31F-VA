/**
 * Create a custom element called:
 *  <movie-box></movie-box>
 *
 * Requirements:
 *
 * The element must:
 *
 *  use Shadow DOM
 *  accept attributes:
 *      title (h2)
 *      year (p)
 *      director (p)
 *      poster (img)
 *
 * render a styled card inside the shadow root
 *
 * use helper methods
 *
 * example HTML:
 * <movie-box title="MOVIE_TITEL" year="0000" director="DIRECTOR_NAME"
 *  poster-url="POSTER_URL"></movie-box>
 *
 */

class MovieBox extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    getTitle() {
        return this.getAttribute("title") || "Unknown Movie";
    }

    getYear() {
        return this.getAttribute("year") || "Unknown Year";
    }

    getDirector() {
        return this.getAttribute("director") || "Unknown Director";
    }

    getPosterURL() {
        return this.getAttribute("poster-url") || "";
    }

    renderStyle() {
        return `
            <style>
             .card {
                border: 1px solid #333;
                padding: 1rem;
                margin-top: 1rem;
                background: #222;
                color: white;
                border-radius: 8px;
                max-width: 200px;
             }

             h2 {
                margin-top: 0;
             }
             
             img {
                width: 100%;
                border-radius: 8px;
             }
            </style>
        `;
    }

    render() {
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            ${this.renderStyle()}

            <div class="card">
                <h2>${this.getTitle()}</h2>
                <p>Year: ${this.getYear()}</p>
                <p>Director: ${this.getDirector()}</p>
                <img src="${this.getPosterURL()}">
            </div>
        `;
    }
}

customElements.define("movie-box", MovieBox);