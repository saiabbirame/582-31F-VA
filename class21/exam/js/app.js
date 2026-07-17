import { getFestivalData } from "./api.js";

import Artist from "./Artist.js";

import { Performance } from "./Performance.js";

import { FeaturedPerformance } from "./FeaturedPerformance.js";

import "./PerformanceCard.js";

import { renderLoading, renderError, renderPerformances } from "./ui.js";

const loadButton = document.getElementById("load-lineup");

const searchInput = document.getElementById("search-input");

const stageFilter = document.getElementById("stage-filter");

const ticketsFilter = document.getElementById("tickets-filter");

const featuredFilter = document.getElementById("featured-filter");

const sortSelect = document.getElementById("sort-select");

const resetButton = document.getElementById("reset-filters");

let performances = [];

function disableControls() {
  searchInput.disabled = true;
  stageFilter.disabled = true;
  ticketsFilter.disabled = true;
  featuredFilter.disabled = true;
  sortSelect.disabled = true;
  resetButton.disabled = true;
}

disableControls();

async function loadLineup() {
  renderLoading();

  loadButton.disabled = true;

  try {
    const data = await getFestivalData();

    const artists = data.artists.map(
      (item) => new Artist(item.id, item.name, item.country, item.genre),
    );

    performances = data.performances.map((item) => {
      const artist = artists.find((artist) => artist.id === item.artistId);

      if (item.featured) {
        return new FeaturedPerformance(
          item.id,
          item.title,
          artist,
          item.stage,
          item.time,
          item.ticketPrice,
          item.ticketsRemaining,
          item.featured,
        );
      }

      return new Performance(
        item.id,
        item.title,
        artist,
        item.stage,
        item.time,
        item.ticketPrice,
        item.ticketsRemaining,
      );
    });

    renderPerformances(performances);

    searchInput.disabled = false;
    stageFilter.disabled = false;
    ticketsFilter.disabled = false;
    featuredFilter.disabled = false;
    sortSelect.disabled = false;
    resetButton.disabled = false;
  } catch (error) {
    console.error("Lineup loading failed:", error);

    renderError(error);
  }

  loadButton.disabled = false;
}

function applyFilters() {
  const searchTerm = searchInput.value
    .trim()
    .toLowerCase();

  const stage = stageFilter.value;

  const availableOnly = ticketsFilter.checked;

  const featuredOnly = featuredFilter.checked;

  const sort = sortSelect.value;

  const filteredPerformances = performances.filter((performance) => {
    const matchesSearch =
      performance.title
        .toLowerCase()
        .includes(searchTerm) ||
      performance.artist.artistName
        .toLowerCase()
        .includes(searchTerm);

    const matchesStage = stage === "" || performance.stage === stage;

    const matchesTickets = !availableOnly || performance.hasTickets;

    const matchesFeatured = !featuredOnly || performance instanceof FeaturedPerformance;

    return ( matchesSearch && matchesStage && matchesTickets && matchesFeatured);
  });

  if (sort === "price-asc") {
    filteredPerformances.sort((a, b) => a.ticketPrice - b.ticketPrice);
  }

  if (sort === "price-desc") {
    filteredPerformances.sort((a, b) => b.ticketPrice - a.ticketPrice);
  }

  if (sort === "artist-asc") {
    filteredPerformances.sort((a, b) => a.artist.artistName.localeCompare(b.artist.artistName));
  }

  if (sort === "time-asc") {
    filteredPerformances.sort((a, b) => a.time.localeCompare(b.time));
  }

  renderPerformances(filteredPerformances);
}

function resetFilters() {
  searchInput.value = "";
  stageFilter.value = "";
  ticketsFilter.checked = false;
  featuredFilter.checked = false;
  sortSelect.value = "time-asc";

  applyFilters();
}

loadButton.addEventListener("click", loadLineup);

searchInput.addEventListener("input", applyFilters);

stageFilter.addEventListener("change", applyFilters);

ticketsFilter.addEventListener("change", applyFilters);

featuredFilter.addEventListener("change", applyFilters);

sortSelect.addEventListener("change", applyFilters);

resetButton.addEventListener("click", resetFilters);