(function() {

    let DOM = {};

    /**
     * Cache DOM elements
     * @return {void}
     */
    let cacheDOM = () => {
        DOM.menuLinks = document.querySelectorAll('.menu__link');
        DOM.demoComponent = document.querySelector('.demo__component');
    }

    /**
     * Clear existing themes
     * @return {void}
     */
    let clearThemes = () => {
        const themeButtons = document.querySelectorAll('jg-button[data-theme]');

        document.body.classList = '';

        themeButtons.forEach(btn => {
            btn.removeAttribute('type');
            btn.classList.remove('btn--active');
        });
    }

    /**
     * Set the selected theme
     * @param {*} theme 
     */
    let setTheme = (theme) => {
        clearThemes();
        document.body.classList.add('theme-' + theme);
        
        const activeButton = document.querySelector(`jg-button[data-theme="${theme}"]`);
        if (activeButton) {
            activeButton.setAttribute('type', 'primary');
        }
    }

    /**
     * Render Avatar View
     * @return {void}
     */
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

    /**
     * Render Button View
     * @return {void}
     */
    let renderButtonView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--buttons">
                <h2 class="section__title">Button</h2>
                <div class="showcase">
                    <jg-button>Default</jg-button>
                    <jg-button type="primary">Primary</jg-button>
                    <jg-button type="success">Success</jg-button>
                    <jg-button type="danger">Danger</jg-button>
                    <jg-button type="warning">Warning</jg-button>
                    <jg-button disabled>Disabled</jg-button>
                </div>  
            </div>
        `;
    }

    /**
     * Render Card View
     * @return {void}
     */
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

    /**
     * Render Chip View
     * @return {void}
     */
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

    /**
     * Render Icon View
     * @return {void}
     */
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


    /**
     * Render List View
     * @return {void}
     */
    let renderListView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--list-view">
                <h2 class="section__title">List View</h2>
                <div class="showcase showcase--list">
                    <jg-list-view thumbnail="https://picsum.photos/50/50?random=1" header="Item 1" content="First item"> 
                        <div slot="actions">
                            <jg-button slot="action" type="primary" size="sm">Action</jg-button>
                        </div>
                    </jg-list-view>
                    <jg-list-view thumbnail="https://picsum.photos/50/50?random=2" data-position="second" header="Item 2" content="Second item">
                        <div slot="actions">
                            <jg-icon slot="action" name="keyboard_arrow_right" size="32px"></jg-icon>
                        </div>
                    </jg-list-view>
                    <jg-list-view thumbnail="https://picsum.photos/50/50?random=3" header="Item 3" content="Third item"></jg-list-view>
                </div>
            </div>
        `;
    }

    /**
     * Render Progress View
     * @return {void}
     */
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

    /**
     * Render Hyperselect View
     * @return {void}
     */
    renderHyperselectView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--hyperselect">
                <h2 class="section__title">HyperSelect - Selectize.js Features</h2>
                
                <div class="showcase showcase--list">
                    
                    <!-- Single Select with API -->
                    <div style="width: 100%;">
                        <h3 style="margin-bottom: 10px;">Single Select (API Data)</h3>
                        <iw-hyperselect 
                            id="single-select"
                            placeholder="Select a user" 
                            apiURL="https://jsonplaceholder.typicode.com/users"
                            labelField="name"
                            valueField="id">
                        </iw-hyperselect>
                    </div>

                    <!-- Multi-Select -->
                    <div style="width: 100%;">
                        <h3 style="margin-bottom: 10px;">Multi-Select with Tags</h3>
                        <iw-hyperselect 
                            id="multi-select"
                            placeholder="Select multiple users" 
                            apiURL="https://jsonplaceholder.typicode.com/users"
                            labelField="name"
                            valueField="id"
                            multiple
                            hideSelected>
                        </iw-hyperselect>
                    </div>

                    <!-- Multi-Select with Max Items -->
                    <div style="width: 100%;">
                        <h3 style="margin-bottom: 10px;">Multi-Select (Max 3 items)</h3>
                        <iw-hyperselect 
                            id="max-items-select"
                            placeholder="Select up to 3 users" 
                            apiURL="https://jsonplaceholder.typicode.com/users"
                            labelField="name"
                            valueField="id"
                            multiple
                            maxItems="3">
                        </iw-hyperselect>
                    </div>

                    <!-- Tagging (Create Items) -->
                    // <div style="width: 100%;">
                    //     <h3 style="margin-bottom: 10px;">Tagging (Create New Items)</h3>
                    //     <p style="font-size: 13px; color: #666; margin-bottom: 10px;">Type a new tag and press Enter to create it</p>
                    //     <iw-hyperselect 
                    //         id="tagging-select"
                    //         placeholder="Add tags..." 
                    //         multiple
                    //         create>
                    //     </iw-hyperselect>
                    // </div>
                </div>
            </div>
        `;

    }

    /**
     * Render Palette View
     * @return {void}
     */
    renderPaletteView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--palette">
                <h2 class="section__title">Palette</h2>
                <div class="showcase">
                    <div class="card palette-showcase" style="width: 100%;">
                        <h2>Neutral Palette (0-1000)</h2>
                        <div class="palette-grid">
                            <div class="palette-swatch">
                                <div class="palette-color white"></div>
                                <div class="palette-label">White</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-100"></div>
                                <div class="palette-label">neutral-100</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-200"></div>
                                <div class="palette-label">neutral-200</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-300"></div>
                                <div class="palette-label">neutral-300</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-400"></div>
                                <div class="palette-label">neutral-400</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-500"></div>
                                <div class="palette-label">neutral-500</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-600"></div>
                                <div class="palette-label">neutral-600</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-700"></div>
                                <div class="palette-label">neutral-700</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color neutral-800"></div>
                                <div class="palette-label">neutral-800</div>
                            </div>  
                            <div class="palette-swatch">
                                <div class="palette-color neutral-900"></div>
                                <div class="palette-label">neutral-900</div>
                            </div>
                            <div class="palette-swatch">
                                <div class="palette-color black"></div>
                                <div class="palette-label">Black</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Layering System View
     * @return {void}
     */
    renderLayersView = () => {
        DOM.demoComponent.innerHTML = `
            <div class="demo__section demo__section--layers">
                <h2 class="section__title">Layering System</h2>
                <div class="showcase">
                    <div id="layers" class="demo__section demo__section--layers">
                        <div class="box box--level1">
                            <span>Level 1</span>
                            <div class="box box--level2">
                                <span>Level 2</span>
                                <div class="box box--level3">
                                    <span>Level 3</span>
                                </div>
                            </div>
                        </div>

                    </div>  
                </div>
            </div>
        `;
    }

    /**
     * Render Component View 
     * @param {*} component 
     * @return {void}
     */
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
            case 'hyperselect':
                renderHyperselectView();
                break;   
            case 'palette':
                renderPaletteView();
                break;
            case 'layers':
                renderLayersView();
                break;
            default:
                DOM.demoComponent.innerHTML = '<p>Select a component from the menu to see its demo.</p>';
        }
    }

    // Event listener for theme change
    window.addEventListener('button-clicked', ev => {
        if(ev.detail.action === 'changeTheme') {
            let theme = ev.target.getAttribute('data-theme');

            if(theme) {
                setTheme(theme);
            }
        }
    });


    // Event listener for ListView clicks
    window.addEventListener('jg-click', ev => {
        console.log('ListView clicked:', ev.detail);
    });

    // Sample data for cards
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

    /**
     * Create cards with properties from cmsData
     * @return {void}
     */
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


    // Initialize on window load
    window.addEventListener('load', () => {
        cacheDOM();
        createCardsWithProperties();
        setTheme('light');

        // Menu link event listeners
        DOM.menuLinks.forEach(link => {
            link.addEventListener('click', ev => {
                ev.preventDefault();
                const component = link.getAttribute('data-component');
                renderComponentView(component);
            });
        });
    });
})();

