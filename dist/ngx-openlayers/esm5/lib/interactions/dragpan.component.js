/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
var DragPanInteractionComponent = /** @class */ (function () {
    function DragPanInteractionComponent(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    DragPanInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    };
    /**
     * @return {?}
     */
    DragPanInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragPanInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-dragpan',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragPanInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragPanInteractionComponent.propDecorators = {
        condition: [{ type: Input }],
        kinetic: [{ type: Input }]
    };
    return DragPanInteractionComponent;
}());
export { DragPanInteractionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3Bhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhZ3Bhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQ7SUFZRSxxQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7Ozs7SUFFekMsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFOUSxZQUFZOzs7NEJBVWxCLEtBQUs7MEJBRUwsS0FBSzs7SUFhUixrQ0FBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLDJCQUEyQjs7O0lBQ3RDLCtDQUFrQjs7SUFFbEIsZ0RBQ3FCOztJQUNyQiw4Q0FDaUI7Ozs7O0lBRUwsMENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ1BhbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IEtpbmV0aWMgZnJvbSAnb2wvS2luZXRpYyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYWdwYW4nLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdQYW5JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhZ1BhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb246IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGtpbmV0aWM6IEtpbmV0aWM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmFnUGFuKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=