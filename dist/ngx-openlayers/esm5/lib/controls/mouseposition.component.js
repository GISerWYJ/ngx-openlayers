/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { MapComponent } from '../map.component';
import { CoordinateFormat } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';
var ControlMousePositionComponent = /** @class */ (function () {
    function ControlMousePositionComponent(map, element) {
        this.map = map;
        this.element = element;
    }
    /**
     * @return {?}
     */
    ControlMousePositionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    };
    /**
     * @return {?}
     */
    ControlMousePositionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    };
    ControlMousePositionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-mouseposition',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    ControlMousePositionComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ElementRef }
    ]; };
    ControlMousePositionComponent.propDecorators = {
        coordinateFormat: [{ type: Input }],
        projection: [{ type: Input }]
    };
    return ControlMousePositionComponent;
}());
export { ControlMousePositionComponent };
if (false) {
    /** @type {?} */
    ControlMousePositionComponent.prototype.instance;
    /** @type {?} */
    ControlMousePositionComponent.prototype.coordinateFormat;
    /** @type {?} */
    ControlMousePositionComponent.prototype.projection;
    /** @type {?} */
    ControlMousePositionComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    ControlMousePositionComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    ControlMousePositionComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Vwb3NpdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLGFBQWEsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFekM7SUFZRSx1Q0FBb0IsR0FBaUIsRUFBVSxPQUFtQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7Ozs7SUFFdEUsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN6Qyx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxtREFBVzs7O0lBQVg7UUFDRSxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQVBRLFlBQVk7Z0JBRkQsVUFBVTs7O21DQVkzQixLQUFLOzZCQUVMLEtBQUs7O0lBaUJSLG9DQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FyQlksNkJBQTZCOzs7SUFDeEMsaURBQXdCOztJQUN4Qix5REFDbUM7O0lBQ25DLG1EQUMyQjs7SUFDM0IsK0NBQWdCOzs7OztJQUVKLDRDQUF5Qjs7Ozs7SUFBRSxnREFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgTW91c2VQb3NpdGlvbiBmcm9tICdvbC9jb250cm9sL01vdXNlUG9zaXRpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZUZvcm1hdCB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sTW91c2VQb3NpdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogTW91c2VQb3NpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGNvb3JkaW5hdGVGb3JtYXQ6IENvb3JkaW5hdGVGb3JtYXQ7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICB0YXJnZXQ6IEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuTW91c2VQb3NpdGlvbiBpbml0OiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW91c2VQb3NpdGlvbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=