// script.js

// Fetch today's xkcd JSON and populate the page
async function fetchComic() {
  const url = 'https://xkcd.com/info.0.json';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const comic = await res.json();

    // Elements
    const titleEl = document.getElementById('comic-title');
    const imgEl   = document.getElementById('comic-image');
    const altEl   = document.getElementById('comic-alt');
    const dateEl  = document.getElementById('comic-date');

    // Fill in data
    titleEl.textContent = `${comic.num}: ${comic.title}`;
    imgEl.src           = comic.img;
    imgEl.alt           = comic.alt;
    altEl.textContent   = comic.alt;

    // Format date as YYYY-MM-DD
    const year  = comic.year.padStart(4, '0');
    const month = comic.month.padStart(2, '0');
    const day   = comic.day.padStart(2, '0');
    dateEl.textContent  = `Published: ${year}-${month}-${day}`;

  } catch (err) {
    document.getElementById('comic-title').textContent = 'Failed to load comic';
    console.error('Error fetching xkcd:', err);
  }
}

// Run once the DOM is ready
window.addEventListener('DOMContentLoaded', fetchComic);
