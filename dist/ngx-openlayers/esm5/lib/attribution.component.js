/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { Attribution } from 'ol/control';
var AttributionComponent = /** @class */ (function () {
    function AttributionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    AttributionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    };
    AttributionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-attribution',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    AttributionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AttributionComponent;
}());
export { AttributionComponent };
if (false) {
    /** @type {?} */
    AttributionComponent.prototype.instance;
    /** @type {?} */
    AttributionComponent.prototype.html;
    /**
     * @type {?}
     * @private
     */
    AttributionComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXpDO0lBUUUsOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDOzs7O0lBRTlDLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQU5tQixVQUFVOztJQWlCOUIsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxvQkFBb0I7OztJQUMvQix3Q0FBc0I7O0lBQ3RCLG9DQUFhOzs7OztJQUVELDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1hdHRyaWJ1dGlvbicsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogQXR0cmlidXRpb247XHJcbiAgaHRtbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdHRyaWJ1dGlvbih0aGlzKTtcclxuICB9XHJcbn1cclxuIl19