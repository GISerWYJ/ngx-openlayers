/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlZoomSliderComponent = /** @class */ (function () {
    function ControlZoomSliderComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    /**
     * @return {?}
     */
    ControlZoomSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    };
    /**
     * @return {?}
     */
    ControlZoomSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-zoomslider',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlZoomSliderComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlZoomSliderComponent.propDecorators = {
        className: [{ type: Input }],
        duration: [{ type: Input }],
        maxResolution: [{ type: Input }],
        minResolution: [{ type: Input }]
    };
    return ControlZoomSliderComponent;
}());
export { ControlZoomSliderComponent };
if (false) {
    /** @type {?} */
    ControlZoomSliderComponent.prototype.instance;
    /** @type {?} */
    ControlZoomSliderComponent.prototype.className;
    /** @type {?} */
    ControlZoomSliderComponent.prototype.duration;
    /** @type {?} */
    ControlZoomSliderComponent.prototype.maxResolution;
    /** @type {?} */
    ControlZoomSliderComponent.prototype.minResolution;
    /**
     * @type {?}
     * @private
     */
    ControlZoomSliderComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy96b29tc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhEO0lBa0JFLG9DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLG9EQUFvRDtJQUN0RCxDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFQUSxZQUFZOzs7NEJBV2xCLEtBQUs7MkJBRUwsS0FBSztnQ0FFTCxLQUFLO2dDQUVMLEtBQUs7O0lBZ0JSLGlDQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F6QlksMEJBQTBCOzs7SUFDckMsOENBQXFCOztJQUVyQiwrQ0FDa0I7O0lBQ2xCLDhDQUNpQjs7SUFDakIsbURBQ3NCOztJQUN0QixtREFDc0I7Ozs7O0lBRVYseUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWm9vbVNsaWRlciB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbXNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21TbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFpvb21TbGlkZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbVNsaWRlcih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=