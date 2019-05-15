/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlZoomComponent = /** @class */ (function () {
    function ControlZoomComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    /**
     * @return {?}
     */
    ControlZoomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    };
    /**
     * @return {?}
     */
    ControlZoomComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-zoom',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlZoomComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlZoomComponent.propDecorators = {
        duration: [{ type: Input }],
        zoomInLabel: [{ type: Input }],
        zoomOutLabel: [{ type: Input }],
        zoomInTipLabel: [{ type: Input }],
        zoomOutTipLabel: [{ type: Input }],
        delta: [{ type: Input }]
    };
    return ControlZoomComponent;
}());
export { ControlZoomComponent };
if (false) {
    /** @type {?} */
    ControlZoomComponent.prototype.instance;
    /** @type {?} */
    ControlZoomComponent.prototype.duration;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomInLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomOutLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomInTipLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.zoomOutTipLabel;
    /** @type {?} */
    ControlZoomComponent.prototype.delta;
    /**
     * @type {?}
     * @private
     */
    ControlZoomComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy96b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhEO0lBc0JFLDhCQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLDhDQUE4QztJQUNoRCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFQUSxZQUFZOzs7MkJBV2xCLEtBQUs7OEJBRUwsS0FBSzsrQkFFTCxLQUFLO2lDQUVMLEtBQUs7a0NBRUwsS0FBSzt3QkFFTCxLQUFLOztJQWdCUiwyQkFBQztDQUFBLEFBbkNELElBbUNDO1NBN0JZLG9CQUFvQjs7O0lBQy9CLHdDQUFlOztJQUVmLHdDQUNpQjs7SUFDakIsMkNBQzJCOztJQUMzQiw0Q0FDNEI7O0lBQzVCLDhDQUN1Qjs7SUFDdkIsK0NBQ3dCOztJQUN4QixxQ0FDYzs7Ozs7SUFFRixtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBab29tIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC16b29tJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogWm9vbTtcclxuXHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbUluTGFiZWw6IHN0cmluZyB8IE5vZGU7XHJcbiAgQElucHV0KClcclxuICB6b29tT3V0TGFiZWw6IHN0cmluZyB8IE5vZGU7XHJcbiAgQElucHV0KClcclxuICB6b29tSW5UaXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbU91dFRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkZWx0YTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=