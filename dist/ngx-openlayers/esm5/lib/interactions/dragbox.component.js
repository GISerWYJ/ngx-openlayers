/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DragBox } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import { EndCondition } from 'ol/interaction/DragBox';
var DragBoxInteractionComponent = /** @class */ (function () {
    function DragBoxInteractionComponent(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    DragBoxInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    };
    /**
     * @return {?}
     */
    DragBoxInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragBoxInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-dragbox',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragBoxInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragBoxInteractionComponent.propDecorators = {
        className: [{ type: Input }],
        condition: [{ type: Input }],
        boxEndCondition: [{ type: Input }]
    };
    return DragBoxInteractionComponent;
}());
export { DragBoxInteractionComponent };
if (false) {
    /** @type {?} */
    DragBoxInteractionComponent.prototype.instance;
    /** @type {?} */
    DragBoxInteractionComponent.prototype.className;
    /** @type {?} */
    DragBoxInteractionComponent.prototype.condition;
    /** @type {?} */
    DragBoxInteractionComponent.prototype.boxEndCondition;
    /**
     * @type {?}
     * @private
     */
    DragBoxInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhZ2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQ7SUFjRSxxQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7Ozs7SUFFekMsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFQUSxZQUFZOzs7NEJBV2xCLEtBQUs7NEJBRUwsS0FBSztrQ0FFTCxLQUFLOztJQWFSLGtDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FwQlksMkJBQTJCOzs7SUFDdEMsK0NBQWtCOztJQUVsQixnREFDa0I7O0lBQ2xCLGdEQUNxQjs7SUFDckIsc0RBQzhCOzs7OztJQUVsQiwwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnQm94IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcbmltcG9ydCB7IEVuZENvbmRpdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYWdCb3gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ2JveCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0JveEludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnQm94O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBib3hFbmRDb25kaXRpb246IEVuZENvbmRpdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdCb3godGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==