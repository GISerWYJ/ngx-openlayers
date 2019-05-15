/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlRotateComponent = /** @class */ (function () {
    function ControlRotateComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    /**
     * @return {?}
     */
    ControlRotateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    };
    /**
     * @return {?}
     */
    ControlRotateComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this.instance);
    };
    ControlRotateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-rotate',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlRotateComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlRotateComponent.propDecorators = {
        className: [{ type: Input }],
        label: [{ type: Input }],
        tipLabel: [{ type: Input }],
        duration: [{ type: Input }],
        autoHide: [{ type: Input }]
    };
    return ControlRotateComponent;
}());
export { ControlRotateComponent };
if (false) {
    /** @type {?} */
    ControlRotateComponent.prototype.instance;
    /** @type {?} */
    ControlRotateComponent.prototype.className;
    /** @type {?} */
    ControlRotateComponent.prototype.label;
    /** @type {?} */
    ControlRotateComponent.prototype.tipLabel;
    /** @type {?} */
    ControlRotateComponent.prototype.duration;
    /** @type {?} */
    ControlRotateComponent.prototype.autoHide;
    /**
     * @type {?}
     * @private
     */
    ControlRotateComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3JvdGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQW9CRSxnQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyxnREFBZ0Q7SUFDbEQsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsOENBQThDO1FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7Ozs7Z0JBUFEsWUFBWTs7OzRCQVdsQixLQUFLO3dCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7O0lBZ0JSLDZCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlksc0JBQXNCOzs7SUFDakMsMENBQWlCOztJQUVqQiwyQ0FDa0I7O0lBQ2xCLHVDQUNjOztJQUNkLDBDQUNpQjs7SUFDakIsMENBQ2lCOztJQUNqQiwwQ0FDa0I7Ozs7O0lBRU4scUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm90YXRlIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1yb3RhdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xSb3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFJvdGF0ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGF1dG9IaWRlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1yb3RhdGUnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSb3RhdGUodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtcm90YXRlJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=