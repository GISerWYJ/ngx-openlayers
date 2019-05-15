/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, forwardRef, Input, Optional, Output, EventEmitter } from '@angular/core';
import { OSM } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import { SourceRasterComponent } from './raster.component';
import { LoadFunction } from 'ol/Tile';
import { AttributionLike } from 'ol/source/Source';
var SourceOsmComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer, raster) {
        var _this = _super.call(this, layer, raster) || this;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SourceOsmComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadStart.emit(event); }));
        this.instance.on('tileloadend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadEnd.emit(event); }));
        this.instance.on('tileloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadError.emit(event); }));
        this._register(this.instance);
    };
    SourceOsmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-osm',
                    template: "\n    <div class=\"aol-source-osm\"></div>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceOsmComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceOsmComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: SourceRasterComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    SourceOsmComponent.propDecorators = {
        attributions: [{ type: Input }],
        cacheSize: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        maxZoom: [{ type: Input }],
        opaque: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        url: [{ type: Input }],
        wrapX: [{ type: Input }],
        tileLoadStart: [{ type: Output }],
        tileLoadEnd: [{ type: Output }],
        tileLoadError: [{ type: Output }]
    };
    return SourceOsmComponent;
}(SourceXYZComponent));
export { SourceOsmComponent };
if (false) {
    /** @type {?} */
    SourceOsmComponent.prototype.instance;
    /** @type {?} */
    SourceOsmComponent.prototype.attributions;
    /** @type {?} */
    SourceOsmComponent.prototype.cacheSize;
    /** @type {?} */
    SourceOsmComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceOsmComponent.prototype.maxZoom;
    /** @type {?} */
    SourceOsmComponent.prototype.opaque;
    /** @type {?} */
    SourceOsmComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceOsmComponent.prototype.url;
    /** @type {?} */
    SourceOsmComponent.prototype.wrapX;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadStart;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadEnd;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadError;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvb3NtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9CLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR25EO0lBT3dDLDhDQUFrQjtJQTZCeEQsNEJBR0UsS0FBeUIsRUFHekIsTUFBOEI7UUFOaEMsWUFRRSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQ3JCO1FBZkQsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbkYsaUJBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFakYsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7O0lBV25GLENBQUM7Ozs7SUFFRCwrQ0FBa0I7OztJQUFsQjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7UUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdEQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsRUFBQyxFQUFFLENBQUM7aUJBQzdGOzs7O2dCQWRRLGtCQUFrQix1QkE2Q3RCLElBQUksWUFDSixRQUFRO2dCQTNDSixxQkFBcUIsdUJBNkN6QixJQUFJLFlBQ0osUUFBUTs7OytCQS9CVixLQUFLOzRCQUVMLEtBQUs7OEJBRUwsS0FBSzswQkFFTCxLQUFLO3lCQUVMLEtBQUs7NkNBRUwsS0FBSzttQ0FFTCxLQUFLO3NCQUVMLEtBQUs7d0JBRUwsS0FBSztnQ0FHTCxNQUFNOzhCQUVOLE1BQU07Z0NBRU4sTUFBTTs7SUEwQlQseUJBQUM7Q0FBQSxBQTNERCxDQU93QyxrQkFBa0IsR0FvRHpEO1NBcERZLGtCQUFrQjs7O0lBQzdCLHNDQUFjOztJQUVkLDBDQUM4Qjs7SUFDOUIsdUNBQ2tCOztJQUNsQix5Q0FDb0I7O0lBQ3BCLHFDQUNnQjs7SUFDaEIsb0NBQ2dCOztJQUNoQix3REFDbUM7O0lBQ25DLDhDQUMrQjs7SUFDL0IsaUNBQ1k7O0lBQ1osbUNBQ2U7O0lBRWYsMkNBQ21GOztJQUNuRix5Q0FDaUY7O0lBQ2pGLDJDQUNtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIE9wdGlvbmFsLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPU00gfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVhZWkNvbXBvbmVudCB9IGZyb20gJy4veHl6LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVJhc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmFzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLW9zbScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtc291cmNlLW9zbVwiPjwvZGl2PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZU9zbUNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VPc21Db21wb25lbnQgZXh0ZW5kcyBTb3VyY2VYWVpDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpbnN0YW5jZTogT1NNO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4Wm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3BhcXVlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHRpbGVMb2FkU3RhcnQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCxcclxuICAgIEBIb3N0KClcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICByYXN0ZXI/OiBTb3VyY2VSYXN0ZXJDb21wb25lbnRcclxuICApIHtcclxuICAgIHN1cGVyKGxheWVyLCByYXN0ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcclxuICAgICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRYWVouaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPU00odGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRzdGFydCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkU3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlbmQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVycm9yJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19