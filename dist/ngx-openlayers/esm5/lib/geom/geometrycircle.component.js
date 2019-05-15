/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
var GeometryCircleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryCircleComponent, _super);
    function GeometryCircleComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-circle';
        // defaulting coordinates to [0,0]. To be overridden in child component.
        _this.instance = new Circle([0, 0]);
        return _this;
    }
    Object.defineProperty(GeometryCircleComponent.prototype, "radius", {
        get: /**
         * @return {?}
         */
        function () {
            return this.instance.getRadius();
        },
        set: /**
         * @param {?} radius
         * @return {?}
         */
        function (radius) {
            this.instance.setRadius(radius);
        },
        enumerable: true,
        configurable: true
    });
    GeometryCircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-circle',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryCircleComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    GeometryCircleComponent.propDecorators = {
        radius: [{ type: Input }]
    };
    return GeometryCircleComponent;
}(SimpleGeometryComponent));
export { GeometryCircleComponent };
if (false) {
    /** @type {?} */
    GeometryCircleComponent.prototype.componentType;
    /** @type {?} */
    GeometryCircleComponent.prototype.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQU02QyxtREFBdUI7SUFZbEUsaUNBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUFyRCxZQUNFLGtCQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FHakI7UUFmTSxtQkFBYSxHQUFHLGlCQUFpQixDQUFDO1FBYXZDLHdFQUF3RTtRQUN4RSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ3JDLENBQUM7SUFaRCxzQkFDSSwyQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLENBQUM7Ozs7O1FBQ0QsVUFBVyxNQUFjO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUhBOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7O2dCQVBRLFlBQVk7Z0JBSFosZ0JBQWdCOzs7eUJBZXRCLEtBQUs7O0lBYVIsOEJBQUM7Q0FBQSxBQXZCRCxDQU02Qyx1QkFBdUIsR0FpQm5FO1NBakJZLHVCQUF1Qjs7O0lBQ2xDLGdEQUF5Qzs7SUFDekMsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LWNpcmNsZSc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0UmFkaXVzKCk7XHJcbiAgfVxyXG4gIHNldCByYWRpdXMocmFkaXVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICAgIC8vIGRlZmF1bHRpbmcgY29vcmRpbmF0ZXMgdG8gWzAsMF0uIFRvIGJlIG92ZXJyaWRkZW4gaW4gY2hpbGQgY29tcG9uZW50LlxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUoWzAsIDBdKTtcclxuICB9XHJcbn1cclxuIl19