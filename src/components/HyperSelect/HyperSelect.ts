import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import style from "./HyperSelect.styles.js";

@customElement("iw-hyperselect")
export class HyperSelect extends LitElement {

    static styles = [
        style
    ];

    @property({type: String}) placeholder = 'Select ...';
    @property({type: String}) apiURL = '';
    @property({type: String}) labelField = 'label';
    @property({type: String}) valueField = 'id';
    @property({type: Boolean}) multiple = false;
    @property({type: Boolean}) create = false;
    @property({type: Number}) maxItems?: number;
    @property({type: Boolean}) closeAfterSelect = true;
    @property({type: Boolean}) hideSelected = false;
    @property({type: Boolean}) openOnFocus = true;
    @property({type: Array}) searchField: string[] = ['label'];
    @property({type: Number}) loadThrottle = 300;
    @property({type: Function}) createFilter?: (input: string) => boolean;  
    @property({type: Function}) onCreate?: (input: string) => any | Promise<any>;
    
    @state() private isOpen: boolean = false;
    @state() private isLoading: boolean = false;
    @state() private options: any[] = [];
    @state() private filteredOptions: any[] = [];
    @state() private selectedOption: any | null = null;
    @state() private selectedOptions: any[] = [];
    @state() private inputValue: string = '';
    @state() private error: string | null = null;
    @state() private activeIndex: number = -1;
    @state() private activeItemIndex: number = -1;
    @state() private isCreating: boolean = false;

    connectedCallback() {
        super.connectedCallback();
        if (this.apiURL) {
            this.fetchOptions();
        } else {
            this.options = [];
        }   
    }

    /**
     * Fetches options from the API
     */
    async fetchOptions() {
        if (!this.apiURL) return;
        
        this.isLoading = true;
        this.error = null;
        
        try {
            const response = await fetch(this.apiURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            
            const data = await response.json();
            this.options = Array.isArray(data) ? data : [];
            this.filteredOptions = [...this.options];
        } catch (error) {
            console.error('Error fetching options:', error);
            this.error = error instanceof Error ? error.message : 'Failed to fetch options';
        } finally {
            this.isLoading = false;
            this.requestUpdate();
        }
    }

    /**
     * Opens the dropdown
     */
    open() {
        if(this.isOpen) return;

        this.isOpen = true;
        this.filteredOptions = this.filterOptions(this.inputValue);
        this.requestUpdate();
    }

    /**
     * Closes the dropdown
     */
    close() {
        if (!this.isOpen) return;

        this.isOpen = false;
        this.requestUpdate();
    }
    
    /**
     * Filters options based on input value
     */
    filterOptions(value: string): any[] {
        if (!value.trim()) {
            return [...this.options];
        }
        
        const lowerValue = value.toLowerCase();
        return this.options.filter(option => {
            const label = String(option[this.labelField] || '').toLowerCase();
            return label.includes(lowerValue);
        });
    }
    
    /**
     * Selects an option
     */
    selectOption(option: any) {
        if (this.multiple) {
            this.addItem(option);
        } else {
            this.selectedOption = option;
            this.inputValue = option[this.labelField] || '';
            if (this.closeAfterSelect) {
                this.close();
            }
        }
        
        // Dispatch custom event
        this.dispatchEvent(new CustomEvent('option-selected', {
            detail: {
                option
            },
            bubbles: true,
            composed: true
        }));
    }

    /**
     * Adds an item to the selected items (multi-select)
     */
    addItem(option: any) {
        if (!this.multiple) return;
        
        // Check if already selected
        const alreadySelected = this.selectedOptions.some(
            item => item[this.valueField] === option[this.valueField]
        );
        
        if (alreadySelected) return;
        
        // Check max items limit
        if (this.maxItems && this.selectedOptions.length >= this.maxItems) {
            return;
        }
        
        this.selectedOptions = [...this.selectedOptions, option];
        this.inputValue = '';
        
        if (this.closeAfterSelect) {
            this.close();
        }
        
        // Dispatch item-add event
        this.dispatchEvent(new CustomEvent('item-add', {
            detail: { item: option },
            bubbles: true,
            composed: true
        }));
        
        // Dispatch change event
        this.dispatchChange();
    }

    /**
     * Removes an item from selected items (multi-select)
     */
    removeItem(option: any) {
        if (!this.multiple) return;
        
        this.selectedOptions = this.selectedOptions.filter(
            item => item[this.valueField] !== option[this.valueField]
        );
        
        // Dispatch item-remove event
        this.dispatchEvent(new CustomEvent('item-remove', {
            detail: { item: option },
            bubbles: true,
            composed: true
        }));
        
        // Dispatch change event
        this.dispatchChange();
    }

    /**
     * Clears all selected items
     */
    clear() {
        if (this.multiple) {
            this.selectedOptions = [];
        } else {
            this.selectedOption = null;
            this.inputValue = '';
        }
        
        this.dispatchChange();
    }

    /**
     * Dispatches change event
     */
    private dispatchChange() {
        const value = this.multiple 
            ? this.selectedOptions.map(item => item[this.valueField])
            : this.selectedOption?.[this.valueField] ?? null;
        
        const items = this.multiple ? this.selectedOptions : (this.selectedOption ? [this.selectedOption] : []);
        
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value, items },
            bubbles: true,
            composed: true
        }));
    }


    /**
     * Handles focus event
     * @private
     */
    private handleFocus() {
        this.open();
    }

    /**
     * Handles blur event
     * @private
     */
    private handleBlur(e: FocusEvent) {
        // Small delay to allow click events on dropdown items to fire before closing
        setTimeout(() => {
            // Check if the related target is inside the component
            if (!this.contains(e.relatedTarget as Node)) {
                this.close();
            }
        }, 100);
    }

    /**
     * Handles input event
     * @private
     */
    private handleInput(e: InputEvent) {
        const target = e.target as HTMLInputElement;
        this.inputValue = target.value;
        this.filteredOptions = this.filterOptions(this.inputValue);
        
        if (!this.isOpen) {
            this.open();
        }
    }
    
    /**
     * Handles option click
     * @private
     */
    private handleOptionClick(option: any) {
        this.selectOption(option);
    }

    /**
     * Handles remove item click
     * @private
     */
    private handleRemoveItem(e: MouseEvent, item: any) {
        e.stopPropagation();
        this.removeItem(item);
    }

    /**
     * Handles control click
     * @private
     */
    private handleControlClick() {
        if (this.openOnFocus) {
            const input = this.shadowRoot?.querySelector('.input') as HTMLInputElement;
            input?.focus();
        }
    }

    /**
     * Handles keyboard events
     * @private
     */
    private handleKeyDown(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.handleArrowDown();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.handleArrowUp();
                break;
            case 'ArrowLeft':
                if (this.multiple && this.inputValue === '') {
                    e.preventDefault();
                    this.handleArrowLeft();
                }
                break;
            case 'ArrowRight':
                if (this.multiple && this.activeItemIndex !== -1) {
                    e.preventDefault();
                    this.handleArrowRight();
                }
                break;
            case 'Enter':
                e.preventDefault();
                this.handleEnter();
                break;
            case 'Escape':
                e.preventDefault();
                this.handleEscape();
                break;
            case 'Backspace':
                if (this.multiple && this.inputValue === '') {
                    e.preventDefault();
                    this.handleBackspace();
                }
                break;
            case 'Tab':
                this.handleTab();
                break;
        }
    }

    /**
     * Handles arrow down key
     * @private
     */
    private handleArrowDown() {
        if (!this.isOpen) {
            this.open();
            return;
        }
        
        if (this.filteredOptions.length > 0) {
            this.activeIndex = Math.min(this.activeIndex + 1, this.filteredOptions.length - 1);
            this.scrollToActiveOption();
        }
    }

    /**
     * Handles arrow up key
     * @private
     */
    private handleArrowUp() {
        if (!this.isOpen) {
            return;
        }
        
        if (this.filteredOptions.length > 0) {
            this.activeIndex = Math.max(this.activeIndex - 1, 0);
            this.scrollToActiveOption();
        }
    }

    /**
     * Handles arrow left key (navigate between selected items)
     * @private
     */
    private handleArrowLeft() {
        if (this.selectedOptions.length === 0) return;
        
        if (this.activeItemIndex === -1) {
            this.activeItemIndex = this.selectedOptions.length - 1;
        } else {
            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
        }
    }

    /**
     * Handles arrow right key (navigate between selected items)
     * @private
     */
    private handleArrowRight() {
        if (this.activeItemIndex === -1) return;
        
        this.activeItemIndex++;
        if (this.activeItemIndex >= this.selectedOptions.length) {
            this.activeItemIndex = -1;
            // Focus back on input
            const input = this.shadowRoot?.querySelector('.input') as HTMLInputElement;
            input?.focus();
        }
    }

    /**
     * Handles enter key
     * @private
     */
    private handleEnter() {
        if (this.isOpen && this.activeIndex >= 0 && this.activeIndex < this.filteredOptions.length) {
            this.selectOption(this.filteredOptions[this.activeIndex]);
            this.activeIndex = -1;
        } else if (this.isOpen && this.canCreateItem()) {
            // Create new item
            this.createItem(this.inputValue);
        }
    }

    /**
     * Checks if a new item can be created
     * @private
     */
    private canCreateItem(): boolean {
        if (!this.create || !this.inputValue.trim()) return false;
        
        // Check if createFilter allows it
        if (this.createFilter && !this.createFilter(this.inputValue)) {
            return false;
        }
        
        // Check if item already exists
        const exists = this.options.some(option => 
            String(option[this.labelField]).toLowerCase() === this.inputValue.toLowerCase()
        );
        
        return !exists;
    }

    /**
     * Creates a new item
     * @private
     */
    private async createItem(input: string) {
        if (!this.canCreateItem()) return;
        
        this.isCreating = true;
        
        try {
            let newItem: any;
            
            if (this.onCreate) {
                // Use custom onCreate handler
                newItem = await Promise.resolve(this.onCreate(input));
            } else {
                // Default item creation
                newItem = {
                    [this.valueField]: input,
                    [this.labelField]: input
                } as any;
            }
            
            // Add to options
            this.options = [...this.options, newItem];
            
            // Select the new item
            this.selectOption(newItem);
            
            // Dispatch create event
            this.dispatchEvent(new CustomEvent('create', {
                detail: { input, item: newItem },
                bubbles: true,
                composed: true
            }));
        } catch (error) {
            console.error('Error creating item:', error);
            this.error = error instanceof Error ? error.message : 'Failed to create item';
        } finally {
            this.isCreating = false;
        }
    }

    /**
     * Handles escape key
     * @private
     */
    private handleEscape() {
        if (this.isOpen) {
            this.close();
            this.activeIndex = -1;
        }
    }

    /**
     * Handles backspace key
     * @private
     */
    private handleBackspace() {
        if (!this.multiple) return;
        
        if (this.activeItemIndex !== -1) {
            // Remove the active item
            const itemToRemove = this.selectedOptions[this.activeItemIndex];
            this.removeItem(itemToRemove);
            this.activeItemIndex = Math.min(this.activeItemIndex, this.selectedOptions.length - 1);
        } else if (this.selectedOptions.length > 0) {
            // Remove the last item
            const lastItem = this.selectedOptions[this.selectedOptions.length - 1];
            this.removeItem(lastItem);
        }
    }

    /**
     * Handles tab key
     * @private
     */
    private handleTab() {
        if (this.isOpen && this.activeIndex >= 0 && this.activeIndex < this.filteredOptions.length) {
            this.selectOption(this.filteredOptions[this.activeIndex]);
            this.activeIndex = -1;
        }
        this.close();
    }

    /**
     * Scrolls to the active option in the dropdown
     * @private
     */
    private scrollToActiveOption() {
        requestAnimationFrame(() => {
            const dropdown = this.shadowRoot?.querySelector('.dropdown');
            const activeOption = this.shadowRoot?.querySelector('.option.active') as HTMLElement;
            
            if (dropdown && activeOption) {
                const dropdownRect = dropdown.getBoundingClientRect();
                const optionRect = activeOption.getBoundingClientRect();
                
                if (optionRect.bottom > dropdownRect.bottom) {
                    activeOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                } else if (optionRect.top < dropdownRect.top) {
                    activeOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
            }
        });
    }

    render() {
        const isMaxItemsReached = this.multiple && this.maxItems && this.selectedOptions.length >= this.maxItems;
        
        return html`
            <div class="hyperselect-container ${this.multiple ? 'multiple' : 'single'} ${isMaxItemsReached ? 'full' : ''}">
                <div class="control" @click="${this.handleControlClick}">
                    ${this.multiple ? html`
                        <div class="items">
                            ${this.selectedOptions.map((item, index) => html`
                                <div class="item ${this.activeItemIndex === index ? 'active' : ''}" 
                                     data-value="${item[this.valueField]}">
                                    <span class="item-label">${item[this.labelField]}</span>
                                    <span class="remove" 
                                          @click="${(e: MouseEvent) => this.handleRemoveItem(e, item)}"\
                                          title="Remove">
                                        ×
                                    </span>
                                </div>
                            `)}
                            ${!isMaxItemsReached ? html`
                                <input class="input"
                                    placeholder="${this.selectedOptions.length === 0 ? this.placeholder : ''}"
                                    .value="${this.inputValue}"
                                    @focus="${this.handleFocus}" 
                                    @blur="${this.handleBlur}"
                                    @input="${this.handleInput}"
                                    @keydown="${this.handleKeyDown}"
                                />
                            ` : ''}
                        </div>
                    ` : html`
                        <input class="input"
                            placeholder="${this.placeholder}"
                            .value="${this.inputValue}"
                            @focus="${this.handleFocus}" 
                            @blur="${this.handleBlur}"
                            @input="${this.handleInput}"
                            @keydown="${this.handleKeyDown}"
                        />
                    `}
                    ${this.isLoading ? html`<div class="loading-indicator" title="Loading options..."></div>` : ''}
                </div>
                
                ${this.isOpen ? html`
                    <div class="dropdown">
                        ${this.error ? html`
                            <div class="error-message">${this.error}</div>
                        ` : this.isLoading || this.isCreating ? html`
                            <div class="loading-message">${this.isCreating ? 'Creating item...' : 'Loading options...'}</div>
                        ` : ''}
                        
                        ${!this.isLoading && !this.isCreating && this.filteredOptions.length === 0 && !this.canCreateItem() ? html`
                            <div class="no-results">No results found</div>
                        ` : ''}
                        
                        ${!this.isLoading && !this.isCreating ? this.filteredOptions.map((option, index) => html`
                            <div class="option ${this.selectedOption && this.selectedOption[this.valueField] === option[this.valueField] ? 'selected' : ''} ${this.activeIndex === index ? 'active' : ''}"
                                @mousedown="${(e: MouseEvent) => { e.preventDefault(); this.handleOptionClick(option); }}"
                                @mouseenter="${() => this.activeIndex = index}"
                                data-index="${index}">
                                ${option[this.labelField]}
                            </div>
                        `) : ''}
                        
                        ${!this.isLoading && !this.isCreating && this.canCreateItem() ? html`
                            <div class="option create ${this.activeIndex === this.filteredOptions.length ? 'active' : ''}"
                                @mousedown="${(e: MouseEvent) => { e.preventDefault(); this.createItem(this.inputValue); }}"
                                @mouseenter="${() => this.activeIndex = this.filteredOptions.length}">
                                <strong>Create:</strong> ${this.inputValue}
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    }
}
