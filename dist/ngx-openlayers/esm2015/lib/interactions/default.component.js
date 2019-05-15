/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { defaults } from 'ol/interaction';
import { MapComponent } from '../map.component';
export class DefaultInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = defaults();
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => this.map.instance.addInteraction(i)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => this.map.instance.removeInteraction(i)));
    }
}
DefaultInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-default',
                template: '',
            },] },
];
/** @nocollapse */
DefaultInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
if (false) {
    /** @type {?} */
    DefaultInteractionComponent.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    DefaultInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUd0QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3JFLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQUxRLFlBQVk7Ozs7SUFPbkIsK0NBQWtDOzs7OztJQUV0QiwwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRzLCBJbnRlcmFjdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kZWZhdWx0JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248SW50ZXJhY3Rpb24+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cygpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKGkgPT4gdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24oaSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goaSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbihpKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==