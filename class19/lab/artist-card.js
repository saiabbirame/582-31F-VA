class ArtistCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    getName() {
        return this.getAttribute("name") || "Unknown Artist";
    }

    getGenre() {
        return this.getAttribute("genre") || "Unknown Genre";
    }

    getStage() {
        return this.getAttribute("stage") || "Unknown Stage";
    }

    getTime() {
        return this.getAttribute("time") || "Unknown Time";
    }
    
    getCountry() {
        return this.getAttribute("country") || "Unknown Country";
    }
    getHeadliner() {
        return this.getAttribute("headliner") === "true";
    }

    getIsHeadliner() {
        return this.getHeadliner();
    }

    render() {
        const shadow = this.attachShadow({ mode: "open" });

        const template = document.getElementById("artist-template");
        const clone = template.content.cloneNode(true);

        const card = clone.querySelector(".card");

        if (this.getIsHeadliner()) {
            card.classList.add("headliner");
        }

        clone.querySelector(".artist-name").textContent = this.getName();
        clone.querySelector(".artist-genre").textContent = `Genre: ${this.getGenre()}`;
        clone.querySelector(".artist-stage").textContent = `Stage: ${this.getStage()}`;
        clone.querySelector(".artist-time").textContent = `Time: ${this.getTime()}`;
        clone.querySelector(".artist-country").textContent = `Country: ${this.getCountry()}`;
        clone.querySelector(".artist-headliner").textContent = this.getHeadliner() ? "Headliner: Yes" : "Headliner: No";

        const button = clone.querySelector(".details-btn");

        button.addEventListener("click", () => {
            this.dispatchEvent(
                new CustomEvent("artist-selected", {
                    bubbles: true,
                    composed: true,
                    detail: {
                        id: Number(this.getAttribute("id")),
                        name: this.getName(),
                        genre: this.getGenre(),
                        stage: this.getStage(),
                        time: this.getTime(),
                        country: this.getCountry(),
                        headliner: this.getHeadliner()
                    },
                })
            );
        });

        shadow.appendChild(clone);
    }
}

customElements.define("artist-card", ArtistCard);