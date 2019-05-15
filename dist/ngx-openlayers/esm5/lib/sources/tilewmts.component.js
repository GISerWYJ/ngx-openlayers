/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, ContentChild, } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS } from 'ol/source';
import { WMTS as TileGridWMTS } from 'ol/tilegrid';
import { ProjectionLike } from 'ol/proj';
import { LoadFunction } from 'ol/Tile';
var SourceTileWMTSComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceTileWMTSComponent, _super);
    function SourceTileWMTSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    SourceTileWMTSComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'url':
                        this.url = changes[key].currentValue;
                        this.setLayerSource();
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    };
    /**
     * @return {?}
     */
    SourceTileWMTSComponent.prototype.setLayerSource = /**
     * @return {?}
     */
    function () {
        this.instance = new WMTS(this);
        this.host.instance.setSource(this.instance);
    };
    /**
     * @return {?}
     */
    SourceTileWMTSComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    };
    SourceTileWMTSComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-tilewmts',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceTileWMTSComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceTileWMTSComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceTileWMTSComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        tileGrid: [{ type: Input }],
        projection: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        requestEncoding: [{ type: Input }],
        layer: [{ type: Input }],
        style: [{ type: Input }],
        tileClass: [{ type: Input }],
        tilePixelRatio: [{ type: Input }],
        version: [{ type: Input }],
        format: [{ type: Input }],
        matrixSet: [{ type: Input }],
        dimensions: [{ type: Input }],
        url: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        urls: [{ type: Input }],
        wrapX: [{ type: Input }],
        tileGridWMTS: [{ type: ContentChild, args: [TileGridWMTSComponent,] }]
    };
    return SourceTileWMTSComponent;
}(SourceComponent));
export { SourceTileWMTSComponent };
if (false) {
    /** @type {?} */
    SourceTileWMTSComponent.prototype.instance;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.cacheSize;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileGrid;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.projection;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.requestEncoding;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.layer;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.style;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileClass;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tilePixelRatio;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.version;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.format;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.matrixSet;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.dimensions;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.url;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.urls;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.wrapX;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileGridWMTS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy90aWxld210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLEVBQ0wsVUFBVSxFQUVWLFlBQVksR0FHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsSUFBSSxJQUFJLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFdkM7SUFPNkMsbURBQWU7SUEwQzFELGlDQUFvQixLQUF5QjtlQUMzQyxrQkFBTSxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFDMUIsVUFBVSxHQUE2QixFQUFFO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxHQUFHLEVBQUU7b0JBQ1gsS0FBSyxLQUFLO3dCQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzt3QkFDckMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN0QixNQUFNO29CQUNSO3dCQUNFLE1BQU07aUJBQ1Q7Z0JBQ0QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDN0M7U0FDRjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsZ0RBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxvREFBa0I7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQXBGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLHFDQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSx1QkFBdUIsRUFBdkIsQ0FBdUIsRUFBQyxFQUFFLENBQUM7aUJBQ2xHOzs7O2dCQWZRLGtCQUFrQix1QkEwRFosSUFBSTs7OzRCQXhDaEIsS0FBSzs4QkFFTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSzs2Q0FFTCxLQUFLO2tDQUVMLEtBQUs7d0JBRUwsS0FBSzt3QkFFTCxLQUFLOzRCQUVMLEtBQUs7aUNBRUwsS0FBSzswQkFFTCxLQUFLO3lCQUVMLEtBQUs7NEJBRUwsS0FBSzs2QkFFTCxLQUFLO3NCQUVMLEtBQUs7bUNBRUwsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7K0JBR0wsWUFBWSxTQUFDLHFCQUFxQjs7SUF1Q3JDLDhCQUFDO0NBQUEsQUFyRkQsQ0FPNkMsZUFBZSxHQThFM0Q7U0E5RVksdUJBQXVCOzs7SUFDbEMsMkNBQWU7O0lBQ2YsNENBQ21COztJQUNuQiw4Q0FDcUI7O0lBQ3JCLDJDQUN1Qjs7SUFDdkIsNkNBQzJCOztJQUMzQiw2REFDb0M7O0lBQ3BDLGtEQUMrQzs7SUFDL0Msd0NBQ2M7O0lBQ2Qsd0NBQ2M7O0lBQ2QsNENBQ2dCOztJQUNoQixpREFDd0I7O0lBQ3hCLDBDQUNpQjs7SUFDakIseUNBQ2dCOztJQUNoQiw0Q0FDa0I7O0lBQ2xCLDZDQUNvQjs7SUFDcEIsc0NBQ2E7O0lBQ2IsbURBQ2dDOztJQUNoQyx1Q0FDZ0I7O0lBQ2hCLHdDQUNnQjs7SUFFaEIsK0NBQ29DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25DaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbGVHcmlkV01UU0NvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkd210cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXTVRTIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgV01UUyBhcyBUaWxlR3JpZFdNVFMgfSBmcm9tICdvbC90aWxlZ3JpZCc7XHJcbmltcG9ydCB7IFdNVFNSZXF1ZXN0RW5jb2RpbmcgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld210cycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgaW5zdGFuY2U6IFdNVFM7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbj86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZFdNVFM7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVxdWVzdEVuY29kaW5nPzogV01UU1JlcXVlc3RFbmNvZGluZyB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzdHlsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUNsYXNzPzogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVBpeGVsUmF0aW8/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB2ZXJzaW9uPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9ybWF0Pzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF0cml4U2V0OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkaW1lbnNpb25zPzogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybHM/OiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZFdNVFNDb21wb25lbnQpXHJcbiAgdGlsZUdyaWRXTVRTOiBUaWxlR3JpZFdNVFNDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMYXllclNvdXJjZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGlsZUdyaWRXTVRTKSB7XHJcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkV01UUy5pbnN0YW5jZTtcclxuICAgICAgdGhpcy5zZXRMYXllclNvdXJjZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=