/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { VectorTile } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerVectorTileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LayerVectorTileComponent, _super);
    function LayerVectorTileComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    /**
     * @return {?}
     */
    LayerVectorTileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LayerVectorTileComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerVectorTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-layer-vectortile',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerVectorTileComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    LayerVectorTileComponent.propDecorators = {
        renderBuffer: [{ type: Input }],
        renderMode: [{ type: Input }],
        renderOrder: [{ type: Input }],
        style: [{ type: Input }],
        updateWhileAnimating: [{ type: Input }],
        updateWhileInteracting: [{ type: Input }],
        visible: [{ type: Input }],
        declutter: [{ type: Input }]
    };
    return LayerVectorTileComponent;
}(LayerComponent));
export { LayerVectorTileComponent };
if (false) {
    /** @type {?} */
    LayerVectorTileComponent.prototype.renderBuffer;
    /** @type {?} */
    LayerVectorTileComponent.prototype.renderMode;
    /** @type {?} */
    LayerVectorTileComponent.prototype.renderOrder;
    /** @type {?} */
    LayerVectorTileComponent.prototype.style;
    /** @type {?} */
    LayerVectorTileComponent.prototype.updateWhileAnimating;
    /** @type {?} */
    LayerVectorTileComponent.prototype.updateWhileInteracting;
    /** @type {?} */
    LayerVectorTileComponent.prototype.visible;
    /** @type {?} */
    LayerVectorTileComponent.prototype.declutter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsUUFBUSxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBSXBDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHM0Q7SUFNOEMsb0RBQWM7SUFtQjFELGtDQUFZLEdBQWlCLEVBQWMsS0FBMkI7ZUFDcEUsa0JBQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0Usb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7O2dCQVZPLFlBQVk7Z0JBRVosbUJBQW1CLHVCQTRCTyxRQUFROzs7K0JBbEJ2QyxLQUFLOzZCQUVMLEtBQUs7OEJBR0wsS0FBSzt3QkFFTCxLQUFLO3VDQUVMLEtBQUs7eUNBRUwsS0FBSzswQkFFTCxLQUFLOzRCQUVMLEtBQUs7O0lBZ0JSLCtCQUFDO0NBQUEsQUF0Q0QsQ0FNOEMsY0FBYyxHQWdDM0Q7U0FoQ1ksd0JBQXdCOzs7SUFDbkMsZ0RBQ3FCOztJQUNyQiw4Q0FDZ0M7O0lBRWhDLCtDQUM4RDs7SUFDOUQseUNBQ3VDOztJQUN2Qyx3REFDOEI7O0lBQzlCLDBEQUNnQzs7SUFDaEMsMkNBQ2lCOztJQUNqQiw2Q0FDbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VmVjdG9yVGlsZX0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQge1JlbmRlclR5cGV9IGZyb20gJ29sL2xheWVyL1ZlY3RvclRpbGUnO1xyXG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gJ29sJztcclxuaW1wb3J0IHtTdHlsZX0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQge01hcENvbXBvbmVudH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJDb21wb25lbnR9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllckdyb3VwQ29tcG9uZW50fSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdHlsZUZ1bmN0aW9ufSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci12ZWN0b3J0aWxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXllclZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIHJlbmRlckJ1ZmZlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyTW9kZTogUmVuZGVyVHlwZSB8IHN0cmluZztcclxuICAvKiBub3QgbWFya2VkIGFzIG9wdGlvbmFsIGluIHRoZSB0eXBpbmdzICovXHJcbiAgQElucHV0KClcclxuICByZW5kZXJPcmRlcjogKGZlYXR1cmUxOiBGZWF0dXJlLCBmZWF0dXJlMjogRmVhdHVyZSkgPT4gbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU6IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cGRhdGVXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHVwZGF0ZVdoaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVjbHV0dGVyOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wubGF5ZXIuVmVjdG9yVGlsZSBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=