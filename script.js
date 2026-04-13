const searchInput = document.getElementById("playbookSearch");
const playbookList = document.getElementById("playbookList");
const playbookCards = document.querySelectorAll(".playbook-card");
const noResultsMessage = document.getElementById("noResultsMessage");

if (searchInput && playbookList && playbookCards.length > 0 && noResultsMessage) {
searchInput.addEventListener("input", () => {
const query = searchInput.value.trim().toLowerCase();
let visibleCount = 0;

playbookCards.forEach((card) => {
const title = (card.dataset.title || "").toLowerCase();
const keywords = (card.dataset.keywords || "").toLowerCase();
const bodyText = (card.textContent || "").toLowerCase();

const matches =
title.includes(query) ||
keywords.includes(query) ||
bodyText.includes(query);

if (matches) {
card.classList.remove("hidden");
visibleCount += 1;
} else {
card.classList.add("hidden");
}
});

if (visibleCount === 0) {
noResultsMessage.classList.remove("hidden");
} else {
noResultsMessage.classList.add("hidden");
}
});
}