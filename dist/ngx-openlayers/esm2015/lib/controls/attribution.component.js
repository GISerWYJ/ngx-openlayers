/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
export class ControlAttributionComponent {
    /**
     * @param {?} map
     * @param {?} element
     */
    constructor(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    }
}
ControlAttributionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-attribution',
                template: ``,
            },] },
];
/** @nocollapse */
ControlAttributionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
ControlAttributionComponent.propDecorators = {
    collapsible: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlAttributionComponent.prototype.componentType;
    /** @type {?} */
    ControlAttributionComponent.prototype.instance;
    /** @type {?} */
    ControlAttributionComponent.prototype.target;
    /** @type {?} */
    ControlAttributionComponent.prototype.collapsible;
    /**
     * @type {?}
     * @private
     */
    ControlAttributionComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    ControlAttributionComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBT3RDLFlBQW9CLEdBQWlCLEVBQVUsT0FBbUI7UUFBOUMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFOM0Qsa0JBQWEsR0FBRyxTQUFTLENBQUM7SUFNb0MsQ0FBQzs7OztJQUV0RSxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBTFEsWUFBWTtZQUZELFVBQVU7OzswQkFZM0IsS0FBSzs7OztJQUhOLG9EQUFpQzs7SUFDakMsK0NBQXNCOztJQUN0Qiw2Q0FBZ0I7O0lBQ2hCLGtEQUNxQjs7Ozs7SUFFVCwwQ0FBeUI7Ozs7O0lBQUUsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWF0dHJpYnV0aW9uJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XHJcbiAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xyXG4gIHRhcmdldDogRWxlbWVudDtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLkF0dHJpYnV0aW9uIGluaXQ6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdHRyaWJ1dGlvbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1hdHRyaWJ1dGlvbicpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19