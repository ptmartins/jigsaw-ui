(function() {

    let clearThemes = () => {
        document.body.classList = '';
    }

    let setTheme = (theme) => {
        clearThemes();
        document.body.classList.add('theme-' + theme);
    }

    window.addEventListener('button-clicked', ev => {
        if(ev.detail.action === 'changeTheme') {
            let theme = ev.target.getAttribute('data-theme');

            if(theme) {
                setTheme(theme);
            }
        }
    });

    // Handle ListView clicks
    window.addEventListener('jg-click', ev => {
        console.log('ListView clicked:', ev.detail);
    });

    // Simulate CMS data and dynamically create cards
    const cmsData = [
        {
            id: 1,
            title: "Web Design Trends 2024",
            thumbnail: "https://picsum.photos/300/200?random=10",
            content: "Discover the latest trends shaping web design this year.",
            author: "Jane Doe",
            publishDate: "2024-01-15"
        },
        {
            id: 2,
            title: "JavaScript Best Practices",
            thumbnail: "https://picsum.photos/300/200?random=11",
            content: "Learn industry-standard approaches to writing clean JavaScript code.",
            author: "John Smith",
            publishDate: "2024-01-10"
        },
        {
            id: 3,
            title: "UI Component Libraries",
            thumbnail: "https://picsum.photos/300/200?random=12",
            content: "Building scalable and reusable component systems for modern applications.",
            author: "Sarah Wilson",
            publishDate: "2024-01-05"
        }
    ];

    function createCardsWithProperties() {
        const container = document.getElementById('dynamic-cards');
        
        cmsData.forEach(item => {
            const card = document.createElement('jg-card');
            card.setAttribute('title', item.title);
            card.setAttribute('thumbnail', item.thumbnail);
            card.setAttribute('thumbnail-alt', item.title);
            card.setAttribute('content', item.content);
            
            container.appendChild(card);
        });
    }


    window.addEventListener('load', () => {
        createCardsWithProperties();
    });
})();

