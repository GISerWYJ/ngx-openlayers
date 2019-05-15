/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
import { TileGrid } from 'ol/tilegrid';
import { LoadFunction } from 'ol/Tile';
var SourceTileWMSComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceTileWMSComponent, _super);
    function SourceTileWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceTileWMSComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SourceTileWMSComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    SourceTileWMSComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-tilewms',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceTileWMSComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceTileWMSComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceTileWMSComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        gutter: [{ type: Input }],
        hidpi: [{ type: Input }],
        params: [{ type: Input }],
        projection: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        serverType: [{ type: Input }],
        tileGrid: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        url: [{ type: Input }],
        urls: [{ type: Input }],
        wrapX: [{ type: Input }]
    };
    return SourceTileWMSComponent;
}(SourceComponent));
export { SourceTileWMSComponent };
if (false) {
    /** @type {?} */
    SourceTileWMSComponent.prototype.instance;
    /** @type {?} */
    SourceTileWMSComponent.prototype.cacheSize;
    /** @type {?} */
    SourceTileWMSComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceTileWMSComponent.prototype.gutter;
    /** @type {?} */
    SourceTileWMSComponent.prototype.hidpi;
    /** @type {?} */
    SourceTileWMSComponent.prototype.params;
    /** @type {?} */
    SourceTileWMSComponent.prototype.projection;
    /** @type {?} */
    SourceTileWMSComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceTileWMSComponent.prototype.serverType;
    /** @type {?} */
    SourceTileWMSComponent.prototype.tileGrid;
    /** @type {?} */
    SourceTileWMSComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceTileWMSComponent.prototype.url;
    /** @type {?} */
    SourceTileWMSComponent.prototype.urls;
    /** @type {?} */
    SourceTileWMSComponent.prototype.wrapX;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3RpbGV3bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFxQixVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV2QztJQU80QyxrREFBZTtJQTZCekQsZ0NBQW9CLEtBQXlCO2VBQzNDLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUscUNBRVQ7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDLEVBQUUsQ0FBQztpQkFDakc7Ozs7Z0JBWlEsa0JBQWtCLHVCQTBDWixJQUFJOzs7NEJBM0JoQixLQUFLOzhCQUVMLEtBQUs7eUJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7NkJBRUwsS0FBSzs2Q0FFTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSzttQ0FFTCxLQUFLO3NCQUVMLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLOztJQWlCUiw2QkFBQztDQUFBLEFBbERELENBTzRDLGVBQWUsR0EyQzFEO1NBM0NZLHNCQUFzQjs7O0lBQ2pDLDBDQUFrQjs7SUFDbEIsMkNBQ2tCOztJQUNsQiw2Q0FDb0I7O0lBQ3BCLHdDQUNlOztJQUNmLHVDQUNlOztJQUNmLHdDQUNlOztJQUNmLDRDQUNtQjs7SUFDbkIsNERBQ21DOztJQUNuQyw0Q0FDbUI7O0lBQ25CLDBDQUNtQjs7SUFDbkIsa0RBQytCOztJQUMvQixxQ0FDWTs7SUFDWixzQ0FDZTs7SUFDZix1Q0FDZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBmb3J3YXJkUmVmLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGlsZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFRpbGVHcmlkIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld21zJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVXTVNDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBpbnN0YW5jZTogVGlsZVdNUztcclxuICBASW5wdXQoKVxyXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGd1dHRlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGlkcGk6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBwYXJhbXM6IE9iamVjdDtcclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzZXJ2ZXJUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aWxlR3JpZDogVGlsZUdyaWQ7XHJcbiAgQElucHV0KClcclxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHVybHM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVXTVModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=