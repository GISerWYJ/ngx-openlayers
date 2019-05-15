/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlAttributionComponent = /** @class */ (function () {
    function ControlAttributionComponent(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    /**
     * @return {?}
     */
    ControlAttributionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    };
    /**
     * @return {?}
     */
    ControlAttributionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    };
    ControlAttributionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-attribution',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    ControlAttributionComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ElementRef }
    ]; };
    ControlAttributionComponent.propDecorators = {
        collapsible: [{ type: Input }]
    };
    return ControlAttributionComponent;
}());
export { ControlAttributionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhEO0lBV0UscUNBQW9CLEdBQWlCLEVBQVUsT0FBbUI7UUFBOUMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFOM0Qsa0JBQWEsR0FBRyxTQUFTLENBQUM7SUFNb0MsQ0FBQzs7OztJQUV0RSw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3pDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNFLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBTFEsWUFBWTtnQkFGRCxVQUFVOzs7OEJBWTNCLEtBQUs7O0lBZ0JSLGtDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FwQlksMkJBQTJCOzs7SUFDdEMsb0RBQWlDOztJQUNqQywrQ0FBc0I7O0lBQ3RCLDZDQUFnQjs7SUFDaEIsa0RBQ3FCOzs7OztJQUVULDBDQUF5Qjs7Ozs7SUFBRSw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtYXR0cmlidXRpb24nLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xBdHRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdjb250cm9sJztcclxuICBpbnN0YW5jZTogQXR0cmlidXRpb247XHJcbiAgdGFyZ2V0OiBFbGVtZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sbGFwc2libGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuQXR0cmlidXRpb24gaW5pdDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWF0dHJpYnV0aW9uJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=