/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
var MouseWheelZoomInteractionComponent = /** @class */ (function () {
    function MouseWheelZoomInteractionComponent(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    MouseWheelZoomInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    /**
     * @return {?}
     */
    MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-mousewheelzoom',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    MouseWheelZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    MouseWheelZoomInteractionComponent.propDecorators = {
        duration: [{ type: Input }],
        timeout: [{ type: Input }],
        useAnchor: [{ type: Input }]
    };
    return MouseWheelZoomInteractionComponent;
}());
export { MouseWheelZoomInteractionComponent };
if (false) {
    /** @type {?} */
    MouseWheelZoomInteractionComponent.prototype.instance;
    /** @type {?} */
    MouseWheelZoomInteractionComponent.prototype.duration;
    /** @type {?} */
    MouseWheelZoomInteractionComponent.prototype.timeout;
    /** @type {?} */
    MouseWheelZoomInteractionComponent.prototype.useAnchor;
    /**
     * @type {?}
     * @private
     */
    MouseWheelZoomInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbHpvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL21vdXNld2hlZWx6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUFhRSw0Q0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7Ozs7SUFFekMscURBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCx3REFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFMUSxZQUFZOzs7MkJBUWxCLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLOztJQWFSLHlDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FuQlksa0NBQWtDOzs7SUFDN0Msc0RBQXlCOztJQUN6QixzREFDaUI7O0lBQ2pCLHFEQUNnQjs7SUFDaEIsdURBQ21COzs7OztJQUVQLGlEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vdXNlV2hlZWxab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLW1vdXNld2hlZWx6b29tJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb3VzZVdoZWVsWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBNb3VzZVdoZWVsWm9vbTtcclxuICBASW5wdXQoKVxyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aW1lb3V0OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB1c2VBbmNob3I6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb3VzZVdoZWVsWm9vbSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19