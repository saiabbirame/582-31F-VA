class TeamCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    getName() {
        return this.getAttribute("name") || "Unknown Team";
    }

    getGroup() {
        return this.getAttribute("group") || "Unknown";
    }

    getPoints() {
        return this.getAttribute("points") || "0";
    }

    getPlayed() {
        return this.getAttribute("played") || "0";
    }

    getGoalDifference() {
        return this.getAttribute("goal-diference") || "0";
    }

    renderStyle() {
        return `
            <style>
                .card {
                    border: 1px solid #333;
                    padding: 1rem;
                    margin: 1rem 0;
                    border-radius: 8px;
                    background: #F5F5F5;
                }

                h3 {
                    margin-top: 0;
                }

                button {
                    padding: 1rem 1.5rem;
                    cursor: pointer;
                }
            </style>
        `;
    }

    render() {
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            ${this.renderStyle()}

            <div class="card">
                <h3>${this.getName()}</h3>
                <p>Group: ${this.getGroup()}</p>
                <p>Points: ${this.getPoints()}</p>
                <p>Played: ${this.getPlayed()}</p>
                <p>Goal Difference: ${this.getGoalDifference()}</p>

                <button>View Details</button>
            </div>
        `;
    }
}

customElements.define("team-card", TeamCard);