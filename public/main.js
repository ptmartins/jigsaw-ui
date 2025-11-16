(function() {

    let DOM = {};

    let cacheDOM = () => {
        DOM.menuLinks = document.querySelectorAll('.menu__link');
        DOM.demoComponent = document.querySelector('.demo__component');
    }

    let clearThemes = () => {
        const themeButtons = document.querySelectorAll('jg-button[data-theme]');

        document.body.classList = '';

        themeButtons.forEach(btn => {
            btn.removeAttribute('type');
            btn.classList.remove('btn--active');
        });
    }

    let setTheme = (theme) => {
        clearThemes();
        document.body.classList.add('theme-' + theme);
        
        const activeButton = document.querySelector(`jg-button[data-theme="${theme}"]`);
        if (activeButton) {
            activeButton.setAttribute('type', 'primary');
        }
    }

    let renderAvatarView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--avatars">
                <h2 class="section__title">Avatar</h2>
                <div class="showcase">
                    <jg-avatar label="PM" size="sm"></jg-avatar>
                    <jg-avatar label="JS" size="md"></jg-avatar>
                    <jg-avatar label="NP" size="lg"></jg-avatar>
                </div>
            </div>
        `;
    }

    let renderButtonView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--buttons">
                <h2 class="section__title">Button</h2>
                <div class="showcase">
                    <jg-button>Default</jg-button>
                    <jg-button type="primary">Primary</jg-button>
                    <jg-button type="success">Success</jg-button>
                    <jg-button type="danger">Danger</jg-button>
                </div>  
            </div>
        `;
    }

    // Additional render functions for other components would go here...

    let renderCardView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--cards">
                <h2 class="section__title">Card</h2>
                <div class="showcase" id="cards">
                    <!-- Cards will be dynamically inserted here -->
                </div>  
            </div>
        `;

        createCardsWithProperties();
    }

    let renderChipView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--chips">
                <h2 class="section__title">Chip</h2>
                <div class="showcase">
                    <jg-chip label="Default"></jg-chip>
                    <jg-chip label="Primary" type="primary"></jg-chip>
                    <jg-chip label="Success" type="success"></jg-chip>
                    <jg-chip label="Danger" type="danger"></jg-chip>
                </div>  
            </div>
        `;
    }           

    let renderIconView = () => {
        DOM.demoComponent.innerHTML = `
            <h2 class="section__title">Icon</h2>
            <div class="showcase">
                <jg-icon name="home" size="30px"></jg-icon>
                <jg-icon name="settings" size="1.1rem"></jg-icon>
                <jg-icon name="mail" size="3em"></jg-icon>   
            </div>
        `;
    }

    let renderListView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--list-view">
                <h2 class="section__title">List View</h2>
                <div class="showcase showcase--list">
                    <jg-list-view header="Item 1" content="First item"></jg-list-view>
                    <jg-list-view data-position="second" header="Item 2" content="Second item"></jg-list-view>
                    <jg-list-view header="Item 3" content="Third item"></jg-list-view>
                </div>
            </div>
        `;
    }

    let renderProgressView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--progress">
                <h2 class="section__title">Progress</h2>
                <div class="showcase">
                    <jg-progress value="25"></jg-progress>
                    <jg-progress value="50" color="primary"></jg-progress>
                    <jg-progress value="75" color="success"></jg-progress>
                    <jg-progress value="100" color="danger"></jg-progress>
                </div>
            </div>
        `;
    }   

    let renderComponentView = (component) => {
        switch(component) {
            case 'avatar':
                renderAvatarView();
                break;
            case 'button':
                renderButtonView();
                break;
            case 'card':
                renderCardView();
                break;
            case 'chip':
                renderChipView();
                break;
            case 'icon':
                renderIconView();
                break;
            case 'list-view':
                renderListView();
                break;
            case 'progress':
                renderProgressView();
                break;
            default:
                DOM.demoComponent.innerHTML = '<p>Select a component from the menu to see its demo.</p>';
        }
    }

    window.addEventListener('button-clicked', ev => {
        if(ev.detail.action === 'changeTheme') {
            let theme = ev.target.getAttribute('data-theme');

            if(theme) {
                setTheme(theme);
            }
        }
    });


    window.addEventListener('jg-click', ev => {
        console.log('ListView clicked:', ev.detail);
    });

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
        const container = document.getElementById('cards');

        if(container) {
        
            cmsData.forEach(item => {
                const card = document.createElement('jg-card');
                card.setAttribute('title', item.title);
                card.setAttribute('thumbnail', item.thumbnail);
                card.setAttribute('thumbnail-alt', item.title);
                card.setAttribute('content', item.content);
                
                container.appendChild(card);
            });
        }
    }


    window.addEventListener('load', () => {
        cacheDOM();
        createCardsWithProperties();
        setTheme('light');

        DOM.menuLinks.forEach(link => {
            link.addEventListener('click', ev => {
                ev.preventDefault();
                const component = link.getAttribute('data-component');
                renderComponentView(component);
            });
        });
    });
})();

