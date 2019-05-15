/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPoint } from 'ol/geom';
var GeometryMultiPointComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryMultiPointComponent, _super);
    function GeometryMultiPointComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-multipoint';
        return _this;
    }
    /**
     * @return {?}
     */
    GeometryMultiPointComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new MultiPoint([[0, 0], [1, 1]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiPointComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-multipoint',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryMultiPointComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    return GeometryMultiPointComponent;
}(SimpleGeometryComponent));
export { GeometryMultiPointComponent };
if (false) {
    /** @type {?} */
    GeometryMultiPointComponent.prototype.componentType;
    /** @type {?} */
    GeometryMultiPointComponent.prototype.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFckM7SUFNaUQsdURBQXVCO0lBSXRFLHFDQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFBckQsWUFDRSxrQkFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQ2pCO1FBTE0sbUJBQWEsR0FBRyxxQkFBcUIsQ0FBQzs7SUFLN0MsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7Ozs7Z0JBUlEsWUFBWTtnQkFGWixnQkFBZ0I7O0lBdUJ6QixrQ0FBQztDQUFBLEFBbEJELENBTWlELHVCQUF1QixHQVl2RTtTQVpZLDJCQUEyQjs7O0lBQ3RDLG9EQUE2Qzs7SUFDN0MsK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aVBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1tdWx0aXBvaW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbXVsdGlwb2ludCc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBNdWx0aVBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNdWx0aVBvaW50KFtbMCwgMF0sIFsxLCAxXV0pO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcbn1cclxuIl19