/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Polygon } from 'ol/geom';
var GeometryPolygonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryPolygonComponent, _super);
    function GeometryPolygonComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-polygon';
        return _this;
    }
    /**
     * @return {?}
     */
    GeometryPolygonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new Polygon([[[0, 0], [1, 1], [0, 1]]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPolygonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-polygon',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryPolygonComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    return GeometryPolygonComponent;
}(SimpleGeometryComponent));
export { GeometryPolygonComponent };
if (false) {
    /** @type {?} */
    GeometryPolygonComponent.prototype.componentType;
    /** @type {?} */
    GeometryPolygonComponent.prototype.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFbEM7SUFNOEMsb0RBQXVCO0lBSW5FLGtDQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFBckQsWUFDRSxrQkFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQ2pCO1FBTE0sbUJBQWEsR0FBRyxrQkFBa0IsQ0FBQzs7SUFLMUMsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7O2dCQVJRLFlBQVk7Z0JBRlosZ0JBQWdCOztJQXVCekIsK0JBQUM7Q0FBQSxBQWxCRCxDQU04Qyx1QkFBdUIsR0FZcEU7U0FaWSx3QkFBd0I7OztJQUNuQyxpREFBMEM7O0lBQzFDLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktcG9seWdvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LXBvbHlnb24nO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogUG9seWdvbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUG9seWdvbihbW1swLCAwXSwgWzEsIDFdLCBbMCwgMV1dXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=