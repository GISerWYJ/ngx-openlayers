/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { Vector } from 'ol/source';
import { GeoJSON } from 'ol/format';
import { ProjectionLike } from 'ol/proj';
var SourceGeoJSONComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceGeoJSONComponent, _super);
    function SourceGeoJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceGeoJSONComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.format = new GeoJSON(this);
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    };
    SourceGeoJSONComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-geojson',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceGeoJSONComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceGeoJSONComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    SourceGeoJSONComponent.propDecorators = {
        defaultDataProjection: [{ type: Input }],
        featureProjection: [{ type: Input }],
        geometryName: [{ type: Input }],
        url: [{ type: Input }]
    };
    return SourceGeoJSONComponent;
}(SourceComponent));
export { SourceGeoJSONComponent };
if (false) {
    /** @type {?} */
    SourceGeoJSONComponent.prototype.instance;
    /** @type {?} */
    SourceGeoJSONComponent.prototype.format;
    /** @type {?} */
    SourceGeoJSONComponent.prototype.defaultDataProjection;
    /** @type {?} */
    SourceGeoJSONComponent.prototype.featureProjection;
    /** @type {?} */
    SourceGeoJSONComponent.prototype.geometryName;
    /** @type {?} */
    SourceGeoJSONComponent.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2dlb2pzb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFekM7SUFPNEMsa0RBQWU7SUFZekQsZ0NBQW9CLEtBQTJCO2VBQzdDLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxxQ0FFVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUMsRUFBRSxDQUFDO2lCQUNqRzs7OztnQkFiUSxvQkFBb0IsdUJBMEJkLElBQUk7Ozt3Q0FUaEIsS0FBSztvQ0FFTCxLQUFLOytCQUVMLEtBQUs7c0JBRUwsS0FBSzs7SUFZUiw2QkFBQztDQUFBLEFBNUJELENBTzRDLGVBQWUsR0FxQjFEO1NBckJZLHNCQUFzQjs7O0lBQ2pDLDBDQUFpQjs7SUFDakIsd0NBQWdCOztJQUNoQix1REFDc0M7O0lBQ3RDLG1EQUNrQzs7SUFDbEMsOENBQ3FCOztJQUNyQixxQ0FDWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBHZW9KU09OIH0gZnJvbSAnb2wvZm9ybWF0JztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1nZW9qc29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUdlb0pTT05Db21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlR2VvSlNPTkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFZlY3RvcjtcclxuICBmb3JtYXQ6IEZlYXR1cmU7XHJcbiAgQElucHV0KClcclxuICBkZWZhdWx0RGF0YVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mb3JtYXQgPSBuZXcgR2VvSlNPTih0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19