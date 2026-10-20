async function loadStories() {
    const response = await fetch("data/stories.json");
    const stories = await response.json();

    const highPriority = document.querySelectorAll(".panel")[1];

    highPriority.innerHTML = `
        <h2>🟠 High Priority</h2>
    `;

    stories.forEach(story => {
        highPriority.innerHTML += `
            <div class="story">
                <h3>${story.priority} ${story.title}</h3>
                <p>${story.summary}</p>

                <div class="meta">
                    <span>${story.category}</span>
                    <span>${story.source}</span>
                    <span>${story.time}</span>
                </div>
            </div>
        `;
    });
}

loadStories();