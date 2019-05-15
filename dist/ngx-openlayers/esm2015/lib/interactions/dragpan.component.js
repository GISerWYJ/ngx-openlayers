/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
export class DragPanInteractionComponent {
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
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragPanInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-dragpan',
                template: '',
            },] },
];
/** @nocollapse */
DragPanInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DragPanInteractionComponent.propDecorators = {
    condition: [{ type: Input }],
    kinetic: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DragPanInteractionComponent.prototype.instance;
    /** @type {?} */
    DragPanInteractionComponent.prototype.condition;
    /** @type {?} */
    DragPanInteractionComponent.prototype.kinetic;
    /**
     * @type {?}
     * @private
     */
    DragPanInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3Bhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhZ3Bhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNaEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVF0QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQU5RLFlBQVk7Ozt3QkFVbEIsS0FBSztzQkFFTCxLQUFLOzs7O0lBSk4sK0NBQWtCOztJQUVsQixnREFDcUI7O0lBQ3JCLDhDQUNpQjs7Ozs7SUFFTCwwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnUGFuIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgS2luZXRpYyBmcm9tICdvbC9LaW5ldGljJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ3BhbicsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ1BhbkludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnUGFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAga2luZXRpYzogS2luZXRpYztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdQYW4odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==