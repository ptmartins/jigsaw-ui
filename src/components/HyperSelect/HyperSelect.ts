import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import style from "./HyperSelect.styles.js";

interface Option {
    id: string | number;
    label: string;
    [key: string]: any;
}

interface ApiConfig {
    url: string;
    method?: string;
    headers?: Record<string, string>;
    responseParser?: (data: any) => Option[];
}

@customElement("iw-hyperselect")
export class HyperSelect extends LitElement {

    static styles = [
        style
    ];

    @property({type: String}) placeholder = 'Select ...';
    @property({type: String}) apiConfig = '';
    @property({type: String}) labelField = 'label';
    @property({type: String}) valueField = 'id';
    
    @state() private isOpen: boolean = false;
    @state() private isLoading: boolean = false;
    @state() private options: Option[] = [];
    @state() private filteredOptions: Option[] = [];
    @state() private selectedOption: Option | null = null;
    @state() private inputValue: string = '';
    @state() private error: string | null = null;

    connectedCallback() {
        console.log(this.apiConfig);
        super.connectedCallback();
        if (this.apiConfig) {
            this.fetchOptions();
        }
    }

    /**
     * Fetches options from the API
     */
    async fetchOptions() {
        debugger;
        if (!this.apiConfig) return;
        
        this.isLoading = true;
        this.error = null;
        
        try {
            const response = await fetch(this.apiConfig, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            
            const data = await response.json();
            console.log(data);
            this.options = Array.isArray(data) ? data : [];
            console.log(this.options);
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
    filterOptions(value: string): Option[] {
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
    selectOption(option: Option) {
        this.selectedOption = option;
        this.inputValue = option[this.labelField] || '';
        this.close();
        
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
    private handleOptionClick(option: Option) {
        this.selectOption(option);
    }

    render() {
        return html`
            <div class="hyperselect-container">
                <div class="input-container">
                    <input class="input"
                        placeholder="${this.placeholder}"
                        .value="${this.inputValue}"
                        @focus="${this.handleFocus}" 
                        @blur="${this.handleBlur}"
                        @input="${this.handleInput}"
                    />
                    ${this.isLoading ? html`<div class="loading-indicator" title="Loading options..."></div>` : ''}
                </div>
                
                ${this.isOpen ? html`
                    <div class="dropdown">
                        ${this.error ? html`
                            <div class="error-message">${this.error}</div>
                        ` : this.isLoading ? html`
                            <div class="loading-message">Loading options...</div>
                        ` : ''}
                        
                        ${!this.isLoading && this.filteredOptions.length === 0 ? html`
                            <div class="no-results">No results found</div>
                        ` : 
                        this.filteredOptions.map(option => html`
                            <div class="option ${this.selectedOption && this.selectedOption[this.valueField] === option[this.valueField] ? 'selected' : ''}"
                                @mousedown="${(e: MouseEvent) => { e.preventDefault(); this.handleOptionClick(option); }}">
                                ${option[this.labelField]}
                            </div>
                        `)}
                    </div>
                ` : ''}
            </div>
        `;
    }
}
